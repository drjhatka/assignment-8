import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BookDetailCard from './BookDetailCard'
import BookWishListCard from './BookWishListCard'

function BookList() {

    const [read, setRead] = useState([])
    const [wish, setWish] = useState([])
    useEffect(()=>{
        setRead(JSON.parse(localStorage.getItem('readlist')))
        setWish(JSON.parse(localStorage.getItem('wishlist')))

    },[])
    console.log(read)
    return (
        <div className='mt-5'>
            <div className='flex justify-center rounded-lg items-center text-3xl bg-[#ff3333] py-6 text-white mb-4 font-bold'>
                <h1>Books</h1>
            </div>
            <div className='flex justify-center rounded-lg items-center'>
                
            </div>
            <div role="tablist" className="tabs tabs-lifted">
               
                <input type="radio"  defaultChecked={true} name="my_tabs_2" role="tab" className="tab" aria-label="Book Read List" checked />
                <div role="tabpanel" className=" tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                    read ? read.map(book=>{ 
                        return <BookDetailCard key={book.bookId} book={book}></BookDetailCard>
                        }):[]
                    }
                </div>
                <input type="radio" defaultChecked={true}  name="my_tabs_2" role="tab" className="tab" aria-label="Books Wishlist" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        wish ? wish.map(book=>{ 
                                return <BookWishListCard key={book.bookId} book={book}></BookWishListCard>
                            }):[]
                    }
                    </div>

                

            </div>

        </div>
    )
}

export default BookList
