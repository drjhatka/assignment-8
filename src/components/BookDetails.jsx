import { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function BookDetails() {
    const id = useParams().id   
    const books = useLoaderData()
    const bookRead =books.books.find(book => id==parseInt(book.bookId))
    

    function readEventHandler ( book){
        const currentData =JSON.parse(localStorage.getItem('readlist'))
        const currentWishData= JSON.parse(localStorage.getItem('wishlist'))
        
        if(localStorage.getItem('readlist')==null){
            localStorage.setItem('readlist',JSON.stringify([book]))
            showToast('Added in your read list','light')
            //remove from wish list
            if(currentWishData && currentWishData.find((wishbook)=>book.bookId==wishbook.bookId)!=undefined){
                if(currentWishData.filter(wbook =>wbook.bookId == book.bookId)){
                    console.log('adasdSDS')
                    localStorage.setItem('wishlist',JSON.stringify(currentWishData ? [...currentWishData.filter(wbook =>wbook.bookId != book.bookId)]:[] ))
                }
            }
        }
        else{
            //retrieve
            //check if the current book exists
            if(currentData && currentData.find(data =>data.bookId ==book.bookId)){
                showToast('You already Read this book!','dark')
            }
            else{
                localStorage.setItem('readlist',JSON.stringify([ ...currentData, book]))
                showToast('Book Added to Read List!','light')
                //remove from wish list
                if(currentWishData.filter(wish=>book.bookId==wish.bookId)){
                    console.log('inside')
                    localStorage.setItem('wishlist',JSON.stringify(currentWishData ? [...currentWishData.filter(wbook =>wbook.bookId != book.bookId)]:[]))
                }
               
            }
        }
        
    }
    function wishEventHandler(book){
        //check if the book already exists in wishlist
       
        //if there is no wishlist saved in local storage...
        if(localStorage.getItem('wishlist')==null){
            //check if the book exists in readlist
            if( JSON.parse(localStorage.getItem('readlist')) && JSON.parse(localStorage.getItem('readlist')).find(b=>b.bookId==book.bookId) ){
                showToast('Already added to Read List')
            }
            else{
                //set local storage with current book
                localStorage.setItem('wishlist',JSON.stringify([book]))
                showToast('Book Added to wishlist','light')

            }
        }//end if
        else{
            const currentWishData =JSON.parse(localStorage.getItem('wishlist'))?JSON.parse(localStorage.getItem('wishlist')):[]
            const readData = JSON.parse(localStorage.getItem('readlist'))?JSON.parse(localStorage.getItem('readlist')):[]
            if(currentWishData.find(wishbook =>book.bookId==wishbook.bookId)){
                showToast('This book is already in your WishList','dark')
            }
            else{
                //otherwise add them in local storage
                //check if the data exists in readlist
                if(readData && readData.find(bk => bk.bookId == book.bookId)){
                    showToast('You Already Read This book!','dark')
                }
                else{
                    //store current data
                    localStorage.setItem('wishlist',JSON.stringify([...currentWishData,book]))
                    showToast('Book Added to wishlist','light')

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
        backgroundColor:'crimson',
        })
}



export default BookDetails
