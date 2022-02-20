import chalk from 'chalk'

console.log(chalk.blueBright("Vamos começar!"));

const danger = chalk.red.bold.underline

console.log(`
CPU: ${danger('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log(chalk.hex("#777").bold("Hello world!"))