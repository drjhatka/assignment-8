import { useEffect, useState } from 'react'
import '../index.css'
import Book from './Book'
function Home() {
    const [books,setBooks]=useState([])
    const [listedBooks, setListedBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])
    useEffect(()=>{
        fetch('../../public/data.json').then(res =>res.json().then(data=>setBooks(data.books)))
    },[])
    const listedEventHandler = listedBook =>{
        setListedBooks([...listedBooks,listedBook])      
    }
    const wishlistEventHandler = wishlistBook =>{
        setWishlistBooks([...wishlistBooks,wishlistBook])      
    }

    return (
        <div className="grid md:grid-cols-3 gap-4 mt-5 rounded-full border-1">
            {
                books.map(book=>{return   <Book key={book.bookId} book={book} wishlist={wishlistBooks} listHandler ={listedEventHandler}></Book>  
            })
            }
        </div>
    )
}

export default Home
