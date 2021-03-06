import React from 'react'

export default function GoHome() {
    const goHome = () => {
        document.location.href = "/";
    }

    return (
        <div>
            <button className="back" onClick={goHome}>back</button>
        </div>
    )
}
