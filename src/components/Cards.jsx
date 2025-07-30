import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Еріктілерге арналған орталар!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNj7HksZFhjzPBsEctPPH60DthlH_fzJSvg&s'
              text='UNICEF Kazakhstan'
              label='Volunteer-online'
              path='/services'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bB2D_9FEDvWK3LGpLOlZgU_ldpLCi-vaww&s'
              text='National Volunteer Network of Kazakhstan'
              label='Volunteer-online'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIIy01ofsnMw1A4B5Ff88pR9rCdueaVqKWg&s'
              text='JAS Volunteers'
              label='Volunteer'
              path='/services'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaPbzfSmGvG2gCCSYJDSCHTxDKxv7fKOJdg&s'
              text='INSPIRIT TEAM'
              label='Volunteer'
              path='/products'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7K7-_ZpmkP8GDSn2OesIqNe-pTQzSVf0-g&s'
              text='QazVolunteer'
              label='Volunteer'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;