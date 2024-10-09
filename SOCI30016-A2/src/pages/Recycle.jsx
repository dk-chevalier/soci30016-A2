import { Link } from "react-router-dom";
import Info from "../features/Info";

function Recycle() {
  return (
    <>
      <Info name="RECYCLING">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              The primary economic incentive for recycling e-waste is the
              recovery of precious metals, which account for over 70% of the
              value in devices like cell phones and circuit boards, and 40% in
              TV boards and DVD players. Precious metals are highly valued in
              electronics for their chemical stability and conductivity, with
              metals like platinum, copper, and zinc also contributing to
              recycling demand.{" "}
              <b>
                Studies show that from just one ton of random electronic boards,
                it is possible to recover 145kg of copper, 0.5g of gold, 40.8kg
                of iron, 29.5kg of lead, 2kg of tin, and 18.1kg of nickel
              </b>{" "}
              (J. Cui and L. Zhang, 2008).
            </div>
            <div>
              <b>Recycling Rates:</b>
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  The <b>global rate of e-waste recycling</b> has been estimated
                  at about <b>13% in 2009</b>, while the estimates of recycling
                  in the U.S. range from 13.6% to 26.6% (Jiang et al. 2012)
                </li>
                <li className="w-5/6">
                  Another study estimates that{" "}
                  <b>
                    only around 1/5th of e-waste is <em>formally</em> recycled
                  </b>
                  , with the rest being informally recycled in developing
                  countries, or sent to landfill (Sahle-Demessie et al., 2021,
                  p. 1)
                </li>
              </ul>
            </div>
            <div>
              <b>Informal Recycling Issues:</b>
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  Pyrolysis and open burning practiced at informal recycling
                  sites{" "}
                  <b>
                    releases hazardous pollutants that are harmful to humans and
                    the environment
                  </b>{" "}
                  (Sahle-Demessie et al., 2021, p. 14)
                </li>
                <li className="w-5/6">
                  <b>
                    50-80% of e-waste from developed countries is exported to
                    developing nations
                  </b>{" "}
                  like China, India, and Pakistan,{" "}
                  <b>
                    where it is processed using hazardous and unsafe methods
                  </b>{" "}
                  due to lenient regulations and lower labor costs. This
                  improper handling, including manual dismantling, open-air
                  burning, and cyanide leaching,{" "}
                  <b>poses significant health and environmental risks</b> (Keith
                  & Fisher, 2009)
                  <ul
                    className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                    style={{ listStyle: "disc" }}
                  >
                    <li className="w-5/6">
                      This is a kind of <b>'Waste Colonialism'</b>{" "}
                      <Link to="../landfill" className="text-blue-500">
                        (c.f. Landfill Section)
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Info>

      <div className="grid grid-cols-2 grid-rows-2 col-start-1 col-span-4 row-start-2 row-span-4 w-4/5 h-4/5">
        {/* <p className="text-white col-start-2 row-start-1">Recycling</p> */}
        <div className="col-start-2 row-start-1 row-span-2 w-full h-full border-l-8 rounded-2xl border-slate-800 grid">
          <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-center justify-self-start -translate-x-[calc(50%+4px)]"></div>
        </div>
        <div className="col-start-1 row-start-2 w-full h-full border-b-8 rounded-2xl border-slate-800 grid">
          <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-end justify-self-center -translate-x-[calc(50%+4px)] translate-y-[calc(50%+4px)] -rotate-90"></div>
        </div>
        <p className="col-start-1 row-start-2 self-end justify-self-start z-10 py-3 px-2 border rounded-full shadow-md bg-white text-slate-800 translate-y-1/2 -translate-x-1/2">
          Landfill
        </p>
      </div>
    </>
  );
}

export default Recycle;
