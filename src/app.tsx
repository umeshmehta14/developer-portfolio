import * as React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./app.css";
import BackToTop from "./components/helper/back-to-top/back-to-top";
import ChangeTheme from "./components/helper/change-theme/change-theme";
import ScrollToTop from "./components/helper/scroll-to-top";
import { BlogPage, HomePage, ProjectPage } from "./pages";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Router>
      <BackToTop />
      <ChangeTheme />
    </>
  );
}

export default App;
