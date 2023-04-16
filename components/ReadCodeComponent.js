import React, { useState } from "react"
import { SafeAreaView, Text, Button} from "react-native"
import style from "../styles/initialPage/StyleInitialPage"

export default (props) => {


    const changePage = () => {
        props.page('INITIAL_PAGE')
    }
    
    const barcodeRecognized = () => {
        console.warn("BAR CODE RECONIZED")
    }

    return (
            <Text>LER QR CODE</Text>
    )
        
    

}