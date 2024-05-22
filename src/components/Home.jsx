import { useEffect, useState } from 'react'
import '../index.css'
import Book from './Book'
function Home() {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch('../../public/data.json').then(res =>res.json().then(data=>setBooks(data.books)))
    },[])
    
    return (
        <div className="grid md:grid-cols-3 gap-4 mt-5 rounded-full border-1">
            {
                books.map(book=>{return   <Book key={book.bookId} book={book}></Book>  
            
            })
            }
        </div>
    )
}

export default Home
