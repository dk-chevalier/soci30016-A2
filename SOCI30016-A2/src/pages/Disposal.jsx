import { NavLink } from "react-router-dom";
import { addWebGHG } from "./rootSlice";
import { useDispatch } from "react-redux";

const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function Disposal() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="absolute w-2/6 h-min border bg-white border-slate-800 rounded py-6 px-4 bottom-1/3 translate-x-1/2 right-2/3 z-20">
        <p className="text-lg mb-4 text-center font-semibold">
          Select a End-Of-Life option:
        </p>
        <div className="flex flex-col justify-between gap-3">
          <NavLink
            to="../landfill"
            reloadDocument
            className="z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white hover:scale-105 duration-300 hover:shadow-xl active:scale-100 active:shadow-md active:bg-slate-700 text-center"
            // className="col-start-2 row-start-4 self-center justify-self-center px-2 py-1 border rounded-sm border-slate-800"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Landfill
          </NavLink>
          <NavLink
            to="../reuse"
            reloadDocument
            className="z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white hover:scale-105 duration-300 hover:shadow-xl active:scale-100 active:shadow-md active:bg-slate-700 text-center"
            // className="col-start-2 row-start-4 self-center justify-self-center px-2 py-1 border rounded-sm border-slate-800"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Refurbish/Reuse
          </NavLink>
          <NavLink
            to="../recycle"
            reloadDocument
            className="z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white hover:scale-105 duration-300 hover:shadow-xl active:scale-100 active:shadow-md active:bg-slate-700 text-center"
            // className="col-start-2 row-start-4 self-center justify-self-center px-2 py-1 border rounded-sm border-slate-800"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Recycle
          </NavLink>
          <NavLink
            to="../repurpose"
            reloadDocument
            className="z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white hover:scale-105 duration-300 hover:shadow-xl active:scale-100 active:shadow-md active:bg-slate-700 text-center"
            // className="col-start-2 row-start-4 self-center justify-self-center px-2 py-1 border rounded-sm border-slate-800"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Repurpose
          </NavLink>
        </div>
        <NavLink
          to="../"
          // className="absolute top-2 right-3"
          className="absolute top-1 right-1 text-xl text-center w-6 h-6 hover:scale-110 active:scale-100 duration-300 font-bold"
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
