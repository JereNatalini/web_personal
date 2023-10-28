//Enrutamiento

import React from "react";
import {Link} from 'react-router-dom'

const Menu = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/encuesta/crear">Crear encuesta</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;