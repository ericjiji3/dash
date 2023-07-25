import '@/styles/globals.css'
import '@/styles/header.css'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <video className="bgVideo" width="320" height="240" loop autoPlay muted>
        <source src="https://d1sxqb6wcb4nin.cloudfront.net/bg-video.mp4" type="video/mp4"/>
      </video>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}
