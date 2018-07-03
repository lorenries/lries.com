---
title: "Central America Monitor"
description: "Visualizing U.S. Assistance to Central America using D3.js"
date: 2018-06-28
published: true
template: "work"
link: "https://vigilant-perlman-99c421.netlify.com/"
thumbnail: "../../img/cam.png"
redirect: false
---

WOLA's Central America Monitor is a project that tracks U.S. assistance programs in the Northern Triangle. I developed an interactive dashboard to allow reporters and congressional staffers to understand and explore the data.

[[full]]
| <a href="https://vigilant-perlman-99c421.netlify.com/" target="_blank"><img src="../../img/cam-bubbles.png"></img></a>

The dashboard uses D3.js for the bar chart and bubble chart, and [List.js](http://listjs.com/) for the data table. The data is stored in a Google Sheet, which is then exported to S3 as a JSON file whenever it changes, using [this nifty Google Apps Script](https://github.com/liddiard/google-sheet-s3). This lets WOLA program staff change the data in the Google Sheet and have it update live without ever needing to touch the code.

It's definitely the largest data visualization I've worked on, and I learned a ton about code composition patterns in D3. I'd dabbled in D3 before, but this is my first major project that makes good use of D3's rather extensive API. Here are some helpful resources I found along the way:

* [Towards Reusable Charts](https://bost.ocks.org/mike/chart/)
* [A better way to structure D3 code (updated with ES6 and D3 v4)](https://ejb.github.io/2017/08/09/a-better-way-to-structure-d3-code-es6-version.html)
* [Creating Bubble Charts with D3v4](http://vallandingham.me/bubble_charts_with_d3v4.html)
