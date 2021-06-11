import './App.css';
import Card from './component/Card';
import Gnb from './common/Gnb';
import VerticalCard from './component/VerticalCard';
import Visual from './component/Visual';
import Footer from './common/Footer';
import DetailCard from './component/DetailCard';

function App() {
  return (
    <>
      <Gnb />
      <DetailCard />
      {/* <Visual />
      <Card />
      <VerticalCard /> */}
      <Footer />
    </>
  );
}

export default App;
