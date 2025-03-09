'use client';
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import {
  productData,
  subcategories,
  categories,
} from '../constants/productsData'; // Assume it has the list of products
import Loader from '../components/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Accordion from '../components/Accordion';
import SubCategoryCard from '../components/SubCategoryCard';

// Categories data
const categoriesData = [
  { name: 'Backdrops', image: '/images/products/Backdrops/40-Foot-Ceiling-Curtain-Draping-Sheer-Voile-Flame-Retardant-Ivory_317x.webp' },
  { name: 'Catering', image: '/images/products/Catering/Plates.jpg' },
  { name: 'Chairs', image: '/images/products/Chairs/Chairs.avif' },
  { name: 'Neon Signs', image: '/images/products/Neon Signs/Better-Together-Neon-Sign-Set-Up_305x.avif' },
  { name: 'Table', image: '/images/products/Table/Rectangular Tablecloths.webp' },
  { name: 'Backdrops', image: '/images/products/Backdrops/40-Foot-Ceiling-Curtain-Draping-Sheer-Voile-Flame-Retardant-Ivory_317x.webp' },
  { name: 'Catering', image: '/images/products/Catering/Plates.jpg' },
  { name: 'Chairs', image: '/images/products/Chairs/Chairs.avif' },
  { name: 'Neon Signs', image: '/images/products/Neon Signs/Better-Together-Neon-Sign-Set-Up_305x.avif' },
  { name: 'Table', image: '/images/products/Table/Rectangular Tablecloths.webp' },

];

const categoriesLinks = [
  'Backdrops',
  'Catering',
  'Centerpieces & Cake Stands',
  'Chairs',
  'Neon Signs',
  'Pedestal Display Stands',
  'Rhinestone Rolls',
  'Table',
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [back, setBack] = useState(false);

  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // For search and category filtering
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Backdrops');
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const productsPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    setLoading(true);

    // Simulate a 1.5-second loading delay
    const timer = setTimeout(() => {
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      setVisibleProducts(filteredProducts.slice(startIndex, endIndex));
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentPage, filteredProducts]);

  useEffect(() => {
    const subCategories = subcategories[selectedCategory];
    if(subCategories==null){
      const filtered = productData.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
      setSelectedSubCategories(null);
      setCurrentPage(1);
      
    }
    else{
      setFilteredProducts([]);
      setSelectedSubCategories(subCategories || []);
    }

  }, [selectedCategory]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value === '') {
      // If search is cleared, show all products
      setSelectedCategory('Backdrops')
    }
  };

  const handleSearchClick = () => {
    if (searchValue.trim() !== '') {
      const searchedProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(searchedProducts);
      setCurrentPage(1); // Reset to the first page after filtering
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    const filtered = productData.filter(
      (product) => product.subcategory === subCategory
    );
    setFilteredProducts(filtered);
    setSelectedSubCategories(null);
    setBack(true)
    setCurrentPage(1);
  };

  const handleCategoryClick = (category) => {
  
      setBack(false)
      setSelectedCategory(category);
  };

  const BackToCategory =()=>{
    const subCategories = subcategories[selectedCategory];
      setSelectedSubCategories(subCategories || []);
      setFilteredProducts([]);
      setBack(false)
  }

  return (
    <div>
      <Breadcrumb name='Our Products' />

      <div className='flex p-4 py-8 md:p-8 lg:p-12 2xl:p-10 flex-col'>
        <div className='w-full'>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            draggable
            autoplay={{ delay: 3000 }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              // For screens >= 640px (Tablet)
              760: {
                slidesPerView: 4, // Show 4 slides on tablet
              },
              // For screens >= 1024px (Laptop and above)
              1024: {
                slidesPerView: 6, // Show 7 slides on laptop and above
              },
              1240: {
                slidesPerView: 7, // Show 7 slides on laptop and above
              },
            }}
            className='!h-[170px] z-10'
          >
            {categoriesData.map((category, index) => (
              <SwiperSlide key={index}>
                <CategoryCard name={category.name} image={category.image} onClick={handleCategoryClick} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='flex flex-col lg:flex-row'>
          {/* Sidebar for larger screens */}
          <div className='w-full lg:w-1/4 rounded-lg bg-primaryLight/50 max-h-screen h-max p-4 py-8 mt-5 hidden lg:block'>
            <div className='flex justify-between'>
              <input
                type='text'
                id='search'
                className='bg-white border border-gray-200 text-gray-900 text-base rounded-lg rounded-tr-none rounded-br-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3'
                placeholder='Search...'
                value={searchValue}
                onChange={handleSearchChange}
                required
              />
              <button
                className='p-2 bg-primary text-sm text-white font-semibold px-4 rounded-lg rounded-tl-none rounded-bl-none'
                onClick={handleSearchClick}
              >
                Search
              </button>
            </div>

            <h2 className=' text-2xl font-bold my-4'>Categories</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                {categoriesLinks.map((category) => (
                  <p
                    key={category}
                    className='text-sm cursor-pointer underline-animation-white w-max'
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar for mobile screens */}
          <div className='w-full block lg:hidden'>
            <Accordion
              title={'Categories'}
              className='bg-primaryLight/50 rounded-lg p-4'
            >
              <div className='w-full rounded-lg max-h-screen h-max py-2'>
                <div className='flex justify-between'>
                  <input
                    type='text'
                    id='search'
                    className='bg-white border border-gray-200 text-gray-900 text-base rounded-lg rounded-tr-none rounded-br-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3'
                    placeholder='Search...'
                    value={searchValue}
                    onChange={handleSearchChange}
                    required
                  />
                  <button
                    className='p-2 bg-primary text-sm text-white font-semibold px-4 rounded-lg rounded-tl-none rounded-bl-none'
                    onClick={handleSearchClick}
                  >
                    Search
                  </button>
                </div>

                <h2 className='text-primary bg-white rounded-lg p-2 w-max text-base font-bold my-4'>
                  Available Categories
                </h2>

                <div className='flex flex-col gap-4'>
                  {categoriesLinks.map((category) => (
                    <p
                      key={category}
                      className='text-base cursor-pointer underline-animation-white w-max'
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </p>
                  ))}
                </div>
              </div>
            </Accordion>
          </div>
          {/* Main Content */}
          <div className='w-full lg:w-3/4  flex flex-col'>
            {loading ? (
              <Loader />
            ) : (
              <>
              {back?
              <button className='text-white bg-black font-bold p-2 px-4 w-max rounded-xl mt-5 mx-4' onClick={()=>BackToCategory()}> Back</button>
              :''}
              <div className='w-full flex flex-wrap'>
                {visibleProducts.map((product, index) => (
                  <div key={index} className='w-full md:w-1/3 xl:w-1/3 p-5'>
                    <ProductCard product={product} />
                  </div>
                ))}
                {selectedSubCategories?.map((subCategory, index) => (
                  <div key={index} className='w-full md:w-1/3 xl:w-1/3 p-5'>
                    <SubCategoryCard
                      name={subCategory.name}
                      category={selectedCategory}
                      onClick={handleSubCategoryClick}
                      img={subCategory.img}
                    />
                  </div>
                ))}
              </div>
              </>
            )}

            {/* Pagination */}
            {!loading && visibleProducts.length > 0 && (
              <div className='flex justify-center items-center mt-8 space-x-4'>
                <button
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-primary text-white'
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <span className='text-gray-700 font-medium'>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-primary text-white'
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}

            {!loading && visibleProducts.length=== 0 && selectedSubCategories?.length=== 0 && (
              <p className='text-3xl text-gray-400 text-center mt-10'>
                No Products Available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
