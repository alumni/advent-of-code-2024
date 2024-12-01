import { runSolution } from '../utils.ts';
import { isEmpty, unzip, zip } from 'radashi';

/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
    const [a, b] = unzip(
        data.filter((line) => !isEmpty(line)).map((line) => line.split(/\s+/).map(Number) as [number, number]),
    );
    const sortedData = zip(a.sort(), b.sort());

    return sortedData.reduce((sum, [a, b]) => sum + Math.abs(a - b), 0);
}

await runSolution(day1a);
