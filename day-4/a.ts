import { isEmpty, list } from 'radashi';
import { runSolution } from '../utils.ts';

const INCREMENTS = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
];
const SEARCH = 'XMAS';

/** provide your solution as the return of this function */
export async function day4a(data: string[]) {
    const a = data.filter((line) => !isEmpty(line));
    let count = 0;

    const get = (i, j) => {
        const row = i >= 0 ? a.at(i) : null;
        const cell = j >= 0 ? row?.at(j) : null;

        return cell ?? '';
    };

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            for (const [di, dj] of INCREMENTS) {
                const word = list(0, 3, (k) => get(i + k * di, j + k * dj)).join('');
                if (word === SEARCH) {
                    count++;
                }
            }
        }
    }

    return count;
}

await runSolution(day4a);
