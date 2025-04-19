import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import UseCallbackHook from './components/examples/UseCallbackHook.jsx';
import UseContextExample from './components/examples/UseContextExample.jsx';
import UseMemoHook from './components/examples/UseMemoHook.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import Login from './components/Login/Login.jsx';
import Profile from './components/Login/Profile.jsx';
import ExampleHome from './components/examples/ExampleHome.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* default route */}
      <Route path="" element={'Home'} />
      <Route path="login" element={<Login />} />

      {/* code example route */}
      <Route path='example'>
        <Route index element={<ExampleHome />} />
        <Route path="use-context" element={<UseContextExample />} />
        <Route path="use-callback" element={<UseCallbackHook />} />
        <Route path='use-memo' element={<UseMemoHook />} />
      </Route>

      <Route path="user/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>

      <Route path='profile' element={<Profile />} />

      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      
      {/* 404 */}
      <Route path="*" element={<h1>404</h1>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
