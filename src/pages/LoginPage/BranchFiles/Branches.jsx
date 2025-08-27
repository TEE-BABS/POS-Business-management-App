import React from 'react'
import { useState } from 'react'
import './Branches.css'

function Branches() {
const [inputBranch, setInputBranch] = useState("")
const [readOnly, setIsReadOnly] = useState("false")

const handleBranchClick =(Text)=>{
setInputBranch(Text)
setIsReadOnly(true)

};

  return (
    <div>
    
     
    </div>
  )
}

export default Branches