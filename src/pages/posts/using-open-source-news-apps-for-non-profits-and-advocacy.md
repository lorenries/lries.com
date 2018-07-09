---
date: 2018-06-02T00:57:40.000Z
title: >-
  How Non-Profits Can Use Open Source News Applications to Improve 
  Communications Capacity
thumbnail: ../../img/open-source-non-profits.png
redirect: false
template: custom
published: true
---

One of my favorite things about how the news industry has evolved over the last couple of years is that in-house graphics teams have shown an incredible commitment to open-sourcing their projects and tooling. These projects run the gamut from charting applications and frameworks, to social media image generation tools, to tooling that brings the power of desktop GUI graphics editors to the web.

I think these open-source projects have the untapped potential to really change how communications teams at non-profits and advocacy organizations do their digital work.

Here are some thoughts (or maybe it's more of a map) on the current landscape of open-source news applications, and how non-profits can integrate these tools into their workflows and leverage them to improve their digital communications.

## Charting

Most of the web-based GUI charting tools out there are wrappers for reusable D3.js templates. I think GUIs are powerful and necessary in the charting space. They allow non-technical editors, reporters, or NGO program staff to create accessible, interactive, web-native charts without much guidance from a programmer or graphics editor. The most powerful tools in this space are ones that combine a GUI with the optional ability to edit chart code directly. For more on this, see Gregor Aisch's post: [Seven Features You'll Want In Your Next Charting Tool](https://www.vis4.net/blog/2015/03/seven-features-youll-wantin-your-next-charting-tool/#expert-custom-javascript-mode).

### Datawrapper

Datawrapper is one of the first and best web-based GUI charting applications out there. Datawrapper is a for-profit company, but the core of the tool is completely open source. For organizations that require custom branding, the hosted version is pricey (around $230/month for custom branding and fonts).

The open-source core does a bunch of things really well, but the paid version is much better—it has a bunch of really nice chart and map types that the company hasn't open-sourced. Fortunately, with a bit of customization, it's possible to get around these limitations.

I set up the open-source version of Datawrapper for WOLA last year, and we've been using it ever since. Some of our best publications use Datawrapper charts to great effect.

Setting Datawrapper up involved a lot of trial and error. The setup instructions on the Datawrapper wiki are sparse, but fortunately Greg Linch over at McClatchy published a [really detailed post documenting his installation process](http://www.greglinch.com/2016/07/datawrapper-step-by-step-installation-guide-for-ubuntu-on-aws.html).

A couple of things you'll probably want to do that Greg doesn't cover:

* Create a custom theme with default colors/fonts for your organization.
* Extend the default (and now deprecated) mapping plugin by creating map templates for other regions—for us this was Latin America and Central America.
* If Datawrapper's built-in export options don't work (they didn't for me), try Rubens Fernando's publish-embed plugin: https://github.com/rubensfernando/publish-embed.

### Chartbuilder

Another good one is Quartz's [Chartbuilder](https://github.com/Quartz/Chartbuilder). It runs completely on the front end, so you can host it statically with something like S3 or another comparable service, and you don't need a database or backend chops to host charts. Here's [an example](<Here's an example of a Chartbuilder instance I>) of a Chartbuilder instance I set up with custom branding, which we very occasionally used at WOLA.

The downside of this approach is that all of your exports will be static (either images or SVGs) and they won't be accessible to screen readers or search bots.

### Chartwerk

Chartwerk is a relatively new charting system from the Dallas Morning News. I haven't seen much written about it and haven't set it up yet. From what I can tell, it's a nice interface for non-coders to easily create interactive and static charts, and it also combines the ability for graphics editors or coders to edit chart code directly. The [backend](https://github.com/DallasMorningNews/django-chartwerk) is built on Django and the [frontend](https://github.com/DallasMorningNews/chartwerk-editor) is a React app.

### Generators and rigs

Another approach that completely leaves the GUI behind is to use a generator. The best (and one of the first) examples of this is NPR's [dailygraphics](https://github.com/nprapps/dailygraphics) rig. At it's core, it uses python and flask to create new graphics based on a set of templates. You get a mini CMS on Google Sheets, everything is tracked in a git repository, and larger assets like images and audio can be stored externally on S3. [Chart templates](https://github.com/nprapps/dailygraphics/tree/master/graphic_templates) are easily customizable—they’re just HTML and Javascript that can be modified, copied, extended, or what have you. It integrates with another open source project released by NPM called [pym.js](http://blog.apps.npr.org/pym.js/), a way to embed iframes responsively in content management systems. Pretty nifty.

I think NPR’s rig has the potential to be powerful and efficient, but it also requires significant investment for setup and maintenance. I also don’t think it’s as easy as it could be to onboard new developers to the workflow, and it leaves non-technical staff completely in the cold.

## Social Media Graphics

### Cardkit

[Cardkit](https://github.com/times/cardkit) is an open source browser-based image creation tool released by The Sunday Times, which I customized and installed for WOLA back in August of 2016. Cardkit makes it really easy for non-technical users to create text cards for social media, as well as caption and watermark images. It was originally created by the Sunday Times, and is written in Angular. Since we started using Cardkit, our social media engagement has skyrocketed, and image cards are some of our most retweeted content. I also added the ability to clear the canvas, resize an attached image, and add a video "play" icon. This is really useful when we send emails to our mailing list with video screenshots, since you can't embed actual videos in email.

<tweet tweetid=“824358393062297600”></tweet>

Cardkit was relatively easy to install, but customizing it with WOLA's branding was a bit of a challenge in version 1 of the tool. Cardkit v1 used Angular, but v2 is built on React, which I like a lot more. It also comes with a nifty [Yeoman generator](https://www.github.com/times/generator-cardkit) for customizing new installations.

### Lunchbox

[Lunchbox](http://blog.apps.npr.org/lunchbox/) is a similar tool created by NPR.

## Tools for Working with Congress and Congressional Data

Often times non-profits want to mobilize their supporters to call their Congressional representatives in support of or in opposition to particular issues (even though there’s a lot of [debate](https://www.newyorker.com/magazine/2017/03/06/what-calling-congress-achieves) as to whether this accomplishes anything). Rather than sending people to a list of phone numbers or have them call the central switchboard, there are open-source tools available to give people a script and easily help them find their representative’s contact info.

We had a lot of success using a tiny app called [Call to Action](https://github.com/lachlanjc/calltoaction) for some of [our work opposing the border wall](https://interactives.wola.org/stopthewall/).

Other alternatives include [Call Congress by Ian Webster](https://github.com/typpo/call-congress), [Contact Congress](https://github.com/unitedstates/contact-congress) by the [@unitedstates](https://theunitedstates.io/) project, [Democracy.io](https://democracy.io/) by the EFF.

For working with Congressional data, here’s a list of the best resources I’ve come across:

* [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/): one of the best API’s out there for getting Congressional data, including votes, members, bills, nominations, etc.
* [ProPublica Staffers](https://github.com/propublica/staffers): an interactive and searchable House staffer directory
* [ProPublica StateFace](https://github.com/propublica/stateface): a typeface of U.S. state shapes to use in web apps
* [congress-legislators by @unitedstates](https://github.com/unitedstates/congress-legislators): structured data for all members of the United States Congress, 1789-present
* [images by @unitedstates](https://github.com/unitedstates/images): public domain photos of Members of the United States Congress
* [districts by @unitedstates](https://github.com/unitedstates/districts): GeoJSON and other shape files for the federal legislative districts of the US

## Storing Knowledge with a Good Wiki

This is a hard one. Open-source knowledge sharing tools exist, but I do feel that paid options are often better. One of the best paid services I've seen is [Notion](https://www.notion.so/), which combines a bunch of different tools—calendar, task management, wiki, project tracking, and even lightweight spreadsheet/CRM capabilities—into one app.

At WOLA, we used an old and deprecated version of [Tiddlywiki](https://tiddlywiki.com/), stored on a local fileserver. I upgraded it to a newer version of Tiddlywiki and put it onto a Node.js server behind some basic authentication on a subdomain, so that people could access it outside of the office. Usage has gone way up. I wrote about that process [here](/posts/installing-node-tiddlywiki-on-an-ubuntu-vps/).
