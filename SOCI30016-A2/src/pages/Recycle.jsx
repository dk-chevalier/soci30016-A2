import { Link } from "react-router-dom";
import Info from "../features/Info";

function Recycle() {
  return (
    <>
      <Info name="RECYCLING">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              Waste from electrical appliances contains valuable materials such
              as non-ferrous metals, plastics, glass, and reusable components,
              all of which have significant recycling potential.
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  Studies show that from just one ton of random electronic
                  boards, it is possible to recover 145 kg of copper, 0.5 g of
                  gold, 40.8 kg of iron, 29.5 kg of lead, 2 kg of tin, and 18.1
                  kg of nickel.
                </li>
              </ul>
            </div>
            <div>
              Recycling Rates:
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  E-waste recycling has become highly specialised in the United
                  States, which has led to a recycling rate of over 97%
                </li>
                <li className="w-5/6">
                  The recycling rate for waste electrical appliances in Germany
                  exceeds 90%, with their recycling systems able to handle up to
                  30,000 tons of waste annually
                </li>
                <li className="w-5/6">
                  However, despite this, one study argues that only around 1/5th
                  of e-waste is <em>formally</em> recycled, with the rest being
                  informally recycled in developing countries, or sent to
                  landfill (Sahle-Demessie et al., 2021, p. 1)
                </li>
              </ul>
            </div>
            <div>
              Informal Recycling Issues:
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  Pyrolysis and open burning practiced at informal recycling
                  sites releases hazardous pollutants that are harmful to humans
                  and the environment (Sahle-Demessie et al., 2021, p. 14)
                </li>
                <li className="w-5/6">
                  informal recycling often involves separating recyclable metals
                  from plastics, which in US, electronics plastics make up
                  approx. 5% of municipal waste (Sahle-Emessie et al. 2021, p.
                  2)
                  <ul
                    className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                    style={{ listStyle: "disc" }}
                  >
                    <li className="w-5/6">
                      Sending recycling to developing countries also leads to
                      'waste colonialism'{" "}
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
