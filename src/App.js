import search from './common/Search.ico'
import Card from "./components/Card/Card";
import ShoppingBag from "./components/ShoppingBag";
import Header from "./components/Header";
import image from './common/Sneakers/1.jpeg'
import image2 from './common/Sneakers/2.jpeg'
import image3 from './common/Sneakers/3.jpeg'
import image4 from './common/Sneakers/4.jpeg'


const state = [
    {
        title: 'Lorem Lorem Lorem Lorem v Lorem',
        imageUrl: image,
        price: 199
    },
    {
        title: 'Lorem Lorem Lorem Lorem v Lorem',
        imageUrl: image2,
        price: 299
    },
    {
        title: 'Lorem Lorem Lorem Lorem v Lorem',
        imageUrl: image3,
        price: 279
    },
    {
        title: 'Lorem Lorem Lorem Lorem v Lorem',
        imageUrl: image4,
        price: 399
    },
    {
        title: 'Lorem Lorem Lorem Lorem v Lorem',
        imageUrl: image3,
        price: 279
    },
    {
        title: 'Lorem Lorem Lorem Lorem v Lorem',
        imageUrl: image,
        price: 199
    },
    {
        title: 'Lorem Lorem Lorem Lorem v Lorem',
        imageUrl: image2,
        price: 299
    },
]

function App() {
    return (
        <div className="wrapper clear">

            <ShoppingBag/>
            <Header/>


            <div className="content p-40">
                <div className='d-flex align-center mb-40 justify-between'>
                    <h1>All Sneakers</h1>
                    <div className='search-block d-flex'>
                        <img src={search} alt="search" className='search-icon'/>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>


                <div className='d-flex flex-wrap '>
                    {state.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                        />
                    ))}


                </div>


            </div>
        </div>
    );
}

export default App;
