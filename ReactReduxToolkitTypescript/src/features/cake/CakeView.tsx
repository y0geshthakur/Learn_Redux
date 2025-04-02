import { useState } from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ordered, restocked } from './cakeSlice'

function CakeView() {
    const [value, setValue] = useState(1);
    const [restock, setRestocked] = useState(1);
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
    const dispatch = useAppDispatch()
    return (
      <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value))}></input>
        <button onClick={() => dispatch(ordered(value))}>Order Cakes</button>
        <input type='number' value={restock} onChange={(e) => setRestocked(parseInt(e.target.value))}></input>
        <button onClick={() => dispatch(restocked(restock))}>Restock Cakes</button>
      </div>
    )
}

export default CakeView
