import Access from "./components/Access";
import CTA from "./components/CTA";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import References from "./components/References";
import Snippets from "./components/Snippets";
import Supercharge from "./components/Supercharge";

const App = () => {
  return (
    <main>
      <Hero />
      <Snippets />
      <Feature />
      <Access />
      <Supercharge />
      <References />
      <CTA />
      <Footer />
    </main>
  );
};
export default App;
