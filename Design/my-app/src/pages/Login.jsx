// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Новое состояние для переключения видимости пароля
  const [showPassword, setShowPassword] = useState(false); 
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !email) return alert('Заполните имя и почту');

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.password) {
       if (password !== savedUser.password) {
         return alert('Неверный пароль!');
       }
    }

    const user = { name, email, password: password || (savedUser?.password || null) };
    localStorage.setItem('user', JSON.stringify(user));
    
    navigate('/profile');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '40px', backgroundColor: '#f7f4f0', borderRadius: '16px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontWeight: 'normal' }}>Вход в Облик</h2>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Ваше имя</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя Пользователя" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box' }} />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Электронная почта</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="username@gmail.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box' }} />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Пароль</label>
          
          {/* Обертка для поля и иконки */}
          <div style={{ position: 'relative' }}>
            <input 
              type={showPassword ? "text" : "password"} // Меняем тип в зависимости от состояния
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Введите пароль" 
              style={{ width: '100%', padding: '12px 40px 12px 12px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box' }} 
            />
            
            {/* Кнопка с иконкой глаза */}
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              style={{ 
                position: 'absolute', 
                right: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                color: '#888',
                padding: 0,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {showPassword ? (
                // Иконка "Глаз открыт"
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ) : (
                // Иконка "Глаз закрыт"
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        <button type="submit" style={{ padding: '15px', backgroundColor: '#701D22', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}>
          Войти
        </button>
      </form>
    </div>
  );
}