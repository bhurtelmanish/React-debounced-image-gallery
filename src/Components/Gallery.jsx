import SearchBar from './SearchBar';
import InitialGallery from './InitialGallery';
import { useState } from 'react';
import {TIMEOUT_RATE} from '../assets/Data.jsx'

const Gallery = () => {
    const imageLimit = 10;
    const [timeOutId , setTimeoutId] = useState(null);
    const [searchQueryValue, setSearchQueryValue] = useState("girls");
    const [imageType , setImageType] = useState("photo");

    const debouncedSearch = (callBack , delay) => {
        setTimeoutId(setTimeout(callBack , delay));
        return clearTimeout(timeOutId);
    }

    const handleSearchChange = (e) => {
        debouncedSearch(() => setSearchQueryValue(e.target.value) , TIMEOUT_RATE)
    };

    const filterIllustration = (image_type) => {
        setImageType(image_type);
    }

    return (
        <div className=' min-h-screen h-auto dark:text-[var(--lightColor)]'>
            <div className='px-4 md:px-10 mt-10'>
                <div className='mx-2 mb-2 flex flex-col items-center'>
                    <div className='text-2xl  font-semibold leading-7'>Stunning royalty-free images & royalty-free stock</div>
                    <div className='text-[var(--grayColor)] mt-2 mb-5 leading-5 text-sm'>Over 5.1 million+ high quality stock images, videos and music shared by our talented community.</div>
                </div>
                <SearchBar onChange={handleSearchChange} value={searchQueryValue} filterIllustration={filterIllustration}/>
                <InitialGallery searchQueryValue={searchQueryValue} imageLimit={imageLimit} imageType={imageType}/>
            </div>
        </div>
    );
};

export default Gallery;
