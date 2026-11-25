// src/pages/Styles.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Если у вас есть локальные картинки, импортируйте их здесь, например:
// import imgJapan from '../assets/japan.jpg';

export default function Styles() {
  const [selectedRoom, setSelectedRoom] = useState('Гостиная');
  const [selectedStyle, setSelectedStyle] = useState('Джапанди');

  const navigate = useNavigate(); // <--- ДОБАВИТЬ ЭТУ СТРОКУ

  const rooms = ['Гостиная', 'Спальня', 'Кухня', 'Кабинет', 'Ванная'];

  // Данные для карточек (картинки пока оставил по ссылкам, замените на свои локальные)
  const stylesData = [
    {
      id: 'Джапанди',
      title: 'Джапанди',
      desc: 'Тёплая простота и естественная красота фактур.',
      materials: 'Дуб, лён, матовая керамика',
      palette: 'Молочный, песочный, тёмное дерево',
      mood: 'Спокойный, тактильный, собранный',
      img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop' // Замените на imgJapan
    },
    {
      id: 'Минимализм',
      title: 'Минимализм',
      desc: 'Простые формы, ничего лишнего.',
      materials: 'Гладкие поверхности, дерево, однотонный текстиль',
      palette: 'Тёплый белый, бежевый, мягкие контрасты',
      mood: 'Сдержанный, лёгкий, свободный',
      img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'Современный',
      title: 'Современный',
      desc: 'Чистые линии, выразительные детали.',
      materials: 'Дерево, камень, лаконичный металл',
      palette: 'Нейтральная основа и точечные акценты',
      mood: 'Ясный, функциональный, выразительный',
      img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'Скандинавский',
      title: 'Скандинавский',
      desc: 'Светлые тона, уютные фактуры.',
      materials: 'Светлое дерево, хлопок, мягкий текстиль',
      palette: 'Белый, серый и природные оттенки',
      mood: 'Светлый, домашний, непринуждённый',
      img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="styles-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'inherit' }}>
      
      {/* Заголовок */}
      <div className="styles-hero" style={{ marginBottom: '60px' }}>
        <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px', color: '#666' }}>
          Стили
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <h1 style={{ fontSize: '64px', lineHeight: '1.1', margin: 0, color: '#302419', fontWeight: 'bold' }}>
            Найдите настроение<br />вашей комнаты
          </h1>
          <p style={{ maxWidth: '400px', fontSize: '18px', lineHeight: '1.5', color: '#666', margin: 0 }}>
            Четыре направления — четыре способа увидеть знакомое пространство. Сравните материалы, цвета и формы и выберите то, что вам близко.
          </p>
        </div>
      </div>

      {/* Выбор комнаты */}
      <div className="room-selector" style={{ marginBottom: '40px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '15px', color: '#302419' }}>Для какой комнаты выбираем стиль?</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {rooms.map(room => (
            <button
              key={room}
              onClick={() => setSelectedRoom(room)}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                border: selectedRoom === room ? '1px solid #701D22' : '1px solid #ddd',
                backgroundColor: selectedRoom === room ? '#fcf8f8' : 'transparent',
                color: selectedRoom === room ? '#701D22' : '#302419',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {room} {selectedRoom === room && '✓'}
            </button>
          ))}
        </div>
        <p style={{ fontSize: '13px', color: '#888', marginTop: '15px' }}>
          Тип помещения — для вашей будущей модели. Фото ниже показывают характер каждого направления в разных комнатах.
        </p>
      </div>

      {/* Сетка карточек */}
      <div className="styles-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', 
        gap: '30px',
        marginBottom: '60px'
      }}>
        {stylesData.map((style) => {
          const isSelected = selectedStyle === style.id;
          return (
            <div 
              key={style.id} 
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                overflow: 'hidden',
                border: isSelected ? '1px solid #701D22' : '1px solid #eee',
                boxShadow: isSelected ? '0 10px 30px rgba(112, 29, 34, 0.05)' : 'none',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Картинка и кнопка */}
              <div style={{ position: 'relative', height: '300px' }}>
                <img 
                  src={style.img} 
                  alt={style.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <button 
                  onClick={() => setSelectedStyle(style.id)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: 'none',
                    backgroundColor: isSelected ? '#fcf8f8' : 'rgba(255,255,255,0.9)',
                    color: isSelected ? '#701D22' : '#302419',
                    fontWeight: '500',
                    cursor: 'pointer',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s'
                  }}
                >
                  {isSelected ? 'Выбран ✓' : 'Выбрать стиль'}
                </button>
              </div>

              {/* Текстовая часть */}
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h2 style={{ fontSize: '32px', margin: '0 0 10px 0', color: '#302419', fontWeight: 'normal' }}>{style.title}</h2>
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>{style.desc}</p>
                
                {/* Характеристики */}
                <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '15px 10px', fontSize: '14px' }}>
                    <span style={{ color: '#888' }}>Материалы</span>
                    <span style={{ color: '#302419' }}>{style.materials}</span>
                    
                    <span style={{ color: '#888' }}>Палитра</span>
                    <span style={{ color: '#302419' }}>{style.palette}</span>
                    
                    <span style={{ color: '#888' }}>Настроение</span>
                    <span style={{ color: '#302419' }}>{style.mood}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Нижний блок */}
      <div className="styles-footer" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
           <div>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888', marginBottom: '10px' }}>Прислушайтесь к себе</div>
              <h2 style={{ fontSize: '32px', margin: 0, color: '#302419', fontWeight: 'normal', lineHeight: '1.2' }}>
                Не название,<br />а ощущение дома
              </h2>
           </div>
           <div style={{ maxWidth: '500px', fontSize: '16px', color: '#666', lineHeight: '1.6' }}>
             <p style={{ marginBottom: '15px' }}>Сначала смотрите на свет и палитру, затем — на формы и материалы. Какой интерьер хочется рассматривать дольше?</p>
             <p>Иллюстрация помогает выбрать настроение, а не обещает точное повторение мебели и деталей. В основе вашей модели будут фото и реальные размеры вашей комнаты.</p>
           </div>
        </div>

        {/* Плашка с результатом */}
        <div style={{
          backgroundColor: '#f7f4f0',
          borderRadius: '16px',
          padding: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888', marginBottom: '5px' }}>Выбранный стиль</div>
            <div style={{ fontSize: '24px', color: '#302419' }}>{selectedRoom} · {selectedStyle}</div>
          </div>
          <div style={{ maxWidth: '400px', fontSize: '14px', color: '#666' }}>
            <p style={{ margin: 0, fontWeight: '500', color: '#302419' }}>Теперь — ваша комната</p>
            <p style={{ margin: '5px 0 0 0' }}>Для создания модели добавьте обязательное фото и укажите ширину, длину и высоту в метрах.</p>
          </div>
          <button
            onClick={() => navigate('/create')} /* <--- ИЗМЕНИТЬ ЗДЕСЬ */
            style={{
            padding: '15px 30px',
            backgroundColor: '#701D22',
            color: '#fff',
            border: 'none',
            borderRadius: '30px',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            Создать 3D-модель
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

        <p style={{ fontSize: '12px', color: '#999', marginTop: '20px' }}>
          Фотографии — ориентиры для выбора стиля, а не проекты клиентов или интерактивный 3D-просмотр.
        </p>
      </div>
    </div>
  );
}