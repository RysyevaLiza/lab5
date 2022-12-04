import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div>
            <div className='start'>
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/"
                       className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src="https://zakazposterov.ru/fotooboi/z/fotooboi-e-42829-pegas-zakazposterov-ru_z.jpg" alt='' height='100'/>
                        <h1 style={{fontSize: '50px', margin: '15px'}}>PegasFly</h1>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 link-dark">Главная страница</Link></li>
                        <li><Link to="/about" className="nav-link px-2 link-dark">Отделения</Link></li>
                    </ul>

                </header>
            </div>
        </div>
    );
};

export default Header;