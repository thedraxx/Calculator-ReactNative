/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react'

enum Operadores {
    suma, resta, multiplicacion, division
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0')
  const [numeroAnterior, setNumeroAnterior] = useState('0')

  const ultimaOperacion = useRef<Operadores>()

  const limpiar = () => {
    setNumero('0')
    setNumeroAnterior('0')
  }

  const btnDelete = () => {
    if (numero.length > 1) setNumero(numero.slice(0, -1))
    else setNumero('0')
  }

  const cambiarNumero = () => {
    if (numero.endsWith('.')) {
      setNumero(numero.slice(0, -1))
    } else {
      setNumeroAnterior(numero)
    }
    setNumero('0')
  }

  const btnDividir = () => {
    cambiarNumero()
    ultimaOperacion.current = Operadores.division
  }

  const btnmultiplicar = () => {
    cambiarNumero()
    ultimaOperacion.current = Operadores.multiplicacion
  }

  const btnRestar = () => {
    cambiarNumero()
    ultimaOperacion.current = Operadores.resta
  }

  const btnSumar = () => {
    cambiarNumero()
    ultimaOperacion.current = Operadores.suma
  }

  const armarNumero = (numeroText: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroText === '.') return
    //  Si el numero es cero o -0
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto Decimal, lo agregamos despues del 0
      if (numeroText === '.') {
        setNumero(numero + numeroText)
      } else if (numeroText === '0' && numero.includes('.')) {
        // Evaluar si es otro cero y hay punto
        setNumero(numero + numeroText)
      } else if (numeroText !== '0' && !numero.includes('.')) {
        // Evaluar si es diferente de cero y no tiene punto
        setNumero(numeroText)
      } else if (numeroText === '0' && !numero.includes('.')) {
        // Evitar el 0.0000
        setNumero(numero)
      }
    } else {
      setNumero(numero + numeroText)
    }
  }

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''))
    } else {
      setNumero('-' + numero)
    }
  }

  const calcular = () => {
    const num1 = Number(numero)
    const num2 = Number(numeroAnterior)

    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setNumero(`${num2 + num1}`)
        break
      case Operadores.resta:
        setNumero(`${num2 - num1}`)
        break
      case Operadores.multiplicacion:
        setNumero(`${num2 * num1}`)
        break
      case Operadores.division:
        setNumero(`${num2 / num1}`)
        break
    }
    setNumeroAnterior('0')
  }

  return {
    limpiar,
    btnDelete,
    btnDividir,
    btnmultiplicar,
    btnRestar,
    btnSumar,
    armarNumero,
    positivoNegativo,
    calcular,
    numero,
    numeroAnterior

  }
}
