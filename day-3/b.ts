import { runSolution } from '../utils.ts';

const FORMULA_REGEX = /mul\((\d+),(\d+)\)/g;

/** provide your solution as the return of this function */
export async function day3b(data: string[]) {
    const text = data.join('\n');
    let sum = 0;
    let position = (FORMULA_REGEX.lastIndex = 0);

    while (position < text.length) {
        let stop = text.indexOf("don't()", FORMULA_REGEX.lastIndex);
        if (stop < 0) stop = text.length;

        while (FORMULA_REGEX.lastIndex <= stop) {
            const match = FORMULA_REGEX.exec(text);
            if (!match) {
                position = text.length;
                break;
            }
            if (FORMULA_REGEX.lastIndex <= stop) {
                sum = sum + Number(match[1]) * Number(match[2]);
            }
        }
        position = FORMULA_REGEX.lastIndex = text.indexOf('do()', stop);
        if (position < 0) break;
    }

    return sum;
}

await runSolution(day3b);
