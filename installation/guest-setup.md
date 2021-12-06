---
title: Guest Setup
---

# {{ $frontmatter.title }}

## Creating a vGPU Instance

Creating a vGPU instance varies by the system. Most distributions will come with libvirt as the de-facto virtualization library and tools. For these systems, `mdevctl` is the preferred way of managing mediated devices, which vGPU is classified as. However, some distributions such as Proxmox handle the management of mediated devices differently with their own interface.

### Using `mdevctl` normally with `libvirt`

Start by finding out which vGPU you want to use by listing the available types and their features. Both `mdevctl types` and `nvidia-smi vgpu -c -v` (if you created the wrapper from [Host Setup](./host-setup.md#optional-install-a-wrapper-for-nvidia-smi)) can help you decide which type to use.<br />
[RHEL documentation - Obtaining vGPU Information](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_virtualization/assembly_managing-gpu-devices-in-virtual-machines_configuring-and-managing-virtualization#proc_obtaining-nvidia-vgpu-information-about-your-system_assembly_managing-nvidia-vgpu-devices)

::: tip

[vGPU Types](../reference/vgpu-types.md) has helpful information to help determine which vGPU type is best suited for your use.

:::

Create a vGPU instance. The guide for Red Hat systems applies to other distributions as well.<br />
[RHEL documentation - Creating vGPU instances](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_virtualization/assembly_managing-gpu-devices-in-virtual-machines_configuring-and-managing-virtualization#proc_setting-up-nvidia-vgpu-devices_assembly_managing-nvidia-vgpu-devices)

Attach your vGPU to a VM by editing the VM’s XML configuration file. (You will need to generate a UUID first)<br />
[RHEL documentation - Attaching vGPU instances](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_virtualization/assembly_managing-gpu-devices-in-virtual-machines_configuring-and-managing-virtualization#proc_assigning-a-gpu-to-a-virtual-machine_assembly_managing-gpu-devices-in-virtual-machines)

Here is a sample vGPU device. This block would be added to the `<devices>` section of the XML configuration of a VM.

```xml
<hostdev mode='subsystem' type='mdev' managed='no' model='vfio-pci'>
  <source>
    <address uuid='30820a6f-b1a5-4503-91ca-0c10ba58692a'/>
  </source>
</hostdev>
```

### Using the web interface on Proxmox

Same as step 1 from [above](#using-mdevctl-normally-with-libvirt).

Generate a UUID for your VM. This can be done by either generating a new UUID with uuidgen or using your VM ID with zeroes before it in UUID format.

Edit your VM's configuration (i.e. `/etc/pve/qemu-server/101.conf`) and add the generated UUID to the top of the file (substitute this for the UUID you generated):

```
args: -uuid 30820a6f-b1a5-4503-91ca-0c10ba58692b
```

Attach the vGPU device by going to the 'Hardware' tab of the VM, selecting 'Add' and then 'PCI Device'. Under 'Device:', you will be prompted a list of connected PCI devices, from which you should select your host's graphics card. After that, a new menu 'MDev Type' should appear, where you will select the vGPU profile you want to use.

## Guest VM Setup

This section will be about installing drivers for vGPU devices in the guests/virtual machines that they are assigned to. Assuming you have already completed installation of a supported operating system on your virtual machine, you can proceed with the installation with the device drivers for a vGPU.

Keep in mind that drivers are only available for Microsoft Windows and Linux guests;  BSD based operating systems and MacOS are not supported, and aren’t likely to ever receive support either. Both Windows and Linux drivers are provided in the archive where you originally downloaded the host driver.

### Microsoft Windows

To install the drivers, simply run the corresponding executable on your virtual machine and follow the steps in the graphical installer to install the driver. Once it completes, you may or may not be asked to reboot.

On rare occasions, a prompt for reboot can be presented to a user which may mean that the driver might not work for some reason. A code 43 error is an example of such an error that can be caused by a configuration error or using the wrong drivers.

The next thing you must do is launch the NVIDIA control panel application by right clicking on the desktop and selecting it or by searching through the start menu. You can then connect to your license server by entering the server's address and the port number (default 7070) into the licensing tab.

### Linux

There are a multitude of Linux distributions available, but Nvidia has only certified a few of them to be natively compatible with the vGPU drivers. Enterprise Linux and Debian based systems with particular kernel versions are most likely to work. Other distributions or newer versions with different and newer kernels may cause troubles during installation, and require a patch to fix as a result.

Before installing, you will need to blacklist nouveau drivers and rebuild the initramfs image. After that, you need to reboot.
[Red Hat Documentation - Blacklisting Nouveau drivers](https://access.redhat.com/solutions/1155663)
[Debian/Ubuntu - Blacklisting Nouveau drivers](https://linuxconfig.org/how-to-disable-blacklist-nouveau-nvidia-driver-on-ubuntu-20-04-focal-fossa-linux)

To install the driver, simply run the included ".run" file. The installer will bring up a graphical interface in your command line that will be relatively easy to follow. Answer “yes” to the questions it presents you unless you have your own requirements.

```sh
bash "./NVIDIA-Linux-x86_64-<version>-vgpu-kvm.run"
```

From here, you can reboot the virtual machine and you should be able to use a graphics accelerated desktop environment.

The next thing you must do is launch the NVIDIA settings application and connect to your license server. You can do this by selecting the licensing tab and entering the server's IP/hostname and port number (default 7070) into the available fields.
