(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{391:function(t,e,a){t.exports=a.p+"assets/img/vgpu-overview.49e0b6b1.png"},404:function(t,e,a){"use strict";a.r(e);var r=a(54),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"how-does-vgpu-work"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-does-vgpu-work"}},[t._v("#")]),t._v(" How does vGPU work?")]),t._v(" "),r("p",[t._v("The technology works by splitting a supported graphics card’s resources amongst multiple VMs (virtual machines). The advantage of this over traditional virtual machines is full graphics acceleration, which is not as feasible with CPU rasterization. Virtual Machines are popular in the datacenter and in VDI scenarios as they are easy to migrate and provision to employees and users. Remote users can connect to a central VDI server to access their own workspace on a “lighter” computer such as a laptop or thin client. Graphical workloads that require an elevated amount of 3D and/or compute power can’t always be run on ultrabooks and other “light” computers.")]),t._v(" "),r("p",[t._v("That would make sense for office and other enterprise environments where graphical power is needed remotely. But what does that mean for you? The goal of "),r("code",[t._v("vgpu_unlock")]),t._v(" (and its variants) is to permit a user to run Nvidia vGPU technology on inferior graphics cards or consumer variants to the professional datacenter graphics cards designed for vGPU. With this, users can virtualize their own graphics cards for a couple virtual machines.  This could allow a user to run a virtual machine capable of gaming for friends, or use Windows on Linux with graphical acceleration (using Looking Glass) for example. There are certainly more uses out there, but these are just some of the common use cases.")]),t._v(" "),r("figure",[r("img",{attrs:{src:a(391),alt:"vGPU Architecture Overview",title:"vGPU Architecture Overview"}}),t._v(" "),r("figcaption",[t._v("vGPU Architecture Overview, credit: NVIDIA")])]),t._v(" "),r("p",[t._v("Do you need vGPU? Depends. First of all, it’s best to have a good understanding of using Linux and how this technology works before going forth and attempting the setup. If you have a need for graphically accelerated Windows or Linux virtual machines, you may consider vGPU for your environment. There are alternatives that exist for specific cases which we will cover later.")]),t._v(" "),r("h2",{attrs:{id:"system-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[t._v("#")]),t._v(" System Requirements")]),t._v(" "),r("h3",{attrs:{id:"supported-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[t._v("#")]),t._v(" Supported Hardware")]),t._v(" "),r("h4",{attrs:{id:"cpu-and-motherboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cpu-and-motherboard"}},[t._v("#")]),t._v(" CPU and Motherboard")]),t._v(" "),r("p",[t._v("Virtualization extensions are required; this means Intel's VT-x or AMD's AMD-V must be supported and enabled. Please consult the vendor provided documentation to confirm that your CPU and motherboard have support for virtualization and for the steps to enable it in the BIOS.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("IOMMU may be necessary for vGPU to work properly on some systems (such as those using Ampere GPUs). If you encounter issues while setting up your system, verify AMD-Vi or Intel VT-d is enabled in your system's firmware.")])]),t._v(" "),r("h4",{attrs:{id:"graphics-cards"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#graphics-cards"}},[t._v("#")]),t._v(" Graphics Cards")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("vGPU Certified Card")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("GPU Chip")]),t._v(" "),r("th",{staticStyle:{"text-align":"right"}},[t._v("Supported Consumer Equivalent")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Tesla M10")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("GM107 x4")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("Most first-gen Maxwell cards")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Tesla M60")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("GM204 x2")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("Most second-gen Maxwell cards")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Tesla P40")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("GP102")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("Most Pascal cards")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Tesla V100 16GB")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("GV100")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("Titan V & Quadro GV100")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Quadro RTX6000")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("TU102")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[t._v("Most Turing cards")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("RTX A6000")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("GA102")]),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[r("b",[t._v("None (don't expect any)")])])])])]),t._v(" "),r("h3",{attrs:{id:"supported-operating-systems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-operating-systems"}},[t._v("#")]),t._v(" Supported Operating Systems")]),t._v(" "),r("h4",{attrs:{id:"host"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" Host")]),t._v(" "),r("ul",[r("li",[t._v("Red Hat Enterprise Linux (Tested w/ Linux 4.18)\n"),r("ul",[r("li",[t._v("Certified by Nvidia for production usage of vGPU with certified cards")])])]),t._v(" "),r("li",[t._v("Proxmox VE (Tested w/ Linux 5.4)")]),t._v(" "),r("li",[t._v("Plenty more not listed here.")])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("The currently supported vGPU host driver does not natively compile against Linux > 5.11. Patches are available for some higher versions, but they may need to be manually applied depending on your installation method.")])]),t._v(" "),r("h4",{attrs:{id:"guest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#guest"}},[t._v("#")]),t._v(" Guest")]),t._v(" "),r("ul",[r("li",[t._v("Red Hat Enterprise Linux (and variants)")]),t._v(" "),r("li",[t._v("Debian 20.04 LTS (and variants)")]),t._v(" "),r("li",[t._v("Windows 8.1+ (including Server)")]),t._v(" "),r("li",[t._v("Plenty more not listed here.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);