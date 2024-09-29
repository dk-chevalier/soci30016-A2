import { useDispatch, useSelector } from "react-redux";
import {
  selectWebGHG,
  selectLaptopGHG,
  selectTotalGHG,
  addWebGHG,
} from "../pages/rootSlice";
import { NavLink } from "react-router-dom";

const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function GhgData() {
  const webGHG = useSelector(selectWebGHG);
  const laptopGHG = useSelector(selectLaptopGHG);
  const totalGHG = useSelector(selectTotalGHG);
  const dispatch = useDispatch();

  return (
    <div className="row-start-6 col-span-4">
      <div className="flex">
        <div>
          <p>
            Your actions on this website have contributed approximately{" "}
            {webGHG.toFixed(2)} grams of CO2 emissions this session
          </p>
          <p>
            Your laptop has contributed approximately {laptopGHG.toFixed(8)}{" "}
            grams of CO2 emissions this session
          </p>
          <p>
            You have contributed approximately {totalGHG.toFixed(8)} grams of
            CO2 emissions in total this session
          </p>
        </div>

        <div className="bg-slate-800 text-white rounded-full w-6 h-6 py-1 self-center flex items-center justify-center border shadow-md">
          <NavLink
            to="./your-emissions"
            reloadDocument
            className="flex items-center justify-center"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            ?
          </NavLink>
        </div>
      </div>

      <div className="w-12 h-12 rounded-full bg-black animate-float fixed top-[-5rem] left-1/2 text-white flex justify-center content-center shadow-xl">
        <p className="self-center justify-self-center">CO2</p>
      </div>
    </div>
  );
}

export default GhgData;
