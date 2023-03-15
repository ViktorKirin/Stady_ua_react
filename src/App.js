
import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import HeartButton from './components/HeartButton/HeartButton';

function App() {
  return (
    <>
      <div className = 'conteiner'> 
        <Card title="DINING CHAIR BY ESTEBAN+MORENO" description="With a new design approach for flexible use: from a dinner for two to a big celebration." price="$100" imageSrc="/chair.png"></Card>
        <Card title="Underwater wearable watches" description="An accessory for any occasion, from a nice dinner to an underwater swim." price="$90" imageSrc="/watch.png"></Card>
        <Card title="Sac Marin Yellow" description="Marinetmarine store backpack. The Sac Marin can be worn as a backpack or as a bag over one shoulder." price="$108" imageSrc="bag.png"></Card>
        <Button isLight=""></Button>
        <Button></Button>
        <Button></Button>
      </div>
    </>
  );
}

export default App;
