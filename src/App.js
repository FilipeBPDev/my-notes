import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Notas from './components/pages/Notas/Notas';
import NovaNota from './components/pages/NovaNota/NovaNota';
import Container from './components/layout/Container/Container';
import NavBar from './components/layout/NavBar/NavBar';
import TaskList from './components/pages/TaskList/TaskList';
import Footer from './components/layout/Footer/Footer';



function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="minHeight">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/anotações' element={<Notas />} />
          <Route exact path='/novanota' element={<NovaNota />} />
          <Route exact path='/tasklist' element={<TaskList />} />
        </Routes>

      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
