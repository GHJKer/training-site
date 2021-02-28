
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navigation';
import Profile from './components/Profile';


const App = () => {
  return (
    <section className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />
    </section>
  );
}

export default App;
