import './App.css';
import Appointment from './components/Appointment';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Services from './components/Services';
import { useRef } from 'react';
// import Hero from './components/Hero'
function App() {
  const ref = useRef(0)
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="App mx-auto">
      
      <section className=" bg-container h-screen object-cover" style={{ backgroundImage:`linear-gradient(90deg,rgba(193,150, 190, .3),rgba(193,150, 190, .3)),url('img/dog-hero.jpg')`}}>
        <NavBar forwardedRef={ref} />
        <Hero/>
      </section>
       <Services forwardedRef={ref}/>
       <Appointment/>
    </div>
  );
}

export default App;
