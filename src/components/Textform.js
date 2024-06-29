import React, {useState} from 'react'


export default function Textform(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.displayAlert("Converted to uppercase", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.displayAlert("Converted to lowercase", "success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.displayAlert("Text copied on clipboard", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.displayAlert("Extra spaces removed", "success");
    }

    // created as exercise1 homework
    const handleTitleCase = ()=>{
        let newText = text;
        newText = text.toLowerCase(); //first changing into lowercase because directly title case was not happening
        newText = newText.replace(/\b\w/g, (newText) => newText.charAt(0).toUpperCase());
        setText(newText);
        props.displayAlert("Converted to title case", "success");
    }

    // created as exercise1 homework
    const handleAlternating = ()=>{
        let newText = " ";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText += text[i].toUpperCase();
              } else {
                newText += text[i].toLowerCase();
              }
        }
        setText(newText);
        props.displayAlert("Converted to alternating case", "success");
    }

    const handleClear = ()=>{
        let newText = '';
        setText(newText);
        props.displayAlert("All text cleared", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    //setText('new text here');

    //count number of words, without considering space and empty string
    const wordCounter = text.trim().split(/\s+/).filter(text => text !== '').length;
     

  return (
    <>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#212527'}}>
        <h2>Hey,</h2>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#a7a2a2':'#ededed', color: props.mode==='dark'?'white':'#212527'}} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <div className="">
            <button type="button" onClick={handleUpClick} className="btn btn-primary me-2 my-2">Convert to Uppercase</button>
            <button type="button" onClick={handleLoClick} className="btn btn-primary me-2 my-2">Convert to Lowercase</button>
            <button type="button" onClick={handleAlternating} className="btn btn-primary me-2 my-2">aLtERnaTinG CasE</button>
            <button type="button" onClick={handleTitleCase} className="btn btn-primary me-2 my-2">Title Case</button>
            <button type="button" onClick={handleCopy} className="btn btn-primary me-2 my-2">Copy Text</button>
            <button type="button" onClick={handleExtraSpaces} className="btn btn-primary me-2 my-2">Remove Extra Space</button>
            <button type="button" onClick={handleClear} className="btn btn-secondary me-2 my-2">Clear Text</button>
        </div>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#212527'}}>
        <h4>Your text summary</h4>
        <p>{wordCounter} words, {text.length} characters with spaces</p>
        <p>{0.008 * wordCounter} minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Write something to preview it here"}</p>
    </div>
    </>
  )
}
