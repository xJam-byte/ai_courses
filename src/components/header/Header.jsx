import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="hero-section">
            <h1>Изучи и <span className="highlight">пойми</span> <br /> Искусственный интеллект</h1>
            <p>Смотри материал когда захочешь и где захочешь</p>
            <button>Подробнее</button>
        </header>
    );
};

export default Header;
