import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__items">
                <li className="nav__item">
                    <Link className="nav__link" to="/">
                        Калькулятор
                    </Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/test?id=12&date=28.08.2020">
                        Тестовая
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
