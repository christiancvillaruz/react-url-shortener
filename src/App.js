import { Helmet } from 'react-helmet';
import URLShortener from './components/URLShortener';
import './App.css';

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <Helmet>
        <title>URL Shortener</title>
      </Helmet>
      <div className="container mx-auto">
        <URLShortener/>
      </div>
    </div>
  );
}

export default App;
