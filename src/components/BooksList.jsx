import React, { useEffect, useState } from 'react'
import {Select} from 'react-dropdown-select'
import { useLoaderData } from 'react-router-dom'
import BookDetailCard from './BookDetailCard'
import BookWishListCard from './BookWishListCard'

function BookList() {
    const options = [
        {
          value: 1,
          label: 'Author'
        },
        {
          value: 2,
          label: 'Publish Year'
        },
        {
            value: 3,
            label: 'Rating'
          }
      ];

    const [read, setRead] = useState([])
    const [wish, setWish] = useState([])
    useEffect(()=>{
        setRead(JSON.parse(localStorage.getItem('readlist')))
        setWish(JSON.parse(localStorage.getItem('wishlist')))

    },[])

    const selectEventHandler = (params)=>{
       console.log(params)
       const readTempName = [...read];
       const wishTempName = [...wish]
       const readYear = [...read]
       const wishYear =[...wish]
       const readRating = [...read]
       const wishRating =[...wish]
        switch (params[0].value) {
            case 1:
                setRead(readTempName.sort((a, b) => b.author.toLowerCase().localeCompare(a.author.toLowerCase())));
                setWish(wishTempName.sort((a, b) => b.author.toLowerCase().localeCompare(a.author.toLowerCase())));
                break;
            case 2:
                setRead(readYear.sort((a, b) =>parseFloat(b.yearOfPublishing) - parseFloat(a.yearOfPublishing)));
                setWish(wishYear.sort((a, b) =>parseFloat(b.yearOfPublishing) - parseFloat(a.yearOfPublishing)));
                break;
            case 3:
                setRead(readRating.sort((a, b) =>parseFloat(b.rating) - parseFloat(a.rating)));
                setWish(wishRating.sort((a, b) =>parseFloat(b.rating) - parseFloat(a.rating)));
            break;
            default:
                break;
        }
      }
    return (
        <div className='mt-5'>
            <div className='flex justify-center rounded-lg items-center text-3xl bg-[#ff3333] py-6 text-white mb-4 font-bold'>
                <h1>Books</h1>
            </div>
            <div className='flex flex-col gap-4 justify-center rounded-lg items-center'>
                <h1 className='text-xl font-bold'>Sort By</h1>
            <Select options={options} onChange={(values) => selectEventHandler(values)} />;
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

function sortObjectArray(objArray, key){
    const sortedObjArray =[]
    //const keys =Object.keys(objArray)
    objArray.forEach(obj => {
        //if(obj[key])
    });
}

export default BookList
