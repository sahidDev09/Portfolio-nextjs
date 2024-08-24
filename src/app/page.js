import Landing from "@/components/Landing";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Footer />
    </main>
  );
}
