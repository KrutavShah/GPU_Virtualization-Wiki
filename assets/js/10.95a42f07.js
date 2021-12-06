(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{396:function(e,t,a){"use strict";a.r(t);var r=a(54),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("h2",{attrs:{id:"disclaimer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disclaimer"}},[e._v("#")]),e._v(" Disclaimer")]),e._v(" "),a("p",[e._v("Using vGPU on unsupported/uncertified hardware is not recommended, but this script will still enable certain cards to run the technology. We provide this to you at your own risk, so keep in mind that it may not work for you. The project is provided under the MIT license, with no warranty whatsoever. Community support for the project through online channels may be available, but is not guaranteed.")]),e._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),a("p",[e._v("If you have not already done so, start by installing a compatible graphics card into an available PCI Express slot on the system mainboard while the computer is off. You’ll also need to verify that your hardware is capable of running vGPU (see "),a("RouterLink",{attrs:{to:"/overview.html#supported-hardware"}},[e._v("Supported Hardware")]),e._v("). A system upgrade may be necessary if you do not have compatible hardware.")],1),e._v(" "),a("p",[e._v("Once you have verified your hardware is supported, enter your motherboard's firmware setup menu and enable the following options:")]),e._v(" "),a("ul",[a("li",[e._v("Virtualization Extensions/Support (also named Intel VT-x or AMD-V)")]),e._v(" "),a("li",[e._v("IOMMU (also named Intel VT-d or AMD-Vi)")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("IOMMU is not strictly required; only Ampere cards usually need it. If something goes wrong, you should go ahead and make sure it's enabled anyways.")])]),e._v(" "),a("p",[e._v("For both of these processes, you should  refer to documentation from your system vendor to get specific details on how to achieve the desired configuration and results for your system.")]),e._v(" "),a("h2",{attrs:{id:"obtaining-drivers-and-licensing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-drivers-and-licensing"}},[e._v("#")]),e._v(" Obtaining Drivers and Licensing")]),e._v(" "),a("p",[e._v("You can apply for a 90-day evaluation of NVIDIA vGPU on their "),a("a",{attrs:{href:"https://www.nvidia.com/en-us/data-center/resources/vgpu-evaluation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1),e._v(". Once you fill in the requested information, your application will be reviewed, taking anywhere from 2 minutes to 48 hours (not a guarantee). Upon approval, you will receive an email containing directions to set up an account for the NVIDIA Licensing Portal.")]),e._v(" "),a("p",[e._v("Once you log into the Portal, you will be able to locate drivers, the licensing server and your trial licenses. You will need to download the Linux KVM vGPU drivers, which will come in the form of an archive containing drivers for both host and guest, along with documentation for installing the drivers.")])])}),[],!1,null,null,null);t.default=o.exports}}]);