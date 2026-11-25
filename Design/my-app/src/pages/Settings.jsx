// src/pages/Settings.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Settings() {
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Имя Пользователя', email: 'username@gmail.com' };
  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [notifications, setNotifications] = useState(true);
  
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    
    let updatedPassword = user.password;
    if (isChangingPassword) {
      if (newPassword.length < 4) {
        return alert('Пароль должен быть не менее 4 символов');
      }
      if (newPassword !== confirmPassword) {
        return alert('Пароли не совпадают');
      }
      updatedPassword = newPassword;
    }

    const updatedUser = { name, email, password: updatedPassword };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    alert('Данные успешно сохранены!');
    setIsChangingPassword(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div style={{ backgroundColor: '#F8F5F2', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* --- ВЕРХНИЙ БАННЕР --- */}
      <div style={{ backgroundColor: '#F6F3EE', padding: '40px 80px', borderBottom: '1px solid #E5DED5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '12px', color: '#701D22', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Личное пространство</div>
            <h1 style={{ fontSize: '48px', margin: '0 0 10px 0', fontWeight: 'normal', color: '#302419' }}>Настройки</h1>
            <p style={{ color: '#666', margin: 0 }}>Личные данные и уведомления</p>
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

      {/* --- ОСНОВНОЙ КОНТЕНТ --- */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
        
        {/* ЛЕВЫЙ САЙДБАР */}
        <div style={{ width: '280px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #E5DED5' }}>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px', textTransform: 'uppercase' }}>Ваш профиль</div>
            <div style={{ fontSize: '20px', fontWeight: '600', color: '#302419', marginBottom: '4px' }}>{user.name}</div>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>{user.email}</div>
            <Link to="/settings" style={{ background: 'none', border: 'none', padding: 0, color: '#701D22', fontSize: '14px', cursor: 'pointer', fontWeight: '500', textDecoration: 'none' }}>Редактировать профиль</Link>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link to="/profile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: '#302419', padding: '16px 20px', borderRadius: '8px', fontSize: '15px' }}>
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
            <Link to="/settings" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: '#302419', padding: '16px 20px', backgroundColor: '#F5ECEA', borderLeft: '3px solid #701D22', borderRadius: '8px', fontSize: '15px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                Настройки
              </span>
            </Link>
          </nav>

          <div style={{ backgroundColor: '#F6F3EE', padding: '24px', borderRadius: '12px', marginTop: '10px' }}>
            <h3 style={{ fontSize: '18px', margin: '0 0 10px 0', fontWeight: 'normal', color: '#302419' }}>Новый облик — с одного фото</h3>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '16px' }}>Загрузите фото комнаты — и попробуйте другой стиль.</p>
            <Link to="/how-it-works" style={{ color: '#701D22', fontSize: '14px', textDecoration: 'none', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Как это работает 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </Link>
          </div>

          <button 
            onClick={() => { localStorage.removeItem('user'); window.location.href = '/'; }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', color: '#666', padding: '10px 20px', cursor: 'pointer', fontSize: '14px', marginTop: '10px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Выйти из аккаунта
          </button>
        </div>

        {/* ПРАВАЯ ЧАСТЬ (ФОРМА) */}
        <div style={{ flexGrow: 1 }}>
          
          <form onSubmit={handleSave} style={{ backgroundColor: '#F6F3EE', padding: '40px', borderRadius: '16px', border: '1px solid #E5DED5' }}>
            
            {/* Поля Имя и Почта */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '250px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: '#888', marginBottom: '8px' }}>Ваше имя</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #E5DED5', backgroundColor: '#fff', fontSize: '15px', outline: 'none' }} />
              </div>
              <div style={{ flex: 1, minWidth: '250px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: '#888', marginBottom: '8px' }}>Электронная почта</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #E5DED5', backgroundColor: '#fff', fontSize: '15px', outline: 'none' }} />
              </div>
            </div>

            {/* Блок Безопасность */}
            <div style={{ borderTop: '1px solid #E5DED5', paddingTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#302419" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <h3 style={{ fontSize: '16px', margin: 0, fontWeight: '500' }}>Безопасность</h3>
                </div>
                <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>Обновляйте пароль, чтобы защитить аккаунт.</p>
              </div>
              
              <button 
                type="button" 
                onClick={() => setIsChangingPassword(!isChangingPassword)}
                style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #E5DED5', backgroundColor: '#fff', color: '#302419', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                Изменить пароль
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </button>
            </div>

            {isChangingPassword && (
              <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #E5DED5', display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#888', marginBottom: '8px' }}>Новый пароль</label>
                  <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Введите новый пароль" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5DED5', fontSize: '15px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#888', marginBottom: '8px' }}>Повторите пароль</label>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Повторите новый пароль" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5DED5', fontSize: '15px', outline: 'none' }} />
                </div>
              </div>
            )}

            {/* Чекбокс */}
            <div style={{ borderTop: '1px solid #E5DED5', paddingTop: '30px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} style={{ width: '18px', height: '18px', accentColor: '#701D22', cursor: 'pointer' }} />
              <label style={{ fontSize: '14px', color: '#302419', cursor: 'pointer' }}>Сообщать о готовности 3D-моделей на почту</label>
            </div>

            {/* Кнопка сохранения */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <button type="submit" style={{ padding: '12px 30px', backgroundColor: '#701D22', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', cursor: 'pointer' }}>
                Сохранить изменения
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888', fontSize: '13px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Данные видны только вам
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}