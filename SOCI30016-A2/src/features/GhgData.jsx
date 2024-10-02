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

        <div className="self-center flex items-center justify-center">
          <NavLink
            to="./your-emissions"
            reloadDocument
            className="bg-slate-800 text-white rounded-full w-7 h-7 self-center flex items-center justify-center border shadow-md hover:scale-110 duration-300 hover:shadow-xl active:scale-100 active:shadow-md active:bg-slate-700"
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
