
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Todos from './components/Todos/Todos';
import Wheather from './components/Wheather/Wheather';
import WheatherDetails from './components/Wheather/WheatherDetails';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Todos />} />
          <Route path='/wheather' element={<Wheather />} />
          <Route path='/wheather-details' element={<WheatherDetails />} />

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
