import { NavLink, Outlet } from "react-router-dom";
import Info from "../features/Info";
import { useDispatch } from "react-redux";
import { addWebGHG } from "./rootSlice";

const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function Landfill() {
  const dispatch = useDispatch();
  return (
    <>
      <Info name="LANDFILL">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              The majority of the e-waste generated ends up in landfills
              (Barba-Gutierrez et al., 2008).
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  In 2019, it was found that 83% of e-waste generated that year
                  was unaccounted for, likely having been burnt or dumped
                  illegally. (Shahabuddin et al., 2022)
                </li>
                <li className="w-5/6">
                  In 2012, only about 15% of phones were responsibly disposed,
                  while the rest were either kept in storage or improperly
                  disposed of (Zink et al. 2014, p. 1100)
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4">
                The amount of e-waste generated per capita is strongly
                correlated with the country's GDP (Robinson, 2009)
              </p>
              <NavLink
                to="./e-waste-image"
                reloadDocument
                className="z-10 py-3 px-2 border rounded shadow-md bg-slate-800 text-white hover:scale-105 duration-300 hover:shadow-xl active:scale-100 active:shadow-md active:bg-slate-700"
                onClick={() => dispatch(addWebGHG(WEB_CO2))}
              >
                GDP & E-waste Map
              </NavLink>
            </div>
          </div>
        </div>
      </Info>

      <div className="grid grid-cols-2 grid-rows-2 col-start-1 col-span-4 row-start-2 row-span-4 w-4/5 h-4/5">
        <div className="col-start-1 row-start-2 w-full h-full border-b-8 rounded-2xl border-slate-800 grid">
          <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-end justify-self-center translate-x-[calc(50%+4px)] translate-y-[calc(50%+4px)] -rotate-90"></div>
        </div>
        <p className="col-start-1 row-start-2 self-end justify-self-start z-10 py-3 px-2 border rounded-full shadow-md bg-white text-slate-800 translate-y-1/2 -translate-x-1/2">
          Landfill
        </p>
      </div>
      <Outlet />
    </>
  );
}

export default Landfill;
