import { BookType } from '@/types/books-Types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BookCardProps {
    book: BookType;
}



const BookCard = ({book}: {book: BookType}) => {
    return (
        <div
                    
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Image */}
                    <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-[#f3f3f3]">
                      <Image
                        src={book.image}
                        alt={book.bookName}
                        width={300}
                        height={300}
                        unoptimized
                        className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
                      />
                    </div>
        
                    {/* Content */}
                    <div className="pt-5">
                      {/* Category */}
                      <span className="inline-block rounded-full bg-[#23BE0A]/10 px-3 py-1 text-xs font-medium text-[#23BE0A]">
                        {book.category}
                      </span>
        
                      {/* Book Name */}
                      <h3 className="mt-3 line-clamp-1 text-xl font-bold text-[#131313]">
                        {book.bookName}
                      </h3>
        
                      {/* Author */}
                      <p className="mt-1 text-sm text-gray-500">
                        by {book.author}
                      </p>
        
                      {/* Review */}
                      {/* <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                        {book.review}
                      </p> */}
        
                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="rounded-md border border-[#23BE0A]/30 px-2.5 py-1 text-xs font-medium text-[#23BE0A]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
        
                      {/* Book Information */}
                      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
                        <div>
                          <p className="text-xs text-gray-400">Pages</p>
                          <p className="mt-1 text-sm font-semibold text-[#131313]">
                            {book.totalPages}
                          </p>
                        </div>
        
                        <div>
                          <p className="text-xs text-gray-400">Published</p>
                          <p className="mt-1 text-sm font-semibold text-[#131313]">
                            {book.yearOfPublishing}
                          </p>
                        </div>
                      </div>
        
                      {/* Bottom */}
                      <div className="mt-5 flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-[#131313]">
                            ★ {book.rating}
                          </span>
                          <span className="ml-1 text-sm text-gray-400">/ 5</span>
                        </div>
        
                        <Link href = {`/books/${book.bookId}`}>
                         <button className="rounded-lg bg-[#23BE0A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e9d08]">
                          View Details
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
    );
};

export default BookCard;