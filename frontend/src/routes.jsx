import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
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
];

export default routes;
