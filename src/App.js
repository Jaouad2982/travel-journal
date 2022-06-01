import './App.css';
import Header from "./components/Header"
import MainContent from './components/MainContent';
import data from "./data/data"
function App() {
  return (
    <div className="container">
      <Header />
      <MainContent
        image=""
        location={data[0].location}
        descPicture={data[0].desPicture}
        date={data[0].date}
        description={data[0].description}
      />
      <MainContent
        image=""
        location={data[1].location}
        descPicture={data[1].desPicture}
        date={data[1].date}
        description={data[1].description}
      />
      <MainContent
        image=""
        location={data[2].location}
        descPicture={data[2].desPicture}
        date={data[2].date}
        description={data[2].description}
      />
    </div>
  );
}

export default App;
