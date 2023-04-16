import React, { useState } from "react"
import {SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import style from "../styles/initialPage/StyleInitialPage"

export default (props) => {

    const[documento, setDocumento] = useState(props.data)

    
    const changePage = () => {
        props.page('READ_QR')
    }

    return (
            <SafeAreaView style={style.container}>
                <SafeAreaView style={style.viewReadQr}>   
                    <TouchableOpacity onPress={changePage} style={style.buttonIcon}>
                        <Icon name="qrcode" style={style.icon}></Icon>
                    </TouchableOpacity>
                    <Text style={style.textReadCode}>            
                        Ler código
                    </Text>                                
                </SafeAreaView>
                <SafeAreaView style={style.fieldsView}>
                    <SafeAreaView style={style.inputsView}>
                        <Text style={style.textReadCode}>            
                            Chave do Documento
                        </Text> 
                        <TextInput
                            style={style.input}
                            placeholder="Chave Documento"
                            value={documento.chaveDocumento}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={style.fieldsView}>
                    <SafeAreaView style={style.inputsView}>
                        <Text style={style.textReadCode}>            
                            N° Doc.
                        </Text> 
                        <TextInput
                            style={style.input}
                            placeholder="Número Doc."
                            value={documento.numero}
                        />
                    </SafeAreaView>
                    <SafeAreaView style={style.inputsView}>
                        <Text style={style.textReadCode}>            
                            Série
                        </Text> 
                        <TextInput
                            style={style.input}
                            placeholder="Série"
                            value={documento.serie}
                        />
                    </SafeAreaView>
                    <SafeAreaView style={style.inputsView}>
                        <Text style={style.textReadCode}>            
                            Data Emissão
                        </Text> 
                        <TextInput
                            style={style.input}
                            placeholder="Data Emissão"
                            value={documento.dataEmissao}
                        />
                    </SafeAreaView>
                </SafeAreaView>                   
            </SafeAreaView>
    )


}