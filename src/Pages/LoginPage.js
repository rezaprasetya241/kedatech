import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-brown flex items-center justify-center h-[100vh] w-full">
      <div className="text-center text-dark_green">
        <h2 className="font-bold text-3xl">Welcome</h2>
        <p>Enter your email and password to login</p>
        <div className="bg-white rounded-xl p-5 mt-5 drop-shadow-sm">
          <h4 className="text-center uppercase font-bold text-2xl">Login</h4>
          <div>
            <div className="flex flex-col my-4 text-start">
              <label>Email</label>
              <input
                className="rounded-xl border border-solid border-grey h-[40px] p-6 mt-1"
                type="text"
                placeholder="Input email address"
              />
            </div>
            <div className="flex flex-col my-4 text-start">
              <label>Password</label>
              <input
                className="rounded-xl border border-solid border-grey h-[40px] p-6 mt-1"
                type="password"
                placeholder="Input password"
              />
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" id="check" />
                <span className="ml-2">Remember me ?</span>
              </label>
            </div>

            <div className="mt-5">
              <button
                className="w-full bg-dark_green p-4 text-white rounded-xl"
                onClick={() => {
                  navigate("/");
                }}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
