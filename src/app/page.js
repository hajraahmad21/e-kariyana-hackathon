import Image from "next/image";
import LoginForm from "./login/_components/loginForm";
import AppLayout from "../../AppLayout"
import Dashboard from "./dashboard/dashboard";
export default function Home() {
  return (
    <AppLayout>
      <Dashboard />
    </AppLayout> 
  );
}
