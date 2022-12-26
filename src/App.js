import logo from './logo.svg';
import './App.css';
import TrackList from './components/TrackList';
import Controller from './components/Controller';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';

function App() {
  return (
    <>
    <MusicPlayerProvider>
      < TrackList />
    </MusicPlayerProvider>
    </>
  );
}

export default App;
