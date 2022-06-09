import React from 'react'
import FormTitle from './FormTitle'
import FormUser from './FormUser'
import FuncPostContainer from './FuncPostContainer'
import PostContainer from './PostContainer'

export default function Home() {
  return (
    <div className="container-md">
        <FormUser></FormUser>
        <FuncPostContainer></FuncPostContainer>
        
    </div>
  )
}
