import DailyStats from "../components/DailyStats";
import Join from "../components/Join";
import Jumbotron from "../components/Jumbotron";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import ThreatFeed from "../components/ThreatFeed";


export default function Landing() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <DailyStats />
      <ThreatFeed />
      <Mission />
      <Services />
      <Join />
    </div>
  );
}
