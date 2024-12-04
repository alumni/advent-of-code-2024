import { isEmpty } from 'radashi';
import { runSolution } from '../utils.ts';

const PATTERN_POSITIONS = [
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
];

const VALID_PATTERNS = ['SSAMM', 'MMASS', 'MSAMS', 'SMASM'];

/** provide your solution as the return of this function */
export async function day4b(data: string[]) {
    const a = data.filter((line) => !isEmpty(line));
    let count = 0;

    for (let i = 0; i < a.length - 2; i++) {
        for (let j = 0; j < a[i].length - 2; j++) {
            const pattern = PATTERN_POSITIONS.map(([di, dj]) => a[i + di][j + dj]).join('');
            if (VALID_PATTERNS.includes(pattern)) {
                count++;
            }
        }
    }

    return count;
}

await runSolution(day4b);
