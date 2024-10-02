import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addWebGHG } from "../pages/rootSlice";

const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function Info({ name, children }) {
  const dispatch = useDispatch();

  return (
    <div className="border border-slate-800 rounded py-1 px-2 col-start-5 col-span-2 row-span-6 w-full h-full bg-white">
      <h2 className="px-4 py-2 text-lg w-full text-center">{name}</h2>
      {children}
      <NavLink
        to="../"
        className="absolute top-2 right-3"
        reloadDocument
        onClick={() => dispatch(addWebGHG(WEB_CO2))}
      >
        x
      </NavLink>
    </div>
  );
}

export default Info;
