import React, { useState } from 'react';
import "./Input.css";
import { FaSearch } from "react-icons/fa";

const Input = ({ books, onSearch }) => {
    const [text, setText] = useState('');

    // Event handler for handling changes in the search input
    function handleChange(e) {
        const inputValue = e.target.value;
        setText(inputValue);
        // Filter books based on input value
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        // Call the onSearch callback with filtered books
        onSearch(filteredBooks);
    }

    // Render the component
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
            <FaSearch style={{position:"absolute",top:"160px",right:"460px"}}/>
                <input
                
                    type='text'
                    placeholder='Search for title, author, ISBN, publisher....'
                    autoComplete='off'
                    className='input'
                    style={{
                        width: "500px",
                        height: "30px",
                        marginLeft: "400px"
                    }}
                    value={text}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default Input;
