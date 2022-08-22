import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter Text here")
    const ConvertUpperCase= ()=>{
        let upperCase = text.toUpperCase()
        setText(upperCase)
    }
    const handelOnChange= (event)=>{
        console.log("Handel on change")
        setText(event.target.value)
    }

    return (
        <div className='container mt-5'>
            <div className="mb-5">
                <h1>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handelOnChange} rows="11"></textarea>
            </div>
            <button className="btn btn-primary" onClick={ConvertUpperCase} >Convert to Upper Case</button>
        </div>
    )
}
