import Security from "./components/Security";
import Villa from "./components/Villa";
import Swiper from "./components/Swiper";
import Residence from "./components/Residence";

function App() {
  return (
    <div className="w-full bg-custom-gradient p-10">
      <Villa />
      <Swiper />
      <Security />
      <Residence />
    </div>
  );
}

export default App;
