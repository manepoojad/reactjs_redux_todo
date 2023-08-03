import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCakeAction,removeCakeAction } from '../../../redux/slice/cakeSlice'

function Cake() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state)

    const handleIncreaseCount = () => {
       const newCountValue=state.cake.cakeCount+1
       dispatch(addCakeAction(newCountValue))
    }

   const handleDecreaseCount=()=>{
    const newCountValue=state.cake.cakeCount-1
    dispatch(removeCakeAction(newCountValue))
   }

    return (
        <div>
            <p>Cake Count:{state.cake.cakeCount}</p>
            <button type='button' onClick={() => handleIncreaseCount()}>Increase Count</button>
            <button type='button' onClick={() => handleDecreaseCount()}>Decrease Count</button>
        </div>
    )
}

export default Cake