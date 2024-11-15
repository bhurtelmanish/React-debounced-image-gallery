import { useEffect, useState } from 'react';
import { API_KEY, INITIAL_CATEGORY } from '../assets/Data';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import '../index.css'

const Gallery = ({ searchQueryValue, setSearchQueryValue, imageLimit, imageType }) => {
  const [initialImages, setInitialImages] = useState([]);
  const [initialImagesLoading, setInitialImagesLoading] = useState(false);

  const URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&category=${INITIAL_CATEGORY}&per_page=${imageLimit}&order=popular&q=${searchQueryValue}&image_type=${imageType}`;

  useEffect(() => {
    const fetchInitialImages = async () => {
      setInitialImagesLoading(true);
      try {
        const response = await axios.get(URL);
        const result = response.data;
        // console.log(result.hits);
        setInitialImages(result.hits);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
      setInitialImagesLoading(false);
    };

    fetchInitialImages();
  }, [searchQueryValue, imageType, imageLimit]);

  if (initialImages.length === 0) {
    return <div className='md:text-xl text-md mt-3 flex items-center justify-center md:w-full md:mt-8'>No results found!!!</div>;
  }

  return initialImagesLoading === true ? (
    <div>
      Loading ...
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 py-4 justify-center">
    {initialImages.map((image, index) => (
      <Link key={index} to={`/imagedetails/${index}`}>
        <div
          key={index}
          className="overflow-hidden rounded-xl border-[1px] dark:border-slate-600 relative group h-full lg:h-full"  // Increased height
        >
          {/* Image with object-cover and increased height */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            src={image.largeImageURL}
            alt="Gallery"
            className="object-cover w-full h-full rounded-xl cursor-pointer"  // Image takes the full container height and width
            loading="lazy"
            whileTap={{ scale: 0.95 }}
          />
          <motion.div
            className="absolute h-full w-full bg-black bg-opacity-50 top-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-white flex flex-col gap-10 items-center text-center">
              <span className="font-semibold text-3xl w-full">{image.tags}</span>
              <div className="flex flex-col gap-0">
                <span>Downloads: {image.downloads}</span>
                <span>Comments: {image.comments}</span>
                <span>Likes: {image.likes}</span>
              </div>
            </p>
          </motion.div>
        </div>
      </Link>
    ))}
  </div>
  
  

  );
};

export default Gallery;

