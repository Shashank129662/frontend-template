---
name: frontend-performance
description: Diagnose frontend loading, image layout shifts, excessive client JavaScript, or interaction performance using measurable evidence.
---
# Frontend performance

Reproduce the reported slow route or interaction before optimizing. Record viewport, build mode, and available network/CPU conditions. Use browser traces or installed profiling tools to identify whether the bottleneck is images, fonts, server work, client JavaScript, or rendering.

- Reserve image and embed dimensions. Supply accurate responsive image sizes; prioritize only imagery actually critical to initial rendering using the installed Next.js API.
- Use supplied local fonts through the existing font pipeline and verify that fallback metrics do not cause material layout shifts.
- Remove avoidable client boundaries and duplicate requests before adding caching, memoization, or dependencies.
- Defer heavy optional UI when it demonstrably reduces initial work. Preserve useful loading states and keyboard access.
- Animate transforms/opacity where appropriate; avoid continuous layout work. Respect reduced motion.

Compare before/after under equivalent conditions, preferably against a production build. Report measured evidence and limitations; a build passing is not a performance measurement, and a local lab score does not prove field performance. Keep optimizations within the requested flow.
