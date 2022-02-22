import chalk from 'chalk'
import { readFile } from 'fs/promises'

function errorHandler(error) {
    console.log(chalk.red("There was an error:", error.message))
    return null
}

async function getFile(filepath) {
    const encoding = "utf-8"
    try {
        const file = await readFile(filepath, { encoding })
        return file
    } catch (error) {
        errorHandler(error)
        return null
    }
}

const filepath = "./files/text1.md"
const invalidFilepath = "./files/inexistent.md"
console.log(chalk.green(await getFile(invalidFilepath)))