// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
export const CalculadoraScreen = () => {
  return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadopequeno}> 1,500.00 </Text>
            <Text style={styles.resultado}> 1,500.00 </Text>

            <View>
              {/* boton */}
              <View style={styles.boton}>
                <Text style={styles.botonTexto}>1</Text>
              </View>
            </View>
        </View>
  )
}
