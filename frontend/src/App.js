import blob from './blob.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={blob} className="App-blob" alt="blob"/>
                <iframe title="YouTube Video" src="https://www.youtube.com/embed/dgraY2XdJDA"
                        frameBorder="0"
                        allowFullScreen></iframe>
                <p>Kertu Kasesalu</p>
            </header>
        </div>
    );
}

export default App;
