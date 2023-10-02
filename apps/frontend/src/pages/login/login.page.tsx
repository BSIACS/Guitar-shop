import { Link, Navigate } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { useRef } from 'react';
import { loginThunk } from '../../store/slices/authorization.thunk';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AuthorizationStatus } from '../../types/authorization-status.enum';

export function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorization.authorizationStatus);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwaordInput = useRef<HTMLInputElement>(null);

  const onLoginButtonClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.stopPropagation();
    if(emailInput.current && passwaordInput.current){
      dispatch(loginThunk({email: emailInput.current.value, password: passwaordInput.current.value}));
    }
  }

  if(authorizationStatus === AuthorizationStatus.AUTH){
    return <Navigate to="/product-list"/>
  }

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content">
        <div className="container">
          <section className="login">
            <h1 className="login__title">Войти</h1>
            <p className="login__text">Hовый пользователь? <Link to={'registration'} className="login__link">Зарегистрируйтесь</Link> прямо сейчас</p>
            <div >
              <div className="input-login">
                <label htmlFor="email">Введите e-mail</label>
                <input type="email" id="email" name="email" autoComplete="off" ref={emailInput} required></input>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <div className="input-login">
                <label htmlFor="passwordLogin">Введите пароль</label><span>
                  <input type="password" placeholder="• • • • • • • • • • • •" id="passwordLogin" name="password" autoComplete="off" ref={passwaordInput} required></input>
                  <button className="input-login__button-eye" type="button">
                    <svg width="14" height="8" aria-hidden="true">
                      <use xlinkHref="#icon-eye"></use>
                    </svg>
                  </button></span>
                <p className="input-login__error">Заполните поле</p>
              </div>
              <button className="button login__button button--medium" onClick={onLoginButtonClick}>Войти</button>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
