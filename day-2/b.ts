import { isEmpty, inRange } from 'radashi';
import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day2b(data: string[]) {
    const reports = data.filter((line) => !isEmpty(line)).map((line) => line.split(/\s+/).map(Number));

    return reports.reduce((count, report) => {
        const diffs = report.reduce((acc, level, index, array) => {
            if (index === 0) {
                return acc;
            }

            acc.push(level - array[index - 1]);

            return acc;
        }, [] as number[]);

        for (const factor of [-1, 1]) {
            const isValid = (value) => inRange(value * factor, 1, 4);
            const outOfRangeIndices = [];
            const n = diffs.length;

            for (let i = 0; i < n; i++) {
                if (!isValid(diffs[i])) {
                    outOfRangeIndices.push(i);
                    if (outOfRangeIndices.length > 2 || outOfRangeIndices[0] < i - 1) break;
                }
            }

            switch (outOfRangeIndices.length) {
                case 0:
                    return count + 1;
                case 1: {
                    const [i] = outOfRangeIndices;

                    if (
                        i !== 0 &&
                        i !== n - 1 &&
                        !isValid(diffs[i - 1] + diffs[i]) &&
                        !isValid(diffs[i] + diffs[i + 1])
                    ) {
                        break;
                    }

                    return count + 1;
                }
                case 2: {
                    const [i, j] = outOfRangeIndices;

                    if (j !== i + 1 || !isValid(diffs[i] + diffs[j])) {
                        break;
                    }

                    return count + 1;
                }
                default:
                    break;
            }
        }

        return count;
    }, 0);
}

await runSolution(day2b);
