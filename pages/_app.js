import '@/styles/globals.css'
import '@/styles/header.css'
import Header from '../components/Header'
import React, {useState, useEffect} from "react"
import ReactPlayer from 'react-player'


export default function App({ Component, pageProps }) {
  // const videoRef = useRef(undefined);
  // useEffect(()=>{
  //   videoRef.current.defaultMuted = true;
  // })
  const [video, setVideo] = useState(null);
  useEffect(()=>{
    setVideo(
      <ReactPlayer className="bgVideo" url="https://d1sxqb6wcb4nin.cloudfront.net/bg-video.mp4" playing={true} loop={true} controls={false} volume={0} muted={true} playsinline={true}/>
    )
  }, [])

  return (
    <div>
      {/* <video className="bgVideo" width="320" height="240" ref={videoRef} controls={false} loop autoPlay muted playsInline>
        <source src="https://d1sxqb6wcb4nin.cloudfront.net/bg-video.mp4" type="video/mp4"/>
      </video> */}
      {video}
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}
