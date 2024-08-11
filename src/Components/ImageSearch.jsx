import React from 'react'
import { useState } from 'react'
import { useRef, useEffect } from 'react';

const ImageSearch = ({searchText}) => {

    // Create a ref for the search input
    const searchInputRef = useRef(null);

    const handleKeyDown = (event) => {
        // Check if the Ctrl (or Command on macOS) key and the K key are pressed
        if ((event.ctrlKey || event.metaKey) && event.key === 'q') {
          event.preventDefault();
          if (searchInputRef.current) {
            searchInputRef.current.focus();
          }
        }
      };

      // Add event listener for keydown when the component mounts
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            alert('Please enter the text to search!')
        }else{
            searchText(text);
            setText('');
        }
    }

  return (
    <div className='searchContainer'>
        <form onSubmit={onSubmit}>
            <div className="inputContainer">
                <div className="titleContaniner">
                    <p className='element1'><i className="fa-brands fa-think-peaks"></i><i style={{color: 'steelblue'}}>P</i>ic<span><span className='element2'>F</span><span className='element3'>inder</span></span></p>
                </div>
                <div style={{width: '40%'}}>
                    <input type="search" className='inputText' placeholder='Type your search or Press [Ctrl + Q]' ref={searchInputRef} value={text} onChange={(e) => setText(e.target.value)}/>
                    <button type='submit' className='submitBtn'>Search</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch