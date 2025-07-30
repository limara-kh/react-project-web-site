import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [res, setRes] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    navigate('/')
    e.preventDefault(); // ✅ Алдымен preventDefault
  localStorage.setItem('user', JSON.stringify(formData))
    axios.post('https://6881d7bf66a7eb81224c37c8.mockapi.io/api/a1/users', {
      name: formData.name,
      email: formData.email,
      password: formData.password
    })
    .then(response => {
      setRes(response.data.id);
      console.log('Жауап:', response.data);
      alert(`Қош келдіңіз, ${formData.name}! ID: ${response.data.id}`);
    })
    .catch(error => {
      console.error('Қате:', error);
      alert('Қате болды. Қайталап көріңіз.');
    });

    console.log('Аккаунт ашылды:', formData);
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit} className="sign-up-form">
        <label>Атыңыз:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Құпиясөз:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Тіркелу</button>
      </form>
    </div>
  );
}
