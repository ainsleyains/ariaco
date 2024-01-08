import Home from './pages/Home';
import About from './pages/About';
import './server';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Layout from './components/Layout';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/about'
                        element={<About />}
                    />
                    <Route
                        path='/projects'
                        element={<Projects />}
                    />
                    <Route
                        path='/projects/:id'
                        element={<ProjectDetail />}
                    />
                    <Route
                        path='/services'
                        element={<Services />}
                    />
                    <Route
                        path='/contact'
                        element={<Contact />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
