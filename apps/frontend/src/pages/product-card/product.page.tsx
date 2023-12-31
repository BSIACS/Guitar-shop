import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { HiddenBlock } from '../../components/hidden-block/hidden-block';

export function ProductPage(): JSX.Element {


  return (
    <>
      <HiddenBlock/>
      <Header/>
      <div className="wrapper">
        <header className="header--admin header" id="header">
          <div className="container">
            <div className="header__wrapper"><a className="header__logo logo" href="main.html"><img className="logo__img" width="70"
              height="70" src="./img/svg/logo.svg" alt="Логотип"></img></a>
              <nav className="main-nav">
                <ul className="main-nav__list">
                  <li className="main-nav__item"><a className="link main-nav__link" href="main">Каталог</a>
                  </li>
                  <li className="main-nav__item"><a className="link main-nav__link" href="#">Список товаров</a>
                  </li>
                </ul>
              </nav>
              <div className="header__container"><span className="header__user-name">Имя</span><a className="header__link"
                href="login.html" aria-label="Перейти в личный кабинет">
                <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-account"></use>
                </svg><span className="header__link-text">Вход</span></a><a className="header__cart-link" href="cart.html" aria-label="Перейти в корзину">
                  <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
                    <use xlinkHref="#icon-basket"></use>
                  </svg><span className="header__cart-count">2</span></a></div>
            </div>
          </div>
        </header>
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">Товар</h1>
            <ul className="breadcrumbs page-content__breadcrumbs">
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Главная</a>
              </li>
              <li className="breadcrumbs__item"><a className="link" href="./main.html">Каталог</a>
              </li>
              <li className="breadcrumbs__item"><a className="link">Товар</a>
              </li>
            </ul>
            <div className="product-container">
              <img className="product-container__img" src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="90" height="235" alt=""></img>
              <div className="product-container__info-wrapper">
                <h2 className="product-container__title title title--big title--uppercase">СURT Z30 Plus</h2>
                <section>
                  <div>
                    <div className="tabs"><a className="button button--medium tabs__button" href="#characteristics">Характеристики</a><a
                      className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
                      <div className="tabs__content" id="characteristics">
                        <table className="tabs__table">
                          <tr className="tabs__table-row">
                            <td className="tabs__title">Артикул:</td>
                            <td className="tabs__value">SO754565</td>
                          </tr>
                          <tr className="tabs__table-row">
                            <td className="tabs__title">Тип:</td>
                            <td className="tabs__value">Электрогитара</td>
                          </tr>
                          <tr className="tabs__table-row">
                            <td className="tabs__title">Количество струн:</td>
                            <td className="tabs__value">6 струнная</td>
                          </tr>
                        </table>
                        <p className="tabs__product-description hidden">Гитара подходит как для старта обучения, так и для домашних
                          занятий или использования в полевых условиях, например, в походах или для проведения уличных
                          выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид,
                          который сделает вас звездой вечеринки.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  )
}
