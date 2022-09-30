
import './App.css';
import Header from './components/Header/Header';

import Excercises from './components/Excercises/Excercises';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Excercises></Excercises>
      
    </div>
  );
}

export default App;
