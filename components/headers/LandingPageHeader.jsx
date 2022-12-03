import Image from 'next/image'
import bannerImage from './../../public/banner.png'

function LandingPageHeader() {  return (
    <header className=' p-10 bg-gradient-to-r from-rose-100 to-teal-100'>
       
      <figure className='flex flex-col justify-center items-center
      md:flex-row  gap-8
      '>
        <figcaption >
          <h1 className='font-bold text-4xl text-stone-800 text-center
            md:text-3xl lg:text-5xl xl:text-6xl
          '>
            Select the best employee for your desired needs!
          </h1>
        </figcaption>
        
         <Image
           className="w-full sm:w-2/3 md:w-5/12 lg:w-5/12"
           src={bannerImage}
           alt='next best employee banner'
           priority={true}
         />

      </figure>
    </header>
  );
}

export default LandingPageHeader;