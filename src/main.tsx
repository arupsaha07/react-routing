import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout.tsx';
import Home from './components/Home/Home.tsx';
import About from './components/About/About.tsx';
import User from './components/User/User.tsx';
import Github, {githubInfoLoader} from './components/Github/Github.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="*" element={<h1>404</h1>} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
