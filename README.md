# vue-project
## Installation
Used Vue directly from a CDN via a script tag:
`<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`

# Vue App
1. Create an instance of Vue object.
`const app = Vue.createApp()`   
Inside the object, we can pass template or data function.

2. Then mount it to a certain element in HTML.
`app.mount('#app)`

## View On (v-on)
v-on -> @
We can use as `@click="some change"`

## methods component
Have access to properties we need to use `this`.

## v
- v-if
- v-else
- v-show -> only changes the css to show based on the condition.

## Mouse Events
When a argument passed into function, it will become 1st argument in js file.
If we wsant the event argument we do this:
 `@mouseover="handleEvent($event, 5)"`

## v-bind
`:alt='book.title'`