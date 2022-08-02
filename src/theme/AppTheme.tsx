import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20

  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end'
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    fontWeight: 'bold'

  },
  resultadopequeno: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
    fontWeight: 'bold'
  },

  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#9B9B9B',
    borderRadius: 100,
    justifyContent: 'center'
  },

  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  }

})
