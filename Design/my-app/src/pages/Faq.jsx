// src/pages/Faq.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Faq() {
  const [activeTopic, setActiveTopic] = useState('Фотография');
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);

  // Данные для левого меню (номера тем: 01, 02, 03, 04)
  const topics = [
    { id: 'Фотография', num: '01', count: 3 },
    { id: 'Размеры', num: '02', count: 3 },
    { id: 'Выбор стиля', num: '03', count: 3 },
    { id: 'Результат', num: '04', count: 3 },
  ];

  // ГЛАВНЫЙ ОБЪЕКТ С ДАННЫМИ: вопросы для каждой темы
  const faqContent = {
    'Фотография': {
      subtitle: 'Основа вашей модели',
      questions: [
        { q: 'Нужно ли загружать фото своей комнаты?', a: 'Да, фотография обязательна. Также укажите тип помещения, его размеры и выберите стиль — это основа вашей 3D-модели.' },
        { q: 'Какое фото лучше выбрать?', a: 'Выберите светлый и чёткий общий вид комнаты, на котором хорошо видны стены, пол и основные предметы. Избегайте сильных искажений.' },
        { q: 'Что должно быть видно в кадре?', a: 'В кадр должны попадать основные стены, пол и крупные предметы мебели. Старайтесь не обрезать важные части пространства.' }
      ]
    },
    'Размеры': {
      subtitle: 'Реальные замеры в метрах',
      questions: [
        { q: 'Откуда берутся размеры комнаты?', a: 'Ширину, длину и высоту в метрах задаёте вы. Сделайте замеры заранее: одно фото не заменяет измерение пространства.' },
        { q: 'Какие размеры нужно подготовить?', a: 'Измерьте ширину и длину комнаты между стенами, а также высоту от пола до потолка. Введите реальные значения в метрах.' },
        { q: 'Можно ли обойтись только фотографией?', a: 'Нет, фотография не заменяет замеры. Без точных размеров модель не будет соответствовать реальному пространству.' }
      ]
    },
    'Выбор стиля': {
      subtitle: 'Направление для новой идеи',
      questions: [
        { q: 'Как выбрать стиль и что я получу?', a: 'Ориентируйтесь на фотокарточки и близкое вам настроение. После создания вы получите 3D-модель комнаты по фото, размерам и выбранному стилю.' },
        { q: 'Какие направления есть в каталоге?', a: 'Джапанди, Минимализм, Современный и Скандинавский. Сравните цвета, формы и фактуры: фотографии помогают понять характер каждого стиля.' },
        { q: 'Будет ли результат точной копией фотокарточки?', a: 'Нет, фотографии в каталоге — это иллюстрации настроения. Ваша модель будет создана на основе вашей комнаты, но с учётом выбранного стиля.' }
      ]
    },
    'Результат': {
      subtitle: 'Возможности и границы',
      questions: [
        { q: 'Где появится моя 3D-модель?', a: 'После нажатия «Создать 3D-модель» результат появится в области «Ваша 3D-модель». Он будет основан на загруженном фото, указанных размерах и выбранном стиле.' },
        { q: 'Можно ли сразу делать ремонт по модели?', a: 'Модель помогает увидеть идею, но не заменяет рабочий проект. Перед ремонтом проверьте замеры, планировку и технические решения со специалистом.' },
        { q: 'Изображения на сайте — это проекты клиентов?', a: 'Нет, все изображения на сайте — это демонстрационные иллюстрации стилей и примеры, а не реальные проекты клиентов.' }
      ]
    }
  };

  const currentContent = faqContent[activeTopic];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? -1 : index);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'inherit', color: '#302419' }}>
      
      {/* --- ЗАГОЛОВОК СТРАНИЦЫ --- */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#701D22', marginBottom: '20px' }}>
          Вопросы и ответы
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
          <h1 style={{ fontSize: '64px', lineHeight: '1.1', margin: 0, fontWeight: 'bold', maxWidth: '700px' }}>
            Всё важное —<br />до первого шага
          </h1>
          <p style={{ maxWidth: '350px', fontSize: '16px', lineHeight: '1.5', color: '#666', margin: 0 }}>
            Разбираемся с фотографией, замерами, выбором стиля и результатом. Простые ответы, чтобы начать с понятными ожиданиями.
          </p>
        </div>
      </div>

      {/* --- ОСНОВНОЙ БЛОК (Сайдбар + Аккордеон) --- */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', marginBottom: '80px', alignItems: 'flex-start' }}>
        
        {/* ЛЕВЫЙ САЙДБАР */}
        <div style={{ flex: '1 1 250px', maxWidth: '300px' }}>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#888', marginBottom: '20px' }}>
            Выберите тему
          </div>
          
          {/* Список тем */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => { setActiveTopic(topic.id); setOpenQuestionIndex(0); }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  border: activeTopic === topic.id ? '1px solid #701D22' : '1px solid #eee',
                  backgroundColor: activeTopic === topic.id ? '#fcf8f8' : '#fff',
                  color: '#302419',
                  cursor: 'pointer',
                  fontSize: '15px',
                  transition: 'all 0.2s',
                  textAlign: 'left'
                }}
              >
                {topic.id}
                <span style={{ color: '#888', fontSize: '13px' }}>{topic.count}</span>
              </button>
            ))}
          </div>

          {/* Картинка и текст под ней */}
          <div style={{ marginTop: '50px' }}>
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop" 
              alt="Что подготовить" 
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
            />
            <h3 style={{ fontSize: '20px', fontWeight: 'normal', marginBottom: '10px' }}>Что подготовить?</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>
              Фото своей комнаты, ширину, длину и высоту в метрах. Тип помещения и стиль выберете в процессе.
            </p>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ (АККОРДЕОН) */}
        <div style={{ flex: '1 1 500px' }}>
          
          {/* Заголовок раздела (меняется при клике) */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
            <span style={{ fontSize: '16px', color: '#888' }}>
              {topics.find(t => t.id === activeTopic)?.num}
            </span>
            <div>
              <h2 style={{ fontSize: '28px', margin: '0 0 5px 0', fontWeight: 'normal' }}>{activeTopic}</h2>
              <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>{currentContent.subtitle}</p>
            </div>
          </div>

          {/* Список вопросов (меняется при клике) */}
          <div>
            {currentContent.questions.map((item, index) => {
              const isOpen = openQuestionIndex === index;
              
              return (
                <div key={index} style={{ borderBottom: '1px solid #eee' }}>
                  {/* Кнопка-заголовок вопроса */}
                  <button
                    onClick={() => toggleQuestion(index)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '20px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '18px',
                      color: '#302419',
                      fontWeight: isOpen ? '500' : 'normal',
                      transition: 'all 0.2s'
                    }}
                  >
                    {item.q}
                    <span style={{ fontSize: '24px', fontWeight: 'light', color: isOpen ? '#701D22' : '#888' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  
                  {/* Блок с ответом */}
                  {isOpen && (
                    <div style={{ paddingBottom: '20px', fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- БЛОК ПРИЗЫВ К ДЕЙСТВИЮ (ВНИЗУ) --- */}
      <div style={{ backgroundColor: '#f7f4f0', padding: '40px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '28px', margin: '0 0 10px 0', fontWeight: 'normal' }}>Всё начинается с вашей комнаты</h2>
          <p style={{ color: '#666', margin: 0 }}>
            Подготовьте фотографию и замеры, выберите близкий стиль — и посмотрите на пространство по-новому.
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