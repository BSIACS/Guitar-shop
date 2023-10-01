// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { ProductsListPage } from '../pages/product-list/product-list.page';
import { LoginPage } from '../pages/login/login.page';
import { PrivateRouteComponent } from '../components/private-route/private-route.component';
import { AuthorizationStatus } from '../types/authorization-status.enum';
import { RegistrationPage } from '../pages/registration/registration.page';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginPage/>}/>
        <Route path={'/registration'} element={<RegistrationPage/>}/>
        <Route path={'/product-list'} element={<PrivateRouteComponent authStatus={AuthorizationStatus.AUTH}><ProductsListPage/></PrivateRouteComponent>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
