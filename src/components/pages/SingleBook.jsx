import books from '../../data/bookdata.json'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';




const SingleBook = () => {
    const {id} = useParams();
    const [book,setBook] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const foundBook = books.find((b) => b.id == id)
        setBook(foundBook)
    }, [id]);

    if (!book) return <div>Book not available at the moment</div>

  return (
    <div className='single-container'>
        <div className='left-single'>
            <img src={book.cover} alt={book.title} className='book-image'/>
        </div>
        
        <div className='right-single'>
            <h1>{book.title} by {book.author}</h1>
            <p>R {book.price.toFixed(2)}</p>
            <p className='text-single'>{book.description}</p>
            <button className='button book-button' onClick={() => addToCart(book)}>Add to Cart</button> 
        </div>    
    </div>
  )
}

export default SingleBook