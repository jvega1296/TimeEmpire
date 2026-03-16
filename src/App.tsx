import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import BrandStory from './sections/BrandStory';
import ProductShowcase from './sections/ProductShowcase';
import FeatureHighlights from './sections/FeatureHighlights';
import Gallery from './sections/Gallery';
import Stats from './sections/Stats';
import CallToAction from './sections/CallToAction';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <ProductShowcase />
        <FeatureHighlights />
        <Gallery />
        <Stats />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
