import { useDispatch } from "react-redux";
import image from "../assets/e-waste_image.jpg";
import { addWebGHG } from "./rootSlice";
import { NavLink } from "react-router-dom";

const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function Map() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="absolute w-[80vw] h-[90vh] z-50  bg-slate-800 rounded-lg">
        <NavLink
          to="../"
          className="absolute top-4 right-4 text-lg text-center w-6 h-6 hover:scale-110 active:scale-100 duration-300 text-white"
          reloadDocument
          onClick={() => dispatch(addWebGHG(WEB_CO2))}
        >
          x
        </NavLink>
        <div className="w-full h-full flex justify-center items-start overflow-auto">
          <img src={image} className="border border-slate-800"></img>
        </div>
      </div>
    </>
  );
}

export default Map;
