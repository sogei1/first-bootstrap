import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FormTitle from './FormTitle';

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

    const handleAddToDo = (postToDo) => {
        postToDo.id = state.posts.length + 1
        setState({posts: [postToDo, ...state.posts]})
    }
    
    return (
        <>
                <FormTitle submit={handleAddToDo}></FormTitle>
                
                {state.posts.map(post => (
                    <div onClick={() => handleDeleteToDo(post.id)} key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.title}</p>
                    </div>
                    
                ))}
                
            </>
    )
}
