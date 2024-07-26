import { loading, play } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-10 h-10 mr-4" src={play} alt="Loading" />
      Masterclass GRATUITA para mujeres y hombres
    </div>
  );
};

export default Generating;
