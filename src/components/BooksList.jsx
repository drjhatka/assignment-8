import React from 'react'
import { useLoaderData } from 'react-router-dom'

function BookList() {
    const readlist = JSON.parse(localStorage.getItem('readlist'))
    console.log(readlist)
    const wishlist = JSON.parse(localStorage.getItem('wishlist'))
    return (
        <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        { readlist!=null &&  readlist.map(book=> <li key={Math.random()*100}> {book.bookName} </li>) }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        { wishlist!=null && wishlist.map(book=> <li key={Math.random()*100}> {book.bookName} </li>) }
                    </div>
              </div>

        </div>
    )
}

export default BookList
