// src/pages/HowItWorks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'inherit', color: '#302419' }}>
      
      {/* --- ЗАГОЛОВОК СТРАНИЦЫ --- */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#701D22', marginBottom: '20px' }}>
          Как это работает
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
          <h1 style={{ fontSize: '64px', lineHeight: '1.1', margin: 0, fontWeight: 'bold', maxWidth: '600px' }}>
            От вашей фотографии<br />к новому облику
          </h1>
          <p style={{ maxWidth: '350px', fontSize: '18px', lineHeight: '1.5', color: '#666', margin: 0 }}>
            Фото и размеры задают пространство. Выбранный стиль — настроение будущей 3D-модели. Разберём каждый шаг до начала работы.
          </p>
        </div>
      </div>

      {/* --- МИНИ-НАВИГАЦИЯ ПО ШАГАМ --- */}
      <div style={{ display: 'flex', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '20px 0', marginBottom: '60px', gap: '40px' }}>
        <div style={{ display: 'flex', gap: '10px', fontSize: '14px' }}><span style={{ color: '#888' }}>01</span> <span>Фото комнаты</span></div>
        <div style={{ display: 'flex', gap: '10px', fontSize: '14px' }}><span style={{ color: '#888' }}>02</span> <span>Размеры и стиль</span></div>
        <div style={{ display: 'flex', gap: '10px', fontSize: '14px' }}><span style={{ color: '#888' }}>03</span> <span>Ваша 3D-модель</span></div>
      </div>

      {/* ================= ШАГ 01 ================= */}
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', marginBottom: '100px', alignItems: 'flex-start' }}>
        {/* Левая колонка с текстом */}
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ fontSize: '32px', color: '#701D22', marginBottom: '10px' }}>01</div>
          <h2 style={{ fontSize: '32px', lineHeight: '1.2', marginBottom: '20px', fontWeight: 'normal' }}>Начните со своей комнаты</h2>
          <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
            Загрузите фотографию той комнаты, для которой хотите создать модель. Фото обязательно: оно задаёт исходное пространство.
          </p>
          
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Светлый и чёткий общий вид</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>В кадре должны быть видны стены, пол и основные предметы. Лучше снимать при хорошем дневном свете.</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Без сильных искажений</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>Держите камеру ровно. Избегайте размытия и ракурсов, в которых трудно понять форму комнаты.</p>
          </div>
        </div>

        {/* Правая колонка с картинкой и имитацией интерфейса */}
        <div style={{ flex: '1 1 500px', backgroundColor: '#f7f4f0', padding: '30px', borderRadius: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', textTransform: 'uppercase', color: '#888', marginBottom: '20px' }}>
            <span>Пример интерфейса</span>
            <span>Фото обязательно</span>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop" 
            alt="Пример комнаты" 
            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }}
          />

          {/* Карточка "Фото добавлено" */}
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ backgroundColor: '#f0eaea', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#701D22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '500' }}>Фото комнаты добавлено</div>
                  <div style={{ fontSize: '13px', color: '#888' }}>В вашем случае здесь будет загруженная фотография</div>
                </div>
             </div>
             <div style={{ color: '#701D22' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
             </div>
          </div>
          <div style={{ fontSize: '12px', color: '#888', marginTop: '15px' }}>На изображении — иллюстрация. Используйте собственное фото комнаты.</div>
        </div>
      </section>

      {/* ================= ШАГ 02 ================= */}
      {/* В дизайне этот шаг на сером фоне, поэтому обернем его в контейнер */}
      <section style={{ backgroundColor: '#f7f4f0', padding: '60px 40px', borderRadius: '24px', marginBottom: '100px', display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
        
        {/* Левая колонка */}
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ fontSize: '32px', color: '#701D22', marginBottom: '10px' }}>02</div>
          <h2 style={{ fontSize: '32px', lineHeight: '1.2', marginBottom: '20px', fontWeight: 'normal' }}>Задайте масштаб и настроение</h2>
          <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
            Выберите тип помещения, введите реальные размеры в метрах и отметьте стиль в фотокаталоге.
          </p>
          
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Сначала измерьте, затем введите</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>Измерьте ширину и длину между стенами, высоту — от пола до потолка. Проверьте единицы: нужны метры, не сантиметры.</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>Фото не заменяет замеры</h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5' }}>Ширину, длину и высоту задаёте вы. Они не определяются автоматически по одному снимку.</p>
          </div>
        </div>

        {/* Правая колонка с формой */}
        <div style={{ flex: '1 1 500px', backgroundColor: '#fff', padding: '30px', borderRadius: '16px' }}>
          <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#888', marginBottom: '20px' }}>Пример заполнения</div>
          
          {/* Тип помещения */}
          <div style={{ marginBottom: '25px' }}>
            <div style={{ fontSize: '14px', marginBottom: '10px' }}>Тип помещения</div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #701D22', backgroundColor: '#fcf8f8', color: '#701D22', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>Гостиная ✓</button>
              <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #ddd', backgroundColor: '#fff', fontSize: '14px' }}>Спальня</button>
              <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #ddd', backgroundColor: '#fff', fontSize: '14px' }}>Кухня</button>
              <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #ddd', backgroundColor: '#fff', fontSize: '14px' }}>Кабинет</button>
            </div>
          </div>

          {/* Размеры */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '10px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', marginBottom: '10px' }}>Ширина</div>
              <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px 15px', display: 'flex', justifyContent: 'space-between' }}>
                <span>3,6</span> <span style={{ color: '#888' }}>м</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', marginBottom: '10px' }}>Длина</div>
              <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px 15px', display: 'flex', justifyContent: 'space-between' }}>
                <span>4,8</span> <span style={{ color: '#888' }}>м</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', marginBottom: '10px' }}>Высота</div>
              <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px 15px', display: 'flex', justifyContent: 'space-between' }}>
                <span>2,7</span> <span style={{ color: '#888' }}>м</span>
              </div>
            </div>
          </div>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '30px' }}>Числа приведены для примера. Укажите реальные замеры вашей комнаты.</div>

          {/* Выбранный стиль */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '20px' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=150&auto=format&fit=crop" alt="Джапанди" style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: '#888' }}>Выбранный стиль</div>
                  <div style={{ fontSize: '18px', fontWeight: '500' }}>Джапанди</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>Дерево, лён и мягкий свет</div>
                </div>
             </div>
             <button style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #ddd', backgroundColor: '#fff', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>Выбран ✓</button>
          </div>
        </div>
      </section>

      {/* ================= ШАГ 03 ================= */}
      <section style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', marginBottom: '40px' }}>
          <div style={{ flex: '1 1 300px' }}>
             <div style={{ fontSize: '32px', color: '#701D22', marginBottom: '10px' }}>03</div>
             <h2 style={{ fontSize: '32px', lineHeight: '1.2', marginBottom: '20px', fontWeight: 'normal' }}>Создайте 3D-модель</h2>
             <p style={{ color: '#666', lineHeight: '1.6' }}>
               Когда фото, размеры и стиль добавлены, нажмите «Создать 3D-модель». Результат появится в области «Ваша 3D-модель».
             </p>
          </div>
          <div style={{ flex: '1 1 500px', paddingTop: '50px' }}>
             <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: 'normal' }}>Здесь появится новый облик вашей комнаты</h3>
             <p style={{ color: '#666', lineHeight: '1.6' }}>
               Оцените, как выбранное направление меняет настроение пространства. Используйте модель как отправную точку для интерьерной идеи.
             </p>
          </div>
        </div>

        {/* Изображение результата */}
        <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', zIndex: 10 }}>
            Демонстрационная иллюстрация
          </div>
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
            alt="Результат 3D-модели" 
            style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <p style={{ fontSize: '12px', color: '#888', marginTop: '15px' }}>
          Это иллюстрация результата, не интерактивный 3D-просмотр. Ваша модель будет основана на ваших исходных данных.
        </p>

        {/* Плашки внизу */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, backgroundColor: '#f7f4f0', padding: '30px', borderRadius: '16px', minWidth: '300px' }}>
            <h4 style={{ fontSize: '20px', marginBottom: '10px', fontWeight: 'normal' }}>Увидеть идею</h4>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>Модель помогает оценить стиль, цвета и настроение и обсудить направление будущих изменений.</p>
          </div>
          <div style={{ flex: 1, backgroundColor: '#f7f4f0', padding: '30px', borderRadius: '16px', minWidth: '300px' }}>
            <h4 style={{ fontSize: '20px', marginBottom: '10px', fontWeight: 'normal' }}>Не рабочий проект</h4>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>Перед ремонтом проверьте замеры, планировку и технические решения со специалистом. Модель не заменяет эту подготовку.</p>
          </div>
        </div>
      </section>

      {/* --- БЛОК ПРИЗЫВ К ДЕЙСТВИЮ (ВНИЗУ) --- */}
      <div style={{ backgroundColor: '#f7f4f0', padding: '40px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2 style={{ fontSize: '28px', margin: '0 0 10px 0', fontWeight: 'normal' }}>Готовы посмотреть на комнату по-новому?</h2>
          <p style={{ color: '#666', margin: 0 }}>Подготовьте фото, ширину, длину и высоту в метрах. Затем выберите тип помещения и стиль.</p>
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