
export function clear() {
    process.stdout.write('\x1Bc');
}
export * from './ProgressBar';