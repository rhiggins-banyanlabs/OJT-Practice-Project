import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="pt-[80px]"> {/* to prevent content under fixed header */}
        <Hero />
        <Features />
        <Footer />
      </main>
    </>
  );
};

export default App;
