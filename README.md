# initial setup:

`npm init -y` 

- use this to intialize node application ( which creates package.json)

`npm i <packageName>` 

- use this to install package locally
- `npm install` to install dependencies from other projects ( **Required**: project must have files `package.json` and `package-lock.json`)

`npm install nodemon --save-dev`

- installing nodemon as `devDependencies`

## What is the Event Loop?

The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that a single JavaScript thread is used by default — by `offloading` operations to the system kernel whenever possible.

more info: https://dev.to/endeavourmonk/nodejs-event-loop-46oo

https://www.youtube.com/watch?v=PNa9OMajw9w&pp=ygUSZXZlbnQgbG9vcCBub2RlIGpz

https://www.course-api.com/slides.html
    
    