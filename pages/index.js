import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Leapfrog Technology</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <div className={homeStyles.hero}>
          <div className={homeStyles.herocontent}>
        <h1>
          Innovate Better, <br/>
        <span>faster.</span>
        </h1>
        <p>
        We help businesses imagine and create the digital experiences of tomorrow. We succeed together by blending the best of entrepreneurship, startup thinking, and world-class engineering.
        </p>
        
        </div>
        <button> Get Started <span>A</span> </button>

        </div>
      </body>

      <footer>
       
      </footer>
    </div>
  )
}
