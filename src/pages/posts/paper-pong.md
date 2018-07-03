---
title: "Paper Pong"
description: "A game of pong that runs entirely on pieces of paper"
date: 2018-06-27
published: true
template: "post"
roles: ["Javascript", "Projection Mapping"]
thumbnail: "../../img/paper-pong.jpg"
---

I recently attended ITP Camp 2018, a 4 week crash course/playground that I've heard described as "a center for the recently possible," hosted at NYU's Interactive Telecommunications Program. It was a wonderful opportunity to make stuff, learn from people working on the cutting edge of art and engineering, and collaborate with people from diverse disciplines.

For my final camp project, I developed a game of pong that runs entirely on pieces of paper. It uses an open-source project called Paper Programs, a browser-based system for running javascript on pieces of paper. You set up a projector and camera, and print out papers that are recognised and executed by the system, and voilà, you're running javascript on pieces of paper.

Here's a video of the game of pong in action:

<video src="/video/paper-pong.mp4" style="display: block; width: 50%; height: auto; margin-left: auto; margin-right: auto;" controls></video>

Programs are stored on a server, and printed out with a unique sequence of colored dots around each corner. Interestingly, the entire system runs in the browser. Webcam input is fed into an HTML5 canvas, and colored dots are recognized by the system with a version of OpenCV compiled to WebAssembly. The projector output is a fullscreen browser window that does some geometric operations on the canvas video feed and displays the program outputs on another canvas, using the OffscreenCanvas API.

Each paper program in the projection area gets two canvases—one for the paper itself, and another supporting canvas that stretches the width/height of the projection surface. For more detailed instructions on setting up a Paper Programs installation, see the [setup docs](https://github.com/janpaul123/paperprograms/blob/master/docs/tutorial.md) and the [API docs](https://github.com/janpaul123/paperprograms/blob/master/docs/api.md).

I really like how Paper Programs is entirely web native, and programs are deceptively simple to write (if you've ever worked with HTML canvas before, you could write your own paper program in 20 minutes).

I prototyped the game of pong in an [Observable notebook](https://beta.observablehq.com/@lorenries/canvas-pong), and then ported it over to use the Paper Programs API for the paddles, score, and speed control.

Here's the code for the main pong controller program:

[[full]]

<!-- prettier-ignore -->
```javascript
importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas')

  // Get context
  const ctx = canvas.getContext('2d')

  // Get a "supporter canvas", which is a canvas for the entire
  // projection surface.
  const supporterCanvas = await paper.get('supporterCanvas')
  const supporterCtx = supporterCanvas.getContext('2d')

  // setup
  let ballRadius = 30
  let x = supporterCanvas.width / 2
  let y = supporterCanvas.height - 30
  let dx = 8
  let dy = -3
  let scoreLeft = 0
  let scoreRight = 0

  // Get the paper number of this piece of paper (which should not change).
  const myPaperNumber = await paper.get('number')

  // Movement functions
  function drawBall() {
    supporterCtx.beginPath()
    supporterCtx.arc(x, y, ballRadius, 0, Math.PI * 2)
    supporterCtx.fillStyle = 'white'
    supporterCtx.fill()
    supporterCtx.closePath()
  }

  function getPaddles(papers) {
    const points = []
    for (let id of Object.keys(papers)) {
      const other = papers[id]
      if (other.data.isPaddle) {
        points.push(other.points)
      }
    }
    const paddles = points.map(val => {
      const w = val.topRight.x - val.topLeft.x
      const h = val.bottomRight.y - val.topRight.y
      return {
        direction: getSide(val),
        width: w / 2,
        height: h,
        center: val.center,
        x: val.topLeft.x + w / 4,
        y: val.topLeft.y,
      }
    })

    function getSide(val) {
      let d
      if (val.topLeft.x < supporterCanvas.width / 2) {
        d = 'left'
      } else {
        d = 'right'
      }
      return d
    }
    return paddles
  }

  function drawPaddles(paddles) {
    paddles.forEach(val => {
      if (val.direction === 'left') {
        supporterCtx.fillStyle = 'red'
      } else {
        supporterCtx.fillStyle = 'green'
      }
      supporterCtx.beginPath()
      supporterCtx.fillRect(val.x, val.y, val.width, val.height)
    })
  }

  function collisionDetection(paddles) {
    paddles.forEach(val => {
      if (
        x > val.x &&
        x < val.x + val.width &&
        y > val.y &&
        y < val.y + val.height
      ) {
        dx = -dx
      }
    })
  }

  function drawScore() {
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.font = '20px Arial'
    ctx.fillText(`Points: ${scoreLeft}`, 10, 20)
    ctx.fillStyle = 'green'
    ctx.fillText(`Points: ${scoreRight}`, 10, 50)
  }

  function drawBoundingBox() {
    supporterCtx.strokeStyle = 'white'
    supporterCtx.lineWidth = 10
    supporterCtx.strokeRect(
      45,
      25,
      supporterCanvas.width - 90,
      supporterCanvas.height - 55
    )
  }

  function map(value, a, b, c, d) {
    value = (value - a) / (b - a)
    return c + value * (d - c)
  }

  drawScore()

  // Repeat at 60fps. The OffscreenCanvas API doesn't support requestAnimationFrame, so we have to use setInterval instead.
  setInterval(async () => {
    // Clear out the supporter canvas. We get our own canvas, so we won't
    // interfere with other programs by doing this.
    supporterCtx.clearRect(0, 0, supporterCanvas.width, supporterCanvas.height)

    drawBoundingBox()

    // Get a list of all the papers.
    const papers = await paper.get('papers')
    const paddles = getPaddles(papers)

    // Set the speed of the ball
    const speedPaper = papers[1620]
    if (speedPaper.data.isSpeed) {
      if (dx < 0) {
        dx = -Math.floor(map(speedPaper.data.angle, 0, 360, 6, 20))
      } else {
        dx = Math.floor(map(speedPaper.data.angle, 0, 360, 6, 20))
      }
    }

    // Draw the paddles, the ball, and watch for collisions with the paddles
    drawPaddles(paddles)
    drawBall()
    collisionDetection(paddles)

    // check for collisions with the walls and reverse the ball direction. If the ball hits the horizontal walls, increment the score.
    if (x + dx > supporterCanvas.width - ballRadius) {
      dx = -dx
      scoreLeft++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawScore()
    }
    if (x + dx < ballRadius) {
      dx = -dx
      scoreRight++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawScore()
    }
    if (y + dy > supporterCanvas.height - ballRadius || y + dy < ballRadius) {
      dy = -dy
    }

    // keep the ball moving
    x += dx
    y += dy

    // Finally, commit to the canvas, which actually renders.
    supporterCtx.commit()
  }, 1000 / 60)
})()
```

The main controller function will handle drawing the paddles and keeping track of where they are, but we still need to specify which programs on the projection surface are actually paddles.

<!-- prettier-ignore -->
```javascript
importScripts('paper.js');

(async () => {
  paper.set('data', { isPaddle: true })
})()
```

And finally, here's the program for the speed control:

<!-- prettier-ignore -->
```javascript
// Speed Control

importScripts('paper.js');

(async () => {
  // Get a canvas object for this paper.
  const canvas = await paper.get('canvas')
  const ctx = canvas.getContext('2d')

  // Get a "supporter canvas", which is a canvas for the entire
  // projection surface.
  const supporterCanvas = await paper.get('supporterCanvas')
  const supporterCtx = supporterCanvas.getContext('2d')

  // Get the paper number of this piece of paper (which should not change).
  const paperNumber = await paper.get('number')

  var papers = await paper.get('papers')

  // Get the previous rotation angle of this paper
  var prevangle = papers[paperNumber].data.angle

  // Helper function to map one value range to another
  function map(value, a, b, c, d) {
    value = (value - a) / (b - a)
    return c + value * (d - c)
  }

  // Tell the main controller that this is the speed control
  paper.set('data', { isSpeed: true })

  // Repeat every 100 milliseconds.
  setInterval(async () => {
    // Get a list of all the papers.
    var papers = await paper.get('papers')

    // Get the rotation of this paper
    const points = papers[paperNumber].points
    const dy = points.topRight.y - points.topLeft.y
    const dx = points.topRight.x - points.topLeft.x
    let angle = Math.atan2(dy, dx) * 180 / Math.PI

    angle = (angle + 360) % 360

    if (angle !== prevangle) {
      prevangle = angle
      paper.set('data', { angle })
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = `50px sans-serif`
    ctx.textAlign = 'center'
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.arc(points.center.x, points.center.y, 20, 0, 2 * Math.PI)
    ctx.stroke()

    const speed = map(angle, 0, 360, 6, 20)
    const level = map(speed, 6, 20, 1, 10)

    ctx.fillText(
      `${Math.floor(level)}`,
      canvas.width / 2,
      canvas.height / 2 + 30
    )
    ctx.font = `25px sans-serif`
    ctx.fillText('Speed', canvas.width / 2, 25)
    ctx.font = `16px sans-serif`
    ctx.fillText('(rotate me)', canvas.width / 2, 45)

    ctx.commit()

    // Finally, commit to the canvas, which actually renders.
    supporterCtx.commit()
  }, 50)
})()
```
