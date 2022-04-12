import { FC } from 'react';
import './App.css';
import { APP_HEADER } from './constants/app.constant';
import ImagesContainer from './pages/images-container/images-container';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
          { APP_HEADER }
      </header>
      <ImagesContainer/>
    </div>
  );
}

export default App;
