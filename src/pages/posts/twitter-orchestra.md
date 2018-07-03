---
title: "Twitter Orchestra"
description: "A musical map of live twitter data all over the world"
date: 2018-06-23
published: true
template: "post"
roles: ["React", "Node.js", "WebGL"]
thumbnail: "../../img/twitter-orchestra.png"
---

This is a musical map of live twitter data I made at ITP Camp 2018. Synth sounds are triggered everytime someone tweets a geotagged tweet in order to create generative music from live social data.

It uses Tone.js for the synths, React and MapboxGL for the map (with a custom overlay for the twitter data) on the frontend, and a Node/Express backend to stream tweets to the client. All of the [code is on Github](https://github.com/lorenries/live-tweet-map).

[[full]]
| [[iframe]]
| | <iframe src="https://xenodochial-almeida-062fb2.netlify.com/" width="1024" height="768"></iframe>
