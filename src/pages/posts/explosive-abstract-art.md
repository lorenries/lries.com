---
title: "Explosive Images"
description: "Using 3d displacement effects on 2d images for fun and (no) profit"
date: 2018-06-21
published: true
template: "post"
roles: ["Blender"]
thumbnail: "../../img/sky.png"
---

I recently attended ITP Camp 2018, a 4 week crash course/playground that I've heard described as "a center for the recently possible," hosted at NYU's Interactive Telecommunications Program. It was a wonderful opportunity to make stuff, learn from people working on the cutting edge of art and engineering, and collaborate with people from diverse disciplines.

I went to a super interesting session on using displacement maps in Blender, a free and open source 3D creation suite. Here's some of my work from that session:

[[image-grid]]
| <img src="../../img/sky-original.jpg"></img>
| <img src="../../img/sky.png"></img>
| <span>Original Photo by [Łukasz Łada](https://unsplash.com/photos/q7z-AUlHPaw) on [Unsplash](https://unsplash.com/)</span>

The way that it works is that we basically bring a 2D image into a 3D scene, and then pull out (or extrude) the lighter areas of our 3D object using a displacement map. Here's a screenshot of an intermediary step of the above photo:

![displacement](../../img/sky-3d-displacement.png)

Once we extrude the scene, we can point a "camera" in Blender at a specific part and then "take a picture," for lack of a better phrase, to export it back into 2D.

![camera](../../img/blender-camera.png)

Here's what the "camera" looks like in Blender. It's positioned right on top of the 3D scene and pointing down onto the extrusion. The results can look pretty cool.

[[image-grid]]
| <img src="../../img/nebula-original.jpg"></img>
| <img src="../../img/nebula.png"></img>
| <span>Original Photo by [NASA, ESA, and the Hubble Heritage Team (STScI/AURA)](https://www.flickr.com/photos/gsfc/16189387096/)</span>

Not all images come out well. For every 5 photos I extruded, maybe 1 would come out nicely. Photos of the solar system or the sky at dusk tended to do the trick.

[[image-grid]]
| <img src="../../img/light-speed-original.jpg"></img>
| <img src="../../img/light-speed.png"></img>
| <span>Original Photo by [Luca Baggio](https://unsplash.com/photos/eKU3JGNCCMg) on [Unsplash](https://unsplash.com/)</span>
