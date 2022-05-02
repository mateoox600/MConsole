import { cursorTo, clearLine } from 'readline';

export class ProgressBar {

    private started = false;

    constructor(private max: number, private progress: number = 0, private template: string = '[{progressBar}] {progress}/{max}') { }

    public getMax() : number {
        return this.max;
    }

    public getProgress() : number {
        return this.progress;
    }

    public update(progress: number) {
        this.progress = progress;
        this.print();
    }

    public get finished() {
        return this.progress >= this.max;
    }

    public start() {
        process.stdout.write('\x1B7');
        process.stdout.write('\x1B[?25l');
        this.started = true;
        this.print();
    }

    private print() {
        if(!this.started) return;
        const percent = Math.max(Math.min(Math.round(100 * (this.progress / this.max)), 100), 0);
        if(this.finished) return this.stop();
        const progressBar = '█'.repeat(percent) + '-'.repeat(100 - percent);
        const bar = this.template
            .replace(/\{progress\}/gm, this.progress.toString())
            .replace(/\{max\}/gm, this.max.toString())
            .replace(/\{progressBar\}/gm, progressBar);
        cursorTo(process.stdout, 0);
        process.stdout.write(bar);
        clearLine(process.stdout, 1);
    }

    public stop() {
        process.stdout.write('\x1B[?25h');
        process.stdout.write('\x1B8');
        process.stdout.write('\n');
        this.started = false;
    }

}