import React from 'react'

export default function Message(props) {
    return (
        <div className="alert alert-success" role="alert">
            {props.Message}
        </div>
    )
}
