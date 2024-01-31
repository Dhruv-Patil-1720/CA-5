import React, { useState } from 'react';

const Input = ({ books, onSearch }) => {
    const [text, setText] = useState('');

    // Event handler for handling changes in the search input
    function handleChange(e) {
        const inputValue = e.target.value;
        setText(inputValue);
        // Filtering the books based on input value
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        // Calling the onSearch callback with filtered books
        onSearch(filteredBooks);
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} style={{ position: "relative" }}>
                <input
                    type='text'
                    placeholder='Search for title, author, ISBN, publisher....'
                    autoComplete='off'
                    className='input'
                    style={{
                    width: "450px",
                    height: "40px",
                    marginLeft: "430px",
                    marginTop:"50px"
                    }}
                    value={text}
                    onChange={handleChange}
                />
               <button className='search' style={{width:"100px",position:"absolute",left:"60%",top:"51px",
  cursor:"pointer",textAlign:"center"}}>Seacrch</button>
            </form>
        </div>
    );
};

export default Input;
