import React from 'react'
import { useEffect,useState } from 'react';
const Fetch = () => {
    const [post,Post1]=useState([]);

useEffect(()=>{
    fetch("https://dummyjson.com/quotes")
    .then(response=>response.json())
    .then(data=>Post1(data.quotes.splice(0,10)))
},[]);
  return (
    <div>{post.map((s)=>
        <h1 style={{backgroundColor:"blue"}}>{s.quote}</h1>
        )}</div>
  )
}

export default Fetch
