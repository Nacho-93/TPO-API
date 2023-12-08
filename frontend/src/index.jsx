import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './Context/UserContext';
import { TutorContextProvider } from './Context/TutorContext';
import { CoursesContextProvider } from './Context/CoursesContext';
import { ProfileContextProvider } from './Context/ProfileContext';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <UserContextProvider>
        <TutorContextProvider>
          <CoursesContextProvider>
            <ProfileContextProvider>
              <App />
            </ProfileContextProvider>
          </CoursesContextProvider>
        </TutorContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
