"use client"
import { useBearsStore } from "../../public/store/bears.store";
const HomePage = () => {
  const bears = useBearsStore((state) => state.bears)
  return (
    <div><h1>
      Home page
      </h1>
      <p>Bears: {bears}</p>
      </div>
  );
};

export default HomePage;