
"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/types/books-Types";
import React, { useContext } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A855F7",
  "#EC4899",
  "#14B8A6",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z
  `;
};

const TriangleBar = (props: any) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      fill={color}
    />
  );
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: BookType) => ({
    name:
      book.bookName.length > 15
        ? `${book.bookName.substring(0, 15)}...`
        : book.bookName,

    pages: book.totalPages,

    rating: book.rating,

    year: book.yearOfPublishing,

    publisher: book.publisher,
  }));

  /* Statistics */

  const totalBooks = readBooks.length;

  const totalPages = readBooks.reduce(
    (total: number, book: BookType) =>
      total + Number(book.totalPages),
    0
  );

  const averageRating =
    totalBooks > 0
      ? (
          readBooks.reduce(
            (total: number, book: BookType) =>
              total + Number(book.rating),
            0
          ) / totalBooks
        ).toFixed(1)
      : "0.0";

  const latestYear =
    totalBooks > 0
      ? Math.max(
          ...readBooks.map((book: BookType) =>
            Number(book.yearOfPublishing)
          )
        )
      : "-";

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      {/* Header */}

      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#23BE0A]">
          Reading Statistics
        </p>

        <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl">
          Your Reading Journey
        </h1>

        <p className="mt-2 text-sm text-[#64748B] md:text-base">
          Track your reading progress, total pages, ratings,
          and published years.
        </p>
      </div>

      {totalBooks > 0 ? (
        <>

          {/* Statistics Cards */}

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* Books */}

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#64748B]">
                Books Read
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                {totalBooks}
              </h2>

              <p className="mt-1 text-xs text-[#94A3B8]">
                Total books completed
              </p>
            </div>

            {/* Pages */}

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#64748B]">
                Total Pages
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                {totalPages.toLocaleString()}
              </h2>

              <p className="mt-1 text-xs text-[#94A3B8]">
                Pages you've read
              </p>
            </div>

            {/* Rating */}

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#64748B]">
                Average Rating
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                ⭐ {averageRating}
              </h2>

              <p className="mt-1 text-xs text-[#94A3B8]">
                Average book rating
              </p>
            </div>

            {/* Latest */}

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#64748B]">
                Latest Publication
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#1F2937]">
                {latestYear}
              </h2>

              <p className="mt-1 text-xs text-[#94A3B8]">
                Latest year among your books
              </p>
            </div>

          </div>

          {/* Chart */}

          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm md:p-8">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#1F2937]">
                Pages Per Book
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Compare the number of pages in each book you've read.
              </p>
            </div>

            <div className="h-[400px] w-full">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <BarChart
                  data={data}
                  margin={{
                    top: 30,
                    right: 20,
                    left: 10,
                    bottom: 60,
                  }}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="name"
                    angle={-35}
                    textAnchor="end"
                    interval={0}
                    height={80}
                    tick={{
                      fontSize: 12,
                    }}
                  />

                  <YAxis
                    tick={{
                      fontSize: 12,
                    }}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #E2E8F0",
                    }}
                    formatter={(value) => [
                      `${value} pages`,
                      "Pages",
                    ]}
                  />

                  <Bar
                    dataKey="pages"
                    shape={<TriangleBar />}
                  >
                    <LabelList
                      dataKey="pages"
                      position="top"
                      fontSize={12}
                    />
                  </Bar>

                </BarChart>
              </ResponsiveContainer>

            </div>

          </div>

          {/* Book Details */}

          <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm md:p-8">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#1F2937]">
                Reading Details
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Information about the books in your reading list.
              </p>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full min-w-[600px] text-left">

                <thead>
                  <tr className="border-b border-[#E2E8F0] text-sm text-[#64748B]">
                    <th className="px-4 py-3">
                      Book
                    </th>

                    <th className="px-4 py-3">
                      Pages
                    </th>

                    <th className="px-4 py-3">
                      Rating
                    </th>

                    <th className="px-4 py-3">
                      Year
                    </th>

                    <th className="px-4 py-3">
                      Publisher
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {readBooks.map((book: BookType) => (

                    <tr
                      key={book.bookId}
                      className="border-b border-[#F1F5F9] text-sm last:border-0"
                    >

                      <td className="px-4 py-4 font-semibold text-[#1F2937]">
                        {book.bookName}
                      </td>

                      <td className="px-4 py-4 text-[#64748B]">
                        {book.totalPages}
                      </td>

                      <td className="px-4 py-4">
                        ⭐ {book.rating}
                      </td>

                      <td className="px-4 py-4 text-[#64748B]">
                        {book.yearOfPublishing}
                      </td>

                      <td className="px-4 py-4 text-[#64748B]">
                        {book.publisher}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </>
      ) : (

        /* Empty State */

        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 text-center">

          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#DCFCE7] text-3xl">
            📚
          </div>

          <h2 className="text-2xl font-bold text-[#1F2937]">
            No Reading Data Yet
          </h2>

          <p className="mt-2 max-w-md text-sm text-[#64748B]">
            Start adding books to your read list.
            Your reading statistics will appear here automatically.
          </p>

        </div>

      )}

    </section>
  );
};

export default ReadBooks;