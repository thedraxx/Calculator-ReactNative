import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 10

  },
  calculadoraContainer: {
    paddingHorizontal: 0,
    flex: 1,
    justifyContent: 'flex-end'
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    fontWeight: 'bold',
    marginBottom: 10
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
    justifyContent: 'center',
    marginHorizontal: 10
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },

  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  }

})
