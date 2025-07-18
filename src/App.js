
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "./pages/Navbar/NavBar";
import Footer from "./pages/Footer/Footer";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

// Lazy-loaded Public Pages
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Services = lazy(() => import("./pages/Service/Services"));
const Contact = lazy(() => import("./pages/ContactMe/ContactMe"));
const Project = lazy(() => import("./pages/Project/Project"));
const Leadership = lazy(() => import("./components/Leadership/Leadership"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails/ProjectDetails"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

// Lazy-loaded Admin Pages
const Login = lazy(() => import("./pages/Login/Login"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const AdminProjects = lazy(() => import("./pages/AdminProjects/AdminProjects"));
const AdminActivities = lazy(() => import("./pages/AdminActivities/AdminActivities"));
const AdminNews = lazy(() => import("./pages/AdminNews/AdminNews"));
const AdminHiring = lazy(() => import("./pages/AdminHiring/AdminHiring"));
const AdminSubmission = lazy(() => import("./pages/AdminSubmission/AdminSubmission"));
const AddProjectsPage = lazy(() => import("./pages/AddProjectsPage/AddProjectsPage"));
const AddActivitiesPage = lazy(() => import("./pages/AddActivitiesPage/AddActivitiesPage"));
const AddNewsPage = lazy(() => import("./pages/AddNewsPage/AddNewsPage"));
const AddHiringPage = lazy(() => import("./pages/AddHiringPage/AddHiringPage"));
const AdminEditProductPage = lazy(() => import("./pages/EditProjectsPage/EditProjectsPage"));
const EditServicesPage = lazy(() => import("./pages/EditServicesPage/EditServicesPage"));
const EditHiringPage = lazy(() => import("./pages/EditHiringPage/EditHiringPage"));
const EditNewsPage = lazy(() => import("./pages/EditNewsPage/EditNewsPage"));
const EditSubmissionPage = lazy(() => import("./pages/EditSubmissionPage/EditSubmissionPage"));

// Layouts
const PublicLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

const PrivateLayout = ({ children }) => children;

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/projects" element={<PublicLayout><Project /></PublicLayout>} />
          <Route path="/leadership" element={<PublicLayout><Leadership /></PublicLayout>} />
          <Route path="/projects/:id" element={<PublicLayout><ProjectDetails /></PublicLayout>} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Admin Routes (Protected) */}
          <Route path="/admin" element={<PrivateRoute><PrivateLayout><Admin /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/projects" element={<PrivateRoute><PrivateLayout><AdminProjects /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/activities" element={<PrivateRoute><PrivateLayout><AdminActivities /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/news" element={<PrivateRoute><PrivateLayout><AdminNews /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/hiring" element={<PrivateRoute><PrivateLayout><AdminHiring /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/submission" element={<PrivateRoute><PrivateLayout><AdminSubmission /></PrivateLayout></PrivateRoute>} />

          {/* Admin Add */}
          <Route path="/admin/add-projects" element={<PrivateRoute><PrivateLayout><AddProjectsPage /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/add-activities" element={<PrivateRoute><PrivateLayout><AddActivitiesPage /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/add-news" element={<PrivateRoute><PrivateLayout><AddNewsPage /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/add-hiring" element={<PrivateRoute><PrivateLayout><AddHiringPage /></PrivateLayout></PrivateRoute>} />

          {/* Admin Edit */}
          <Route path="/admin/projects/:id" element={<PrivateRoute><PrivateLayout><AdminEditProductPage /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/activities/:id" element={<PrivateRoute><PrivateLayout><EditServicesPage /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/hiring/:id" element={<PrivateRoute><PrivateLayout><EditHiringPage /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/news/:id" element={<PrivateRoute><PrivateLayout><EditNewsPage /></PrivateLayout></PrivateRoute>} />
          <Route path="/admin/submission/:id" element={<PrivateRoute><PrivateLayout><EditSubmissionPage /></PrivateLayout></PrivateRoute>} />

          {/* 404 Not Found */}
          <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
