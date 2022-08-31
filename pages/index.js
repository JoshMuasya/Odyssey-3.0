import Head from 'next/head';
import Image from 'next/image';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import { GalleryData } from '../components/GalleryData';
import Contact from '../components/Contact';
import Find from '../components/Find';
import About from '../components/About';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Odyssey Africa Hikes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/WebLogo.ico" />
      </Head>
      <Hero heading='Odyssey Africa Hikes' slogan='Travel in Style'/>
      <About />
      <Blog />
      <Gallery slides={GalleryData} />
      <Find />
    </div>
  )
}
