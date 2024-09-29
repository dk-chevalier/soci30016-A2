import { useDispatch, useSelector } from "react-redux";
import {
  selectWebGHG,
  selectLaptopGHG,
  selectTotalGHG,
  selectCount,
  addToCount,
} from "../pages/rootSlice";
import { useEffect } from "react";

const RELEASE_BUBBLE_AMOUNT = +import.meta.env.VITE_RELEASE_CO2_BUBBLE;

function GhgData() {
  const webGHG = useSelector(selectWebGHG);
  const laptopGHG = useSelector(selectLaptopGHG);
  const totalGHG = useSelector(selectTotalGHG);

  return (
    <div className="row-start-6 col-span-4">
      <p>
        Your actions on this website have contributed approximately{" "}
        {webGHG.toFixed(2)} grams of CO2 emissions this session
      </p>
      <p>
        Your laptop has contributed approximately {laptopGHG.toFixed(8)} grams
        of CO2 emissions this session
      </p>
      <p>
        You have contributed approximately {totalGHG.toFixed(8)} grams of CO2
        emissions in total this session
      </p>

      <div className="w-12 h-12 rounded-full bg-black animate-float fixed top-[-5rem] left-1/2 text-white flex justify-center content-center shadow-xl">
        <p className="self-center justify-self-center">CO2</p>
      </div>
    </div>
  );
}

export default GhgData;
