import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../redux/themeSlice';

const Theme = () => {
    const [ color, setColor] = useState('');
    const dispatch = useDispatch()
    return (
        <div>
            <input
            value={color}
            onChange={(e)=> setColor(e.target.value)}  
            />

            <button onClick={() => {dispatch(changeColor(color))}}>click me</button>
        </div>
    )
}

export default Theme
