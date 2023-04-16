import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    viewReadQr: {        
        marginTop: 70,
        marginBottom: 35
    },
    fieldsView: {       
        flexWrap: "wrap",
        alignSelf: 'flex-start',
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 15
    },
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: "relative",
        justifyContent: "flex-start",
        backgroundColor: '#fff',
        flex: 1
    },
    icon: {        
        color: "#ffffff",
        margin: 10,        
        fontSize: 85                     
    },      
    buttonIcon: {
        width: 88,
        height: 95,
        backgroundColor: "#005285",
        borderRadius: 15

    }, 
    textReadCode: {
        fontSize: 20,
    },
    inputsView: {
        flexDirection: "column",
        marginLeft: 20,
        marginRight: 20
    },
    input: {
        marginTop: 5,
    }
})

export default style