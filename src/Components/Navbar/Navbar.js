import CartWidget from "../CardWitget/CardWitget"
const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Celulares</button> <br/>
                <button>tablets</button> <br/>
                <button>Notebooks</button> <br/>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar