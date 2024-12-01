import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function runSolution<T>(solution: (data: string[]) => T) {
    const data = await readData();
    const answer = await solution(data);
    console.log('Your Answer:', answer);
}

export async function readData() {
    const [, fullPath, dataSet] = process.argv as [string, string, string] | [string, string];
    const puzzle = fullPath.split('/').slice(-2).join('/');
    const [day, part] = puzzle.split('/').map((x, i) => (i === 0 ? +x.split('-')[1] : x)) as [number, 'a' | 'b'];
    const fileName = createFileName(day, part, dataSet);
    const data = (await readFile(fileName)).toString().split('\n');
    return data;
}

function createFileName(day: number, part: 'a' | 'b', dataSet?: string) {
    return join(`day-${day}`, `${part}.data${dataSet ? `.${dataSet}` : ''}.txt`);
}
