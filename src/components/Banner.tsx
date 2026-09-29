// import Image from 'next/image';
// import React from 'react';

// const Banner = () => {
//     return (
//         <section className=" p-8">
//         <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#131313]/5 rounded-lg p-20">
//             <div>
//                <h2 className='text-6xl font-semibold'>Books to freshen up <br/>your bookshelf</h2>
//                <button className='bg-[#23BE0A] text-[#FFFFFF] px-4 py-2 rounded-md mt-6'>View The List</button>
//             </div>

//             <div>
//                 <Image src={"/hero_img.jpg"} alt="Banner" width={500} height={300} />
//             </div>
//         </div>
//     </section>
//     );
// };

// export default Banner;



import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 rounded-2xl bg-[#131313]/5 px-6 py-10 sm:px-10 md:flex-row md:py-14 lg:px-16 lg:py-20">
        {/* Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold leading-tight text-[#131313] sm:text-4xl lg:text-5xl xl:text-6xl">
            Books to freshen up
            <br className="hidden sm:block" />
            your bookshelf
          </h1>

          <button className="mt-6 rounded-md bg-[#23BE0A] px-5 py-3 font-medium text-white transition hover:bg-[#1e9d08]">
            View The List
          </button>
        </div>

        {/* Image */}
        <div className="w-full max-w-md">
          <Image
            src="/hero_img.jpg"
            alt="Books on a bookshelf"
            width={500}
            height={300}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
