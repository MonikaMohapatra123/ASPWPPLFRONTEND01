import React from "react";
import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import NavBar from "./pages/Navbar/NavBar";
import Footer from "./pages/Footer/Footer";
import { Home } from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Service/Services";
import Contact from "./components/Contact/Contact";
import Project from "./pages/Project/Project";
import ContactMe from "./pages/ContactMe/ContactMe";

import FirstProject from "./components/FirstProject/FirstProject";
import SecondProject from "./components/SecondProject/SecondProject";
import ThirdProject from "./components/ThirdProject/ThirdProject";

import FirstService from "./components/FirstService/FirstService";
import SecondService from "./components/SecondService/SecondService";
import ThirdService from "./components/ThirdService/ThirdService";

import Admin from "./pages/Admin/Admin";
import AdminProjects from "./pages/AdminProjects/AdminProjects";
import AdminActivities from "./pages/AdminActivities/AdminActivities";
import AdminNews from "./pages/AdminNews/AdminNews";
import AdminHiring from "./pages/AdminHiring/AdminHiring";
import AdminSubmission from "./pages/AdminSubmission/AdminSubmission";
import AddProjectsPage from "./pages/AddProjectsPage/AddProjectsPage";
import AddActivitiesPage from "./pages/AddActivitiesPage/AddActivitiesPage";
import AddNewsPage from "./pages/AddNewsPage/AddNewsPage";
import AddHiringPage from "./pages/AddHiringPage/AddHiringPage";
import AdminEditProductPage from "./pages/EditProjectsPage/EditProjectsPage";
import EditServicesPage from "./pages/EditServicesPage/EditServicesPage";
import EditHiringPage from "./pages/EditHiringPage/EditHiringPage";
import EditNewsPage from "./pages/EditNewsPage/EditNewsPage";
import EditSubmissionPage from "./pages/EditSubmissionPage/EditSubmissionPage";

import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound"; // optional
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  <ToastContainer position="top-right" autoClose={3000} />
  return (

      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/services"
          element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout>
              <ContactMe />
            </PublicLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <PublicLayout>
              <Project />
            </PublicLayout>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <PublicLayout>
              <Project />
            </PublicLayout>
          }
        />
       

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Private/Admin Routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <Admin />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/projects"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AdminProjects />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/activities"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AdminActivities />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/news"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AdminNews />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/hiring"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AdminHiring />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/submission"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AdminSubmission />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-projects"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AddProjectsPage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-activities"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AddActivitiesPage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-news"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AddNewsPage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-hiring"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AddHiringPage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/projects/:id"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <AdminEditProductPage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/activities/:id"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <EditServicesPage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/hiring/:id"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <EditHiringPage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/news/:id"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <EditNewsPage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/submission/:id"
          element={
            <PrivateRoute>
              <PrivateLayout>
                <EditSubmissionPage />
              </PrivateLayout>
            </PrivateRoute>
          }
        />

        {/* 404 - Optional */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <NotFound />
            </PublicLayout>
          }
        />
      </Routes>
  );
};

export default App;
