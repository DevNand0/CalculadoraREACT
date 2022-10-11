import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appTheme';

//creaccion de interface para la propiedades que se usan en la etiqueta creada de BotonCalc
interface Props{
    text:string;
    background_color?:string;//color opcional
    width?:boolean;
    action: (numberText: string)=>void;
}


export const BotonCalc = ({text, background_color='#2D2D2D',width=false, action}:Props) => {
  return (
    <TouchableOpacity onPress={()=>action(text)} >
        <View style={{
                ...styles.button, 
                backgroundColor:background_color,
                width:(width)?180:80
            }}>
            <Text style={{
                ...styles.textButton,
                color:(background_color==='#9B9B9B')?'black':'white'
                }}> {text} </Text>
        </View>
    </TouchableOpacity>
  )
}

