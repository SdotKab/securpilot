import DailyStats from "../components/LandingPage/DailyStats";
import Jumbotron from "../components/LandingPage/Jumbotron";
import Mission from "../components/LandingPage/Mission";
import Navbar from "../components/Navbar";
import Services from "../components/LandingPage/Services";
import ThreatFeed from "../components/LandingPage/ThreatFeed";
import Join from "../components/LandingPage/Join";


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
