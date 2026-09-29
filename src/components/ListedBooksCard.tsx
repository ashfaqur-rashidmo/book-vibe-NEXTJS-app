import { BookType } from '@/types/books-Types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({book}: {book: BookType}) => {
    return (
        <div className="flex w-full flex-col gap-5 rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm transition duration-300 hover:shadow-md sm:flex-row sm:p-5">

      <div className="flex shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] p-4 sm:w-[190px]">
        <Image
          src={book.image}
          alt={book.bookName}
          width={180}
          height={240}
          unoptimized
          className="h-[230px] w-auto rounded-lg object-contain"
        />
      </div>


      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          {/* Category */}
          <span className="inline-block rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-semibold text-[#23BE0A]">
            {book.category}
          </span>

          {/* Book Name */}
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#1F2937]">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 text-sm text-[#64748B]">
            By :{" "}
            <span className="font-semibold text-[#1F2937]">
              {book.author}
            </span>
          </p>

          {/* Review */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-[#1F2937]">
              Review :
            </p>

            <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#64748B]">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-semibold text-[#1F2937]">
              Tags:
            </span>

            {book.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-[#F0FDF4] px-3 py-1 text-xs font-medium text-[#23BE0A]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Information */}
          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#E2E8F0] pt-4 sm:grid-cols-4">
            {/* Pages */}
            <div>
              <p className="text-xs text-[#94A3B8]">
                Number of Pages
              </p>

              <p className="mt-1 text-sm font-semibold text-[#1F2937]">
                {book.totalPages}
              </p>
            </div>

            {/* Publisher */}
            <div>
              <p className="text-xs text-[#94A3B8]">
                Publisher
              </p>

              <p className="mt-1 text-sm font-semibold text-[#1F2937]">
                {book.publisher}
              </p>
            </div>

            {/* Year */}
            <div>
              <p className="text-xs text-[#94A3B8]">
                Year of Publishing
              </p>

              <p className="mt-1 text-sm font-semibold text-[#1F2937]">
                {book.yearOfPublishing}
              </p>
            </div>

            {/* Rating */}
            <div>
              <p className="text-xs text-[#94A3B8]">
                Rating
              </p>

              <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-[#1F2937]">
                <span className="text-yellow-500">★</span>
                {book.rating}
              </p>
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-5">
          <Link
            href={``}
            className="inline-block rounded-lg border border-[#23BE0A] px-5 py-2.5 text-sm font-semibold text-[#23BE0A] transition duration-300 hover:bg-[#23BE0A] hover:text-white"
          >
            Save Details
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ListedBooksCard;