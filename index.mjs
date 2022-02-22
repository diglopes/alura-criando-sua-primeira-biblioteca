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
    } finally {
        console.log(chalk.yellow("Execution ended!"));
    }
}

function promiseGenerator(bool) {
    return new Promise((resolve, reject) => {
        if(!bool) {
            reject("Failed!")
        }
        resolve("success")
    })
}

// console.log(await promiseGenerator(true))

const filepath = "./files/text1.md"
const invalidFilepath = "./files/inexistent.md"
console.log(chalk.green(await getFile(filepath)))