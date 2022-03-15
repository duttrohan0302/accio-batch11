import React, { useRef,useCallback } from "react";

import Card from "./components/card";


export default function FormRef() {
    console.log("### Refreshing")
    // const [userData,setUserData] = useState(initialUserData)
    const fullNameInputElement = useRef()
    const emailInputElement = useRef()
    const passwordInputElement = useRef()
    const passwordConfirmationInputElement = useRef()

 
    // const updateUserDataHandler = useCallback(
    //     (type) => (event) => {
    //         setUserData({...userData,[type]:event.target.value})
    //     },[userData]
    // )

    const formHandler = useCallback(
        () => (event) => {
            event.preventDefault();
            const data = {
                fullName: fullNameInputElement.current ? fullNameInputElement.current.value : "",
                email: emailInputElement.current?.value,
                password: passwordInputElement.current?.value,
                passwordConfirmation: passwordConfirmationInputElement.current?.value
            }
            console.log(data)
        }
        ,[])
  return (
    <div className="flex h-screen bg-gray-500 w-screen items-center justify-center">
      <Card>
        <h1 className="text-3xl">Signup</h1>
        <form className="mt-4" onSubmit={formHandler()}>
          <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="full_name"
            >
              Full name
            </label>
            <input
              id="full_name"
              placeholder="Full name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={fullNameInputElement}
                />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              placeholder="Email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={emailInputElement}
         
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={passwordInputElement}

/>
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="password_confirmation"
            >
              Password Confirmation
            </label>
            <input
              id="password_confirmation"
              placeholder="Password Confirmation"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ref={passwordConfirmationInputElement}

/>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}
