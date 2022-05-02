# **MConsole**

Npm package for console utilities.

---
## Features
 - Progress bar
---
## Installation
```console
npm install @mateoox600/m-console
```
 - Typescript is supported and types comes with the installation
---
## Usage
```js
const { ProgressBar } = require('@mateoox600/m-console');

const progressBar = new ProgressBar(120, 10, '[{progressBar}] {progress}/{max}');

progressBar.start();

const interval = setInterval(() => {
    progressBar.update(progressBar.getProgress() + 1);

    if(progressBar.finished) {
        progressBar.stop();
        clearInterval(interval);
        console.log('finished');
    }
}, 10);
```
---
## Docs
### ProgressBar
 - Takes three args:
    - `max` the max value of the progressBar
    - `progress` the default start progress
    - `format` the format of the bar in the console
 - You need to `.start()` the bar before being able to use it
 - The bar automaticly stops when reaching the bar max
 - An automatic redraw is done when you update the bar
 - `getProgress()` and `getMax()` can be used to get the progress and max value of the bar
 - The `finished` value return if the bar progress is >= to the bar max