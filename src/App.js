import './App.css';
import Header from "./components/Header"
import MainContent from './components/MainContent';
import japan from "./images/japan.jpg"
import australia from "./images/australiajpg.jpg"
import norway from "./images/norway.jpg"
import data from "./data/data"
function App() {

  return (
    <div className="container">
      <Header />
      <MainContent
        image={japan}
        location={data[0].location}
        descPicture={data[0].desPicture}
        date={data[0].date}
        description={data[0].description}
      />
      <MainContent
        image={australia}
        location={data[1].location}
        descPicture={data[1].desPicture}
        date={data[1].date}
        description={data[1].description}
      />
      <MainContent
        image={norway}
        location={data[2].location}
        descPicture={data[2].desPicture}
        date={data[2].date}
        description={data[2].description}
      />
    </div>
  );
}

export default App;
