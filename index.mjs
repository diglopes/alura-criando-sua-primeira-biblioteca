import chalk from 'chalk'
import { readFile } from 'fs'
import { promisify } from 'util';

const readFilePromisified = promisify(readFile)

async function getFile(filepath) {
    const encoding = "utf-8"
    const file = await readFilePromisified(filepath, { encoding })
    return file
}

const filepath = "./files/text1.md"
console.log(chalk.green(await getFile(filepath)))