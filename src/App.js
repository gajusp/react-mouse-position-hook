import './App.css';
import useMousePosition from './mousePosition/useMousePosition';

function App() {
  const mousePosition = useMousePosition();

  return (
    <div className='App'>
      {mousePosition.x} / {mousePosition.y}
    </div>
  );
}

export default App;
