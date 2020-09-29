import React, {useState} from "react"
import Form from "./Form";
const axios = require('axios')

function FormContainer() {

    /**
     * State handler
     */
    const [urlValue, setUrlValue] = useState("")
    const [sending, setSending] = useState(false)
    const [shortLink, setShortLink] = useState("")

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

        // Prevent the form from being submitted
        event.preventDefault()

        // Show the button as 'Shortening...'
        setSending(true)

        // Hide any other link that might be displayed
        setShortLink('')

        // Figure out the endpoint variable
        const endpointUrl = process.env.REACT_APP_BITLY_API_DOMAIN + '/v4/shorten'

        // Build the axios object
        const axiosObject = axios.create({
            headers: {
                'Authorization': 'Bearer ' + process.env.REACT_APP_BITLY_ACCESS_TOKEN,
                'Content-Type': 'application/json'
            }
        })

        // Post to bitly and handle the response
        axiosObject.post(endpointUrl, {
            'long_url': urlValue,
            'domain': 'bit.ly'
        }).then(response => {

            // Set state to contain the url
            setShortLink(response.data.link)

        }).catch(error => {

            // TODO better error handling
        })

        // Restore the status of the button to show 'Shorten'
        setSending(false)
    }

    return(
        <Form urlValue={urlValue} onChange={onChange} onSubmit={onSubmit} isSending={sending} shortLink={shortLink}/>
    )
}

export default FormContainer