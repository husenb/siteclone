import Head from 'next/head'

import homeStyles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Leapfrog Technology</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
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
        <div  className={homeStyles.herodowncontent}>
        <section className={homeStyles.getstartedbtn}>
        <button> Get Started <span>A</span> </button>
        </section>
        <section className={homeStyles.learnmoresection}>
        <p>Want to know how we stand out <br/>
        <span> Learn More</span>
        </p>
        </section>
        </div>
        </div>
        <div className={homeStyles.ceosection}>
          <p>
          “It would have taken months to build the product team that we inherited overnight with Leapfrog. They're built for startup speed, and they have consistently delivered a well-engineered product for us. Laudio is my second partnership with Leapfrog, and they have earned my trust.”
          </p>
          <img src='https://www.lftechnology.com/wp-content/themes/Froggy/dist/images/testimonial_person.png' height={60} width={60}/>
          


        </div>
      </div>

      <footer>
      </footer>
    </div>
  )
}
