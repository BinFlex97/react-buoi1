import logo from './logo.svg';
import './App.css';
import Header from './BaiTapThucHanhLayout/Header';
import Banner from './BaiTapThucHanhLayout/Banner';
import Item from './BaiTapThucHanhLayout/Item';
import Footer from './BaiTapThucHanhLayout/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Item/>
      <Footer/>
    </div>
  );
}

export default App;
