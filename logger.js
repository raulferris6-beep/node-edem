import chalk from 'chalk'
import fs from 'node:fs'

const fechaActual = () => {
  const fecha = new Date()
  const dos = (n) => String(n).padStart(2, '0')

  return `${fecha.getFullYear()}-${dos(fecha.getMonth() + 1)}-${dos(fecha.getDate())} ${dos(fecha.getHours())}:${dos(fecha.getMinutes())}:${dos(fecha.getSeconds())}`
}

const guardar = (linea) => {
  fs.appendFileSync('log.txt', linea + '\n')
}

export const info = (mensaje) => {
  const linea = `[${fechaActual()}] [INFO] ${mensaje}`
  console.log(chalk.blue(linea))
  guardar(linea)
}

export const warn = (mensaje) => {
  const linea = `[${fechaActual()}] [WARN] ${mensaje}`
  console.log(chalk.yellow(linea))
  guardar(linea)
}

export const error = (mensaje) => {
  const linea = `[${fechaActual()}] [ERROR] ${mensaje}`
  console.log(chalk.red(linea))
  guardar(linea)
}

export const debug = (mensaje) => {
  const linea = `[${fechaActual()}] [DEBUG] ${mensaje}`
  console.log(chalk.gray(linea))
  guardar(linea)
}
