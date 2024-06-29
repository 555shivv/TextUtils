import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
         let newText=text.toUpperCase();
         setText(newText)
         props.showAlert("Converted to upperCase!","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("converted to lowerCase","success")
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("onchange was clicked");
        setText(event.target.value);
    }
    const [text,setText] =useState('Enter text here'); //array destructuring syntax
  return (
    <>
    <div  className="container" style={{color:props.mode==='dark'?'white': 'black'}}>

        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}id="mybox" rows="8"style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white': 'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
