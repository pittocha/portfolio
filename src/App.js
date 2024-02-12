import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import AboutMe from './components/AboutMe/AboutMe';
import Competences from './components/skills/Competences';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Competences />
      <header className="App-header">
        😶‍🌫️
      </header>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
