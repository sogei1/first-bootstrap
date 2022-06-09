import React from 'react'

export default function Post(props) {
    return (
        <>
            <h2>{props.title}</h2>
            {props.children}
        </>
    )
}
