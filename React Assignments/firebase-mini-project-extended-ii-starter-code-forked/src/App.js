import "./styles.css";
import { DB } from "./index";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const readAllDocuments = async () => {
      try {
        const collectionRef = collection(DB, "users");
        const querySnapshot = await getDocs(collectionRef);
        const Users = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          Users.push(data);
        });
        setUsers([...Users]);
      } catch (error) {
        console.log("Error:", error);
        const Users = [
          {
            id: 1,
            name: "Ayush",
            email: "A@yahoo.com",
            password: "A"
          },
          {
            id: 2,
            name: "Dhruv",
            email: "D@yahoo.com",
            password: "D"
          },
          {
            id: 3,
            name: "Akash",
            email: "K@yahoo.com",
            password: "K"
          }
        ];
        setUsers([...Users]);
      }
    };

    readAllDocuments();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
