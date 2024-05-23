import { useEffect, useState } from 'react'
import '../index.css'
import Book from './Book'
import Hero from './Hero'

function Home() {
    const [books,setBooks]=useState([])
    const [listedBooks, setListedBooks] = useState([])
    const [wishlistBooks, setWishlistBooks] = useState([])
    useEffect(()=>{
        fetch('data.json').then(res =>res.json().then(data=>setBooks(data.books)))
    },[])
    const listedEventHandler = listedBook =>{
        setListedBooks([...listedBooks,listedBook])      
    }
    const wishlistEventHandler = wishlistBook =>{
        setWishlistBooks([...wishlistBooks,wishlistBook])      
    }

    return (
        <div className='flex flex-col'>
            <div>
                <Hero></Hero>
            </div>
            <div>
                <h1 className='text-2xl font-bold text-center mt-3'>Books</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-5 rounded-full border-1">
            
                {
                    books.map(book=>{return   <Book key={book.bookId} book={book} wishlist={wishlistBooks} listHandler ={listedEventHandler}></Book>  
                })
                }
                
            </div>
        </div>
    )
}

export default Home
