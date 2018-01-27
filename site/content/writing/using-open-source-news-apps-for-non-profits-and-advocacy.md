---
title: "How Non-Profits Can Use Open Source News Applications for Fun and/or Advocacy"
date: 2017-12-13T19:57:40-05:00
draft: true
---
One of my favorite things about how the news industry has evolved over the last couple of years is that in-house graphics teams have shown an incredible commitment to open-sourcing their projects and tooling. These projects run the gamut from charting applications and frameworks, to social media image generation tools, to tooling that brings the power of desktop GUI graphics editors to the web.

I think these open-source projects have the untapped potential to really change how communications teams at non-profits and advocacy organizations do their digital work.

Here are some thoughts on the current landscape of open-source news applications, and how non-profits can integrate these tools into their workflows and leverage them to improve their digital communications.

## Charting

Most of the web-based GUI charting tools out there are wrappers for reusable D3 templates. I think GUI's are powerful and necessary in the charting space. They allow non-technical editors, reporters, or NGO program staff to create accessible, interactive, web-native charts without much guidance from a programmer or graphics editor. The most powerful tools in this space are ones that combine a GUI with the optional ability to edit chart code directly. For more on this, see Gregor Aisch's post: [Seven Features You'll Want In Your Next Charting Tool](https://www.vis4.net/blog/2015/03/seven-features-youll-wantin-your-next-charting-tool/#expert-custom-javascript-mode).

### Datawrapper

Datawrapper is one of the first and best web-based GUI charting applications out there. Datawrapper is a for-profit company, but the core of the tool is completely open source. For organizations that require custom branding, the hosted version is pricey ($230/month for custom branding and fonts).

The open-source core does a bunch of things really well, but the paid version is better—it has a bunch of really nice chart and map types that the company hasn't open-sourced. Fortunately, with a bit of customization, it's possible to get around these limitations.

I set up the open-source version of Datawrapper for WOLA last year, and we've been using it ever since. Some of our best publications use Datawrapper charts to great effect. 

Setting Datawrapper up involved a lot of trial and error. The setup instructions on the Datawrapper wiki are sparse, but fortunately Greg Linch over at McClatchy published a [really detailed post documenting his installation process](http://www.greglinch.com/2016/07/datawrapper-step-by-step-installation-guide-for-ubuntu-on-aws.html). 

A couple of things you'll probably want to do that Greg doesn't cover:

* Create a custom theme with default colors/fonts for your organization.
* Extend the default (and now deprecated) mapping plugin by creating map templates for other regions—for us this was Latin America and Central America (see below).
* If Datawrapper's built-in export options don't work (they didn't for me), try Rubens Fernando's publish-embed plugin: https://github.com/rubensfernando/publish-embed. 

*Datawrapper map*

### Chartbuilder

### Chartwerk

### Daily Graphics Rig
pym.js

## Social Media Graphics

### Cardkit

Cardkit is an open source browser-based image creation tool I customized and installed for WOLA back in August. Cardkit makes it really easy for non-technical users to create text cards for social media, as well as caption and watermark images. It was originally created by the Sunday Times, and is written in Angular. Since we started using Cardkit, our social media engagement has skyrocketed, and image cards are some of our most retweeted content. 

{{< tweet 824358393062297600 >}}

Cardkit was relatively easy to install, but customizing it with WOLA's branding was a bit of a challenge. In Cardkit, the user interacts with an SVG canvas in the interface, which is converted to a PNG on "Download."

Customizing the default theme in the canvas required working with the Anglular $scope object, with all of WOLA's font, logo, and color information. I also wrote a method from scratch that clears the canvas, resizes an attached image, and adds a video "play" icon. This is really useful when we send emails to our mailing list with video screenshots, since you can't embed actual videos in email. Throughout the process, I learned a lot about how to structure a web application in Angular.

### Lunchbox

## Calling Congress

## Podcasts

## Storing Knowledge with a Good Wiki

bustle, archie ML, ai-to-html, pym.js, mc email templates

