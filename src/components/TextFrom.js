import React,{useState} from 'react' //rfc

export default function TextFrom(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText='';
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
    // text="new text" //wrong way to change the state
    // setText="new text" //Right way to change the state
    return (
        <>
        <div className='container'style={{color:props.mode==='dark'?'white':'#0f0d28'}}>
           <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#0f0d28'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper case</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0f0d28'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length}  characters</p>
            <p>{0.008*text.split(" ").length}Minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
            

        </div>
        </>
    )
}
