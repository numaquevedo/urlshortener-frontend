import React from "react"

function Form(props) {

    const buttonText = props.isSending === true ? 'Shortening...' : 'Shorten!'
    const buttonClass = props.isSending === true ? 'sending' : ''

    return(
        <form onSubmit={props.onSubmit}>
            <div>
                <p>Enter URL to be shortened:</p>
                <input type="text" name="url" onChange={props.onChange} autoComplete="off"/>
            </div>
            <button className={buttonClass}>{buttonText}</button>
        </form>
    )
}

export default Form