import React from "react"

function Form(props) {

    const buttonText = props.isSending === true ? 'Shortening...' : 'Shorten!'
    const buttonClass = props.isSending === true ? 'sending' : ''
    let resultBox = props.shortLink !== '' ? <div id="result">
        <p>Short Link:</p>
        <a href={props.shortLink} target="_blank" rel="noopener noreferrer">{props.shortLink}</a>
    </div> : '';

    return (
        <div id="form-container">
            <h1>Super simple URL Shortener</h1>
            <form onSubmit={props.onSubmit}>
                <input type="text" name="url" onChange={props.onChange} autoComplete="off"/>
                <button className={buttonClass}>{buttonText}</button>
            </form>
            {resultBox}
        </div>
    )
}

export default Form