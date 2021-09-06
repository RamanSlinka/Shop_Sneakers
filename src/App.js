import './App.css';
import logo from './common/logo-sneakers.png'
import cart from './common/cart-icon.jpg'
import user from './common/user-login.jpg'
import sneakers from './common/Sneakers/8.jpeg'
import plus from './common/plus-icon.png'
import search from './common/Search.ico'
import heartUnliked from './common/gray_heart.png'
import removeBtn from './common/button-delete.jpg'
import arrow from './common/arrow.png'

function App() {
    return (
        <div className="wrapper clear">
            <div className='overlay'>
                <div className="drawer">
                    <h2 className='mb-30 d-flex justify-between'>Shopping Bag
                        <img src={removeBtn} alt="Remove" width={30} className='removeBtn cu-p'/>
                    </h2>

                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            <img src={sneakers} alt="sneakers" width={70} height={70} className='mr-20'/>
                            <div className='mr-20 flex' >
                                <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur.</p>
                                <b>299$</b>
                            </div>
                            <img src={removeBtn} alt="Remove" width={30} className='removeBtn'/>
                        </div>
                    </div>





                    <ul className='cartTotalBlock'>
                        <li >
                            <span>Total</span>
                            <div></div>
                            <b>11000$</b>
                        </li>
                        <li >
                            <span>Sale</span>
                            <div></div>
                            <b>5%</b>
                        </li>
                    </ul>
                    <button className='greenBtn'>Place an order
                    <img src={arrow} alt='arrow' width={20} className='arrow'/>
                    </button>
                </div>
            </div>


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
