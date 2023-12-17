import axios from "axios";
import { toast } from "react-toastify";

export const RegisterAPI = async (form) => {
  const { name, email, password } = form;

  const url = "https://total-home.onrender.com/";
  // const url = process.env.SERVER_URI;

  try {
    const body = {
      name: name,
      email: email,
      password: password,
    };

    const response = await axios.post(url + "auth/signup", body);

    if (response && response.status === 201) {
      toast.success(response.data.message);
      return response.data.message;
    } else {
      throw new Error(response.data.error);
    }
  } catch (err) {
    console.error(err.response);
    toast.error(err.response.data.message);
  }
};
