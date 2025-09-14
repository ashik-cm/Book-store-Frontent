import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksAPI';


const category = ["Choose Catagory", "Business", "Fiction", "Horror", "Adventure",]

const TopSellers = () => {


    const [selectedCategory, setSelectedCategory] = useState("Choose Catagory")

    const { data: books = [] } = useFetchAllBooksQuery()
    console.log(books)

    // const filteredBooks = selectedCategory === "Choose Catagory" ? books : books.filter(book => book.category === selectedCategory.toLocaleLowerCase())

    const filteredBooks = selectedCategory === "Choose Catagory"
        ? [...books].sort((a, b) => a.title.localeCompare(b.title))   
        : books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase()).sort((a, b) => b.title.localeCompare(a.title));

    console.log(filteredBooks)


    return (
        <div className='py-5'>
            <h2 className='text-3xl font-bold mb-6 mt-7'>Top Sellers</h2>
            {/* cat filter */}
            <div className="mb-8 flex items-center">
                <select onChange={(e) => setSelectedCategory(e.target.value)} name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        category.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
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
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide>
                            <BookCard key={index} book={book} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>

    )
}

export default TopSellers