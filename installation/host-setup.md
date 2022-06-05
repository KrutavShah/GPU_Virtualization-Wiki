---
title: Host Setup
---

# {{ $frontmatter.title }}

::: tip

All commands for the rest of this page need to be executed as root.

:::

## Install vgpu_unlock-rs

To fully allow use of consumer GPUs, [vgpu_unlock-rs](../tools/vgpu-unlock-rs.md) must be installed.

``` sh
mkdir -p /usr/local/src
cd /usr/local/src

git clone 'https://github.com/mbilker/vgpu_unlock-rs'

cd vgpu_unlock-rs

cargo build --release

cp './target/release/libvgpu_unlock_rs.so' /usr/local/lib
```

## Configure system services

In order to have the NVIDIA vGPU system services use the unlock, modifications must be made to their service definitions.

The following commands create drop-in overrides for each of the services, causing the unlock library to be loaded when they are started.

``` sh
mkdir /etc/systemd/system/nvidia-{vgpu-mgr,vgpud}.service.d
echo '[Service]
Environment=LD_PRELOAD=/usr/local/lib/libvgpu_unlock_rs.so' | tee /etc/systemd/system/nvidia-{vgpu-mgr,vgpud}.service.d/vgpu_unlock-rs.conf > /dev/null
```

After doing that, run the following command to set both services to run on next boot:

``` sh
systemctl enable nvidia-{vgpu-mgr,vgpud}.service
```

Before moving onto configuring the license server and/or vGPU devices for guests, reboot your system to ensure the kernel modules get loaded and services are running.

## (OPTIONAL) Install a Wrapper for `nvidia-smi`

Doing this will allow the `nvidia-smi` utility to recognize supported consumer GPUs as supported for running vGPUs. This is necessary to receive valid output from `nvidia-smi vgpu` and its related sub-commands.

Ensure `/usr/local/bin` is in your PATH environment variable earlier than `/usr/bin` and create a file `/usr/local/bin/nvidia-smi` with the following contents:

```sh
#!/usr/bin/bash

for a in $*
do
  case $a in
    vgpu)
      export LD_PRELOAD="/usr/local/lib/libvgpu_unlock_rs.so"
      ;;
  esac
done

exec /usr/bin/nvidia-smi $@
```

Make that script executable:

```sh
chmod +x "/usr/local/bin/nvidia-smi"
```
