import { runSolution } from '../utils.ts';

const FORMULA_REGEX = /mul\((\d+),(\d+)\)/g;

/** provide your solution as the return of this function */
export async function day3a(data: string[]) {
    const text = data.join('\n');

    return [...text.matchAll(FORMULA_REGEX)].reduce((sum, match) => {
        return sum + Number(match[1]) * Number(match[2]);
    }, 0);
}

await runSolution(day3a);
