
"use client";

import Image from "next/image";
import Link from "next/link";
import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/books-Types";
import React, { useContext, useState } from "react";
import ListedBooksCard from "@/components/ListedBooksCard";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  console.log("Sort By:", sortBy);

  const sortBooks = (books: BookType[]) => {
   const sortedBooks = [...books];

   if (sortBy === "rating") {
     sortedBooks.sort((a, b) => b.rating - a.rating);
   } else if (sortBy === "pages") {
     sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
   }
    else if (sortBy === "year") {
        sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishList = sortBooks(wishList);

  console.log("Sorted Read Books:", sortedReadBooks);
  console.log("Sorted Wishlist:", sortedWishList);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#23BE0A] text-center">
          My Collection
        </p>

        <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl text-center">
          Listed Books
        </h1>

        <div className="text-center">
        <select 
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")} 
        className="select select-success">
       <option disabled={true}>Sort By</option>
       <option value={"rating"}>Rating</option>
       <option value={"pages"}>Number of Pages</option>
       <option value={"year"}>Published Year</option>
       </select>
       </div>

        <p className="mt-2 max-w-2xl text-sm text-[#64748B] md:text-base justify-center text-center">
          Manage the books you have read and the books you want to read later.
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-boxed mb-8 w-full gap-1 bg-[#F3F4F6] p-1">
       
        <input
          type="radio"
          name="book_tabs"
          className="tab px-5 text-sm font-semibold"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content w-full border-0 bg-transparent p-0 pt-8">
          {sortedReadBooks.length > 0 ? (
            <div className="space-y-5">
              {sortedReadBooks.map((book: BookType) => (
                <ListedBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Read Books"
              description="You haven't added any books to your read list yet."
            />
          )}
        </div>

       
        <input
          type="radio"
          name="book_tabs"
          className="tab px-5 text-sm font-semibold"
          aria-label={`Wishlist (${wishList.length})`}
        />

        <div className="tab-content w-full border-0 bg-transparent p-0 pt-8">
          {sortedWishList.length > 0 ? (
            <div className="space-y-5">
              {sortedWishList.map((book: BookType) => (
                <ListedBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="Your Wishlist Is Empty"
              description="Add books to your wishlist so you can find them later."
            />
          )}
        </div>
      </div>
    </section>
  );
};



const EmptyState = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex min-h-[300px] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#DCFCE7]">
        <span className="text-2xl">📚</span>
      </div>

      <h3 className="text-xl font-bold text-[#1F2937]">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-[#64748B]">
        {description}
      </p>
    </div>
  );
};

export default ListedBooks;