import Projects    from './components/Projects/Projects';
import YouTube     from './components/YouTube/YouTube';
import Instagram   from './components/Instagram/Instagram';
import Office      from './components/Office/Office';
import Lightboxs   from './components/Lightboxs/Lightboxs';
import Catalogue   from './components/Catalogue/Catalogue';
import ScrollNav   from './components/ScrollNav/ScrollNav';
import HomeDiv from './components/Home/Home';
import './globals.css';
export default function Home() {
  return (
      <>
      <ScrollNav/>
      <div className="container">
        <HomeDiv/>
        <Projects/>
        <YouTube/>
        <Instagram/>
        <Lightboxs/>
        <Catalogue/>
      </div>
    </>
  );
}
