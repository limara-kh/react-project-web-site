import React from 'react';
import '../../App.css';

export default function Volunteer() {
  const volunteerCenters = [
    {
      name: 'Komanda SOS',
      description: 'Волонтерлерді үйлестіру орталығы, Алматы.',
      phone: '+77017396002',
      email: 'komandasos@gmail.com',
    },
    {
      name: 'Kazakhstan Volunteer Network',
      description: 'Жастар мен студенттерге арналған волонтерлік жобаларды ұйымдастырады.',
      phone: '+77087064242',
      email: 'qazvolunteers@gmail.com',
      link: 'https://qazvolunteer.kz'
    },
    {
      name: 'Dos.kz',
      description: 'Қарттар мен әлеуметтік осал топтарға көмектесетін волонтерлік ұйым.',
      phone: '+77088373302',
      email: 'volunteersclub@sdu.edu.kz',
      link: 'mailto:volunteersclub@sdu.edu.kz'
    },
    {
      name: 'Qolda',
      description: 'Төтенше жағдай кезіндегі гуманитарлық көмек және еріктілерді тарту жобасы.',
      phone: '+77172790824',
      email: 'info@redcrescent.kz',
      link: 'https://qolda.org'
    },
    {
      name: 'Eco Volunteers Almaty',
      description: 'Экологияны қорғауға бағытталған акциялар, ағаш отырғызу және тазалау жұмыстары.',
    },
    {
      name: 'Red Crescent Kazakhstan',
      description: 'Қан тапсыру, көмек көрсету және әлеуметтік жобалармен айналысады.',
      phone: '+77272367623',
      email: 'info@redcrescent.kz',
      link: 'https://redcrescent.kz'
    },
    {
      name: 'Volunteer Almaty',
      description: 'Алматыдағы волонтерлік жобалар мен бастамаларды біріктіретін платформа.'
    },
    {
      name: 'INSAN',
      description: 'Балалар үйіне көмек, қайырымдылық жиналстар мен мәдени іс-шаралар өткізеді.'
    },
    {
      name: 'Steppe Volunteers',
      description: 'Ауылдық аймақтарға көмек, балаларға қолдау көрсету және білім беру жобалары.'
    },
    {
      name: 'UNICEF Kazakhstan',
      description: 'Балалардың құқығын қорғау, білім беру мен денсаулық сақтау салаларында волонтерлердің қатысуымен жобалар ұйымдастырады.',
      phone: '+77272582643',
      email: 'astana@unicef.org',
    },
    {
      name: 'National Volunteer Network of Kazakhstan',
      description: 'Еліміз бойынша волонтерлерді біріктіріп, оқыту, ынталандыру және қолдау көрсетумен айналысады.'
    },
    {
      name: 'JAS Volunteers',
      description: 'Жастарға бағытталған әлеуметтік жобалар, білім беру, экология және қайырымдылық бағыттарында жұмыс істейді.',
      phone: '+77087064242',
      email: 'qazvolunteers@gmail.com',
      link: 'https://qazvolunteer.kz'
    },
    {
      name: 'INSPIRIT TEAM',
      description: 'Мотивациялық іс-шаралар мен қоғамдық жобалар арқылы жастарды волонтерлікке тартатын белсенді ұйым.'
    },
  ];

  return (
    <div className="volunteer-page">
      <h1 className="volunteer-title">Волонтёр орталықтары</h1>

      <div className="volunteer-cards">
        {volunteerCenters.map((center, index) => (
          <div className="volunteer-card" key={index}>
            <h3>{center.name}</h3>
            <p>{center.description}</p>
            {center.phone && <p>📞 Телефон: <a href={`tel:${center.phone}`}>{center.phone}</a></p>}
            {center.email && <p>✉️ Email: <a href={`mailto:${center.email}`}>{center.email}</a></p>}
            {center.link && !center.link.startsWith('mailto:') && (
              <p>🔗 Веб-сайт: <a href={center.link} target="_blank" rel="noopener noreferrer">{center.link}</a></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
