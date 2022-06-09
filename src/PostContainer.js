import React, { Component } from 'react'

export default class PostContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then(response => response.json())
            .then(posts => {
                this.setState({
                    posts: posts
                })
            })
    }

    render() {
        return (
            <>
                {
                    this.state.posts.map(post => (                  
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.title}</p>
                        </div>                 
                    ))
                }
            </>
        )
    }
}
