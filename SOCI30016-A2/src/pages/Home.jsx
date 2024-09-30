import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { addLaptopGHG, addWebGHG, clearGHG } from "./rootSlice";
import { useEffect } from "react";
import GhgData from "../features/GhgData";

const LAPTOP_CO2 = +import.meta.env.VITE_LAPTOP_CO2;
const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setInterval(() => dispatch(addLaptopGHG(LAPTOP_CO2)), 1000);

    // const location = useLocation().pathname;

    // let disposal;
    // if (
    //   location === "/" ||
    //   location.includes("your") ||
    //   location.includes("disposal")
    // ) {
    //   disposal = "Disposal";
    // }

    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-6 items-center justify-items-center max-w-full h-lvh min-h-min gap-3 p-2 bg-teal-200 text-slate-800">
        <h1 className="text-5xl justify-center col-start-1 col-span-4">
          E-waste & E-emissions at each stage of a products lifecycle
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 col-start-1 col-span-4 row-start-2 row-span-4 w-4/5 h-4/5">
          <NavLink
            to="./mining"
            reloadDocument
            className="col-start-1 row-start-1 self-end justify-self-start z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white translate-y-1/2 -translate-x-1/2"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Extraction of Materials
          </NavLink>

          <div className="col-start-1 row-start-1 w-full h-full border-t-8 border-l-8 rounded-2xl border-slate-800 grid">
            <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-center justify-self-start -translate-x-[calc(50%+4px)] -translate-y-[calc(50%+4px)]"></div>
            <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 start justify-self-center -translate-y-[calc(50%+4px)] -translate-x-[calc(50%+4px)] rotate-90"></div>
          </div>

          <NavLink
            to="./manufacturing"
            reloadDocument
            className="col-start-1 row-start-1 self-start justify-self-end z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white -translate-y-1/2 translate-x-1/2"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Manufacturing of Product
          </NavLink>

          <div className="col-start-2 row-start-1 w-full h-full border-t-8 border-r-8 rounded-2xl border-slate-800 grid">
            <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-start justify-self-center translate-x-[calc(50%+4px)] -translate-y-[calc(50%+4px)] rotate-90"></div>
            <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-center justify-self-end -translate-y-[calc(50%+4px)] translate-x-[calc(50%+4px)] rotate-180"></div>
          </div>

          <NavLink
            to="./use"
            reloadDocument
            className="col-start-2 row-start-2 self-start justify-self-end z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white -translate-y-1/2 translate-x-1/2"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Use of Product
          </NavLink>

          <div className="col-start-2 row-start-2 w-full h-full border-b-8 border-r-8 rounded-2xl border-slate-800 grid">
            <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-center justify-self-end translate-y-[calc(50%+4px)] translate-x-[calc(50%+4px)] rotate-180"></div>
            <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-end justify-self-center translate-x-[calc(50%+4px)] translate-y-[calc(50%+4px)] -rotate-90"></div>
          </div>

          <NavLink
            to="./disposal"
            reloadDocument
            className="col-start-2 row-start-2 self-end justify-self-start z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white translate-y-1/2 -translate-x-1/2"
            onClick={() => dispatch(addWebGHG(WEB_CO2))}
          >
            Disposal
          </NavLink>
        </div>

        <GhgData />
        <button
          className="absolute bottom-2 left-2"
          onClick={() => dispatch(clearGHG())}
        >
          CLEAR GHG
        </button>
        <Outlet />
      </div>
    </>
  );
}

export default Home;
