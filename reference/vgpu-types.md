---
title: vGPU Types
---

# {{ $frontmatter.title }}

Each vGPU instance has to have a defined type, selected from a list of those available for the card in use. These types are grouped into different series depending on the class of workload for which they are optimized. The series of a given vGPU type is identified by the last letter of the type name (i.e. P40-2A is an A-series vGPU instance).

## vGPU Series Comparison

| vGPU Series | Supported OS    | Use Case                   | License      | Display Outputs      | Notes         |
| -----------:| --------------- | -------------------------- | ------------ | -------------------- | ------------- |
| A           | Windows & Linux | VDI / App Streaming        | vApps        | 1280x1024, 1 display | Good for RDSH |
| B           | Windows & Linux | Business Professional Work | vPC (or vWS) | Up to 5K, 2 displays | 45 FPS Limit  |
| C           | Linux           | Compute / CUDA             | vCS (or vWS) | Up to 4K, 1 display  | CUDA Only     |
| Q           | Windows & Linux | Creative Work / Rendering  | vWS          | Up to 8K, 4 displays | CUDA & OpenGL |

::: tip

A number of the above restrictions can be worked around by using `vgpu_unlock-rs`

:::

## vGPU Types List

The following data is taken from `vgpuConfig.xml` from a 510.47.03 driver package.

::: details GRID A100
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-468 | GRID A100-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-469 | GRID A100-5C | 5G | 1 | 4096x2160 | 60 | True | False |
| nvidia-470 | GRID A100-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-471 | GRID A100-10C | 10G | 1 | 4096x2160 | 60 | True | False |
| nvidia-472 | GRID A100-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-473 | GRID A100-40C | 40G | 1 | 4096x2160 | 60 | True | True |
| nvidia-474 | GRID A100-1-5C | 5G | 1 | 4096x2160 | 60 | True | False |
| nvidia-475 | GRID A100-2-10C | 10G | 1 | 4096x2160 | 60 | True | False |
| nvidia-476 | GRID A100-3-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-477 | GRID A100-4-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-478 | GRID A100-7-40C | 40G | 1 | 4096x2160 | 60 | True | False |
| nvidia-706 | GRID A100-1-5CME | 5G | 1 | 4096x2160 | 60 | True | False |
:::

::: details GRID A100D
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-692 | GRID A100D-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-693 | GRID A100D-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-694 | GRID A100D-10C | 10G | 1 | 4096x2160 | 60 | True | False |
| nvidia-695 | GRID A100D-16C | 16G | 1 | 4096x2160 | 60 | True | False |
| nvidia-696 | GRID A100D-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-697 | GRID A100D-40C | 40G | 1 | 4096x2160 | 60 | True | False |
| nvidia-698 | GRID A100D-80C | 80G | 1 | 4096x2160 | 60 | True | True |
| nvidia-699 | GRID A100D-1-10C | 10G | 1 | 4096x2160 | 60 | True | False |
| nvidia-700 | GRID A100D-2-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-701 | GRID A100D-3-40C | 40G | 1 | 4096x2160 | 60 | True | False |
| nvidia-702 | GRID A100D-4-40C | 40G | 1 | 4096x2160 | 60 | True | False |
| nvidia-703 | GRID A100D-7-80C | 80G | 1 | 4096x2160 | 60 | True | False |
| nvidia-707 | GRID A100D-1-10CME | 10G | 1 | 4096x2160 | 60 | True | False |
:::

::: details GRID A100DX
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-615 | GRID A100DX-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-616 | GRID A100DX-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-617 | GRID A100DX-10C | 10G | 1 | 4096x2160 | 60 | True | False |
| nvidia-618 | GRID A100DX-16C | 16G | 1 | 4096x2160 | 60 | True | False |
| nvidia-619 | GRID A100DX-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-620 | GRID A100DX-40C | 40G | 1 | 4096x2160 | 60 | True | False |
| nvidia-621 | GRID A100DX-80C | 80G | 1 | 4096x2160 | 60 | True | True |
| nvidia-622 | GRID A100DX-1-10C | 10G | 1 | 4096x2160 | 60 | True | False |
| nvidia-623 | GRID A100DX-2-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-624 | GRID A100DX-3-40C | 40G | 1 | 4096x2160 | 60 | True | False |
| nvidia-625 | GRID A100DX-4-40C | 40G | 1 | 4096x2160 | 60 | True | False |
| nvidia-626 | GRID A100DX-7-80C | 80G | 1 | 4096x2160 | 60 | True | False |
| nvidia-705 | GRID A100DX-1-10CME | 10G | 1 | 4096x2160 | 60 | True | False |
:::

::: details GRID A100X
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-457 | GRID A100X-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-458 | GRID A100X-5C | 5G | 1 | 4096x2160 | 60 | True | False |
| nvidia-459 | GRID A100X-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-460 | GRID A100X-10C | 10G | 1 | 4096x2160 | 60 | True | False |
| nvidia-461 | GRID A100X-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-462 | GRID A100X-40C | 40G | 1 | 4096x2160 | 60 | True | True |
| nvidia-463 | GRID A100X-1-5C | 5G | 1 | 4096x2160 | 60 | True | False |
| nvidia-464 | GRID A100X-2-10C | 10G | 1 | 4096x2160 | 60 | True | False |
| nvidia-465 | GRID A100X-3-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-466 | GRID A100X-4-20C | 20G | 1 | 4096x2160 | 60 | True | False |
| nvidia-467 | GRID A100X-7-40C | 40G | 1 | 4096x2160 | 60 | True | False |
| nvidia-704 | GRID A100X-1-5CME | 5G | 1 | 4096x2160 | 60 | True | False |
:::

::: details GRID M10
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-35 | GRID M10-0B | 0.5G | 2 | 2560x1600 | 45 | False | False |
| nvidia-36 | GRID M10-0Q | 0.5G | 2 | 2560x1600 | 60 | False | False |
| nvidia-37 | GRID M10-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-38 | GRID M10-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-39 | GRID M10-1Q | 1G | 4 | 5120x2880 | 60 | False | False |
| nvidia-40 | GRID M10-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-41 | GRID M10-2Q | 2G | 4 | 5120x2880 | 60 | False | False |
| nvidia-42 | GRID M10-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-43 | GRID M10-4Q | 4G | 4 | 5120x2880 | 60 | False | False |
| nvidia-44 | GRID M10-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-45 | GRID M10-8Q | 8G | 4 | 5120x2880 | 60 | True | True |
| nvidia-155 | GRID M10-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-208 | GRID M10-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-240 | GRID M10-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
:::

::: details GRID M6
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-23 | GRID M6-0B | 0.5G | 2 | 2560x1600 | 45 | False | False |
| nvidia-24 | GRID M6-0Q | 0.5G | 2 | 2560x1600 | 60 | False | False |
| nvidia-25 | GRID M6-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-26 | GRID M6-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-27 | GRID M6-1Q | 1G | 4 | 5120x2880 | 60 | False | False |
| nvidia-28 | GRID M6-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-29 | GRID M6-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-30 | GRID M6-2Q | 2G | 4 | 5120x2880 | 60 | False | False |
| nvidia-31 | GRID M6-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-32 | GRID M6-4Q | 4G | 4 | 5120x2880 | 60 | False | False |
| nvidia-33 | GRID M6-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-34 | GRID M6-8Q | 8G | 4 | 5120x2880 | 60 | True | True |
| nvidia-209 | GRID M6-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-239 | GRID M6-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
:::

::: details GRID M60
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-11 | GRID M60-0B | 0.5G | 2 | 2560x1600 | 45 | False | False |
| nvidia-12 | GRID M60-0Q | 0.5G | 2 | 2560x1600 | 60 | False | False |
| nvidia-13 | GRID M60-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-14 | GRID M60-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-15 | GRID M60-1Q | 1G | 4 | 5120x2880 | 60 | False | False |
| nvidia-16 | GRID M60-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-17 | GRID M60-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-18 | GRID M60-2Q | 2G | 4 | 5120x2880 | 60 | False | False |
| nvidia-19 | GRID M60-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-20 | GRID M60-4Q | 4G | 4 | 5120x2880 | 60 | False | False |
| nvidia-21 | GRID M60-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-22 | GRID M60-8Q | 8G | 4 | 5120x2880 | 60 | True | True |
| nvidia-210 | GRID M60-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-238 | GRID M60-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
:::

::: details GRID P100
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-83 | GRID P100-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-84 | GRID P100-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-85 | GRID P100-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-86 | GRID P100-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-87 | GRID P100-16Q | 16G | 4 | 7680x4320 | 60 | True | True |
| nvidia-88 | GRID P100-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-89 | GRID P100-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-90 | GRID P100-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-91 | GRID P100-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-92 | GRID P100-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-93 | GRID P100-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-160 | GRID P100-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-211 | GRID P100-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-244 | GRID P100-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-293 | GRID P100-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-294 | GRID P100-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-295 | GRID P100-16C | 16G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID P100C
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-144 | GRID P100C-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-145 | GRID P100C-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-146 | GRID P100C-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-147 | GRID P100C-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-148 | GRID P100C-12Q | 12G | 4 | 7680x4320 | 60 | True | True |
| nvidia-149 | GRID P100C-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-150 | GRID P100C-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-151 | GRID P100C-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-152 | GRID P100C-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-153 | GRID P100C-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-154 | GRID P100C-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-161 | GRID P100C-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-212 | GRID P100C-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-246 | GRID P100C-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-305 | GRID P100C-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-306 | GRID P100C-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-307 | GRID P100C-12C | 12G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID P100X
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-94 | GRID P100X-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-95 | GRID P100X-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-96 | GRID P100X-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-97 | GRID P100X-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-98 | GRID P100X-16Q | 16G | 4 | 7680x4320 | 60 | True | True |
| nvidia-99 | GRID P100X-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-100 | GRID P100X-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-101 | GRID P100X-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-102 | GRID P100X-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-103 | GRID P100X-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-104 | GRID P100X-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-159 | GRID P100X-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-213 | GRID P100X-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-245 | GRID P100X-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-296 | GRID P100X-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-297 | GRID P100X-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-298 | GRID P100X-16C | 16G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID P4
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-63 | GRID P4-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-64 | GRID P4-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-65 | GRID P4-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-66 | GRID P4-8Q | 8G | 4 | 7680x4320 | 60 | True | True |
| nvidia-67 | GRID P4-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-68 | GRID P4-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-69 | GRID P4-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-70 | GRID P4-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-71 | GRID P4-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-157 | GRID P4-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-214 | GRID P4-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-243 | GRID P4-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-288 | GRID P4-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-289 | GRID P4-8C | 8G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID P40
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-46 | GRID P40-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-47 | GRID P40-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-48 | GRID P40-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-49 | GRID P40-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-50 | GRID P40-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-51 | GRID P40-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-52 | GRID P40-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-53 | GRID P40-24Q | 24G | 4 | 7680x4320 | 60 | True | True |
| nvidia-54 | GRID P40-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-55 | GRID P40-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-56 | GRID P40-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-57 | GRID P40-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-58 | GRID P40-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-59 | GRID P40-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-60 | GRID P40-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-61 | GRID P40-24A | 24G | 1 | 1280x1024 | 60 | False | False |
| nvidia-62 | GRID P40-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-156 | GRID P40-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-215 | GRID P40-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-241 | GRID P40-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-283 | GRID P40-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-284 | GRID P40-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-285 | GRID P40-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-286 | GRID P40-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-287 | GRID P40-24C | 24G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID P6
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-72 | GRID P6-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-73 | GRID P6-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-74 | GRID P6-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-75 | GRID P6-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-76 | GRID P6-16Q | 16G | 4 | 7680x4320 | 60 | True | True |
| nvidia-77 | GRID P6-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-78 | GRID P6-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-79 | GRID P6-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-80 | GRID P6-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-81 | GRID P6-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-82 | GRID P6-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-158 | GRID P6-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-216 | GRID P6-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-242 | GRID P6-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-290 | GRID P6-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-291 | GRID P6-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-292 | GRID P6-16C | 16G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID RTX6000
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-256 | GRID RTX6000-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-257 | GRID RTX6000-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-258 | GRID RTX6000-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-259 | GRID RTX6000-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-260 | GRID RTX6000-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-261 | GRID RTX6000-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-262 | GRID RTX6000-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-263 | GRID RTX6000-24Q | 24G | 4 | 7680x4320 | 60 | True | True |
| nvidia-343 | GRID RTX6000-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-344 | GRID RTX6000-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-345 | GRID RTX6000-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-346 | GRID RTX6000-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-347 | GRID RTX6000-24C | 24G | 1 | 4096x2160 | 60 | True | True |
| nvidia-435 | GRID RTX6000-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-436 | GRID RTX6000-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-437 | GRID RTX6000-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-438 | GRID RTX6000-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-439 | GRID RTX6000-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-440 | GRID RTX6000-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-441 | GRID RTX6000-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-442 | GRID RTX6000-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-443 | GRID RTX6000-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-444 | GRID RTX6000-24A | 24G | 1 | 1280x1024 | 60 | False | False |
:::

::: details GRID RTX6000P
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-375 | GRID RTX6000P-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-376 | GRID RTX6000P-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-377 | GRID RTX6000P-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-378 | GRID RTX6000P-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-379 | GRID RTX6000P-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-380 | GRID RTX6000P-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-381 | GRID RTX6000P-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-382 | GRID RTX6000P-24Q | 24G | 4 | 7680x4320 | 60 | True | True |
| nvidia-387 | GRID RTX6000P-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-388 | GRID RTX6000P-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-389 | GRID RTX6000P-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-390 | GRID RTX6000P-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-391 | GRID RTX6000P-24C | 24G | 1 | 4096x2160 | 60 | True | True |
| nvidia-392 | GRID RTX6000P-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-393 | GRID RTX6000P-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-394 | GRID RTX6000P-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-395 | GRID RTX6000P-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-396 | GRID RTX6000P-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-397 | GRID RTX6000P-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-398 | GRID RTX6000P-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-399 | GRID RTX6000P-24A | 24G | 1 | 1280x1024 | 60 | False | False |
| nvidia-400 | GRID RTX6000P-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-401 | GRID RTX6000P-2B | 2G | 4 | 5120x2880 | 45 | False | False |
:::

::: details GRID RTX8000
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-264 | GRID RTX8000-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-265 | GRID RTX8000-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-266 | GRID RTX8000-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-267 | GRID RTX8000-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-268 | GRID RTX8000-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-269 | GRID RTX8000-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-270 | GRID RTX8000-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-271 | GRID RTX8000-16Q | 16G | 4 | 7680x4320 | 60 | True | False |
| nvidia-272 | GRID RTX8000-24Q | 24G | 4 | 7680x4320 | 60 | True | False |
| nvidia-273 | GRID RTX8000-48Q | 48G | 4 | 7680x4320 | 60 | True | True |
| nvidia-348 | GRID RTX8000-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-349 | GRID RTX8000-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-350 | GRID RTX8000-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-351 | GRID RTX8000-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-352 | GRID RTX8000-16C | 16G | 1 | 4096x2160 | 60 | True | False |
| nvidia-353 | GRID RTX8000-24C | 24G | 1 | 4096x2160 | 60 | True | False |
| nvidia-354 | GRID RTX8000-48C | 48G | 1 | 4096x2160 | 60 | True | True |
| nvidia-445 | GRID RTX8000-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-446 | GRID RTX8000-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-447 | GRID RTX8000-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-448 | GRID RTX8000-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-449 | GRID RTX8000-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-450 | GRID RTX8000-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-451 | GRID RTX8000-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-452 | GRID RTX8000-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-453 | GRID RTX8000-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-454 | GRID RTX8000-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-455 | GRID RTX8000-24A | 24G | 1 | 1280x1024 | 60 | False | False |
| nvidia-456 | GRID RTX8000-48A | 48G | 1 | 1280x1024 | 60 | False | False |
:::

::: details GRID RTX8000P
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-402 | GRID RTX8000P-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-403 | GRID RTX8000P-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-404 | GRID RTX8000P-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-405 | GRID RTX8000P-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-406 | GRID RTX8000P-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-407 | GRID RTX8000P-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-408 | GRID RTX8000P-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-409 | GRID RTX8000P-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-410 | GRID RTX8000P-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-411 | GRID RTX8000P-16Q | 16G | 4 | 7680x4320 | 60 | True | False |
| nvidia-412 | GRID RTX8000P-24Q | 24G | 4 | 7680x4320 | 60 | True | False |
| nvidia-413 | GRID RTX8000P-48Q | 48G | 4 | 7680x4320 | 60 | True | True |
| nvidia-414 | GRID RTX8000P-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-415 | GRID RTX8000P-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-416 | GRID RTX8000P-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-417 | GRID RTX8000P-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-418 | GRID RTX8000P-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-419 | GRID RTX8000P-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-420 | GRID RTX8000P-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-421 | GRID RTX8000P-24A | 24G | 1 | 1280x1024 | 60 | False | False |
| nvidia-422 | GRID RTX8000P-48A | 48G | 1 | 1280x1024 | 60 | False | False |
| nvidia-427 | GRID RTX8000P-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-428 | GRID RTX8000P-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-429 | GRID RTX8000P-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-430 | GRID RTX8000P-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-431 | GRID RTX8000P-16C | 16G | 1 | 4096x2160 | 60 | True | False |
| nvidia-432 | GRID RTX8000P-24C | 24G | 1 | 4096x2160 | 60 | True | False |
| nvidia-433 | GRID RTX8000P-48C | 48G | 1 | 4096x2160 | 60 | True | True |
| nvidia-434 | GRID RTX8000P-16A | 16G | 1 | 1280x1024 | 60 | False | False |
:::

::: details GRID T4
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-222 | GRID T4-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-223 | GRID T4-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-224 | GRID T4-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-225 | GRID T4-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-226 | GRID T4-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-227 | GRID T4-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-228 | GRID T4-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-229 | GRID T4-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-230 | GRID T4-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-231 | GRID T4-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-232 | GRID T4-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-233 | GRID T4-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-234 | GRID T4-16Q | 16G | 4 | 7680x4320 | 60 | True | True |
| nvidia-252 | GRID T4-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-319 | GRID T4-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-320 | GRID T4-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-321 | GRID T4-16C | 16G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID V100
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-105 | GRID V100-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-106 | GRID V100-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-107 | GRID V100-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-108 | GRID V100-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-109 | GRID V100-16Q | 16G | 4 | 7680x4320 | 60 | True | True |
| nvidia-110 | GRID V100-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-111 | GRID V100-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-112 | GRID V100-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-113 | GRID V100-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-114 | GRID V100-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-115 | GRID V100-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-163 | GRID V100-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-217 | GRID V100-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-247 | GRID V100-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-299 | GRID V100-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-300 | GRID V100-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-301 | GRID V100-16C | 16G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID V100D
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-180 | GRID V100D-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-181 | GRID V100D-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-182 | GRID V100D-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-183 | GRID V100D-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-184 | GRID V100D-16Q | 16G | 4 | 7680x4320 | 60 | True | False |
| nvidia-185 | GRID V100D-32Q | 32G | 4 | 7680x4320 | 60 | True | True |
| nvidia-186 | GRID V100D-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-187 | GRID V100D-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-188 | GRID V100D-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-189 | GRID V100D-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-190 | GRID V100D-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-191 | GRID V100D-32A | 32G | 1 | 1280x1024 | 60 | False | False |
| nvidia-192 | GRID V100D-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-193 | GRID V100D-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-218 | GRID V100D-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-249 | GRID V100D-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-311 | GRID V100D-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-312 | GRID V100D-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-313 | GRID V100D-16C | 16G | 1 | 4096x2160 | 60 | True | False |
| nvidia-314 | GRID V100D-32C | 32G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID V100DX
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-194 | GRID V100DX-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-195 | GRID V100DX-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-196 | GRID V100DX-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-197 | GRID V100DX-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-198 | GRID V100DX-16Q | 16G | 4 | 7680x4320 | 60 | True | False |
| nvidia-199 | GRID V100DX-32Q | 32G | 4 | 7680x4320 | 60 | True | True |
| nvidia-200 | GRID V100DX-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-201 | GRID V100DX-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-202 | GRID V100DX-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-203 | GRID V100DX-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-204 | GRID V100DX-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-205 | GRID V100DX-32A | 32G | 1 | 1280x1024 | 60 | False | False |
| nvidia-206 | GRID V100DX-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-207 | GRID V100DX-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-219 | GRID V100DX-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-250 | GRID V100DX-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-315 | GRID V100DX-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-316 | GRID V100DX-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-317 | GRID V100DX-16C | 16G | 1 | 4096x2160 | 60 | True | False |
| nvidia-318 | GRID V100DX-32C | 32G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID V100L
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-165 | GRID V100L-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-166 | GRID V100L-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-167 | GRID V100L-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-168 | GRID V100L-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-169 | GRID V100L-16Q | 16G | 4 | 7680x4320 | 60 | True | True |
| nvidia-170 | GRID V100L-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-171 | GRID V100L-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-172 | GRID V100L-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-173 | GRID V100L-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-174 | GRID V100L-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-175 | GRID V100L-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-176 | GRID V100L-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-220 | GRID V100L-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-251 | GRID V100L-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-308 | GRID V100L-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-309 | GRID V100L-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-310 | GRID V100L-16C | 16G | 1 | 4096x2160 | 60 | True | True |
:::

::: details GRID V100S
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-355 | GRID V100S-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-356 | GRID V100S-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-357 | GRID V100S-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-358 | GRID V100S-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-359 | GRID V100S-16Q | 16G | 4 | 7680x4320 | 60 | True | False |
| nvidia-360 | GRID V100S-32Q | 32G | 4 | 7680x4320 | 60 | True | True |
| nvidia-361 | GRID V100S-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-362 | GRID V100S-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-363 | GRID V100S-16C | 16G | 1 | 4096x2160 | 60 | True | False |
| nvidia-364 | GRID V100S-32C | 32G | 1 | 4096x2160 | 60 | True | True |
| nvidia-365 | GRID V100S-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-366 | GRID V100S-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-367 | GRID V100S-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-368 | GRID V100S-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-369 | GRID V100S-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-370 | GRID V100S-32A | 32G | 1 | 1280x1024 | 60 | False | False |
| nvidia-371 | GRID V100S-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-373 | GRID V100S-2B | 2G | 4 | 5120x2880 | 45 | False | False |
:::

::: details GRID V100X
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-116 | GRID V100X-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-117 | GRID V100X-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-118 | GRID V100X-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-119 | GRID V100X-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-120 | GRID V100X-16Q | 16G | 4 | 7680x4320 | 60 | True | True |
| nvidia-121 | GRID V100X-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-122 | GRID V100X-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-123 | GRID V100X-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-124 | GRID V100X-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-125 | GRID V100X-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-126 | GRID V100X-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-162 | GRID V100X-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-221 | GRID V100X-2B4 | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-248 | GRID V100X-1B4 | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-302 | GRID V100X-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-303 | GRID V100X-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-304 | GRID V100X-16C | 16G | 1 | 4096x2160 | 60 | True | True |
:::

::: details NVIDIA A10
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-588 | NVIDIA A10-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-589 | NVIDIA A10-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-590 | NVIDIA A10-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-591 | NVIDIA A10-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-592 | NVIDIA A10-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-593 | NVIDIA A10-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-594 | NVIDIA A10-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-595 | NVIDIA A10-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-596 | NVIDIA A10-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-597 | NVIDIA A10-24Q | 24G | 4 | 7680x4320 | 60 | True | True |
| nvidia-598 | NVIDIA A10-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-599 | NVIDIA A10-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-600 | NVIDIA A10-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-601 | NVIDIA A10-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-602 | NVIDIA A10-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-603 | NVIDIA A10-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-604 | NVIDIA A10-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-605 | NVIDIA A10-24A | 24G | 1 | 1280x1024 | 60 | False | False |
| nvidia-610 | NVIDIA A10-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-611 | NVIDIA A10-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-612 | NVIDIA A10-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-613 | NVIDIA A10-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-614 | NVIDIA A10-24C | 24G | 1 | 4096x2160 | 60 | True | True |
:::

::: details NVIDIA A16
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-709 | NVIDIA A16-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-710 | NVIDIA A16-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-711 | NVIDIA A16-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-712 | NVIDIA A16-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-713 | NVIDIA A16-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-714 | NVIDIA A16-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-715 | NVIDIA A16-16Q | 16G | 4 | 7680x4320 | 60 | True | True |
| nvidia-716 | NVIDIA A16-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-717 | NVIDIA A16-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-718 | NVIDIA A16-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-719 | NVIDIA A16-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-720 | NVIDIA A16-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-721 | NVIDIA A16-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-722 | NVIDIA A16-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-723 | NVIDIA A16-16C | 16G | 1 | 4096x2160 | 60 | True | True |
:::

::: details NVIDIA A2
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-742 | NVIDIA A2-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-743 | NVIDIA A2-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-744 | NVIDIA A2-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-745 | NVIDIA A2-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-746 | NVIDIA A2-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-747 | NVIDIA A2-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-748 | NVIDIA A2-16Q | 16G | 4 | 7680x4320 | 60 | True | True |
| nvidia-749 | NVIDIA A2-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-750 | NVIDIA A2-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-751 | NVIDIA A2-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-752 | NVIDIA A2-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-753 | NVIDIA A2-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-754 | NVIDIA A2-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-755 | NVIDIA A2-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-756 | NVIDIA A2-16C | 16G | 1 | 4096x2160 | 60 | True | True |
:::

::: details NVIDIA A30
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-684 | NVIDIA A30-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-685 | NVIDIA A30-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-686 | NVIDIA A30-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-687 | NVIDIA A30-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-688 | NVIDIA A30-24C | 24G | 1 | 4096x2160 | 60 | True | True |
| nvidia-689 | NVIDIA A30-1-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-690 | NVIDIA A30-2-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-691 | NVIDIA A30-4-24C | 24G | 1 | 4096x2160 | 60 | True | False |
| nvidia-708 | NVIDIA A30-1-6CME | 6G | 1 | 4096x2160 | 60 | True | False |
:::

::: details NVIDIA A40
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-555 | NVIDIA A40-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-556 | NVIDIA A40-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-557 | NVIDIA A40-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-558 | NVIDIA A40-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-559 | NVIDIA A40-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-560 | NVIDIA A40-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-561 | NVIDIA A40-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-562 | NVIDIA A40-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-563 | NVIDIA A40-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-564 | NVIDIA A40-16Q | 16G | 4 | 7680x4320 | 60 | True | False |
| nvidia-565 | NVIDIA A40-24Q | 24G | 4 | 7680x4320 | 60 | True | False |
| nvidia-566 | NVIDIA A40-48Q | 48G | 4 | 7680x4320 | 60 | True | True |
| nvidia-567 | NVIDIA A40-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-568 | NVIDIA A40-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-569 | NVIDIA A40-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-570 | NVIDIA A40-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-571 | NVIDIA A40-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-572 | NVIDIA A40-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-573 | NVIDIA A40-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-574 | NVIDIA A40-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-575 | NVIDIA A40-24A | 24G | 1 | 1280x1024 | 60 | False | False |
| nvidia-576 | NVIDIA A40-48A | 48G | 1 | 1280x1024 | 60 | False | False |
| nvidia-581 | NVIDIA A40-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-582 | NVIDIA A40-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-583 | NVIDIA A40-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-584 | NVIDIA A40-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-585 | NVIDIA A40-16C | 16G | 1 | 4096x2160 | 60 | True | False |
| nvidia-586 | NVIDIA A40-24C | 24G | 1 | 4096x2160 | 60 | True | False |
| nvidia-587 | NVIDIA A40-48C | 48G | 1 | 4096x2160 | 60 | True | True |
:::

::: details NVIDIA RTXA5000
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-657 | NVIDIA RTXA5000-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-658 | NVIDIA RTXA5000-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-659 | NVIDIA RTXA5000-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-660 | NVIDIA RTXA5000-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-661 | NVIDIA RTXA5000-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-662 | NVIDIA RTXA5000-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-663 | NVIDIA RTXA5000-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-664 | NVIDIA RTXA5000-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-665 | NVIDIA RTXA5000-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-666 | NVIDIA RTXA5000-24Q | 24G | 4 | 7680x4320 | 60 | True | True |
| nvidia-667 | NVIDIA RTXA5000-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-668 | NVIDIA RTXA5000-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-669 | NVIDIA RTXA5000-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-670 | NVIDIA RTXA5000-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-671 | NVIDIA RTXA5000-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-672 | NVIDIA RTXA5000-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-673 | NVIDIA RTXA5000-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-674 | NVIDIA RTXA5000-24A | 24G | 1 | 1280x1024 | 60 | False | False |
| nvidia-675 | NVIDIA RTXA5000-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-676 | NVIDIA RTXA5000-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-677 | NVIDIA RTXA5000-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-678 | NVIDIA RTXA5000-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-679 | NVIDIA RTXA5000-24C | 24G | 1 | 4096x2160 | 60 | True | True |
:::

::: details NVIDIA RTXA5500
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-771 | NVIDIA RTXA5500-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-772 | NVIDIA RTXA5500-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-773 | NVIDIA RTXA5500-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-774 | NVIDIA RTXA5500-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-775 | NVIDIA RTXA5500-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-776 | NVIDIA RTXA5500-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-777 | NVIDIA RTXA5500-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-778 | NVIDIA RTXA5500-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-779 | NVIDIA RTXA5500-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-780 | NVIDIA RTXA5500-24Q | 24G | 4 | 7680x4320 | 60 | True | True |
| nvidia-781 | NVIDIA RTXA5500-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-782 | NVIDIA RTXA5500-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-783 | NVIDIA RTXA5500-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-784 | NVIDIA RTXA5500-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-785 | NVIDIA RTXA5500-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-786 | NVIDIA RTXA5500-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-787 | NVIDIA RTXA5500-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-788 | NVIDIA RTXA5500-24A | 24G | 1 | 1280x1024 | 60 | False | False |
| nvidia-793 | NVIDIA RTXA5500-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-794 | NVIDIA RTXA5500-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-795 | NVIDIA RTXA5500-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-796 | NVIDIA RTXA5500-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-797 | NVIDIA RTXA5500-24C | 24G | 1 | 4096x2160 | 60 | True | True |
:::

::: details NVIDIA RTXA6000
| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |
| -- | -- | -- | -- | -- | -- | -- | -- |
| nvidia-522 | NVIDIA RTXA6000-1B | 1G | 4 | 5120x2880 | 45 | False | False |
| nvidia-523 | NVIDIA RTXA6000-2B | 2G | 4 | 5120x2880 | 45 | False | False |
| nvidia-524 | NVIDIA RTXA6000-1Q | 1G | 4 | 5120x2880 | 60 | True | False |
| nvidia-525 | NVIDIA RTXA6000-2Q | 2G | 4 | 7680x4320 | 60 | True | False |
| nvidia-526 | NVIDIA RTXA6000-3Q | 3G | 4 | 7680x4320 | 60 | True | False |
| nvidia-527 | NVIDIA RTXA6000-4Q | 4G | 4 | 7680x4320 | 60 | True | False |
| nvidia-528 | NVIDIA RTXA6000-6Q | 6G | 4 | 7680x4320 | 60 | True | False |
| nvidia-529 | NVIDIA RTXA6000-8Q | 8G | 4 | 7680x4320 | 60 | True | False |
| nvidia-530 | NVIDIA RTXA6000-12Q | 12G | 4 | 7680x4320 | 60 | True | False |
| nvidia-531 | NVIDIA RTXA6000-16Q | 16G | 4 | 7680x4320 | 60 | True | False |
| nvidia-532 | NVIDIA RTXA6000-24Q | 24G | 4 | 7680x4320 | 60 | True | False |
| nvidia-533 | NVIDIA RTXA6000-48Q | 48G | 4 | 7680x4320 | 60 | True | True |
| nvidia-534 | NVIDIA RTXA6000-1A | 1G | 1 | 1280x1024 | 60 | False | False |
| nvidia-535 | NVIDIA RTXA6000-2A | 2G | 1 | 1280x1024 | 60 | False | False |
| nvidia-536 | NVIDIA RTXA6000-3A | 3G | 1 | 1280x1024 | 60 | False | False |
| nvidia-537 | NVIDIA RTXA6000-4A | 4G | 1 | 1280x1024 | 60 | False | False |
| nvidia-538 | NVIDIA RTXA6000-6A | 6G | 1 | 1280x1024 | 60 | False | False |
| nvidia-539 | NVIDIA RTXA6000-8A | 8G | 1 | 1280x1024 | 60 | False | False |
| nvidia-540 | NVIDIA RTXA6000-12A | 12G | 1 | 1280x1024 | 60 | False | False |
| nvidia-541 | NVIDIA RTXA6000-16A | 16G | 1 | 1280x1024 | 60 | False | False |
| nvidia-542 | NVIDIA RTXA6000-24A | 24G | 1 | 1280x1024 | 60 | False | False |
| nvidia-543 | NVIDIA RTXA6000-48A | 48G | 1 | 1280x1024 | 60 | False | False |
| nvidia-548 | NVIDIA RTXA6000-4C | 4G | 1 | 4096x2160 | 60 | True | False |
| nvidia-549 | NVIDIA RTXA6000-6C | 6G | 1 | 4096x2160 | 60 | True | False |
| nvidia-550 | NVIDIA RTXA6000-8C | 8G | 1 | 4096x2160 | 60 | True | False |
| nvidia-551 | NVIDIA RTXA6000-12C | 12G | 1 | 4096x2160 | 60 | True | False |
| nvidia-552 | NVIDIA RTXA6000-16C | 16G | 1 | 4096x2160 | 60 | True | False |
| nvidia-553 | NVIDIA RTXA6000-24C | 24G | 1 | 4096x2160 | 60 | True | False |
| nvidia-554 | NVIDIA RTXA6000-48C | 48G | 1 | 4096x2160 | 60 | True | True |
:::

# References

* [NVIDIA Virtual GPU Software Documentation](https://docs.nvidia.com/grid/latest/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid)
* [vgpu_unlock-rs](../tools/vgpu_unlock-rs.md)
