import React from 'react';
import './Header.css';
import logo from '../../images/svg/logo.svg';
import avatar from '../../images/svg/avanar-mini.svg'


const Header = () => {
	return (
		<header className='header'>
			<div className="wrapper">
				<div className="header-links">
					<div className="logo"><img src={logo} alt=""/></div>
					<div className="line"></div>
					<nav className='nav'>
						<ul>
							<li className='navlink'>
								Мой профиль
							</li>
						</ul>
					</nav>
				</div>
				<div className="avatar">
					<img src={avatar} alt=""/>
				</div>
			</div>
		</header>
	);
}

export default Header;
