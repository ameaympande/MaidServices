import { LoginAPI } from "@/api/LoginAPI";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    isAccept: false,
  });

  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    let hasError = false;
    const newError = { ...error };

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      newError.email = true;
      hasError = true;
    } else {
      newError.email = false;
    }

    if (!form.password) {
      newError.password = true;
      hasError = true;
    } else {
      newError.password = false;
    }

    if (hasError) {
      setError(newError);
    } else {
      console.log("Login Clicked.");
      const res = await LoginAPI(form);
      console.log(res);
      if (res) {
        navigate("/home");
      }
      console.log(res);
    }
  };

  return (
    <section className="m-4 md:m-8 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-3/5 mt-8 md:mt-24">
        <div className="text-center">
          <Typography
            variant="h2"
            className="font-bold mb-4 text-2xl md:text-4xl"
          >
            Sign In
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg md:text-base font-normal"
          >
            Enter your email and password to Sign In.
          </Typography>
        </div>
        <form className="mt-6 mx-auto w-full max-w-screen-md lg:w-1/2">
          <div className="mb-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              Your email
            </Typography>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {error.email && (
              <p className="text-sm text-red-500 mt-1">
                Please enter a valid email.
              </p>
            )}
          </div>
          <div className="mb-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              Password
            </Typography>
            <Input
              name="password"
              value={form.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              size="md"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 relative"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {error.password && (
              <p className="text-sm text-red-500 mt-1">
                Please enter a valid password.
              </p>
            )}
          </div>
          <Checkbox
            value={form.isAccept}
            onChange={handleChange}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <Link
                  to="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5 mb-4" }}
          />
          <Button className="mt-4" fullWidth onClick={handleSubmit}>
            Sign In
          </Button>
          <Typography
            variant="small"
            className="font-medium text-gray-900 text-center mt-4"
          >
            <Link to="#">Forgot Password</Link>
          </Typography>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Not registered?
            <Link to="/sign-up" className="text-gray-900 ml-1">
              Create account
            </Link>
          </Typography>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
          alt="Pattern"
        />
      </div>
    </section>
  );
}

export default SignIn;
