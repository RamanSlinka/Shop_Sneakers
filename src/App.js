import './App.css';
import logo from './common/logo-sneakers.png'
import cart from './common/cart-icon.jpg'
import user from './common/user-login.jpg'
import sneakers from './common/Sneakers/8.jpeg'
import plus from './common/plus-icon.png'
import search from './common/Search.ico'
import heartUnliked from './common/gray_heart.png'

function App() {
    return (
        <div className="wrapper clear">
            <header className='d-flex justify-between align-center p-40'>
                <div className='d-flex align-center'>
                    <img src={logo} className='logo'/>
                    <div className='descriptionShop'>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <p>Shop Sneakers</p>
                    </div>
                </div>
                <div className='headerRight'>
                    <ul className='d-flex'>
                        <li className='mr-30'>
                            <img src={cart} width={20} height={20}/>
                            <span>  1212 $</span>
                        </li>
                        <li>
                            <img src={user} height={20} width={20}/>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="content p-40">
                <div className='d-flex align-center mb-40 justify-between'>
                    <h1>All Sneakers</h1>
                    <div className='search-block d-flex'>
                        <img src={search} alt="search" className='search-icon'/>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>


                <div className='d-flex'>
                    <div className='card '>
                      <div className='favorite'>
                          <img src={heartUnliked} alt="heartUnliked" width={20}/>
                      </div>
                        <img src={sneakers} alt="sneakers" width={133} height={112}/>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, rerum!</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column '>
                                <span>Price: </span>
                                <b>399$</b>
                            </div>
                            <button className='button'>
                                <img src={plus} alt="plus" width={11}/>
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default App;
