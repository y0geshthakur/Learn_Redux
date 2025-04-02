import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

function IcecreamView() {
    const [value, setValue] = useState(1);
    const [restock, setRestocked] = useState(1);
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of icecreams - {numOfIcecreams}</h2>
      <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))}></input>
      <button onClick={() => dispatch(ordered(value))}>Order Icecreams</button>
      <input type='number' value={restock} onChange={(e) => setRestocked(parseInt(e.target.value))}></input>
      <button onClick={() => dispatch(restocked(restock))}>Restock Icecreams</button>
    </div>
  )
}

export default IcecreamView
