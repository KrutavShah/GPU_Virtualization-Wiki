---
title: Preparation
---

# {{ $frontmatter.title }}

## Disclaimer

Using vGPU on unsupported/uncertified hardware is not recommended, but this script will still enable certain cards to run the technology. We provide this to you at your own risk, so keep in mind that it may not work for you. The project is provided under the MIT license, with no warranty whatsoever. Community support for the project through online channels may be available, but is not guaranteed.

## Hardware Setup

If you have not already done so, start by installing a compatible graphics card into an available PCI Express slot on the system mainboard while the computer is off. You’ll also need to verify that your hardware is capable of running vGPU (see [Supported Hardware](../overview.md#supported-hardware)). A system upgrade may be necessary if you do not have compatible hardware.

Once you have verified your hardware is supported, enter your motherboard's firmware setup menu and enable the following options:

* Virtualization Extensions/Support (also named Intel VT-x or AMD-V)
* IOMMU (also named Intel VT-d or AMD-Vi)

::: tip

IOMMU is not strictly required; only Ampere cards usually need it. If something goes wrong, you should go ahead and make sure it's enabled anyways.

:::

For both of these processes, you should refer to documentation from your system vendor to get specific details on how to achieve the desired configuration and results for your system.

### Enabling IOMMU

Even when IOMMU is enabled in your system's firmware, Linux must be told to enable the IOMMU at boot-time. To do this, you must add a couple arguments to the kernel command line.

* For Intel: `intel_iommu=on iommu=pt`
* For AMD: `amd_iommu=on iommu=pt`

Specific directions vary depending on the bootloader of use; for example, [here](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_virtualization/managing-virtual-devices_configuring-and-managing-virtualization#attaching-sr-iov-networking-devices-to-virtual-machines_managing-sr-iov-devices) are the directions for doing so with GRUB 2.

## Obtaining Drivers and Licensing

You can apply for a 90-day evaluation of NVIDIA vGPU on their [website](https://www.nvidia.com/en-us/data-center/resources/vgpu-evaluation/). Once you fill in the requested information, your application will be reviewed, taking anywhere from 2 minutes to 48 hours (not a guarantee). Upon approval, you will receive an email containing directions to set up an account for the NVIDIA Licensing Portal.

Once you log into the Portal, you will be able to locate drivers, the licensing server and your trial licenses. You will need to download the Linux KVM vGPU drivers, which will come in the form of an archive containing drivers for both host and guest, along with documentation for installing the drivers.
