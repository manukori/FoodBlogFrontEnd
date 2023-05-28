import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/SignUp"
import Signin from './components/SignIn';
import About from './components/about'
import Home from './components/home'
import Addpost from './components/addpost'
import Posts from './components/post'
import Singlepost from './components/singlepost';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Signup/>} path='/Sign-up' />
        <Route element={<Signin/>} path='/'/>
        <Route element={<Home/>} path="/homepage"/>
        <Route element={<About/>} path='/aboutPage'/>
        <Route element={<Addpost/>} path='/addpost' />
        <Route element={<Posts/>} path='/posts'/>
        <Route element={<Singlepost/>} path='/posts/:id'/>
        <Route element={<Footer/>} path='/footer'/>




      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

