import React, { useState } from "react"
import { SafeAreaView, Text, Button} from "react-native"
import style from "../styles/initialPage/StyleInitialPage"
import QRCodeScanner from "react-native-qrcode-scanner"
import { RNCamera } from "react-native-camera"

export default (props) => {
    
    const handleData = (data) => {
        props.setData(JSON.parse(data.data))
        props.page('INITIAL_PAGE')
    }

    return (
        <QRCodeScanner
            onRead={handleData}
            flashMode={RNCamera.Constants.FlashMode.off}
        />
    )
        
    

}