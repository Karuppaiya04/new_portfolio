import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';
function App() {
  return (
    <div>
       <Header />
      <Hero />
      <div className="my-1">
        <About />
      </div>
      <Project />
      <div className="my-1">
        <Resume />
      </div>
       <div className="my-1">
        <Contact />
      </div>
    </div>
  
  );
}


export default App;
