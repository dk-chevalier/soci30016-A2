import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import {
  addLaptopGHG,
  addWebGHG,
  selectLaptopGHG,
  selectWebGHG,
} from "./rootSlice";
import { useEffect } from "react";
import GhgData from "../features/GhgData";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setInterval(() => dispatch(addLaptopGHG(0.00015278)), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-6 items-center justify-items-center max-w-full h-lvh min-h-min gap-3 p-2 bg-teal-200 text-slate-800">
        <h1 className="text-5xl justify-center col-start-1 col-span-4">
          E-waste & E-emissions at each stage of a products lifecycle
        </h1>
        <div className="grid grid-cols-3 grid-rows-4 col-start-1 col-span-4 row-start-2 row-span-4 w-full h-full">
          <NavLink
            to="/mining"
            reloadDocument
            className="col-start-1 row-start-2 self-center justify-self-center z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white"
            onClick={() => dispatch(addWebGHG(1))}
          >
            Extraction of Materials
          </NavLink>
          <div className="grid grid-rows-1 grid-cols-1 row-start-1 row-span-2 col-start-1 col-span-2 w-full h-full">
            <div className="w-1/2 h-1/2 self-center justify-self-center translate-y-[-0.5rem] border-t-8 border-l-8 rounded-2xl border-slate-800"></div>
          </div>
          <NavLink
            to="/manufacturing"
            reloadDocument
            className="col-start-2 row-start-1 self-center justify-self-center z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white"
            onClick={() => dispatch(addWebGHG(1))}
          >
            Manufacturing of Product
          </NavLink>
          <div className="grid grid-rows-1 grid-cols-1 row-start-1 row-span-2 col-start-2 col-span-2 w-full h-full">
            <div className="w-1/2 h-1/2 self-center justify-self-center translate-y-[-0.5rem] border-t-8 border-r-8 rounded-2xl border-slate-800"></div>
          </div>

          <NavLink
            to="/use"
            reloadDocument
            className="col-start-3 row-start-2 self-center justify-self-center z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white"
            onClick={() => dispatch(addWebGHG(1))}
          >
            Use of Product
          </NavLink>
          <div className="grid grid-rows-1 grid-cols-1 row-start-2 row-span-3 col-start-2 col-span-2 w-full h-full">
            <div className="w-1/2 h-3/4 self-center justify-self-center border-b-8 border-r-8 rounded-2xl border-slate-800"></div>
          </div>

          <NavLink
            to="/disposal"
            reloadDocument
            className="col-start-2 row-start-4 self-center justify-self-center z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white"
            onClick={() => dispatch(addWebGHG(1))}
          >
            Disposal
          </NavLink>
        </div>

        <GhgData />
        <Outlet />
      </div>
    </>
  );
}

export default Home;
