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
        fontSize: 65                     
    },      
    buttonIcon: {
        width: 70,
        height: 70,
        backgroundColor: "#005285",
        borderRadius: 15

    }, 
    textReadCode: {
        fontSize: 12,
    },
    inputsView: {
        flexDirection: "column",
        marginLeft: 12,
        marginRight: 12
    },
    input: {
        alignItems: "flex-start",
        alignContent: "flex-start",
        backgroundColor: "#f2f5fa",
        fontSize: 12,
        borderRadius: 5,
        height: 35
    }
})

export default style