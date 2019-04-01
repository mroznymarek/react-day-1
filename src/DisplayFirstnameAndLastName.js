import React from 'react'

const DisplayFirstnameAndLastname = (props) => {
    console.log(props)

    return (
    <div>
        {props.firstname} {props.lastname}
    </div>
    )
}

export default DisplayFirstnameAndLastname