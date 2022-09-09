import MainInfo from './components/main-info/main-info';
import './App.sass';
import StackList from './components/stack-list/stack-list';
import MyCarousel from './components/carousel';

function App() {
  return (
    <div className='main'>
      <header>Роман Савранский</header>
      <MainInfo/>
      <StackList/>
      <MyCarousel/>
    </div>
  );
}

export default App;
