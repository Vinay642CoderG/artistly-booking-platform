"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as Yup from "yup";
import data from "@/data/data.json";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const { auth } = useGlobalContext();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (
    values: typeof initialValues,
    helpers: FormikHelpers<typeof initialValues>
  ) => {
    const matchedUser = data.users.find(
      (u) => u.username === values.username && u.password === values.password
    );

    if (matchedUser) {
      auth.login(matchedUser);

      if (matchedUser.role === "admin") router.push("/dashboard");
      else router.push("/"); // redirect to user home
    } else {
      helpers.setErrors({ password: "Invalid credentials" });
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white border border-black rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4 mb-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <Field
              name="username"
              type="text"
              id="username"
              autoComplete="username"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-sm text-red-600"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-sm text-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Login
          </button>
        </Form>
      </Formik>
      <div className="text-center">
        <Link className="text-blue-700 underline" href={"/"}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
