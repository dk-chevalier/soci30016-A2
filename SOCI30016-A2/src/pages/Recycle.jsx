import Info from "../features/Info";

function Recycle() {
  return (
    <>
      <Info name="RECYCLING">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              Formal Recycling:
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  Only around 1/5th of e-waste is formally recycled
                  (Sahle-Demessie et al., 2021, p. 1)
                  <ul
                    className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3 mt-2"
                    style={{ listStyle: "circle" }}
                  >
                    <li className="w-5/6">
                      rest is either sent to landfill or informally recycled in
                      developing countries
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              Informal Recycling
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  Pyrolysis and open burning practiced at informal recycling
                  sites releases hazardous pollutants that are harmful to humans
                  and the environment (Sahle-Demessie et al., 2021, p. 14)
                </li>
              </ul>
            </div>
            <div>
              Landfill
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  Not everything gets recycled, parts of e-waste is still sent
                  to landfill
                  <ul
                    className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3 mt-2"
                    style={{ listStyle: "circle" }}
                  >
                    <li className="w-5/6">
                      e.g. informal recycling often separating recyclable metals
                      from plastics, which in US, electronics plastics make up
                      approx. 5% of municipal waste (Sahle-Emessie et al., 2021,
                      p. 2)
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
