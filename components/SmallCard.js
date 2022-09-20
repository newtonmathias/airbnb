import Image from 'next/image'

function SmallCard({id, title, brand, thumbnail}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transform duration-200 ease-out'>
        {/*left*/}

        <div className='relative h-16 w-16'>
            <Image src={thumbnail} layout="fill" className='rounded-lg' />
        </div>

        {/*right*/}
        <div>
            <h2>{title}</h2>
            <h2>{brand}</h2>
        </div>
  </div>
  )
}

export default SmallCard