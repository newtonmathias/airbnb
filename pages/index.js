import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import styles from '../styles/Home.module.css'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

        <main className='max-w-7xl mx-auto px-8 sm:px-16'>
          <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              { exploreData.products.map(({ id, title, brand, thumbnail}) => (
                <SmallCard
                key={id}
                title={title} 
                brand={brand} 
                thumbnail={thumbnail} 
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
              {cardsData.users.map(({id, username, image}) => (
                <MediumCard key={id} image={image} username={username} />
              ))}
            </div>
                
          </section>
        </main>
      </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://dummyjson.com/products').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://dummyjson.com/users').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData
    },
  };
}