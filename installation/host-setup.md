---
title: Host Setup
---

# {{ $frontmatter.title }}

Exact instructions for setting up a Linux based system for vGPU vary from distribution to distribution. NVIDIA certifies Red Hat Enterprise Linux KVM for use with their vGPU technology, but they also provide a generic installer package, which is what we will be covering here.

::: warning

Following the directions below will not allow your host to use the graphics card for display output. See [Merged Driver](../tools/merged-driver.md) for how to make that work.

:::
