
import ReadButton from "@/components/ReadButton";
import WishlistButton from "@/components/WishlistButton";
import { BookType } from "@/types/books-Types";
import Image from "next/image";
import React from "react";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: BookType) => String(book.bookId) === String(id)
  ) as BookType;
   
  console.log("Book:", book);
  
  if (!book) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-[#131313]">
          Book Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          The book you are looking for does not exist.
        </p>
      </section>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
      {/* Main Details */}
      <section className="rounded-2xl bg-[#f7f7f7] p-2 sm:p-7 lg:h-[calc(100vh-120px)] lg:p-8">
        <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr] lg:gap-10">

          {/* Book Image */}
          <div className="flex items-start justify-center">
            <div className="overflow-hidden rounded-xl bg-white p-4 shadow-md">
              <Image
                src={book.image}
                alt={book.bookName}
                width={300}
                height={430}
                unoptimized
                priority
                className="h-[320px] w-auto object-contain transition duration-300 hover:scale-105 lg:h-[350px]"
              />
            </div>
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center">

            {/* Book Name */}
            <h1 className="text-2xl font-bold leading-tight text-[#131313] sm:text-4xl lg:text-5xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-2 text-base font-medium text-gray-600 sm:text-lg">
              By :{" "}
              <span className="font-semibold text-[#131313]">
                {book.author}
              </span>
            </p>

            {/* Category */}
            <p className="mt-2 text-sm font-medium text-gray-600">
              {book.category}
            </p>

            {/* Divider */}
            <div className="my-3 h-px bg-gray-300" />

            {/* Review */}
            <div>
              <h2 className="mb-1 text-sm font-bold text-[#131313]">
                Review : <span className="text-sm leading-6 text-[#131313]/70">{book.review}</span>
              </h2>

              {/* <p className="text-sm leading-6 text-gray-600">
                {book.review}
              </p> */}
            </div>

            {/* Tags */}
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="mr-1 font-bold text-[#131313]">
                Tag
              </span>

              {book.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#23BE0A]/10 px-3 py-1.5 text-xs font-semibold text-[#23BE0A]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Book Information */}
            <div className="mt-4 space-y-2 border-t border-gray-300 pt-4">

              <div className="flex text-sm">
                <span className="w-44 text-gray-500">
                  Number of Pages:
                </span>

                <span className="font-bold text-[#131313]">
                  {book.totalPages}
                </span>
              </div>

              <div className="flex text-sm">
                <span className="w-44 text-gray-500">
                  Publisher:
                </span>

                <span className="font-bold text-[#131313]">
                  {book.publisher}
                </span>
              </div>

              <div className="flex text-sm">
                <span className="w-44 text-gray-500">
                  Year of Publishing:
                </span>

                <span className="font-bold text-[#131313]">
                  {book.yearOfPublishing}
                </span>
              </div>

              <div className="flex items-center text-sm">
                <span className="w-44 text-gray-500">
                  Rating:
                </span>

                <span className="flex items-center gap-1 font-bold text-[#131313]">
                  <span className="text-lg text-yellow-500">★</span>
                  {book.rating}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-2 flex flex-wrap gap-3">
              <ReadButton book={book}/>

              <WishlistButton book={book}/>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDetailsPage;