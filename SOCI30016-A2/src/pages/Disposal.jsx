import { NavLink } from "react-router-dom";
import { addWebGHG } from "./rootSlice";
import { useDispatch } from "react-redux";

const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function Disposal() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="absolute w-1/6 h-min border bg-white border-slate-800 rounded py-1 px-2 bottom-1/2 translate-x-1/2 tranlate-y-1/2 right-2/3 z-20">
        <p className="text-base mb-4">Select a End-Of-Life option:</p>
        <div className="flex flex-col justify-between gap-3">
          <NavLink
            to="../landfill"
            reloadDocument
            className="col-start-2 row-start-4 self-center justify-self-center px-2 py-1 border rounded-sm border-slate-800"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Landfill
          </NavLink>
          <NavLink
            to="../reuse"
            reloadDocument
            className="col-start-2 row-start-4 self-center justify-self-center px-2 py-1 border rounded-sm border-slate-800"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Refurbish/Reuse
          </NavLink>
          <NavLink
            to="../recycle"
            reloadDocument
            className="col-start-2 row-start-4 self-center justify-self-center px-2 py-1 border rounded-sm border-slate-800"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Recycle
          </NavLink>
          <NavLink
            to="../repurpose"
            reloadDocument
            className="col-start-2 row-start-4 self-center justify-self-center px-2 py-1 border rounded-sm border-slate-800"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Repurpose
          </NavLink>
        </div>
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

export default Disposal;
