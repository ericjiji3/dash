import {topTracks} from './api/spotify'
import styles from '../styles/music.module.css'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import localFont from 'next/font/local'

const sectar = localFont({src:'../public/fonts/Sectar.otf'})

export default function Music() {
    const [albumData, setAlbumData] = useState([]);
    // const fetchAlbums = async() =>{
    //     const resp = await fetch('/api/stats/albums')
    //     const data = await resp.json();
    //     return setAlbumData(data)
    // }
  useEffect(()=>{
    const fetchAlbums = async() =>{
        const resp = await fetch('/api/stats/albums')
        const data = await resp.json();
        return setAlbumData(data)
      }
      fetchAlbums();
  }, [])
  
  
  return (
    <div className={styles.albumsContainer}>
        {albumData.map((album, index) => {
            console.log(album);
            return(
                <div key={index} className={styles.albumContainer}>
                    <a href={album.albumLink} className={styles.albumLink}>
                        
                        <Image
                            src={album.albumImage.url}
                            width={album.albumImage.width}
                            height={album.albumImage.height}
                            alt="oops"
                        />
                        <span className={sectar.className}>{album.albumName}</span>
                    </a>
                </div>
            )
        })}
    </div>
  )
}
