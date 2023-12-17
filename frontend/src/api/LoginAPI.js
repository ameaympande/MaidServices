import axios from "axios";
import { toast } from "react-toastify";

export const LoginAPI = async (form) => {
  const { email, password } = form;

  const url = "http://localhost:3500/";
  //   const url = process.env.SERVER_URI;

  try {
    const body = {
      email: email,
      password: password,
    };

    const response = await axios.post(url + "auth/login", body);

    if (response && response.status === 200) {
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
