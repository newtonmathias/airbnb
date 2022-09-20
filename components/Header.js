import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
      <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* Left */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image
              src="https://links.papareact.com/qd3" 
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
        </div>

        {/* Middle */}
        <div>
          <input type="text" placeholder="Start your search" />
          <MagnifyingGlassIcon className='h-8 bg-red-400 text-white rounded-full p-2' />
        </div>

        {/* Right */}
        <div></div>
      </header>
  )
}

export default Header