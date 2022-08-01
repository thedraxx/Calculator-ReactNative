// eslint-disable-next-line no-use-before-define
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/AppTheme'

const App = () => {
  return (
  <SafeAreaView style={styles.fondo}>
    <StatusBar
      backgroundColor={'#000000'}
      barStyle="light-content"
    />
    <CalculadoraScreen />
  </SafeAreaView>
  )
}

export default App
