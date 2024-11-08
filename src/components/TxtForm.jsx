// state?? use state

// const [count , setCount]=useState('any variable')

// this method can be used for state method or changing variable
// let count ='hello' ... wrong
// setCount('hello')...correct

import React, { useState } from 'react'

export default function TxtForm(props) {
  const [text, setText] = useState('')
  const onchangefunc = (event) => {
    setText(event.target.value)
  }
  const uppercase = () => {
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  const removesapce = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
  }
  const clear = () => {
setText('')
  }
  const copy =()=>{
let text =document.getElementById("text")
text.select()
navigator.clipboard.writeText(text.value)
  }
  //Functions End Here
  return (
    <>
      <div className='container'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">{props.text}</label>
          <textarea className="form-control" value={text} id="text" rows='10 ' onChange={onchangefunc} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#163c66', color: props.mode === 'light' ? 'black' : 'white' }} ></textarea>
        </div>
        <button type="button" className="btn btn-success mx-2" onClick={uppercase}>To Uppercase</button>
        <button type="button" className="btn btn-success mx-2" onClick={removesapce}>Remove Space</button>
        
        <button type="button" className="btn btn-success mx-2" onClick={clear}>Clear</button>
        <button type="button" className="btn btn-success mx-2" onClick={copy}>Copy</button>

      </div>
      <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1> word Counter</h1>
        <p>your para contains {text.split(" ").filter((element)=>{return element.length!=0}).length} words & {text.length} letters</p>
      </div>
    </>
  )
}

