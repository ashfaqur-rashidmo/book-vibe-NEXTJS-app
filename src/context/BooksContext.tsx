"use client"

import { BookType } from '@/types/books-Types';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type BooksContextType = {
  readBooks: BookType[];
  setReadBooks: Dispatch<SetStateAction<BookType[]>>;

  wishList: BookType[];
  setWishList: Dispatch<SetStateAction<BookType[]>>;
};

export const BooksContext = createContext<BooksContextType>({
      readBooks: [],
  setReadBooks: () => {},

  wishList: [],
  setWishList: () => {},
});

const BooksContextProvider = ({ children }: { children : ReactNode}) => {

    const [readBooks, setReadBooks] = useState<BookType>([]);
    const [wishList, setWishList] = useState<BookType>([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList
    }
    
    return (
        <BooksContext.Provider value={sharedData}>
          {children}
        </BooksContext.Provider>
    );
};

export default BooksContextProvider;