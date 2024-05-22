import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function BookDetails() {
    const id = useParams().id   
    const books = useLoaderData()
    const bookRead =books.books.find(book => id==parseInt(book.bookId))
    
    let readlist =[];
    let wishlist =[];

    function readEventHandler ( book){
        if(localStorage.getItem('readlist')==null){
            readlist.push(book)
            console.log(readlist)
            localStorage.setItem('readlist',JSON.stringify(readlist))
        }
        else{
            //retrieve
            const currentData =JSON.parse(localStorage.getItem('readlist'))
            //check if the current book exists
            if(currentData.find(data =>data.bookId ==book.bookId)){
                showToast('You already Read this book!','dark')
            }
            else{
                localStorage.setItem('readlist',JSON.stringify([ ...currentData, book]))
                showToast('Book Added to Read List!','light')
                //remove from wish list
                if(wishlist.find((wishbook)=>book.bookId==wishbook.bookId)!=undefined){
                    wishlist.filter(wbook =>wbook.bookId == book.bookId)
                }
            }
        }
        
    }
    function wishEventHandler(book){
        if(localStorage.getItem('wishlist')==null){
            readlist.push(book)
            console.log(readlist)
            localStorage.setItem('wishlist',JSON.stringify(readlist))
        }
        else{
            //retrieve
            const currentData =JSON.parse(localStorage.getItem('wishlist'))
            //check if the current book exists
            if(currentData.find(data =>data.bookId ==book.bookId)){
                showToast('This book is already in your wishlist!','dark')
            }
            else{
                //check if its in the readlist
                const readlist =JSON.parse(localStorage.getItem('readlist'))
                if(readlist.find(read=>book.bookId == read.bookId)){
                    showToast('Book Already Added to Read List!','dark')
                }
                else{
                    localStorage.setItem('wishlist',JSON.stringify([ ...currentData, book]))
                    showToast('Book Added to Wish List!','light')
                }
            }
        }
    }

    return (
        <div className='grid gap-2 py-4 md:grid-cols-2 px-2 border-2'>
            
            <div className=''>
                <img className='max-w-full rounded-xl' src={'.'+bookRead.image} alt="" />
            </div>
            <div className='flex px-4 py-4  flex-col gap-6 border-2 rounded-xl'>
                <div>
                    <h1 className='text-2xl font-semibold'>{bookRead.bookName}</h1>
                    
                </div>
                <div className=' py-2'>
                    By : {bookRead.author}
                </div>
                <div className='border-b-2 border-t-2 py-2 '>
                    {bookRead.category}
                </div>
                <div className='text-justify '>
                    {bookRead.review}
                </div>
                <div className='flex gap-4 font-semibold border-b-2 py-4 '>
                    {bookRead.tags.map((tag,index)=><div key={index} className="badge badge-primary badge-outline py-3">{tag}</div>)}
                </div>
                <div className='border-2 flex gap-12 items-center'>
                    <h1 className='text-sm font-semibold'>Number of Pages: </h1> <span className='text-sm font-semibold'>{bookRead.totalPages}</span>
                </div>
                <div className=' border-2 flex gap-12 items-center'>
                    <h1 className='text-sm font-semibold'>Publisher: </h1><span className='text-sm font-semibold'>{bookRead.publisher}</span>
                </div>
                <div className='flex gap-12 '>
                    <h1 className='text-sm font-semibold'>Year of Publishing: </h1> <span className='text-sm font-semibold'>{bookRead.yearOfPublishing}</span>
                </div>
                <div className=' flex gap-32'>
                    <h1 className='text-sm font-semibold'>Rating:</h1> <span className='text-sm font-semibold'>{bookRead.rating}</span>
                </div>
                <div className='flex gap-10'>
                    <button onClick={()=>{readEventHandler(bookRead)}} className='btn btn-primary min-w-24 font-bold'>Read</button>
                    <button onClick={()=>{wishEventHandler(bookRead)}} className='btn btn-primary min-w-24 font-bold'>WishList</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
function showToast(message, theme){
    toast(message,{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
        })
}



export default BookDetails
