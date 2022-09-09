import MainInfo from './components/main-info/main-info';
import StackList from './components/stack-list/stack-list';
import RepoList from './components/repo-list/repo-list';
import './App.sass';

function App() {
  return (
    <div className='main'>
      <header>Роман Савранский</header>
      <div className='d-flex'>
        <div>
          <MainInfo />
          <StackList />
        </div>
        <RepoList />
      </div>
    </div>
  );
}

export default App;
