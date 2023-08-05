import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCakeAction, removeCakeAction } from '../../../redux/slice/cakeIceCreamSlice'

function Cake() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    // console.log(state)

    const handleIncreaseCount = (incrementBy) => {
        dispatch(addCakeAction(incrementBy))
    }

    const handleDecreaseCount = (decreaseBy) => {
        const newCountValue = state.cakeIceCream.cakeCount - decreaseBy
        dispatch(removeCakeAction(newCountValue))
    }

    return (
        <div>
            <p>Cake Count:{state.cakeIceCream.cakeCount}</p>
            <button type='button' onClick={() => handleIncreaseCount(1)}>Increase Count by 1</button>
            <button type='button' onClick={() => handleIncreaseCount(5)}>Increase Count by 5</button>
            <button type='button' onClick={() => handleDecreaseCount(1)}>Decrease Count by 1</button>
            <button type='button' onClick={() => handleDecreaseCount(5)}>Decrease Count by 5</button>
        </div>
    )
}

export default Cake