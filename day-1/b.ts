import { counting, isEmpty, unzip } from 'radashi';
import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day1b(data: string[]) {
    const [a, b] = unzip(
        data.filter((line) => !isEmpty(line)).map((line) => line.split(/\s+/).map(Number) as [number, number]),
    );

    const counts = counting(b, (value) => value);

    return a.reduce((sum, value) => sum + value * (counts[value] ?? 0), 0);
}

await runSolution(day1b);
