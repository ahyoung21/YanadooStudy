import './App.css';
import Card from './component/Card';
import Gnb from './common/Gnb';
import VerticalCard from './component/VerticalCard';
import Visual from './component/Visual';
import Footer from './common/Footer';
import DetailCard from './component/DetailCard';
import CommunityCard from './common/CommunityCard';

function App() {
  return (
    <>
      <Gnb />
      <DetailCard />
      {/* <Visual />
      <Card />
      <VerticalCard /> */}
      <CommunityCard />
      <Footer />
    </>
  );
}

export default App;
