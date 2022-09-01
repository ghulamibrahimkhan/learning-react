// import React, { useState } from 'react'




export default function About(props) {
    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    // const [style, setStyle] = useState({
    //     color : "black",
    //     backgroundColor : "white"
    // })

    // const changeMode = ()=>{
    //     if(style.color === "black"){
    //         setBtnText("Enable Light Mode")
    //         setStyle({
    //             color : "white",
    //             backgroundColor : "black"
    //         })
    //     }
    //     else if (style.color === "white") {
    //         setBtnText("Enable Dark Mode")
    //         setStyle({
    //             color : "black",
    //             backgroundColor : "white"
    //         })
    //     }
    // }

    const newStyle = {
        backgroundColor: props.mode === "light" ? "white" : "#505050",
        color: props.mode === "dark" ? "white" : "black"
    }

    return (
        <>
        <div style={newStyle}>
            <div className="border border-primary m-5 rounded" style={{backgroundColor: props.mode === "light" ? "white" : "#282828"}}>
                <div className="jumbotron container">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    {/* <p className="lead">
                    <button onClick={changeMode} type='button' className="btn btn-primary">{btnText}</button>
                </p> */}
                </div>
            </div>
            </div>
        </>
    )
}
