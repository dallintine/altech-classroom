import SideBar from "../components/SideBar";
import SinglePost from "../components/SinglePost";

export default function Single() {
  return (
    <div className="flex">
      <SinglePost />
      <SideBar />
    </div>
  );
}
