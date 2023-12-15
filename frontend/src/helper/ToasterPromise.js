import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastPromise = (message, options = {}) => {
  return new Promise((resolve, reject) => {
    toast(message, {
      ...options,
      onClose: () => resolve(),
      onOpen: () => reject(),
    });
  });
};

export default toastPromise;
