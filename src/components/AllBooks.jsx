import books from '../data/bookdata.json'

import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const AllBooks = () => {
  const { addToCart } = useCart()

  return (
    <main className='allbook main container'>
      <h1 className='book-header'>All Books That Are Available</h1>
      <div className='book-container'>
        {books.map(book => {
          return (
          <div key={book.id} className='book-card'>\
            <Link to={`/book/${book.id}`}>
              <img src={book.cover} alt={book.title} className='home__img' />
            </Link>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>R {book.price.toFixed(2)}</p>
            <button className='button book-button' onClick={() => addToCart(book)}>Add to Cart</button> 
          </div>)
        })}
      </div>
    </main>
  )
}

export default AllBooks