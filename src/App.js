import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page404 from './pages/Page404';
import Header from './components/Header';
import Post from './pages/Posts';
import Categoria from './pages/Categoria';

function App() {

  // window.location.pathname manera vieja
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/sobre' element = {<Sobre></Sobre>}/>
        <Route path='posts/:id' element={<Post></Post>}/>
        <Route path = 'categoria/:id/*' element= { <Categoria/>}/>
        <Route path='*' element= {<Page404/>} />
      </Routes>
    </Router>
  );
}

export default App;
