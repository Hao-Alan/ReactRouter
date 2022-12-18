import axios from 'axios'
import React from 'react'
import { Await } from 'react-router-dom'

const test = () => {
    function getJSON(){
        return  new Promise((resolve, reject) => {
            axios.get('link').then((hello)=>{
                resolve(hello)
            })
        })
    }

    const getJSONX = ()=>{
        return new Promise((resolve, reject) => {
            axios.get("linkkxxx").then(function(anh){resolve(anh)})
        })
    }

    function getJSONAA(){
        return new Promise((resolve, reject) => {
            // axios.get('link').then(function(xxx){resolve(xxx)})
            axios.get('link').then((xxx)=>{resolve(xxx)})
        })
    }


   async function getJSONBB(){
        let json = await axios.get('link')
        return json
    }
    
  return (
    <div>test</div>
  )
}

export default test