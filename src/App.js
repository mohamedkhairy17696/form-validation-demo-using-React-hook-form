import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleSubmit(onSubmit);
  };
  return (
    <div className="m-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            })}
          />
          {errors.email && (
            <span className="text-red-600	">
              {errors.email.type === "required" && "This field is required"}
              {errors.email.type === "pattern" && "Invalid email address"}
            </span>
          )}
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Strong Password(Ab#123456)"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
            })}
          />
          {errors.password && (
            <span className="text-red-600	">
              {errors.password.type === "required" && "This field is required"}
              {errors.password.type === "pattern" && "Invalid password"}
            </span>
          )}
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="First name"
              {...register("firstName", {
                required: true,
                maxLength: 24,
              })}
            />
            {errors.firstName && (
              <span className="text-red-600	">
                {errors.firstName.type === "required" &&
                  "This field is required"}
                {errors.firstName.type === "maxLength" &&
                  "max length of name is 24 characters"}
              </span>
            )}
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Last name"
              {...register("lastName", {
                required: true,
                maxLength: 24,
              })}
            />
            {errors.lastName && (
              <span className="text-red-600	">
                {errors.lastName.type === "required" &&
                  "This field is required"}
                {errors.lastName.type === "maxLength" &&
                  "max length of name is 24 characters"}
              </span>
            )}
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Phone number (01060561050)"
              {...register("phoneNumber", {
                pattern: /^01[0125][0-9]{8}$/,
              })}
            />
            {errors.phoneNumber && (
              <span className="text-red-600">Invalid Phone Number</span>
            )}
          </div>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <textarea
            type="text"
            name="msg"
            id="msg"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Write your message"
            {...register("msg", { required: true })}
          />
          {errors.msg && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
