import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const convertUpperCase = () => {
        let upperCase = text.toUpperCase()
        setText(upperCase)
        props.showAlert("Converterd to Upper case", "success")
    }
    const convertLowerCase = () => {
        let lowerCase = text.toLowerCase()
        setText(lowerCase)
        props.showAlert("Converterd to lower case", "success")
    }
    const capitalize = () => {
        let capitalize = [];
        let lowerCase = text.toLowerCase();
        lowerCase = lowerCase.split(" ")
        for (let i = 0; i < lowerCase.length; i++) {
            capitalize.push(lowerCase[i].charAt(0).toUpperCase() + lowerCase[i].slice(1))
        }
        capitalize = capitalize.join(" ")
        setText(capitalize)
        props.showAlert("Text Capilatize", "success")
    }
    const clearText = () => {
        setText("")
        props.showAlert("Text cleared", "success")
    }
    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success")
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[" "]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces cleared", "success")
    }
    const handelOnChange = (event) => {
        console.log("Handel on change")
        setText(event.target.value)
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
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={convertUpperCase} >Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={convertLowerCase} >Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={capitalize} >Capitalize Word</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={clearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleExtraSpace}>Clear Extra Space</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === "dark" ? "white" : "#505050" }}>
                <h2>Your Text summary</h2>
                <p>Total words {text.split(" ").filter((element=>{return element.length !== 0})).length} and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>
            </div>
            <section className="container" style={{ color: props.mode === "dark" ? "white" : "#505050" }}>
                <h2>Preview</h2>
                <p>{text.length === 0 ?"Enter something to preview it here" : text}</p>
            </section>
        </>
    )
}
