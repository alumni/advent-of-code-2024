import { inRange, isEmpty } from 'radashi';
import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
    const reports = data.filter((line) => !isEmpty(line)).map((line) => line.split(/\s+/).map(Number));

    return reports.reduce((count, report) => {
        const isAscending = report.every((level, index, array) => {
            return index === 0 || inRange(level - array[index - 1], 1, 4);
        });

        const isDescending = report.every((level, index, array) => {
            return index === 0 || inRange(array[index - 1] - level, 1, 4);
        });

        return isAscending || isDescending ? count + 1 : count;
    }, 0);
}

await runSolution(day2a);
