import React from "react";
import BookCard from "./BookCard";
import { BookType } from "@/types/books-Types";

const getBooks = async (): Promise<BookType[]> => {
  const res = await fetch(
    "http://localhost:3000/booksData.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  const data: BookType[] = await res.json();

  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-[#131313] sm:text-4xl">
          Books
        </h2>

        <p className="mt-2 text-gray-500">
          Explore our collection of amazing books
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;