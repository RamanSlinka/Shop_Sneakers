
import search from './common/Search.ico'
import Card from "./components/Card";
import ShoppingBag from "./components/ShoppingBag";
import Header from "./components/Header";

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


                <div className='d-flex flex-wrap mb-50'>
                    <Card/>

                    <Card/>
                    <Card/>
                    <Card/>

                </div>


            </div>
        </div>
    );
}

export default App;
