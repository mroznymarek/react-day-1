import React from 'react'

const reactCanDisplayString = 'Ala ma kota'
const reactCanDisplayNumbers = 12345
const reactCantDisplayBolean = true
const reactCantDislplayNull = null
const reactCantDislplayUndefined = undefined

const reactCanDisplayFunctionCall = () => 'Ala ma psa'

const reactCanDisplayArray = ['Ala', 'Ola', 'Ela']

const reactCanDisplayReactElement = <b>Gruba Ala</b>

const WhatReactCanDisplay = (props) => (
        <div>
        <h4>Strings:</h4>
            <p>{reactCanDisplayString}</p>
        <h4>Numbers:</h4>
            <p>{reactCanDisplayNumbers}</p>
        <h4>Boleans:</h4>
            <p>{reactCantDisplayBolean}</p>
        <h4>Null:</h4>
            <p>{reactCantDislplayNull}</p>
        <h4>Undefined:</h4>
            <p>{reactCantDislplayUndefined}</p>
        <h4>Function Call:</h4>
            <p>{reactCanDisplayFunctionCall()}</p>
        <h4>Array:</h4>
            <p>{reactCanDisplayArray}</p>
        <h4>React Element:</h4>
            <p>{reactCanDisplayReactElement}</p>
        <h4>Array mapping:</h4>
        <ul>{reactCanDisplayArray.map(
            (element, index) => (
                <li
                    key={index + element}
                >
                    {element}
                </li>
            ))
        }
        </ul>
    </div>
)

export default WhatReactCanDisplay