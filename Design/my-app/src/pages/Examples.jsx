// src/pages/Examples.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Examples() {
  // Состояния для фильтров (в будущем их можно связать с фильтрацией карточек)
  const [selectedRoom, setSelectedRoom] = useState('Все комнаты');
  const [selectedStyle, setSelectedStyle] = useState('Все стили');

  const rooms = ['Все комнаты', 'Гостиная', 'Спальня', 'Кухня', 'Кабинет', 'Ванная'];
  const styles = ['Все стили', 'Джапанди', 'Минимализм', 'Современный', 'Скандинавский'];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'inherit', color: '#302419' }}>
      
      {/* --- ЗАГОЛОВОК СТРАНИЦЫ --- */}
      <div style={{ marginBottom: '50px' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#701D22', marginBottom: '20px' }}>
          Примеры
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
          <h1 style={{ fontSize: '64px', lineHeight: '1.1', margin: 0, fontWeight: 'bold', maxWidth: '700px' }}>
            Знакомое пространство.<br />Новое настроение.
          </h1>
          <p style={{ maxWidth: '350px', fontSize: '16px', lineHeight: '1.5', color: '#666', margin: 0 }}>
            Посмотрите, как материалы, свет и формы задают характер интерьера. Здесь собраны демонстрации стилей и пример до и после — не реальные клиентские проекты.
          </p>
        </div>
      </div>

      {/* --- ФИЛЬТРЫ --- */}
      <div style={{ marginBottom: '60px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* Фильтр по комнате */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '14px', color: '#888', width: '60px' }}>Комната</span>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {rooms.map(room => (
              <button
                key={room}
                onClick={() => setSelectedRoom(room)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: selectedRoom === room ? '1px solid #701D22' : '1px solid #ddd',
                  backgroundColor: selectedRoom === room ? '#fcf8f8' : 'transparent',
                  color: selectedRoom === room ? '#701D22' : '#302419',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.2s'
                }}
              >
                {room} {selectedRoom === room && '✓'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Фильтр по стилю */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '14px', color: '#888', width: '60px' }}>Стиль</span>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {styles.map(style => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: selectedStyle === style ? '1px solid #701D22' : '1px solid #ddd',
                  backgroundColor: selectedStyle === style ? '#fcf8f8' : 'transparent',
                  color: selectedStyle === style ? '#701D22' : '#302419',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.2s'
                }}
              >
                {style} {selectedStyle === style && '✓'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- СЕТКА ПРИМЕРОВ (Сложная сетка) --- */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '12px', textTransform: 'uppercase', color: '#888' }}>
        <span>Иллюстрации направлений</span>
        <span>5 интерьеров · 4 стиля</span>
      </div>

      {/* Сетка: используем Grid, где первая карточка занимает 2 строки и 2 колонки */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px', 
        marginBottom: '80px' 
      }}>
        
        {/* Большая карточка (1) - Гостиная Джапанди */}
        <div style={{ gridColumn: 'span 2', gridRow: 'span 2', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '550px', borderRadius: '16px', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop" alt="Гостиная Джапанди" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '20px', margin: '15px 0 5px 0', fontWeight: 'normal' }}>Гостиная · Джапанди</h3>
          <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Дуб, лён и мягкий дневной свет. Иллюстрация стиля.</p>
        </div>

        {/* Маленькая карточка (2) - Спальня Минимализм */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '260px', borderRadius: '16px', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop" alt="Спальня Минимализм" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '18px', margin: '15px 0 5px 0', fontWeight: 'normal' }}>Спальня · Минимализм</h3>
          <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Простые формы и тёплая нейтральная палитра.</p>
        </div>

        {/* Маленькая карточка (3) - Кабинет Скандинавский */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '260px', borderRadius: '16px', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop" alt="Кабинет Скандинавский" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '18px', margin: '15px 0 5px 0', fontWeight: 'normal' }}>Кабинет · Скандинавский</h3>
          <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Светлое дерево и уютные фактуры.</p>
        </div>

        {/* Карточка (4) - Кухня Современный */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '300px', borderRadius: '16px', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=600&auto=format&fit=crop" alt="Кухня Современный" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '18px', margin: '15px 0 5px 0', fontWeight: 'normal' }}>Кухня · Современный</h3>
          <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Чистые линии и выразительные детали.</p>
        </div>

        {/* Карточка (5) - Гостиная Джапанди (вариант 2) */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '300px', borderRadius: '16px', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop" alt="Гостиная Джапанди" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ fontSize: '18px', margin: '15px 0 5px 0', fontWeight: 'normal' }}>Гостиная · Джапанди</h3>
          <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>Натуральные материалы и мягкие формы.</p>
        </div>
      </div>


      {/* ================= БЛОК ДО / ПОСЛЕ ================= */}
      <div style={{ backgroundColor: '#f7f4f0', padding: '60px 40px', borderRadius: '24px', marginBottom: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#888', marginBottom: '15px' }}>Фото и новый стиль</div>
            <h2 style={{ fontSize: '40px', lineHeight: '1.1', margin: 0, fontWeight: 'normal' }}>
              Та же комната.<br />Другое настроение.
            </h2>
          </div>
          <p style={{ maxWidth: '350px', fontSize: '16px', lineHeight: '1.5', color: '#666', margin: 0 }}>
            Отдельный демонстрационный пример: исходное пространство и его иллюстрация в стиле Джапанди. Сравните настроение, фактуры и формы.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {/* ДО */}
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', zIndex: 10 }}>
              До · исходное фото
            </div>
            <img 
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop" 
              alt="До" 
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
            />
          </div>
          
          {/* ПОСЛЕ */}
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', zIndex: 10 }}>
              После · иллюстрация стиля
            </div>
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" 
              alt="После" 
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', display: 'block' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '20px', margin: '0 0 5px 0', fontWeight: 'normal' }}>Гостиная → Джапанди</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Натуральные материалы и мягкие формы</p>
          </div>
          <p style={{ fontSize: '13px', color: '#888', maxWidth: '450px', margin: 0, lineHeight: '1.5' }}>
            Демонстрационный пример до и после, не проект клиента и не интерактивная 3D-модель. Ваш результат будет создан по вашей фотографии, размерам и выбранному стилю.
          </p>
        </div>
      </div>

      {/* --- БЛОК ПРИЗЫВ К ДЕЙСТВИЮ (ВНИЗУ) --- */}
      <div style={{ backgroundColor: '#f7f4f0', padding: '40px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2 style={{ fontSize: '28px', margin: '0 0 10px 0', fontWeight: 'normal' }}>У вашей комнаты будет свой облик</h2>
          <p style={{ color: '#666', margin: 0, maxWidth: '600px' }}>
            Иллюстрации помогают выбрать направление. Для собственной 3D-модели понадобятся фото вашей комнаты и реальные размеры.
          </p>
        </div>
        <Link to="/create" style={{ padding: '15px 30px', backgroundColor: '#701D22', color: '#fff', textDecoration: 'none', borderRadius: '30px', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          Создать 3D-модель
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </Link>
      </div>

    </div>
  );
}