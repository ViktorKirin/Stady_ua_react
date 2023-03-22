import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import HeartButton from './components/HeartButton/HeartButton';

function App() {
  return (
    <>
      <div className = 'conteiner'> 
        <Card title="DINING CHAIR BY ESTEBAN+MORENO" description="With a new design approach for flexible use: from a dinner for two to a big celebration." price="$100" oldPrise="$120" imageSrc="/chair.png" hasSale={true} canBuy={true}></Card>
        <Card title="Underwater wearable watches" description="An accessory for any occasion, from a nice dinner to an underwater swim." price="$90" oldPrise="" imageSrc="/watch.png" hasSale={false} canBuy={false}></Card>
        <Card title="Sac Marin Yellow" description="Marinetmarine store backpack. The Sac Marin can be worn as a backpack or as a bag over one shoulder." price="$108" oldPrise="" imageSrc="bag.png" hasSale={false} canBuy={false}></Card>

      </div>
    </>
  );
}

export default App;
