import React from "react";
import LoginForm from "./loginform"; // Import the loginForm component

export default function page() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <LoginForm />
    </div>
  );
}