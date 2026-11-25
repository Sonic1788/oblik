// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css'; // ВАЖНО: Подключение стилей

// Импорт страниц
import Create from './pages/Create';
import Home from './pages/Home';
import Styles from './pages/Styles';
import HowItWorks from './pages/HowItWorks';
import Examples from './pages/Examples';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));


  // Эффект для скрытия шапки при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функция для плавного скролла, если мы на главной
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
            {/* ШАПКА */}
      <header className={`header ${isScrolled ? 'header-hidden' : ''}`}>
        <Link to="/" className="logo-container" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-icon">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 40V18C6 11.3726 11.3726 6 18 6C24.6274 6 30 11.3726 30 18V40" stroke="#302419" strokeWidth="5"/>
              <path d="M6 40V18C6 11.3726 11.3726 6 18 6C24.6274 6 30 11.3726 30 18V40" stroke="#B19269" strokeWidth="2"/>
              <rect x="6" y="37" width="24" height="3" fill="#302419"/>
              <path d="M38 4L39 8L43 9L39 10L38 14L37 10L33 9L37 8L38 4Z" fill="#701D22" stroke="#302419" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1>облик</h1>
            <p>Интерьер по-новому</p>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/styles">Стили</Link>
          <Link to="/how-it-works">Как это работает</Link>
          <Link to="/examples">Примеры</Link>
          <Link to="/faq">Вопросы и ответы</Link>
        </nav>

        {user ? (
          <Link to="/profile" className="login-btn" style={{ textDecoration: 'none', color: 'inherit' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Мой кабинет
          </Link>
        ) : (
          <Link to="/login" className="login-btn" style={{ textDecoration: 'none', color: 'inherit' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Войти
          </Link>
        )}
      </header>

      {/* ЗДЕСЬ ПЕРЕКЛЮЧАЮТСЯ СТРАНИЦЫ */}
      <main className="main-content-wrapper" style={{ paddingTop: '100px', minHeight: '80vh' }}>
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/styles" element={<Styles />} />
  <Route path="/how-it-works" element={<HowItWorks />} />
  <Route path="/examples" element={<Examples />} />
  <Route path="/faq" element={<Faq />} />
  
  {/* Новые страницы для кабинета */}
  <Route path="/login" element={<Login />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/favorites" element={<Favorites />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/create" element={<Create />} />
</Routes>
      </main>

      
                {/* --- ФУТЕР --- */}
            {/* --- ФУТЕР --- */}
      <footer className="footer-wrapper">
        
        {/* 1. БОЛЬШОЙ CTA БЛОК (только для главной) */}
        {location.pathname === '/' && (
          <div className="footer-cta">
            <div className="cta-content">
              <div className="create-subtitle">Ваша комната, ваш стиль.</div>
              <h2 className="cta-title">Новый облик начинается с вашей комнаты</h2>
              <p className="cta-desc">Подготовьте фотографию и замеры, выберите стиль — и посмотрите на знакомое пространство по-новому.</p>
              <Link to="/create" className="primary-btn" style={{ display: 'inline-flex', textDecoration: 'none' }}>
                Создать 3D-модель
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
            <div className="cta-image">
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop" alt="Иллюстрация стиля" />
              <div className="cta-badge">Иллюстрация стиля</div>
            </div>
          </div>
        )}

        {/* 2. БЛОК С ЛОГОТИПОМ И ССЫЛКАМИ (только для главной) */}
        {location.pathname === '/' && (
          <div className="footer-main">
            <div className="footer-logo">
              <svg width="40" height="40" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 40V18C6 11.3726 11.3726 6 18 6C24.6274 6 30 11.3726 30 18V40" stroke="#302419" strokeWidth="5"/>
                <path d="M6 40V18C6 11.3726 11.3726 6 18 6C24.6274 6 30 11.3726 30 18V40" stroke="#B19269" strokeWidth="2"/>
                <rect x="6" y="37" width="24" height="3" fill="#302419"/>
                <path d="M38 4L39 8L43 9L39 10L38 14L37 10L33 9L37 8L38 4Z" fill="#701D22" stroke="#302419" strokeWidth="0.5"/>
              </svg>
              <div className="logo-text">
                <h1>облик</h1>
                <p>Интерьер по-новому</p>
              </div>
            </div>

            <nav className="footer-nav">
              <Link to="/styles">Стили</Link>
              <Link to="/how-it-works">Как это работает</Link>
              <Link to="/examples">Примеры</Link>
              <Link to="/faq">Вопросы и ответы</Link>
            </nav>

            <div className="footer-slogan">
              Интерьер по-новому
            </div>
          </div>
        )}

        {/* 3. САМЫЙ НИЖНИЙ РЯД (виден ВСЕГДА) */}
        <div className="footer-bottom">
          <div>© Облик, 2026</div>
          <div>Все изображения — примеры стилей и иллюстрации</div>
          <div className="footer-links">
            <a href="#privacy">Политика конфиденциальности</a>
            <a href="#terms">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;