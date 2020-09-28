import React, {useState} from "react"
import Form from "./Form";

function FormContainer() {

    /**
     * State handler
     */
    const [urlValue, setUrlValue] = useState("")
    const [sending, setSending] = useState(false)

    /**
     * Save the value from the textbox into the state
     * @param event
     */
    function onChange(event) {
        const {value} = event.target
        setUrlValue(value)
    }

    /**
     * Submit url to the backend for shortening
     * @param event
     */
    function onSubmit(event) {
        setSending(true)
        event.preventDefault()
        setTimeout(() => setSending(false), 1000)
    }

    return(
        <Form urlValue={urlValue} onChange={onChange} onSubmit={onSubmit} isSending={sending}/>
    )
}

export default FormContainer