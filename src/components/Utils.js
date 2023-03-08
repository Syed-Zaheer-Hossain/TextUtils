import React,{useState} from 'react';

export default function Utils(props) {
    let clk = document.getElementById("textarea");


    // const [mystyle, setmystyle] = useState({
    //     color: 'black', backgroundColor: 'white'
    // });
    const [text, settext] = useState("");
    const handleChange = (event) => {
        // clk.style.textTransform="lowercase";
        // settext("hello this is zaheer");
        settext(event.target.value);
        console.log("handled on change")
    }
    const handleUpClick = () => {
        console.log("this is clicked")
        if (clk.style.textTransform === "uppercase") {
            clk.style.textTransform = "lowercase";
            props.showAlert("Converted to LowerCase","Success");
        } else {
            clk.style.textTransform = "uppercase";
            props.showAlert("Converted to UpperCase","Success");
        }
    }
    
    const handleSpace=()=>{
        // document.getElementById("textarea").value={text};
        let newText=text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Removed Extra Spaces","Success");
    }
    
    const handleCopy=()=>{
        let copied=document.getElementById("textarea");
        copied.select();
        if(clk.style.textTransform ==="uppercase"){
            navigator.clipboard.writeText(copied.value.toUpperCase());
        }
        else if(clk.style.textTransform ==="lowercase"){
            navigator.clipboard.writeText(copied.value.toLowerCase());
        }
        else if(clk.style.textTransform ==="capitalize"){
            let words=text.split(" ");
            for(let i=0; i<words.length; i++){
                words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
            }
            navigator.clipboard.writeText(words.join(" "))
            settext(words.join(" "));
            console.log(words);
        }
        else{
            navigator.clipboard.writeText(copied.value);
        }
        props.showAlert("Text Copied","Success");
    }
    
    const handleClear=()=>{
        settext("");
        props.showAlert("Text Cleared Succesfully","Success");
    }
    
    const handleCapClick=()=>{
        clk.style.textTransform="capitalize";
        props.showAlert("First Letter of All words converted to capitals","Success");
    } 
    
    return (
        <div className='size'>
            <div /*style={mystyle}*/className={`bg-${props.bgmode}`}>
                <div id="utilities" className={`bg-${props.bgmode}`}>
                    <h1>Use this Website to Modify your Text</h1>
                    <textarea id="textarea" value={text} onChange={handleChange}></textarea>
                    <div className="butn">
                        <button className="cap" onClick={handleUpClick}>Convert Case</button>
                        <button className="cap" onClick={handleCapClick}>Make first letter capital</button>
                        <button className="cap" onClick={handleClear}>Clear Text</button>
                        <button className="cap" onClick={handleSpace}>remove extra spaces</button>
                        <button className="cap" onClick={handleCopy}>copy written text</button>
                    </div>
                    
                </div>
                <div>
                    <h1>preview</h1>
                    <p>{text}</p>
                    <p>{text.split(" ").length} word, {text.length} characters</p>
                </div>
                {/* <button id="dark-light" onClick={handledarkmode}>
                    change to dark mode
                </button> */}
            </div>
        </div>
    )
}