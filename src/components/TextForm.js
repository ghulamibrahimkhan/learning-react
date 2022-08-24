import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const convertUpperCase = () => {
        let upperCase = text.toUpperCase()
        setText(upperCase)
    }
    const convertLowerCase = () => {
        let lowerCase = text.toLowerCase()
        setText(lowerCase)
    }
    const clearText = () => {
        setText("")
    }
    const handelOnChange = (event) => {
        console.log("Handel on change")
        setText(event.target.value)
    }
    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[" "]+/)
        setText(newText.join(" "))
    }

    return (
        <>
            <div className='container mt-5'>
                <div className="mb-4">
                    <h1 style={{ color: props.mode === "dark" ? "white" : "#505050" }}>{props.heading}</h1>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: props.mode === "dark" ? "white" : "#505050" }}>{props.label}
                    </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{ backgroundColor: props.mode === "dark" ? "#505050" : "white", color: props.mode === "dark" ? "white" : "#505050" }} onChange={handelOnChange} rows="11"></textarea>
                </div>
                <button className="btn btn-primary" onClick={convertUpperCase} >Convert to Upper Case</button>
                <button className="btn btn-primary mx-2" onClick={convertLowerCase} >Convert to Lower Case</button>
                <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary" onClick={handleExtraSpace}>Clear Extra Space</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === "dark" ? "white" : "#505050" }}>
                <h2>Your Text summary</h2>
                <p>Total words {text.split(" ").length} and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>
            </div>
            <section className="container" style={{ color: props.mode === "dark" ? "white" : "#505050" }}>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Enter something to preview it here" : text}</p>
            </section>
        </>
    )
}
