// src/pages/Home.jsx
import React, { useState } from 'react';
import heroImage from '../assets/first.png';
import fonImage from '../assets/fifth.png';
import imgJapan from '../assets/first.png';
import imgMinimal from '../assets/second.png';
import imgModern from '../assets/third.png';
import imgScandi from '../assets/forth.png';

export default function Home() {
  // Состояния для выбора стиля и комнаты
  const [selectedStyle, setSelectedStyle] = useState('Джапанди');
  const [selectedRoom, setSelectedRoom] = useState('Гостиная');

  // Массивы с данными
  const styles = [
    { id: 'Джапанди', desc: 'Дерево, лен и мягкий свет', img: imgJapan },
        { id: 'Минимализм', desc: 'Простые формы, ничего лишнего', img: imgMinimal },
        { id: 'Современный', desc: 'Чистые линии, выразительные детали', img: imgModern },
        { id: 'Скандинавский', desc: 'Светлые тона, уютные фактуры', img: imgScandi }
      ];

  const rooms = ['Гостиная', 'Спальня', 'Кухня', 'Кабинет', 'Ванная'];

  // Функции для плавной прокрутки
  const scrollToCreate = () => {
    document.getElementById('create-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToModel = () => {
    document.getElementById('model-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className="main-content">
        <section className="text-section">
          <div className="subtitle">3D-модель вашей комнаты по фото</div>
          <h2 className="title">
            Ваша комната.<br />Новый облик.
          </h2>
          <p className="description">
            Загрузите фото своей комнаты, укажите размеры и выберите стиль. 
            Облик создаст 3D-модель, чтобы вы увидели пространство по-новому.
          </p>
          <div className="action-section">
            <button className="primary-btn" onClick={scrollToCreate}>
              Создать 3D-модель
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
            <p className="hint">Для начала: фото, замеры и ваше настроение</p>
          </div>
          <div className="features">
            <span><span className="check">✓</span> Ваше фото</span>
            <span><span className="check">✓</span> Ваши размеры</span>
            <span><span className="check">✓</span> Ваш стиль</span>
          </div>
        </section>

        <section className="image-section">
          <div className="image-wrapper">
            <img src={heroImage} alt="Джапанди интерьер" />
            <div className="image-label">
              <h3>Джапанди для гостиной</h3>
              <p>Дуб, лён и мягкий дневной свет</p>
            </div>
          </div>
          <div className="image-footer">
            <span>Иллюстрация стиля - не проект клиента</span>
            <span>Пространство для вашей идеи</span>
          </div>
        </section>
      </main>

      <section id="create-section" className="create-page">
        <div className="create-header">
          <div>
            <div className="create-subtitle">Начните здесь</div>
            <h2 className="create-title">Придайте комнате новый облик</h2>
          </div>
          <p className="create-description">
            Фото и размеры задают пространство. Выбранный стиль — настроение будущей 3D-модели.
          </p>
        </div>

        <div className="create-grid">
          <div className="step-card">
            <div className="step-title"><span className="step-num">01</span> Ваша комната</div>
            <div className="upload-area">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#701D22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '12px'}}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <div className="upload-title">Добавьте фото своей комнаты</div>
              <div className="upload-desc">Перетащите фотографию сюда или выберите её на устройстве</div>
              <button className="upload-btn">
                Выбрать фото
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </button>
              <div className="upload-hint">Фото обязательно для создания модели</div>
            </div>

            <div className="input-group">
              <div className="input-label">Тип помещения</div>
              <div className="room-buttons">
                {rooms.map(room => (
                  <button 
                    key={room}
                    className={`room-btn ${selectedRoom === room ? 'active' : ''}`}
                    onClick={() => setSelectedRoom(room)}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </div>

            <div className="input-group">
              <div className="input-label">Размеры комнаты</div>
              <div className="dimensions-grid">
                <div className="dim-input">
                  <span>Ширина</span>
                  <input type="text" placeholder="—" /> <span className="unit">м</span>
                </div>
                <div className="dim-input">
                  <span>Длина</span>
                  <input type="text" placeholder="—" /> <span className="unit">м</span>
                </div>
                <div className="dim-input">
                  <span>Высота</span>
                  <input type="text" placeholder="—" /> <span className="unit">м</span>
                </div>
              </div>
              <div className="dim-hint">Укажите реальные замеры в метрах. Размеры задаёте вы — фотография их не заменяет.</div>
            </div>
          </div>

          <div className="styles-section" id="styles">
            <div className="styles-header">
              <div className="step-title"><span className="step-num">02</span> Выберите стиль</div>
              <div className="styles-count">4 направления</div>
            </div>
            
            <div className="styles-grid">
              {styles.map(style => (
                <div 
                  key={style.id}
                  className={`style-card ${selectedStyle === style.id ? 'active' : ''}`}
                  onClick={() => setSelectedStyle(style.id)}
                >
                  <div className="style-img-wrapper">
                    <img src={style.img} alt={style.id} />
                    <div className={`check-circle ${selectedStyle === style.id ? 'active' : ''}`}>
                      {selectedStyle === style.id && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="style-info">
                    <div className="style-top">
                      <div className="style-name">{style.id}</div>
                      {selectedStyle === style.id && <div className="style-selected-label">Выбран</div>}
                    </div>
                    <div className="style-desc">{style.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="bottom-left">
            <div className="bottom-label">ВЫБРАННЫЙ СТИЛЬ</div>
            <div className="bottom-title">{selectedRoom} · {selectedStyle}</div>
          </div>
          <div className="bottom-center">
            <div className="bottom-step">Добавьте фото и заполните размеры</div>
            <div className="bottom-substep">После создания модель появится в области ниже.</div>
          </div>
          <div className="bottom-right">
            <button className="primary-btn" onClick={scrollToModel}>
              Создать 3D-модель
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section id="model-section" className="model-page">
        <div className="model-header">
          <div className="step-title"><span className="step-num">03</span> Ваша 3D-модель</div>
          <div className="model-status">Ожидает фото и размеров</div>
        </div>

        <div className="model-card">
          <div className="model-info">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#701D22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '24px'}}>
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <h2 className="model-title">Здесь появится новый облик вашей комнаты</h2>
            <p className="model-desc">
              После нажатия «Создать 3D-модель» здесь будет результат по вашей фотографии, указанным размерам и выбранному стилю.
            </p>
            <p className="model-note">
              Справа — демонстрационная иллюстрация, а не интерактивный просмотр модели.
            </p>
          </div>
          
          <div className="model-image-wrapper">
            <div className="model-badge">Демонстрационная иллюстрация</div>
            <img 
              src={fonImage}
              alt="Демонстрация 3D-модели" 
            />
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how">
        <div className="hiw-header">
          <h2 className="hiw-title">От вашей фотографии к 3D-модели</h2>
          <div className="hiw-subtitle">ТРИ ПОНЯТНЫХ ШАГА</div>
        </div>
        
        <div className="hiw-grid">
          <div className="hiw-card">
            <div className="hiw-top">
              <div className="hiw-num">01</div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#701D22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h3 className="hiw-card-title">Фото и замеры</h3>
            <p className="hiw-card-desc">Загрузите фотографию своей комнаты. Укажите тип помещения, ширину, длину и высоту в метрах.</p>
          </div>

          <div className="hiw-card">
            <div className="hiw-top">
              <div className="hiw-num">02</div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#701D22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <h3 className="hiw-card-title">Стиль, который вам близок</h3>
            <p className="hiw-card-desc">Посмотрите фотокаталог и выберите направление. Цвета, формы и фактуры помогут представить настроение.</p>
          </div>

          <div className="hiw-card">
            <div className="hiw-top">
              <div className="hiw-num">03</div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#701D22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 className="hiw-card-title">3D-модель вашей комнаты</h3>
            <p className="hiw-card-desc">Создайте модель и оцените новый облик пространства. Используйте результат как отправную точку для решений.</p>
          </div>
        </div>
      </section>

      <section className="before-after" id="examples">
        <div className="ba-header">
          <div>
            <div className="create-subtitle">Фото и новый стиль</div>
            <h2 className="create-title">Та же комната.<br />Другое настроение.</h2>
          </div>
          <p className="ba-desc">
            Фотография задаёт исходное пространство, размеры — его масштаб, а стиль — направление для новой 3D-модели.
          </p>
        </div>

        <div className="ba-grid">
          <div className="ba-card">
            <div className="ba-image-wrapper">
              <div className="ba-badge">До · исходное фото</div>
              <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop" alt="Исходная комната" />
            </div>
          </div>

          <div className="ba-card">
            <div className="ba-image-wrapper">
              <div className="ba-badge">После · иллюстрация стиля</div>
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" alt="Новый стиль комнаты" />
            </div>
          </div>
        </div>

        <div className="ba-footer">
          <div>
            <div className="ba-footer-title">Гостиная → Джапанди</div>
            <div className="ba-footer-subtitle">Натуральные материалы и мягкие формы</div>
          </div>
          <div className="ba-footer-note">
            Демонстрационный пример до и после, не проект клиента и не интерактивная 3D-модель. Ваш результат будет создан по вашей фотографии, размерам и выбранному стилю.
          </div>
        </div>
      </section>

      <section className="features-limits">
        <div className="fl-container">
          <div className="fl-header">
            <div>
              <div className="create-subtitle">Возможности и границы</div>
              <h2 className="create-title">Увидеть идею — прежде,<br />чем менять пространство</h2>
            </div>
            <p className="fl-desc">
              3D-модель помогает оценить стиль и настроение комнаты. Она не заменяет рабочий проект для ремонта.
            </p>
          </div>

          <div className="fl-grid">
            <div className="fl-col">
              <h3 className="fl-col-title">Что даёт Облик</h3>
              <div className="fl-list">
                <div className="fl-item">
                  <div className="fl-icon">✓</div>
                  <div>
                    <div className="fl-item-title">3D-модель по вашему фото</div>
                    <div className="fl-item-desc">Ваша комната, указанные размеры и выбранный стиль задают основу нового облика.</div>
                  </div>
                </div>
                <div className="fl-item">
                  <div className="fl-icon">✓</div>
                  <div>
                    <div className="fl-item-title">Визуальный ориентир</div>
                    <div className="fl-item-desc">Посмотрите, какое настроение создают цвета, формы и сочетания материалов.</div>
                  </div>
                </div>
                <div className="fl-item">
                  <div className="fl-icon">✓</div>
                  <div>
                    <div className="fl-item-title">Основа для обсуждения</div>
                    <div className="fl-item-desc">Используйте модель, чтобы объяснить идею и выбрать направление вместе с близкими или специалистом.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="fl-col fl-col-border">
              <h3 className="fl-col-title">Что проверить перед ремонтом</h3>
              <div className="fl-list">
                <div className="fl-item">
                  <div className="fl-icon fl-icon-minus">—</div>
                  <div>
                    <div className="fl-item-title">Замеры и планировку</div>
                    <div className="fl-item-desc">Проверьте реальные размеры, расположение проёмов и возможность выбранной планировки.</div>
                  </div>
                </div>
                <div className="fl-item">
                  <div className="fl-icon fl-icon-minus">—</div>
                  <div>
                    <div className="fl-item-title">Материалы и мебель</div>
                    <div className="fl-item-desc">Уточните характеристики и доступность решений, которые хотите использовать.</div>
                  </div>
                </div>
                <div className="fl-item">
                  <div className="fl-icon fl-icon-minus">—</div>
                  <div>
                    <div className="fl-item-title">Технические решения</div>
                    <div className="fl-item-desc">Инженерию, безопасность и возможность изменений обсудите со специалистом.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-left">
            <div className="create-subtitle">Перед первым шагом</div>
            <h2 className="create-title">Вопросы о новом<br />облике</h2>
            <p className="faq-desc">Самое важное о фотографии, замерах и результате — до создания первой модели.</p>
          </div>

          <div className="faq-right">
            <div className="faq-item">
              <h3 className="faq-q">Нужно ли загружать фото своей комнаты?</h3>
              <p className="faq-a">Да, фотография обязательна. Также укажите тип помещения, его размеры и выберите стиль — это основа вашей 3D-модели.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">Какое фото лучше выбрать?</h3>
              <p className="faq-a">Выберите светлый и чёткий общий вид комнаты, на котором хорошо видны стены, пол и основные предметы. Избегайте сильных искажений.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">Откуда берутся размеры комнаты?</h3>
              <p className="faq-a">Ширину, длину и высоту в метрах задаёте вы. Сделайте замеры заранее: одно фото не заменяет измерение пространства.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">Как выбрать стиль и что я получу?</h3>
              <p className="faq-a">Ориентируйтесь на фотокарточки и близкое вам настроение. После создания вы получите 3D-модель комнаты по фото, размерам и выбранному стилю.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">Можно ли сразу делать ремонт по модели?</h3>
              <p className="faq-a">Модель помогает увидеть идею, но не заменяет рабочий проект. Перед ремонтом проверьте замеры, планировку и технические решения со специалистом.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}