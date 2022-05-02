import { ProgressBar } from '../src';

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