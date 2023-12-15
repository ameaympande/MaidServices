import { RegisterAPI } from "@/api/RegisterAPI";
import toastPromise from "@/helper/ToasterPromise";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    isAccept: false,
  });

  const { email, password } = form;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRegister = async () => {
    let hasError = false;
    const newError = { ...error };

    if (!form.name || !form.name.length > 4) {
      newError.name = true;
      hasError = true;
    } else {
      newError.name = false;
    }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      console.log("clicked.");
      newError.email = true;
      hasError = true;
    } else {
      newError.email = false;
    }

    if (!form.password || form.password.length < 6) {
      newError.password = true;
      hasError = true;
    } else {
      newError.password = false;
    }

    if (hasError) {
      setError(newError);
    } else {
      console.log("Registration successful!");
      const res = await RegisterAPI(form);
      console.log(res);
    }
  };

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-50 hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Join Us Today
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your email and password to register.
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Name
            </Typography>
            <Input
              name="name"
              value={form.name}
              onChange={handleInputChange}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {error.name && (
              <p className="text-sm text-red-500">Please enter a valid name.</p>
            )}
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              name="email"
              value={email}
              onChange={handleInputChange}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {error.email && (
              <p className="text-sm text-red-500">Please enter a valid name.</p>
            )}
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              name="password"
              value={password}
              onChange={handleInputChange}
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {error.password && (
              <p className="text-sm text-red-500">Please enter a valid name.</p>
            )}
          </div>
          <Checkbox
            error={error.isAccept}
            label={
              <Typography
                onClick={() => setIsAccept(!isAccept)}
                variant="small"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className={`font-normal transition-colors hover:text-gray-900 underline`}
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth onClick={handleRegister}>
            Register Now
          </Button>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Already have an account?
            <Link to="/sign-in" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
