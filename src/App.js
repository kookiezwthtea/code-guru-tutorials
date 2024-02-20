import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Index';
import NotFoundPage from './Pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectDetail from './Projects/Project-detail';
import JavascriptProjects from './Pages/JavaScriptProjects';
import ReactProjects from './Pages/ReactProjects';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />} />
          <Route
            path='/jsprojects'
            element={<JavascriptProjects />} />
          <Route
            path='/reactprojects'
            element={<ReactProjects />} />
          <Route
            path='/about'
            element={<About />} />
          <Route
            path='/contact'
            element={<Contact />} />
          <Route
            path='/*'
            element={<NotFoundPage />} />

          <Route path="/project/:id" element={<ProjectDetail />} />

          <Route
            path='/terms'
            element={<Terms />} />

          <Route
            path='/privacy'
            element={<Privacy />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
