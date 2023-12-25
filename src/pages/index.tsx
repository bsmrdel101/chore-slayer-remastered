import { useEffect } from "react";
import Layout from "../components/Layout";
import { loginUser } from "@/scripts/controllers/userController";


export default function Index() {
  useEffect(() => {
    loginUser({ username: "dev", password: "123" });
  }, []);

  return (
    <Layout title="Chore Slayer">
      <h1>Chore Slayer</h1>
    </Layout>
  );
}
