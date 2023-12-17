import axios from "axios";
import { toast } from "react-toastify";

export const ContactAPI = async (form) => {
  const { name, email, message } = form;

  const url = "http://localhost:3500/";
  //   const url = process.env.SERVER_URI;

  try {
    const body = {
      name: name,
      email: email,
      message: message,
    };

    const response = await axios.post(url + "contact", body);

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
