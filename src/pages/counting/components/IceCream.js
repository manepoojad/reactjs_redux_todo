import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addIceCreamAction,removeIceCreamAction } from '../../../redux/slice/cakeIceCreamSlice'

function IceCream() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    // console.log(state)

    const handleIncreaseCount = (incrementBy) => {
       dispatch(addIceCreamAction(incrementBy))
    }

   const handleDecreaseCount=(decreaseBy)=>{
    const newCountValue=state.cakeIceCream.iceCreamCount-decreaseBy
    dispatch(removeIceCreamAction(newCountValue))
   }
      
    return (
        <div>
            <p>Ice Cream Count:{state.cakeIceCream.iceCreamCount}</p>
            <button type='button' onClick={() => handleIncreaseCount(1)}>Increase Count by 1</button>
            <button type='button' onClick={() => handleIncreaseCount(5)}>Increase Count by 5</button>
            <button type='button' onClick={() => handleDecreaseCount(1)}>Decrease Count by 1</button>
            <button type='button' onClick={() => handleDecreaseCount(5)}>Decrease Count by 5</button>
        </div>
    )
}

export default IceCream