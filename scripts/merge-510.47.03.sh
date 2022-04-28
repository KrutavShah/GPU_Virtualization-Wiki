#!/bin/bash

unzip NVIDIA-GRID-Linux-KVM-510.47.03-511.65.zip -d nvidia-510

cd nvidia-510

bash NVIDIA-Linux-x86_64-510.47.03-grid.run -x --target grid
bash NVIDIA-Linux-x86_64-510.47.03-vgpu-kvm.run -x --target vgpu-kvm

chmod -R u+w .

cp -lR grid merged

#region merge stuff
#endregion

#region support-patches

patch merged/kernel/nvidia-vgpu-vfio/nvidia-vgpu-vfio.c ../nvidia-vgpu-vfio.patch
patch merged/kernel/nvidia/nv-kernel.o_binary ../nv-kernel.patch

#endregion

#region unlock-hooks

git clone https://github.com/DualCoder/vgpu_unlock.git vgpu_unlock

cp -l vgpu_unlock/kern.ld merged/kernel/nvidia/kern.ld
cp -l vgpu_unlock/vgpu_unlock_hooks.c merged/kernel/nvidia/vgpu_unlock_hooks.c

sed -i '$ a ldflags-y += -T $(src)/nvidia/kern.ld' merged/kernel/nvidia/nvidia.Kbuild
sed -i '32 a #include "vgpu_unlock_hooks.c"' merged/kernel/nvidia/os-interface.c

echo 'kernel/common/inc/vgpu_unlock_hooks.c 0644 KERNEL_MODULE_SRC INHERIT_PATH_DEPTH:1 MODULE:vgpu' >> merged/.manifest
echo 'kernel/nvidia/kern.ld 0644 KERNEL_MODULE_SRC INHERIT_PATH_DEPTH:1 MODULE:resman' >> merged/.manifest

#endregion

#region repack

merged/makeself.sh --target-os $(uname -s) --target-arch $(uname -m) \
	"merged" \
	"./NVIDIA-Linux-x86_64-510.47.03-grid-vgpu-kvm.run" \
	"NVIDIA Accelerated Graphics Driver for Linux-x86_64 510.47.03 (Merged) w/ Unlock Hooks" \
	./nvidia-installer

#endregion
