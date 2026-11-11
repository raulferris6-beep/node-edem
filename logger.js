const fechaActual = () => {
  const fecha = new Date()
  const dos = (n) => String(n).padStart(2, '0')

  return `${fecha.getFullYear()}-${dos(fecha.getMonth() + 1)}-${dos(fecha.getDate())} ${dos(fecha.getHours())}:${dos(fecha.getMinutes())}:${dos(fecha.getSeconds())}`
}

export const info = (mensaje) => {
  console.log(`[${fechaActual()}] [INFO] ${mensaje}`)
}

export const warn = (mensaje) => {
  console.log(`[${fechaActual()}] [WARN] ${mensaje}`)
}

export const error = (mensaje) => {
  console.log(`[${fechaActual()}] [ERROR] ${mensaje}`)
}

export const debug = (mensaje) => {
  console.log(`[${fechaActual()}] [DEBUG] ${mensaje}`)
}
