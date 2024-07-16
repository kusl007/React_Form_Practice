import React, { useRef } from 'react'

function Ref() {
     const name=useRef(null)
     const age=useRef(null)
     const email=useRef(null)
   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name.current.value , age.current.value ,email.current.value)

   }
  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
      <input  ref={name} type="text"   placeholder="name" className="border-2 "/>
      <input  ref={age} type="text"   placeholder="age" className="border-2 "/>
      <input  ref={email} type="email" placeholder="email" className="border-2 " />
      <input type="submit" />

    </form>
    </div>
  )
}

export default Ref