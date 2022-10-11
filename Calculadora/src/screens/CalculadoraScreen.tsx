import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../themes/appTheme'
import { useCalculadora } from '../hooks/useCalculadora'


export const CalculadoraScreen = () => {

  const {
      numero,
      numeroAnterior,
      generateNumberString,
      clear,
      positivoNegativo,
      deleteNumber,
      btnDividir,
      btnMultiplicar,
      btnRestar,
      btnSumar,
      calcular
  } = useCalculadora();//USO DE TODAS LAS PROPIEDADES O FUNCIONES, VARIABLES DE useCalculadora

  return (
    <View style={styles.container}>
        <Text 
          style={styles.resultado}
          numberOfLines={1}
          adjustsFontSizeToFit
          >
            {numeroAnterior}
        </Text>
        <Text style={styles.smallResult}>
            {numero}
        </Text>

        {/* BOTONES */}
        {/* #2D2D2D gris oscuro */}
        {/* #FF9427 naranja */}
        {/* #9B9B9B gris claro */}
        <View style={styles.rows}>
            <BotonCalc text="C" background_color="#9B9B9B" action={clear}/>
            <BotonCalc text="+/-" background_color="#9B9B9B" action={positivoNegativo}/>
            <BotonCalc text="del" background_color="#9B9B9B" action={deleteNumber}/>
            <BotonCalc text="/" background_color="#FF9427" action={btnDividir}/>        
        </View>

        <View style={styles.rows}>
            <BotonCalc text="7" action={generateNumberString} />
            <BotonCalc text="8" action={generateNumberString}/>
            <BotonCalc text="9" action={generateNumberString}/>
            <BotonCalc text="X" background_color="#FF9427" action={btnMultiplicar}/>        
        </View>

        <View style={styles.rows}>
            <BotonCalc text="4" action={generateNumberString} />
            <BotonCalc text="5" action={generateNumberString} />
            <BotonCalc text="6" action={generateNumberString} />
            <BotonCalc text="-" background_color="#FF9427" action={btnRestar}/>        
        </View>

        <View style={styles.rows}>
            <BotonCalc text="1" action={generateNumberString} />
            <BotonCalc text="2" action={generateNumberString} />
            <BotonCalc text="3" action={generateNumberString} />
            <BotonCalc text="+" background_color="#FF9427" action={btnSumar}/>        
        </View>


        <View style={styles.rows}>
            <BotonCalc text="0" action={generateNumberString} width />
            <BotonCalc text="." action={generateNumberString} />
            <BotonCalc text="=" background_color="#FF9427" action={calcular}/>        
        </View>

    </View>
  )
}

/*
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/
