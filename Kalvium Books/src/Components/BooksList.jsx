import React from 'react';
import { FaStar } from "react-icons/fa";


const BookList = ({ books }) => {
    return (
        <div className='books-container' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px",marginTop:"50px" }}>
            {books.map((book, index) => (
                <div key={index} className='book-item' style={{ border: "2px solid black", padding: "30px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                    <div className='intro'>
                        
                        {book.imageLinks && book.imageLinks.smallThumbnail && (
                            <img src={book.imageLinks.smallThumbnail} alt={book.title} style={{height:"300px",width:"300px", borderTopLeftRadius:"5px",borderTopRightRadius:"5px"
                         }}/>
                        )}
                        <h2>{book.title}</h2>
                        <h4>By:- {book.authors}</h4>
                        <div className='box2' style={{display:"flex",gap:"40px"}}>
                        <h3 className='rating'>{book.averageRating} <FaStar /></h3> {/* Access averageRating from each book */}
                        <h3 className='price'>Free</h3>
                        </div>
                       
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList;
