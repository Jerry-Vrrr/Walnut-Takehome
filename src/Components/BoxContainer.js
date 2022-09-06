import React from 'react'
import Box from './Box'
import './BoxContainer.css'

export default function BoxContainer( {numBoxes}) {

    const boxes = []
    for (let i=0; i < numBoxes; i++) {
        boxes.push(`${i+1}`)
    }
    const generate = boxes.map(box => {
       return  (
           <Box id={box} key={box}/>
       )
    })

  return (
    <div className='container'>
        {generate}
        
    </div>
  )
}
