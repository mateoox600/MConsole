const { clear, ProgressBar } = require('../build');

const progressBar = new ProgressBar(120, 10, '[{progressBar}] {progress}/{max}');

clear();
progressBar.start();

const interval = setInterval(() => {
    progressBar.update(progressBar.getProgress() + 1);

    if(progressBar.finished) {
        progressBar.stop();
        clearInterval(interval);
        console.log('finished');
    }
}, 10);