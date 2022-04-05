---
title: Host Setup
---

# {{ $frontmatter.title }}

Exact instructions for setting up a Linux based system for vGPU vary from distribution to distribution. NVIDIA certifies Red Hat Enterprise Linux KVM for use with their vGPU technology, but they also provide a generic installer package, which is what we will be covering here.

::: warning

Following the directions below will not allow your host to use the graphics card for display output. See [Merged Driver](../tools/merged-driver.md) for how to make that work.

:::

## Install Unlock Libraries

You will need to download both [vgpu_unlock](../tools/vgpu_unlock) and [vgpu_unlock-rs](../tools/vgpu_unlock-rs), both of which are available from GitHub:

* <https://github.com/DualCoder/vgpu_unlock>
* <https://github.com/mbilker/vgpu_unlock-rs>

You can download the source archives and copy them over manually or you can, as we will do below, install and use the Git CLI to download them directly on the host.

::: tip

All commands for the rest of this page need to be executed as root.

:::

### Install dependencies

You will need the following packages installed:

* Git
* DKMS
* Kernel Headers
* Rust
* mdevctl

The installation commands vary depending on your choice of distribution.

* RHEL:

```sh
dnf install "https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm"
dnf update
dnf --enablerepo="epel" install dkms kernel-devel mdevctl rust rust-cargo git
```

* Debian/Ubuntu:

```sh
apt-get update
apt-get upgrade
apt-get install dkms linux-headers mdevctl rustc cargo git
```

* Arch

```sh
pacman -Su dkms linux-headers mdevctl rust git
```

### Download and build libraries

```sh
mkdir -p /usr/local/src
cd /usr/local/src

git clone "https://github.com/DualCoder/vgpu_unlock"
git clone "https://github.com/mbilker/vgpu_unlock-rs"

cd "vgpu_unlock-rs"

cargo build --release

mkdir -p /etc/vgpu_unlock
touch /etc/vgpu_unlock/profile_override.toml

cp "./target/release/libvgpu_unlock_rs.so" /usr/local/lib
```

## Patch and Install NVIDIA Driver

For the purposes of this section, it is assumed that you will be installing version 460.73.01 of the NVIDIA vGPU driver package. If you are using a different version, know that you will need to specify the correct version in filenames and other commands below.

Begin by copying the vGPU driver ".run" file to `/tmp` on your host computer. From there, extract the package so the source files can be modified:

```sh
cd /tmp
bash "./NVIDIA-Linux-x86_64-460.73.01-vgpu-kvm.run" -x
cd "./NVIDIA-Linux-x86_64-460.73.01-vgpu-kvm"
```

Modify the file `./kernel/nvidia/os-interface.c` and add the following line after the other lines which begin with `#include`, near the beginning of the file:

```c
#include "/usr/local/src/vgpu_unlock/vgpu_unlock_hooks.c"
```

Append the following line to `./kernel/nvidia/nvidia.Kbuild`:

```makefile
ldflags-y += -T /usr/local/src/vgpu_unlock/kern.ld
```

Install the driver and register with DKMS:

```sh
./nvidia-installer --dkms
```

Clean up the installation files:

```sh
cd ../
rm -rf "./NVIDIA-Linux-x86_64-460.73.01-vgpu-kvm" \
   "./NVIDIA-Linux-x86_64-460.73.01-vgpu-kvm.run"
```

## Configure system services

In order to have the NVIDIA vGPU system services use the unlock, modifications must be made to their service definitions. Start by creating the directories `/usr/lib/systemd/system/nvidia-vgpud.d` and `/usr/lib/systemd/system/nvidia-vgpu-mgr.d`.

Next, place a file in each of those folders named `vgpu_unlock-rs.conf` with the following contents:

```systemd
[Service]
Environment=LD_PRELOAD=/usr/local/lib/libvgpu_unlock-rs.so
Environment=__RM_NO_VERSION_CHECK=1
```

After doing that, run the following command to set both services to run on next boot:

```sh
systemctl enable nvidia-vgpud.service nvidia-vgpu-mgr.service
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
