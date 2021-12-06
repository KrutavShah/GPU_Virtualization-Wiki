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

# References

* [NVIDIA Virtual GPU Software Documentation](https://docs.nvidia.com/grid/latest/grid-vgpu-user-guide/index.html#virtual-gpu-types-grid)
* [vgpu_unlock-rs](../tools/vgpu_unlock-rs.md)
