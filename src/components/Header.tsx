import { useState } from 'react'
import logoImg from "@i/logo.svg";
import { router } from '../router';
import { NavLink } from "react-router-dom";

function Header() {
    const [active, setActive] = useState(0);

    return (
        <header className='header'>
            <div className="container">
                <div className="header__nav">
                    <a href="" className="logo"><img src={logoImg} alt="" /></a>
                    <ul className="header__list">
                        {
                            router.map((route, index) => {
                                return <li key={index}>
                                    <NavLink to={route.path} className="header__link" onClick={() => setActive(index)}>
                                        {route.name}
                                    </NavLink>
                                </li>
                            })
                        }
                        <span className={`circle ${active === 0 ? 'active' : active === 1 ? 'move2' : active === 2 ? 'move3' : active === 3 ? 'move4' : ''}`}></span>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header