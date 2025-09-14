// import bannerImg from '../../assets/Banner.png'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide autoplay={3000}>
          <img src="https://t4.ftcdn.net/jpg/06/88/66/31/360_F_688663136_CYDZXf10utvUG7QScsByISc5AaEDf68F.jpg"
            alt="Book Promotion Banner"
            style={{ height: '500px', objectFit: 'cover', borderRadius: '20px', display: 'block', margin: 'auto' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bolder', textAlign: 'center',textShadow:"0px 0px 20px black" }}>
            Welcome to <span className='text-9xl text-yellow-400' style={{textShadow:"0px 0px 20px black"}}>Bookify.</span>com
          </div>
          <div style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -5%)', color: 'white', fontSize: '1rem', fontWeight: 'bolder', textAlign: 'center'}}>
            <button className='bg-blue-700 px-3 py-1 rounded hover:bg-blue-900'>Subscribe</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.wallpaperscraft.com/image/single/library_books_shelving_199606_2560x1080.jpg"
            alt="Book Promotion Banner"
            style={{ height: '500px', objectFit: 'cover', borderRadius: '20px', display: 'block', margin: 'auto' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bolder', textAlign: 'center',textShadow:"0px 0px 20px black" }}>
            Discover Your Next Great Read
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.wallpaperscraft.com/image/single/library_books_reading_209503_1920x1080.jpg"
            alt="Book Promotion Banner"
            style={{ height: '500px', objectFit: 'cover', borderRadius: '20px', display: 'block', margin: 'auto' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bolder', textAlign: 'center',textShadow:"0px 0px 20px black" }}>
            Explore Top Bestsellers & New Arrivals
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://c4.wallpaperflare.com/wallpaper/596/689/222/books-old-book-library-wallpaper-preview.jpg"
            alt="Book Promotion Banner"
            style={{ height: '500px', objectFit: 'cover', borderRadius: '20px', display: 'block', margin: 'auto' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bolder', textAlign: 'center',textShadow:"0px 0px 20px black" }}>
            Exclusive Deals on Popular Titles
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://t4.ftcdn.net/jpg/05/92/12/51/360_F_592125192_QfdYEap9Kw1DyXqqqF7FNI5SBuQkR5pN.jpg"
            alt="Book Promotion Banner"
            style={{ height: '500px', objectFit: 'cover', borderRadius: '20px', display: 'block', margin: 'auto' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bolder', textAlign: 'center',textShadow:"0px 0px 20px black" }}>
            Find Books for Every Age & Interest
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://t4.ftcdn.net/jpg/05/92/12/51/360_F_592125192_QfdYEap9Kw1DyXqqqF7FNI5SBuQkR5pN.jpg"
            alt="Book Promotion Banner"
            style={{ height: '500px', objectFit: 'cover', borderRadius: '20px', display: 'block', margin: 'auto' }}/>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px', fontWeight: 'bolder', textAlign: 'center',textShadow:"0px 0px 20px black" }}>
            Join Our Community of Book Lovers
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner