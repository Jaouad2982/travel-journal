import './App.css';
import Header from "./components/Header"
import MainContent from './components/MainContent';
import japan from "./images/japan.jpg"
import australia from "./images/australiajpg.jpg"
import norway from "./images/norway.jpg"
import data from "./data/data"
function App() {
  const renderContent = data.map(
    content => <MainContent image={content.image}
      location={content.location}
      descPicture={content.descPicture}
      date={content.date}
      description={content.description} />)

  return (
    <div className="container">
      <Header />
      {renderContent}
    </div>
  );
}

export default App;
