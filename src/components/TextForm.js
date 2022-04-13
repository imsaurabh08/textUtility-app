import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState(" ");
    const handleupclick = () => {
        //    console.log("Uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        
        setText(newtext);
        props.showalert("Converted to upperCase","success");
     
    };
    const handleLoclick = () => {
        //    console.log("Uppercase was clicked"+text);
        let newtext = text.toLowerCase();

        setText(newtext);
        props.showalert("Converted to LowerCase","success");

    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleclear = () => {
        setText("");
        props.showalert("Text area is cleared","success");

    }




    return (
        <>
            <div className="container" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div classname="mb-3" >
                    <textarea class="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}  value={text} onChange={handleOnChange} rows="5"></textarea>
                </div>
                <div className="container my-3"         >
                    <button className="btn btn-info mx-3 " onClick={handleupclick} style={{backgroundColor:'#187890'}} >

                        ToUpperCase
                    </button>
                    <button className="btn btn-info mx-3 " onClick={handleLoclick} style={{backgroundColor:'#187890'}}>

                        <b>ToLowerCase</b>
                    </button>
                    <button className="btn btn-info mx-3 " onClick={handleclear } style={{backgroundColor:'#187890'}}>

                        Clear Screen
                    </button>

                </div>
            </div>
            <div className="container " style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p >{text.split(".").length - 1} sentences</p>

                <p >{text.split(" ").length - 1} words</p>
                <p>{text.length} character</p>
                <p>{text.split(" ").length * 0.008} minutes reading time</p>
            </div>

            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Preview</h1>
                <p>{text.length>1?text:'Write something to preview it here'}</p>
            </div>

        </>
    );
}