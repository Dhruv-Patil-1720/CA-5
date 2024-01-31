import React, { useState, useEffect } from 'react';
import Input from '/src/Components/Input.jsx';
import BookList from './BooksList';
import Navbar from './Navbar';


const Home = () => {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://reactnd-books-api.udacity.com/books`, {
            headers: {
                'Authorization': 'whatever-you-want' 
            }
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => {
            console.log('Fetched Data:', data);
            setBooks(data.books); // Set books directly from data.books
            setFilteredBooks(data.books); // Initializing filteredBooks with all books
        })
        .catch((error) => {
            console.error('Fetch Error:', error);
            setError(error.message);
        });
    }, []);

    // Callback function to handle search
    function handleSearch(filteredBooks) {
        setFilteredBooks(filteredBooks);
    }

    return (
        <>
            <div>
                <div className='header'>
                <Navbar />
                    <div className='box' style={{
                       
                        padding: '20px',
                        borderRadius: '10px'
                    }}>
                        <q style={{
                            color: 'black',
                            fontFamily: 'Special Elite, cursive',
                            marginLeft:"50px",
                            fontWeight: "800",
                            fontSize:"35px",
                            lineHeight: 1.4,
                            textAlign: 'center',
                            padding: '.5rem',
                            backdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                        }}>
                            “A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”
                        </q>
                        {/* Passing the books and onSearch props to Input */}
                        <Input books={books} onSearch={handleSearch} />
                        {error && <div>Error: {error}</div>}
                       
                        <div className='Books'>
                            {/* Passing the filteredBooks to BookList */}
                            <BookList books={filteredBooks} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
