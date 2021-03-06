import React, { useRef, useState } from 'react'
import GoHome from '../../components/goBack/GoHome';

export default function CopyToClipboard() {
    const copyRef = useRef(null);
    const [isSuccess, setIsSuccess] = useState(false);
   
    const copyValue = (e) => {
        e.preventDefault();
        const refVal = copyRef.current.value;
        if(refVal.trim() === "") {
            alert('enter a valid text')
            setIsSuccess(false)
        } else {
            const startIdx = String(refVal).indexOf('q')+2;
            const endIdx = String(refVal).length;
            const qString = String(refVal).substring(startIdx, endIdx);
            copyRef.current.value = qString;
            copyRef.current.select();
            document.execCommand('copy');
            setIsSuccess(true)
            copyRef.current.value = "";
            setTimeout(() => {
                setIsSuccess(false)
            }, 1000)
        }
        
    }
 
    return (
        <div className="copy-container">
            <h1>Copy To Clipboard</h1>
            <GoHome />
           <form onSubmit={copyValue}>
                <input type="text" ref={copyRef} placeholder="Enter text here..."/>
                    <button onClick={copyValue}>Copy</button>
            </form>
            <h4>{isSuccess ? "Copied!" : ""}</h4>
            <div className="copy-img">
                <img src="https://res.cloudinary.com/du0xsvxag/image/upload/v1615002297/4559992_ca3wdl.jpg" alt="img" />
            </div>
        </div>
    )
}
