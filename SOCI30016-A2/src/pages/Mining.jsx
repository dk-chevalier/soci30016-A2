import { NavLink } from "react-router-dom";
import { addWebGHG } from "./rootSlice";
import { useDispatch } from "react-redux";

const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function Mining() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="border border-slate-800 rounded py-1 px-2 col-start-5 col-span-2 row-span-6 w-full h-full bg-white">
        <p className="text-base">MINING</p>
        <NavLink
          to="../"
          className="absolute top-2 right-3"
          reloadDocument
          onClick={() => dispatch(addWebGHG(WEB_CO2))}
        >
          x
        </NavLink>
      </div>
    </>
  );
}

export default Mining;
