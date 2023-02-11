import React,{useState} from 'react'
import { useEffect } from 'react';

const UseEffect = () => {
    const [count, setCounter] = useState(0);
    const [name, setName] = useState('upasana')
    useEffect(() => {
        console.log('updated');
    },[name])

    return (
        <>
            <h1>hello { name }</h1>
            <button className="btn-danger" onClick={()=>setName('gudiya')}>Update Name</button><br /><br />
        <button className="btn-success" onClick={()=>setCounter(count+1)}>+</button>
            <button>{ count}</button>
            <button className="btn-success" onClick={ () => setCounter(count - 1) }>-</button>
            
      </>
    );
}

export default UseEffect