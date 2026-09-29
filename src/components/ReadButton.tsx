"use client"

import { BooksContext } from '@/context/BooksContext';
import { BookType } from '@/types/books-Types';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}: {book: BookType}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    // const booksProvider = useContext(BooksContext)

    // console.log('Books Provider:', booksProvider);

    const handleReadBook = () => {

        console.log('Read button clicked', book);

        setReadBooks([...readBooks, book]);
        toast.success(`${book.bookName} has been added read books list!`);
    }

    
    return (
        <button className="rounded-lg border border-[#23BE0A] px-6 py-2.5 font-semibold text-[#23BE0A] transition duration-300 hover:bg-[#23BE0A] hover:text-white" onClick={() => handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;