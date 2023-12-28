import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import LeftbarProfile from "../../components/leftbar-profile/LeftbarProfile";
import LeftbarActivities from "../../components/leftbar-activities/LeftbarActivities";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <LeftbarProfile />
        <LeftbarActivities />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
