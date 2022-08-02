// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Text, View } from 'react-native'
import { BotonCal } from '../components/BotonCal'
import { useCalculadora } from '../hooks/useCalculadora'

import { styles } from '../theme/AppTheme'

export const CalculadoraScreen = () => {
  const {
    limpiar,
    btnDelete,
    btnDividir,
    btnmultiplicar,
    btnRestar,
    btnSumar,
    armarNumero,
    positivoNegativo,
    calcular,
    numeroAnterior,
    numero
  } = useCalculadora()

  return (
      <View style={styles.calculadoraContainer}>
        {
          numeroAnterior !== '0' && <Text style={styles.resultadopequeno}> {numeroAnterior} </Text>
        }

        <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit> {numero} </Text>

        <View style={styles.fila}>
          {/* Fila Botones */}
          <BotonCal texto={'c'} color='#9b9b9b' accion={limpiar} />
          <BotonCal texto={'+/-'} color='#9b9b9b' accion={positivoNegativo} />
          <BotonCal texto={'del'} color='#9b9b9b' accion={btnDelete} />
          <BotonCal texto={'/'} color='#FF9427' accion={btnDividir} />
        </View>

        <View style={styles.fila}>
          {/* Fila Botones */}
          <BotonCal texto={'7'} accion={armarNumero} />
          <BotonCal texto={'8'} accion={armarNumero} />
          <BotonCal texto={'9'} accion={armarNumero} />
          <BotonCal texto={'X'} color='#FF9427' accion={btnmultiplicar} />
        </View>

        <View style={styles.fila}>
          {/* Fila Botones */}
          <BotonCal texto={'4'} accion={armarNumero} />
          <BotonCal texto={'5'} accion={armarNumero} />
          <BotonCal texto={'6'} accion={armarNumero} />
          <BotonCal texto={'-'} color='#FF9427' accion={btnRestar} />
        </View>

        <View style={styles.fila}>
          {/* Fila Botones */}
          <BotonCal texto={'1'} accion={armarNumero} />
          <BotonCal texto={'2'} accion={armarNumero} />
          <BotonCal texto={'3'} accion={armarNumero} />
          <BotonCal texto={'+'} color='#FF9427' accion={btnSumar} />
        </View>

        <View style={styles.fila}>
          {/* Fila Botones */}
          <BotonCal texto={'0'} accion={armarNumero} ancho />
          <BotonCal texto={'.'} accion={armarNumero} />
          <BotonCal texto={'='} color='#FF9427' accion={calcular} />
        </View>
      </View>
  )
}
