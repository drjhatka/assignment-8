import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function BookDetails() {
    const id = useParams() 
    
    const books = useLoaderData()
 
    
   const bookRead = books.books.find(book =>(id.id)==parseInt(book.bookId))
    console.log(bookRead.image)
    return (
        <div className='grid gap-6 py-4 md:grid-cols-2 px-2 border-2'>
            <div>
                <img src={'.'+bookRead.image} alt="" />
            </div>
            <div>
                This
            </div>
        </div>
    )
}

export default BookDetails
