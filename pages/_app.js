import '@/styles/globals.css'
import '@/styles/header.css'
import Header from '../components/Header'
import React, {useRef, useEffect} from "react"

export default function App({ Component, pageProps }) {
  const videoRef = useRef(undefined);
  useEffect(()=>{
    videoRef.current.defaultMuted = true;
  })
  return (
    <div>
      <video className="bgVideo" width="320" height="240" ref={videoRef} controls={false} loop autoPlay muted playsInline>
        <source src="https://d1sxqb6wcb4nin.cloudfront.net/bg-video.mp4" type="video/mp4"/>
      </video>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}
