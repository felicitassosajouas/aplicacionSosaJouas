import { createContext, useState } from "react"
const Notification = (message, severity) => {
    
    const notStyle = {
        position: 'absolute',
        top: 100,
        right: 5,
        width: 'auto',
        height: 'auto',
        backgroundColor: 'black',
        color: severity === 'error' ? 'red' : 'green',
        padding: '5px'
    }
    
    return (
        <div style={notStyle} className="rounded-pill">
            {message}
        </div>
    )
}

const NotContext = createContext()

export const NotProvider = ({children}) => {
    
    const [msgConf, setMsgConf] = useState({
        severity:'Success',
        message:'Mensaje de prueba'
    })

    const setNotification = (sev, msg, timeout) => {
        setMsgConf({severity: sev, message: msg})
        setTimeout(() => {
            setMsgConf({...msgConf, message:''})
        }, timeout * 1000)
    }
    
    return(
        <NotContext.Provider value={setNotification}>
            {/* si el mensaje está vacío no muestra nada */}
            {msgConf.message !== '' && <Notification message={msgConf.message} severity={msgConf.severity}/>}
            {children}
        </NotContext.Provider>
    )
}

export default NotContext