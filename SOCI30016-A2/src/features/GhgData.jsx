import { useSelector } from "react-redux";
import { selectWebGHG, selectLaptopGHG } from "../pages/rootSlice";

function GhgData() {
  const webGHG = useSelector(selectWebGHG);
  const laptopGHG = useSelector(selectLaptopGHG);
  return (
    <div className="row-start-6 col-span-4">
      <p>
        Your actions on this website have contributed approximately{" "}
        {webGHG.toFixed(2)} grams of GHG emissions this session
      </p>
      <p>
        Your laptop has contributed approximately {laptopGHG.toFixed(8)} grams
        of CO2 emissions this session
      </p>
    </div>
  );
}

export default GhgData;
