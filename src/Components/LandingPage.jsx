import Button from './Button';
import InitialGallery from './InitialGallery';
import { API_NAME , INITIAL_RATE_LIMIT } from '../assets/Data';
import { Link } from 'react-router-dom';

const LandingPage = () => {
 
  return (
    <div className='flex  flex-col h-auto dark:bg-[var(--darkBackground)] dark:text-[var(--lightColor)] z-[-1] pt-6 px-4 flex'>
      <div className='flex flex-col md:justify-center md:items-center'>
        <header className='font-extrabold md:mt-5  md:text-[3.5rem] text-[2.6rem] text-[var(--themeColor)] leading-tight'><span className='text-[var(--blueColor)]'>Pixabay</span> Image Gallery</header>
        <p className='mt-3 mb-4 text-justify md:text-center text-md leading-5 md:w-[80%] dark:text-[var(--lightGrayColor)] text-[var(--grayColor)] '>Welcome to <span className='text-[var(--pinkColor)] font-[500]'>{API_NAME} </span> image gallery. It contains all the photos and has a very advanced search query. Search all the pictures you need by clicking on link from the navigation bar.</p>
      </div>

      <div className='w-full md:flex items-center justify-center'>
      <div className='md:flex justify-center items-center w-full w-fit'>
       <Link to="/gallery"><Button /></Link>
      </div>
      </div>

      <div className='my-10'>
        <div className='text-center text-[1.2rem] text-gray-700 dark:text-gray-200 font-medium md:mt-7 md:flex md:flex-col md:items-center md:justify-center md:text-[1.5rem]'>Photos for you</div>
        <InitialGallery searchQueryValue="clothing" imageLimit={INITIAL_RATE_LIMIT}/>
      </div>
    </div>
  )
}

export default LandingPage
