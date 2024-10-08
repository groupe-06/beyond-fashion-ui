import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import SidebarLeft from "./components/shared/SidebarLeft";
import MainContent from "./components/content/MainContent";
import RightChat from "./components/content/RightChat";
import LastElement from "./components/content/LastElement";
import StoryContent from "./components/content/StoryContent";
import CreatePost from "./components/content/CreatePost";
import PostContent from "./components/content/PostContent";
import Inscription from "./components/authentication/Inscription";
import Login from "./components/authentication/Login";

function App() {
  return (
    
      <Routes>

        <Route path="/register" element={<Inscription />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <SidebarLeft />
              <StoryContent />
              <CreatePost />
              <PostContent />
              <MainContent />
              <RightChat />
              <LastElement />
            </>
          }
        />

      </Routes>
   
  );
}

export default App;
