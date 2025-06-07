import { Link } from "react-router-dom";

const Navbar = ({user}) =>{

    //npm install react-router-dom
    return(

        <nav>
            <ul>
                <li><Link to={"/"}> Home </Link></li>
                <li><Link to={"/sobre"}> Sobre </Link></li>
                <li><Link to={"/contato"}> Contato </Link></li>
                {user.role === "Admin" && <li><Link to={"/admin"}> Administrador </Link></li>}
            </ul>
            <div className="user-info">
                {user ? (
                    <span>Bem vindo, {user.name}!</span>
                ) : (
                    <span>voce nao esta logado.</span>
                )}

                
                
            </div>
        </nav>
    )

}

export default Navbar;