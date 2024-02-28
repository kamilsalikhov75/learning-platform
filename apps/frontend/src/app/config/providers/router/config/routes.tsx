import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../ui/DashBoardLayout";
import { AuthLayout } from "../ui/AuthLayout";
import { LoginPage, RegisterPage } from "pages/auth";
import { HomePage } from "pages/home";
import { PrivateRoute } from "../ui/PrivateRoute";
import { ProfilePage } from "pages/profile";
import { AdminLayout } from "../ui/AdminLayout";
import {
  CoursesPage as AdminCoursesPage,
  AdminTestPage,
  HomePage as AdminHomePage,
  CoursePage as AdminCoursePage,
  LessonPage as AdminLessonPage,
  JobsPage as AdminJobsPage,
} from "pages/admin";
import { CoursePage, LessonPage, TestPage } from "pages/course";
import { UserPage, UsersPage } from "pages/supervisor";
import { Role } from "entities/auth";
import { SupervisorLayout } from "../ui/SupervisorLayout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "courses/:courseId",
        element: (
          <PrivateRoute>
            <CoursePage />
          </PrivateRoute>
        ),
      },
      {
        path: "lessons/:lessonId",
        element: (
          <PrivateRoute>
            <LessonPage />
          </PrivateRoute>
        ),
      },
      {
        path: "tests/:testId",
        element: (
          <PrivateRoute>
            <TestPage />
          </PrivateRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <PrivateRoute role={Role.Admin}>
            <AdminLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <AdminHomePage />,
          },
          {
            path: "courses",
            children: [
              {
                path: "",
                element: <AdminCoursesPage />,
              },
              {
                path: ":courseId",
                element: <AdminCoursePage />,
              },
            ],
          },
          {
            path: "lessons/:lessonId",
            element: <AdminLessonPage />,
          },
          {
            path: "tests/:testId",
            element: <AdminTestPage />,
          },
          {
            path: "jobs",
            element: <AdminJobsPage />,
          },
        ],
      },
      {
        path: "supervisor",
        element: (
          <PrivateRoute role={Role.Supervisor}>
            <SupervisorLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "users",
            children: [
              {
                path: "",
                element: <UsersPage />,
              },
              {
                path: ":userId",
                element: <UserPage />,
              },
            ],
          },
          {
            path: "users/:userId",
            element: <UsersPage />,
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
