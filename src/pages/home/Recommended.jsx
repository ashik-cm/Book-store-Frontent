import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination , Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksAPI';

const Recommended = () => {

     const {data:books = []} = useFetchAllBooksQuery()

  return (
    <div className='py-16'>
      <h2 className='text-3xl font-bold mb-6 mt-6'>Recommended</h2>

      <Swiper 
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween:50,
                    }
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper"
            >
                {
                    books.length>0 && books.map((book, index) => (
                        <SwiperSlide>
                            <BookCard key={index} book={book} />
                        </SwiperSlide>  
                    ))
                }
                
            </Swiper>
    </div>
  )
}

export default Recommended