import MainInfo from './components/main-info/main-info';
import './App.sass';
import StackList from './components/stack-list/stack-list';

function App() {
  return (
    <div className='main'>
      <header>Роман Савранский</header>
      <MainInfo/>
      <StackList/>
    </div>
  );
}

export default App;
