import MainInfo from './components/main-info/main-info';
import StackList from './components/stack-list/stack-list';
import MyCarousel from './components/carousel';
import './App.sass';

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
