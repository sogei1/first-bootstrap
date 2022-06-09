import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FuncPostContainer() {
    const [state, setState] = useState({posts: []})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/", {
            cancelToken: axios.CancelToken.source().token
        })
        .then(response => {
            console.log(response)
            setState({posts: response.data})
        })
    }, [])
        

    //     fetch('https://jsonplaceholder.typicode.com/todos/')
    //         .then(response => response.json())
    //         .then(posts => {
    //             setState({posts:posts})                
    //         })
    // }, [])

    const handleDeleteToDo = (id) => {
        setState({posts: state.posts.filter(post => post.id !== id)})
    }
    
    return (
        <>
                
                {state.posts.map(post => (
                    <div onClick={() => handleDeleteToDo(post.id)} key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.title}</p>
                    </div>
                    
                ))}
                
            </>
    )
}
