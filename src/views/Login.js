import React, { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [didSignIn] = useState(
    JSON.parse(localStorage.getItem("portal-didSignIn")) ?? null
  );
  const [didClick] = useState(
    JSON.parse(localStorage.getItem("portal-didClick")) ?? false
  );

  const handleLogin = async () => {
    localStorage.setItem("portal-didClick", true);
    try {
      await Auth.federatedSignIn(); // Perform federated sign-in
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn": {
          return;
        }
        case "cognitoHostedUI": {
          console.log("Authenticated...");
          console.log(data);

          localStorage.setItem("portal-didSignIn", true);
          navigate("/home");
          return;
        }

        case "signIn_failure": {
          console.log("signinfailure", data);
          return;
        }
        case "cognitoHostedUI_failure": {
          console.log("Error", data);
          return;
        }

        default: {
          return;
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!didSignIn && !didClick ? (
        <div>
          <h2>Login Page</h2>
          <button onClick={handleLogin}>Sign In</button>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

export default Login;
