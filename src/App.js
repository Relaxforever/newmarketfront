import './App.css';
import Container from "./components/organism/container/container"
import Home from './components/organism/home/home';

function App() {
  return (
    <Container>
      <div className="App">
        <Home />
      </div>
    </Container>
  );
}

export default App;
