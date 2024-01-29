import React, { useState, useEffect } from 'react';
import Navbar from '/src/Components/Navbar.jsx';
import Input from '/src/Components/Input.jsx';
import BookList from './BooksList';


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
            setFilteredBooks(data.books); // Initialize filteredBooks with all books
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
                <Navbar />
                <div className='header'>
                    <div className='box'>
                        
                        <q className='quote'>
                            “A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”
                        </q>
                        {/* Pass the books and onSearch props to Input */}
                        <Input books={books} onSearch={handleSearch} />
                        {error && <div>Error: {error}</div>}
                        <div className='Books'>
                            {/* Pass the filteredBooks to BookList */}
                            <BookList books={filteredBooks} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
