---
title: "Using Open Source News Applications for Non-Profits and Advocacy"
date: 2017-12-10T19:57:40-05:00
draft: false
---

## Datawrapper
It's become pretty clear at WOLA that JPEG charts hastily exported from Excel are far less visually appealing than custom-made charts and graphs that use a consistent theme. Furthermore, JPEGs are static, which means readers are unable to interact with the content or use the datasets on their own. Enter Datawrapper, an open source application to create interactive graphics.

{{< figure src="./images/datawrapper-dashboard.png" alt="A screenshot of the chart creation dashboard for Datawrapper" class="ma0 mv2" >}}

 Datawrapper does 2 things really well:

* Allow program staff who don't have coding skills to create interactive charts and graphics really quickly.
* Enforce a consistent style for charts/graphs according to WOLA's branding.

*Datawrapper chart*

Setting it up involved a fair amount of trial and error. The setup instructions on the Datawrapper wiki are relatively sparse, and while the maintainers still work on the open-source version of the app, they seem to do most of the development on their paid service.

Here were some of the challenges in the installation process:


* Setting up a LAMP stack on a VPS, and configuring Apache to serve traffic to multiple subdomains on the same server.
* Configuring the entire application to only use SSL, since WOLA's website is all served over HTTPS and doesn't accept unencrypted iFrames.
* Creating a custom theme with WOLA branding from scratch in PHP and Javascript.
* Extending the default mapping plugin by creating map templates for Latin America and Central America (see below).

*Datawrapper map*

## Cardkit

Cardkit is an open source browser-based image creation tool I customized and installed for WOLA back in August. Cardkit makes it really easy for non-technical users to create text cards for social media, as well as caption and watermark images. It was originally created by the Sunday Times, and is written in Angular. Since we started using Cardkit, our social media engagement has skyrocketed, and image cards are some of our most retweeted content. 

{{< tweet 824358393062297600 >}}

Cardkit was relatively easy to install, but customizing it with WOLA's branding was a bit of a challenge. In Cardkit, the user interacts with an SVG canvas in the interface, which is converted to a PNG on "Download."

Customizing the default theme in the canvas required working with the Anglular $scope object, with all of WOLA's font, logo, and color information. I also wrote a method from scratch that clears the canvas, resizes an attached image, and adds a video "play" icon. This is really useful when we send emails to our mailing list with video screenshots, since you can't embed actual videos in email. Throughout the process, I learned a lot about how to structure a web application in Angular.
