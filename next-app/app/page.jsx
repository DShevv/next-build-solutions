import Feedback from "./components/Feedback/Feedback";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
import Map from "./components/Map/Map";

export default function Home({ searchParams }) {
  const modal = searchParams?.modal;

  return (
    <main>
      <Hero />
      <Map />
      <Feedback />
      {modal && <Modal />}
    </main>
  );
}
