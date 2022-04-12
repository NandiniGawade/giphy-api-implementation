import { FC } from 'react';
import './App.css';
import ImagesContainer from './pages/images-container/images-container';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
          Giphy-API Implementation
      </header>
      <ImagesContainer/>
    </div>
  );
}

export default App;
