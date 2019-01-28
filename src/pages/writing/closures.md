---
title: "Closures in Javascript"
date: 2017-12-09T21:48:07-05:00
published: true
template: post
---

A closure in javascript is when a function "remembers" and continues to access the variables in its lexical scope even when the function is executed outside of that lexical scope.

Here's an example:

```javascript
function foo() {
  var bar = 'bar'

  return function() {
    console.log(bar)
  }
}

function bam() {
  foo()() // "bar"
}

bam()
```

The inner function that's being returned from the `foo` function in a sense "closed" over the `bar` variable and prevented it from being garbage collected, allowing the bam function to access it.

I guess a shorter way of describing closure would be: _how to access a variable outside of its lexical scope_, although I'm sure that loses some nuance and Kyle Simpson would probably role his eyes at me.
