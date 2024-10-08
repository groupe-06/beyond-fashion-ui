import { Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import SidebarLeft from "./components/shared/SidebarLeft";
import MainContent from "./components/content/MainContent";
import RightChat from "./components/content/RightChat";
import LastElement from "./components/content/LastElement";
import StoryContent from "./components/content/StoryContent";
import CreatePost from "./components/content/CreatePost";
import PostContent from "./components/content/PostContent";
import ConfirmFriend from "./components/content/ConfirmFriend";


function App() {
  return (
    <div>
      <StoryContent />
      {/* <ConfirmFriend /> */}
      <CreatePost />
      <PostContent />
      <Navbar />
      <SidebarLeft />
      <MainContent />
      <RightChat />
      <LastElement />
    </div>
  
  );
}

export default App;
