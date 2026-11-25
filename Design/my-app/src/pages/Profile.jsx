// src/pages/Profile.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
  // Получаем данные пользователя из памяти браузера (или ставим заглушку)
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Имя Пользователя', email: 'username@gmail.com' };
  const [searchQuery, setSearchQuery] = useState('');

  // Данные для карточек проектов (демонстрация)
  const projects = [
    { title: 'Гостиная в новом свете', style: 'Гостиная · Джапанди', date: '10 ноября 2026', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop' },
    { title: 'Спальня для отдыха', style: 'Спальня · Минимализм', date: '8 ноября 2026', img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop' },
    { title: 'Кухня без лишнего', style: 'Кухня · Современный', date: '5 ноября 2026', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=600&auto=format&fit=crop' }
  ];
// Фильтруем проекты: ищем совпадения по названию, стилю или дате
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.style.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    
    <div style={{ backgroundColor: '#F8F5F2', minHeight: '100vh', paddingBottom: '60px' }}>
        
      {/* --- ВЕРХНИЙ БАННЕР --- */}
      <div style={{ backgroundColor: '#F6F3EE', padding: '40px 80px', borderBottom: '1px solid #E5DED5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#701D22', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Личное пространство</div>
            <h1 style={{ fontSize: '48px', margin: '0 0 10px 0', fontWeight: 'normal', color: '#302419' }}>С возвращением, {user.name}!</h1>
            <p style={{ color: '#666', margin: 0 }}>Ваши комнаты, любимые стили и новые идеи — всё в одном месте.</p>
          </div>
          <Link to="/create" style={{ padding: '15px 30px', backgroundColor: '#701D22', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            Создать 3D-модель
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* --- ОСНОВНОЙ КОНТЕНТ (САЙДБАР + ПРОЕКТЫ) --- */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        
        {/* ЛЕВЫЙ САЙДБАР */}
        <div style={{ width: '280px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Карточка профиля */}
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #E5DED5' }}>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px', textTransform: 'uppercase' }}>Ваш профиль</div>
            <div style={{ fontSize: '20px', fontWeight: '600', color: '#302419', marginBottom: '4px' }}>{user.name}</div>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>{user.email}</div>
            <Link to="/settings" style={{ background: 'none', border: 'none', padding: 0, color: '#701D22', fontSize: '14px', cursor: 'pointer', fontWeight: '500', textDecoration: 'none' }}>Редактировать профиль</Link>
          </div>

          {/* Навигация по кабинету */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link to="/profile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: '#302419', padding: '16px 20px', backgroundColor: '#F5ECEA', borderLeft: '3px solid #701D22', borderRadius: '8px', fontSize: '15px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                Мои проекты
              </span>
              <span style={{ color: '#888', fontSize: '13px' }}>3</span>
            </Link>
            <Link to="/favorites" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: '#302419', padding: '16px 20px', borderRadius: '8px', fontSize: '15px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                Избранное
              </span>
              <span style={{ color: '#888', fontSize: '13px' }}>3</span>
            </Link>
            <Link to="/settings" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: '#302419', padding: '16px 20px', borderRadius: '8px', fontSize: '15px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                Настройки
              </span>
            </Link>
          </nav>

          {/* Рекламный блок "Новый облик" */}
          <div style={{ backgroundColor: '#F6F3EE', padding: '24px', borderRadius: '12px', marginTop: '10px' }}>
            <h3 style={{ fontSize: '18px', margin: '0 0 10px 0', fontWeight: 'normal', color: '#302419' }}>Новый облик — с одного фото</h3>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '16px' }}>Загрузите фото комнаты — и попробуйте другой стиль.</p>
            <Link to="/how-it-works" style={{ color: '#701D22', fontSize: '14px', textDecoration: 'none', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Как это работает 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </Link>
          </div>

          {/* Кнопка выхода */}
          <button 
            onClick={() => { localStorage.removeItem('user'); window.location.href = '/'; }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', color: '#666', padding: '10px 20px', cursor: 'pointer', fontSize: '14px', marginTop: '10px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Выйти из аккаунта
          </button>
        </div>

        {/* ПРАВАЯ ЧАСТЬ (СПИСОК ПРОЕКТОВ) */}
        <div style={{ flexGrow: 1 }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
            <div>
              <h2 style={{ fontSize: '32px', margin: '0 0 10px 0', fontWeight: 'normal', color: '#302419' }}>Мои проекты</h2>
              <p style={{ color: '#666', margin: 0 }}>Возвращайтесь к результатам и пробуйте новые варианты.</p>
            </div>
          </div>

          {/* Панель поиска и фильтров */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, position: 'relative', minWidth: '250px' }}>
              <svg style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
               <input 
  type="text" 
  placeholder="Найти проект" 
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '8px', border: '1px solid #E5DED5', backgroundColor: '#fff', outline: 'none', fontSize: '15px' }} 
/>
            </div>
            <button style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', backgroundColor: '#701D22', color: '#fff', fontSize: '15px', cursor: 'pointer' }}>Все проекты · 3</button>
            <button style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #E5DED5', backgroundColor: '#fff', color: '#302419', fontSize: '15px', cursor: 'pointer' }}>Готовые · 3</button>
            <select style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #E5DED5', backgroundColor: '#fff', color: '#302419', fontSize: '15px', outline: 'none', marginLeft: 'auto' }}>
              <option>По дате создания</option>
            </select>
          </div>

          {/* Сетка карточек проектов */}
          {filteredProjects.length === 0 && (
  <div style={{ textAlign: 'center', color: '#888', padding: '40px 0', fontSize: '16px' }}>
    По запросу "{searchQuery}" ничего не найдено.
  </div>
)}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {filteredProjects.map((project, index) => (
              <div key={index} style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #E5DED5', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '180px' }}>
                  <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: '#fff', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '500' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#302419" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Готово
                  </div>
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '18px', margin: '0 0 8px 0', fontWeight: '500', color: '#302419' }}>{project.title}</h3>
                  <p style={{ fontSize: '13px', color: '#666', margin: '0 0 15px 0' }}>{project.style}</p>
                  <p style={{ fontSize: '12px', color: '#999', marginBottom: '20px' }}>{project.date}</p>
                  
                  <button style={{ marginTop: 'auto', width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #E5DED5', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '14px' }}>
                    Открыть
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#701D22" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}