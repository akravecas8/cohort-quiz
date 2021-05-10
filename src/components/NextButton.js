import React from 'react'

export default function NextButton() {
    const x = Math.floor(Math.random()*11)
    console.log(x)
    return (
        <div>
            <button>Next</button>
        </div>
    )
}
