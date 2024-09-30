import { NavLink } from "react-router-dom";
import { addWebGHG } from "./rootSlice";
import { useDispatch } from "react-redux";

const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function YourEmissions() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="border border-slate-800 rounded py-1 px-2 col-start-5 col-span-2 row-span-6 w-full h-full bg-white">
        <div className="flex flex-col justify-around content-center h-full w-full">
          <p>
            Emissions calculated here are a rough approximation according to the
            following data:
          </p>
          <p>
            Actions on this website are calculated according to data from this
            website:{" "}
            <a
              href="https://www.websitecarbon.com/website/soci30016-a2-vercel-app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.websitecarbon.com/website/soci30016-a2-vercel-app/
            </a>
          </p>
          <p>
            Laptop CO2 emissions were calculated according to data from this
            website:{" "}
            <a
              href="https://circularcomputing.com/news/carbon-footprint-laptop/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://circularcomputing.com/news/carbon-footprint-laptop/
            </a>
          </p>
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

export default YourEmissions;
