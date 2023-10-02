// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { ProductsListPage } from '../pages/product-list/product-list.page';
import { LoginPage } from '../pages/login/login.page';
import { PrivateRouteComponent } from '../components/private-route/private-route.component';
import { RegistrationPage } from '../pages/registration/registration.page';
import { NotFoundPage } from '../pages/not-found/not-found.page';
import { ProductPage } from '../pages/product-card/product.page';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginPage/>}/>
        <Route path={'/registration'} element={<RegistrationPage/>}/>
        <Route path={'/product-list'} element={<PrivateRouteComponent><ProductsListPage/></PrivateRouteComponent>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
