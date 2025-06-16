
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './pages/Navbar/NavBar';
// import {Home }from './pages/Home/Home';  // remove curly braces
// import Footer from './pages/Footer/Footer';
// import About from './pages/About/About';
// import Services from './pages/Service/Services';
// import Contact from './components/Contact/Contact';
// import Project from './pages/Project/Project';
// import ContactMe from './pages/ContactMe/ContactMe';
// import Project1 from './components/ProjectIntro/ProjectIntro';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import FirstProject from './components/FirstProject/FirstProject';
// import SecondProject from './components/SecondProject/SecondProject';
// import ThirdProject from './components/ThirdProject/ThirdProject';
// import FirstService from './components/FirstService/FirstService';
// import SecondService from './components/SecondService/SecondService';
// import ThirdService from './components/ThirdService/ThirdService';
// import Admin from './pages/Admin/Admin';
// import AdminProjects from './pages/AdminProjects/AdminProjects';
// import AdminActivities from './pages/AdminActivities/AdminActivities';
// import AdminNews from './pages/AdminNews/AdminNews';
// import AdminHiring from './pages/AdminHiring/AdminHiring';
// import AdminSubmission from './pages/AdminSubmission/AdminSubmission';
// import AddProjectsPage from './pages/AddProjectsPage/AddProjectsPage';
// import AddActivitiesPage from './pages/AddActivitiesPage/AddActivitiesPage';
// import AddNewsPage from './pages/AddNewsPage/AddNewsPage';
// import AddHiringPage from './pages/AddHiringPage/AddHiringPage';
// import AdminEditProductPage from './pages/EditProjectsPage/EditProjectsPage';
// import EditServicesPage from './pages/EditServicesPage/EditServicesPage';
// import EditHiringPage from './pages/EditHiringPage/EditHiringPage';
// import EditNewsPage from './pages/EditNewsPage/EditNewsPage';
// import EditSubmissionPage from './pages/EditSubmissionPage/EditSubmissionPage';
// import Login from './pages/Login/Login';
// // import PrivateRoute from './pages/PrivateRoute/PrivateRoute';




// const App = () => {
//   return (
//     <Router>
//      <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
       
//          <Route path="/about" element={<About/>} />
//          <Route path="/services" element={<Services/>}></Route>
//          <Route path="/contact" element={<ContactMe/>}></Route>
//          <Route path='/projects' element={<Project/>}></Route>
// {/*   path are coming from navbar json */}
//           <Route path="/project-1" element={<FirstProject />} />
//           <Route path="/project-2" element={<SecondProject/>} />
//           <Route path="/project-3" element={<ThirdProject/>} />
//           <Route path="/service-1" element={<FirstService/>}/>
//           <Route path='/service-2' element={<SecondService/>}/>
//           <Route path='/service-3' element={<ThirdService/>}/>
//         {/* public Route */}
        
        
//          <Route path='/admin' element={<Admin/>}/> 
//          <Route path='/admin/projects' element={<AdminProjects/>} />
//         <Route path="/admin/activities" element={<AdminActivities />} />
//         <Route path="/admin/news" element={<AdminNews />} />
//         <Route path="/admin/hiring" element={<AdminHiring />} />
//         <Route path="/admin/submission" element={<AdminSubmission/>} />
//         <Route path="/admin/add-projects" element={<AddProjectsPage />} />
//          <Route path="/admin/add-activities" element={<AddActivitiesPage/>} />
//           <Route path="/admin/add-news" element={<AddNewsPage />} />
//         <Route path="/admin/add-hiring" element={<AddHiringPage/>} />
//         <Route path="/admin/projects/:id" element={<AdminEditProductPage />} />
//         <Route path="/admin/activities/:id" element={<EditServicesPage />} />
//         <Route path="/admin/hiring/:id" element={<EditHiringPage/>} />
//         <Route path="/admin/news/:id" element={<EditNewsPage />} />
//         <Route path="/admin/submission/:id" element={<EditSubmissionPage/>} />

//         <Route path='/login' element={<Login/>}/>
       
//       </Routes>
      
//       <Footer />
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import NavBar from './pages/Navbar/NavBar';
import Footer from './pages/Footer/Footer';
 import {Home }from './pages/Home/Home'; 
import About from './pages/About/About';
import Services from './pages/Service/Services';
import Contact from './components/Contact/Contact';
import Project from './pages/Project/Project';
import ContactMe from './pages/ContactMe/ContactMe';

import FirstProject from './components/FirstProject/FirstProject';
import SecondProject from './components/SecondProject/SecondProject';
import ThirdProject from './components/ThirdProject/ThirdProject';

import FirstService from './components/FirstService/FirstService';
import SecondService from './components/SecondService/SecondService';
import ThirdService from './components/ThirdService/ThirdService';

import Admin from './pages/Admin/Admin';
import AdminProjects from './pages/AdminProjects/AdminProjects';
import AdminActivities from './pages/AdminActivities/AdminActivities';
import AdminNews from './pages/AdminNews/AdminNews';
import AdminHiring from './pages/AdminHiring/AdminHiring';
import AdminSubmission from './pages/AdminSubmission/AdminSubmission';
import AddProjectsPage from './pages/AddProjectsPage/AddProjectsPage';
import AddActivitiesPage from './pages/AddActivitiesPage/AddActivitiesPage';
import AddNewsPage from './pages/AddNewsPage/AddNewsPage';
import AddHiringPage from './pages/AddHiringPage/AddHiringPage';
import AdminEditProductPage from './pages/EditProjectsPage/EditProjectsPage';
import EditServicesPage from './pages/EditServicesPage/EditServicesPage';
import EditHiringPage from './pages/EditHiringPage/EditHiringPage';
import EditNewsPage from './pages/EditNewsPage/EditNewsPage';
import EditSubmissionPage from './pages/EditSubmissionPage/EditSubmissionPage';

import Login from './pages/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound'; // optional

// Layouts
const PublicLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

const PrivateLayout = ({ children }) => <>{children}</>;

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><ContactMe /></PublicLayout>} />
        <Route path="/projects" element={<PublicLayout><Project /></PublicLayout>} />
        <Route path="/project-1" element={<PublicLayout><FirstProject /></PublicLayout>} />
        <Route path="/project-2" element={<PublicLayout><SecondProject /></PublicLayout>} />
        <Route path="/project-3" element={<PublicLayout><ThirdProject /></PublicLayout>} />
        <Route path="/service-1" element={<PublicLayout><FirstService /></PublicLayout>} />
        <Route path="/service-2" element={<PublicLayout><SecondService /></PublicLayout>} />
        <Route path="/service-3" element={<PublicLayout><ThirdService /></PublicLayout>} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Private/Admin Routes */}
        <Route path="/admin" element={<PrivateRoute><PrivateLayout><Admin /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/projects" element={<PrivateRoute><PrivateLayout><AdminProjects /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/activities" element={<PrivateRoute><PrivateLayout><AdminActivities /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/news" element={<PrivateRoute><PrivateLayout><AdminNews /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/hiring" element={<PrivateRoute><PrivateLayout><AdminHiring /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/submission" element={<PrivateRoute><PrivateLayout><AdminSubmission /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/add-projects" element={<PrivateRoute><PrivateLayout><AddProjectsPage /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/add-activities" element={<PrivateRoute><PrivateLayout><AddActivitiesPage /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/add-news" element={<PrivateRoute><PrivateLayout><AddNewsPage /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/add-hiring" element={<PrivateRoute><PrivateLayout><AddHiringPage /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/projects/:id" element={<PrivateRoute><PrivateLayout><AdminEditProductPage /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/activities/:id" element={<PrivateRoute><PrivateLayout><EditServicesPage /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/hiring/:id" element={<PrivateRoute><PrivateLayout><EditHiringPage /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/news/:id" element={<PrivateRoute><PrivateLayout><EditNewsPage /></PrivateLayout></PrivateRoute>} />
        <Route path="/admin/submission/:id" element={<PrivateRoute><PrivateLayout><EditSubmissionPage /></PrivateLayout></PrivateRoute>} />

        {/* 404 - Optional */}
        <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />

      </Routes>
    </Router>
  );
};

export default App;

