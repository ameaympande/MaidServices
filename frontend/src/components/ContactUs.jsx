import { ContactAPI } from "@/api/ContactAPI";
import {
  Button,
  Checkbox,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setError({ ...error, [name]: false });
  };

  const handleSubmit = async () => {
    let hasError = false;
    const newError = { ...error };

    if (!form.name) {
      newError.name = true;
      hasError = true;
    } else {
      newError.name = false;
    }

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      newError.email = true;
      hasError = true;
    } else {
      newError.email = false;
    }

    if (!form.message) {
      newError.message = true;
      hasError = true;
    } else {
      newError.message = false;
    }

    if (hasError) {
      setError(newError);
    } else {
      setLoading(true);

      console.log("contact-us submitted.");
      const res = await ContactAPI(form);

      setLoading(false);

      if (res) {
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      }
    }
  };

  return (
    <form className="mx-auto w-full mt-12 lg:w-5/12">
      <div className="mb-8 flex gap-8">
        <Input
          variant="outlined"
          size="lg"
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          error={error.name}
        />
        <Input
          variant="outlined"
          size="lg"
          label="Email Address"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          error={error.email}
        />
      </div>
      <Textarea
        variant="outlined"
        size="lg"
        label="Message"
        rows={8}
        name="message"
        value={form.message}
        onChange={handleInputChange}
        error={error.message}
      />
      <Button
        variant="gradient"
        size="lg"
        className="mt-8"
        fullWidth
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : isSent ? "Sent!" : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactUsForm;
