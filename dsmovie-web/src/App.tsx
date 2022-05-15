import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/navbar';
import Listing from 'pages/listing';
import Form from 'pages/form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Listing />} />
        <Route path='/form'>
          <Route path=':movieId' element={<Form />} />
        </Route>
        <Route path='*' element={<Listing />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
