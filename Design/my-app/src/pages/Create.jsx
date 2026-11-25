// src/pages/Create.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgJapan from '../assets/first.png';
import imgMinimal from '../assets/second.png';
import imgModern from '../assets/third.png';
import imgScandi from '../assets/forth.png';

export default function Create() {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState('Джапанди');
  const [selectedRoom, setSelectedRoom] = useState('Гостиная');
  const [uploadedImage, setUploadedImage] = useState(null);
  const rooms = ['Гостиная', 'Спальня', 'Кухня', 'Кабинет', 'Ванная'];
  
  const styles = [
    { id: 'Джапанди', desc: 'Дерево, лен и мягкий свет', img: imgJapan },
    { id: 'Минимализм', desc: 'Простые формы, ничего лишнего', img: imgMinimal },
    { id: 'Современный', desc: 'Чистые линии, выразительные детали', img: imgModern },
    { id: 'Скандинавский', desc: 'Светлые тона, уютные фактуры', img: imgScandi }
  ];

  const handleCreate = () => {
    // Имитация создания модели (можно добавить логику сохранения)
    alert('3D-модель создается! Пожалуйста, подождите...');
    // Перекидываем в личный кабинет, где будут проекты
    navigate('/profile'); 
  };
  // Функция для загрузки фото
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Создаем временную ссылку на файл для предпросмотра
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'inherit', color: '#302419' }}>
      
      {/* Заголовок */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ fontSize: '12px', color: '#701D22', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Начните здесь</div>
          <h1 style={{ fontSize: '48px', margin: 0, fontWeight: 'normal' }}>Придайте комнате новый облик</h1>
        </div>
        <p style={{ maxWidth: '300px', fontSize: '14px', color: '#666', margin: 0, textAlign: 'right' }}>
          Фото и размеры задают пространство. Выбранный стиль — настроение будущей 3D-модели.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* ЛЕВАЯ КОЛОНКА (Фото и размеры) */}
        <div style={{ flex: '1 1 350px', backgroundColor: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #E5DED5' }}>
          <h3 style={{ fontSize: '20px', margin: '0 0 20px 0', fontWeight: 'normal', display: 'flex', gap: '10px' }}>
            <span style={{ color: '#701D22' }}>01</span> Ваша комната
          </h3>
          
                    <div style={{ border: '1px dashed #A89377', borderRadius: '12px', padding: '40px 20px', textAlign: 'center', backgroundColor: '#F8F5F2', marginBottom: '30px' }}>
             
             {/* Если фото загружено — показываем его. Если нет — показываем иконку и текст */}
             {uploadedImage ? (
                <div>
                  <img src={uploadedImage} alt="Загруженное фото" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px', objectFit: 'contain', marginBottom: '15px' }} />
                  <div style={{ fontSize: '13px', color: '#701D22', fontWeight: '500' }}>Фото успешно загружено ✓</div>
                  <button onClick={() => setUploadedImage(null)} style={{ marginTop: '10px', background: 'none', border: 'none', color: '#888', textDecoration: 'underline', cursor: 'pointer', fontSize: '12px' }}>Удалить фото</button>
                </div>
             ) : (
                <>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#701D22" strokeWidth="1.5" style={{ marginBottom: '15px' }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  <div style={{ fontWeight: '500', marginBottom: '5px' }}>Добавьте фото своей комнаты</div>
                  <div style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>Перетащите фотографию сюда или выберите её на устройстве</div>
                  
                  {/* Скрытый input для выбора файла */}
                  <input 
                    type="file" 
                    id="file-upload" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    style={{ display: 'none' }} 
                  />
                  
                  {/* Кнопка, которая открывает выбор файла */}
                  <label 
                    htmlFor="file-upload" 
                    style={{ display: 'inline-block', padding: '10px 20px', borderRadius: '8px', border: '1px solid #E5DED5', backgroundColor: '#fff', cursor: 'pointer', fontSize: '14px' }}
                  >
                    Выбрать фото
                  </label>

                  <div style={{ fontSize: '12px', color: '#701D22', marginTop: '15px' }}>Фото обязательно для создания модели</div>
                </>
             )}
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ fontSize: '14px', margin: '0 0 15px 0' }}>Тип помещения</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {rooms.map(room => (
                <button key={room} onClick={() => setSelectedRoom(room)} style={{ padding: '8px 16px', borderRadius: '6px', border: selectedRoom === room ? '1px solid #701D22' : '1px solid #E5DED5', backgroundColor: '#fff', color: selectedRoom === room ? '#701D22' : '#302419', cursor: 'pointer', fontSize: '13px' }}>
                  {room}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '14px', margin: '0 0 15px 0' }}>Размеры комнаты</h4>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Ширина</div>
                <div style={{ border: '1px solid #E5DED5', borderRadius: '6px', padding: '10px', display: 'flex', justifyContent: 'space-between' }}><span>—</span> <span style={{ color: '#999' }}>м</span></div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Длина</div>
                <div style={{ border: '1px solid #E5DED5', borderRadius: '6px', padding: '10px', display: 'flex', justifyContent: 'space-between' }}><span>—</span> <span style={{ color: '#999' }}>м</span></div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>Высота</div>
                <div style={{ border: '1px solid #E5DED5', borderRadius: '6px', padding: '10px', display: 'flex', justifyContent: 'space-between' }}><span>—</span> <span style={{ color: '#999' }}>м</span></div>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#888', marginTop: '10px' }}>Укажите реальные замеры в метрах. Размеры задаёте вы — фотография их не заменяет.</div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА (Выбор стиля) */}
        <div style={{ flex: '2 1 500px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', margin: 0, fontWeight: 'normal', display: 'flex', gap: '10px' }}>
              <span style={{ color: '#701D22' }}>02</span> Выберите стиль
            </h3>
            <span style={{ fontSize: '13px', color: '#888' }}>4 направления</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {styles.map(style => (
              <div 
                key={style.id} 
                onClick={() => setSelectedStyle(style.id)}
                style={{ backgroundColor: '#fff', borderRadius: '12px', border: selectedStyle === style.id ? '2px solid #701D22' : '1px solid #E5DED5', overflow: 'hidden', cursor: 'pointer' }}
              >
                <div style={{ height: '150px', position: 'relative' }}>
                  <img src={style.img} alt={style.id} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {selectedStyle === style.id && (
                    <div style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#701D22', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  )}
                </div>
                <div style={{ padding: '15px' }}>
                  <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '5px' }}>{style.id}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{style.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ПАНЕЛЬ */}
      <div style={{ marginTop: '40px', backgroundColor: '#F8F5F2', padding: '20px 30px', borderRadius: '12px', border: '1px solid #E5DED5', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', marginBottom: '5px' }}>Выбранный стиль</div>
          <div style={{ fontSize: '20px', fontWeight: '500' }}>{selectedRoom} · {selectedStyle}</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: '14px', color: '#666' }}>
          Добавьте фото и заполните размеры<br />
          <span style={{ fontSize: '12px' }}>После создания модель появится в области ниже.</span>
        </div>
        <button onClick={handleCreate} style={{ padding: '15px 30px', backgroundColor: '#701D22', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          Создать 3D-модель
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </button>
      </div>

    </div>
  );
}