import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    element: <Profile />,
  },
  {
    name: "Pricing",
    path: "/price",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "About Us",
    path: "/about",
    element: <Profile />,
  },
  {
    path: "/Sign-up",
    element: <SignUp />,
  },
];

export default routes;
