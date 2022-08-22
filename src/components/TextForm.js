import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter Text here")
    const convertUpperCase= ()=>{
        let upperCase = text.toUpperCase()
        setText(upperCase)
    }
    const convertLowerCase = ()=>{
        let lowerCase = text.toLowerCase()
        setText(lowerCase)
    }
    const handelOnChange= (event)=>{
        console.log("Handel on change")
        setText(event.target.value)
    }

    return (
        <>
        <div className='container mt-5'>
            <div className="mb-4">
                <h1>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handelOnChange} rows="11"></textarea>
            </div>
            <button className="btn btn-primary" onClick={convertUpperCase} >Convert to Upper Case</button>
            <button className="btn btn-primary mx-3" onClick={convertLowerCase} >Convert to Lower Case</button>
        </div>
        <div className="container my-4">
            <h2>Your Text summary</h2>
            <p>Total words {text.split(" ").length} and {text.length} characters</p>    
            <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        </div>
        <section className="container">
            <h2>Preview</h2>
            <p>{text}</p>
        </section>
        </>
    )
}
