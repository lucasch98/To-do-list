import React from 'react';

function Input({input}){
    return (
      <div>
        <input 
          className='input' 
          placeholder='Task...' 
        />
        <button style={{backgroundColor: 'lightblue'}}>Create</button>
        
      </div>
    );
}

export default Input;