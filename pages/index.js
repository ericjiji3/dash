import Head from 'next/head'
import Image from 'next/image'
import BackAlbum from '../public/album-back.jpeg'
import FrontAlbum from '../public/album-front.jpeg'
import localFont from 'next/font/local'
import styles from '@/styles/Home.module.css'

const sectar = localFont({src: '../public/fonts/Sectar.otf'})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.homeContainer}>
      <h2 className={`${sectar.className}`}>ALBUM OUT NOW</h2>
      <div className={styles.albumContainer}>
          <Image src={BackAlbum} width={300} height={300} alt="oops"/>
          <Image src={FrontAlbum} width={300} height={300} alt="oops"/>
      </div>
      <video className={styles.videoContainer} width="700" height="400" controls>
        <source src="https://d1sxqb6wcb4nin.cloudfront.net/skrewface-commerical.mp4" type="video/mp4"/>
      </video>
      </main>
    </>
  )
}
