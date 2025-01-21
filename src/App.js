
import './App.css';
import NavBar from './components/NavBar'; 
import Banner from './components/Banner';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <NavBar />
      <Banner /> 
      
      <Testimonials/>
    {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Moonlight Gems & Jewellery</h1>
    </div> */}
    <Categories/>
    <Footer/>
    </div>
  );
}

export default App;
