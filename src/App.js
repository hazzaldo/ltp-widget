import logo from './logo.svg';
import './App.css';
import Navigate from 'react-router-dom';
import Route from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Route path='/404' element={'<h1>Page cannot be found</h1>'} />
        <Route path='*' element={<Navigate replace to='/404' />} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
