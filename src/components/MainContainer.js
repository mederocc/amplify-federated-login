import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Layout from "./Layout";

const MainContainer = () => {
  localStorage.removeItem("portal-didSignIn");
  localStorage.removeItem("portal-didClick");

  const [user, setUser] = useState(null);
  // const keyPrefix = "username (1).csv";
  console.log("USER", user);

  useEffect(() => {
    // Check if user is authenticated

    const checkUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    checkUser();
  }, []);

  // const downloadObjectFromDifferentBucket = useCallback(async (objectKey) => {
  //   try {
  //     // Use the corrected objectKey without any prefixes
  //     const url = await Storage.get(objectKey);
  //     console.log("Object URL:", url);

  //     // Fetch the object content using the URL
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch object content");
  //     }

  //     // Convert the response content to a Blob (or other data format if needed)
  //     const blob = await response.blob();

  //     console.log(blob);

  //     // Now you have the file content in the "blob" variable
  //     // You can do whatever you need with the blob, e.g., save it to local storage, display it, etc.
  //   } catch (error) {
  //     console.error("Error downloading object:", error);
  //   }
  // }, []);

  // useEffect(() => {
  //   // Call the function with the different bucket name and object key
  //   downloadObjectFromDifferentBucket(keyPrefix);
  // }, [downloadObjectFromDifferentBucket]);

  // MANAGE SIGN OUT LOGIC BELOW
  const handleLogout = async () => {
    console.log("clicked");
    try {
      await Auth.signOut();
      window.location.reload(); // Refresh the page to go back to the login component
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return <Layout signOut={handleLogout} />;
};

export default withAuthenticator(MainContainer);
