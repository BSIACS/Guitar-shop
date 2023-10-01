// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { ProductsPage } from '../pages/products/products.page';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<ProductsPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
