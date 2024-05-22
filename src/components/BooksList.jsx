import React from 'react'
import { useLoaderData } from 'react-router-dom'

function BookList() {
    const books = useLoaderData();
    console.log(books)
    return (
        <div>
            
        </div>
    )
}

export default BookList
