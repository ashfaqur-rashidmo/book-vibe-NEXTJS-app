"use client"

import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/types/books-Types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({book}: {book: BookType}) => {

    const {wishList, setWishList} = useContext(BooksContext);

    console.log('Wishlist:', wishList);

    const handleAddToWishlist = () => {

        console.log('Wishlist button clicked', book);

        setWishList([...wishList, book]);
        toast.success(`${book.bookName} has been added to the wishlist!`);
    }
    return (
        <button className="rounded-lg border border-[#23BE0A] px-6 py-2.5 font-semibold text-[#23BE0A] transition duration-300 hover:bg-[#23BE0A] hover:text-white" onClick={() => handleAddToWishlist()}>
           Wishlist
        </button>
    );
};

export default WishlistButton;