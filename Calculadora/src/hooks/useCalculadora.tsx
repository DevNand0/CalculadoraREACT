import { useRef, useState } from "react";

enum operadores {
    sumar,restar,multiplicar,dividir
}

export const useCalculadora = () => {
    
    const [numeroAnterior, setStateNumeroAnterior] = useState("0");
    const [numero, setStateNumero] = useState("0");

    const operacion = useRef<operadores>();
    
    const clear = ()=>{
        setStateNumero("0");
        setStateNumeroAnterior('0');
    }

    const generateNumberString = (numberText:string)=>{
        //NO ACEPTAR DOBLE PUNTO
        //valida si el texto incluye un caracter en especifico -
        if(numero.includes('.') && numberText ==='.') return;
        //valida si el texto empieza con un(os) caracter especifico -0 o 0
        if(numero.startsWith('0') || numero.startsWith('-0')){
            if(numberText === '.'){
            setStateNumero(numero+numberText);
            //valida si tiene otro 0 y hay un .
            }else if(numberText === '0' && numero.includes('.')){
            setStateNumero(numero+numberText);
            //valida si es diferente de 0 y no tiene punto
            }else if(numberText!=='0' && !numero.includes('.')){
            //reemplaza 0 que esta en el inicio por el numero inicialmente tocado
            setStateNumero(numberText);
            }else if(numberText==='0' && !numero.includes('.')){
            setStateNumero(numero);
            }else{
            setStateNumero(numero+numberText);
            }
        }else{
        setStateNumero(numero+numberText);
        }
        
    }

    const deleteNumber = ()=>{
        if(numero.length==1){
        setStateNumero('0');
        }else if(numero.startsWith('-') && numero.length==2){
        setStateNumero('0');
        }else if(numero.length>1){
        setStateNumero(numero.slice(0,-1));//se va removiendo el ultimo elemento de mi string
        }
        /*
        //segun el tutorial
        let negativo = '';
        let numeroTemp = numero;
        if(numero.includes('-')){
            negativo = '-';
            numeroTemp = numero.substring(1);
        }
        if(numeroTemp.length>1){
            setStateNumero(negativo + numeroTemp.slice(0,-1));
        }else{
            setStateNumero('0');
        }
        */
        
    }

    const cambiarNumPorAnterior = () =>{
        if(numero.endsWith('.')){
        setStateNumeroAnterior(numero.slice(0,-1));
        }else{
        setStateNumeroAnterior(numero);
        }
        setStateNumero('0');
    }

    //seccion de calculos matematicos
    const btnDividir=()=>{
        cambiarNumPorAnterior();
        operacion.current = operadores.dividir;
    }

    const btnMultiplicar=()=>{
        cambiarNumPorAnterior();
        operacion.current = operadores.multiplicar;
    }

    const btnRestar=()=>{
        cambiarNumPorAnterior();
        operacion.current = operadores.restar;
    }

    const btnSumar=()=>{
        cambiarNumPorAnterior();
        operacion.current = operadores.sumar;
    }

    const calcular = ()=>{
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        switch(operacion.current){
        case operadores.sumar:
            setStateNumero(`${num1+num2}`);
            break;
        case operadores.restar:
            setStateNumero(`${num2-num1}`);
            break;
        case operadores.multiplicar:
            setStateNumero(`${num1*num2}`);
            break;
        case operadores.dividir:
            setStateNumero(`${num2/num1}`);
            break;  
        }
        setStateNumeroAnterior('0');
    }

    const positivoNegativo = ()=>{
        if(numero.includes('-')){
        setStateNumero(numero.replace("-",''));
        }else{
        setStateNumero('-'+numero);
        }
    }

    return{
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
    }
}
