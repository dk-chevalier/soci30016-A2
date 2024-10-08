import Info from "../features/Info";

function Reuse() {
  return (
    <>
      <Info name="REUSE">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              Rebound effects mean that perceived emissions and energy savings
              are not always present:
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  e.g. Only about 5% of 'used' phone sales displace sales of
                  'new' phones
                  <ul
                    className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3 mt-2"
                    style={{ listStyle: "circle" }}
                  >
                    <li className="w-5/6">
                      this relatively miniscule displacement effect is generally
                      true of all products that depreciate rapidly (e.g.
                      computers) (Thomas 2003, p. 75)
                    </li>
                  </ul>
                </li>
                <li className="w-5/6">
                  Products with high use-phase energy requirements and improving
                  efficiencies should not be reused, as use-phase energy makes
                  up the majority of total energy usage of such products (Cooper
                  & Gutowski 2015, p. 48)
                  <ul
                    className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3 mt-2"
                    style={{ listStyle: "circle" }}
                  >
                    <li className="w-5/6">
                      e.g. energy payback period of buying a more efficient new
                      refrigerator is as low as 2 years (meaning environmentally
                      better to upgrade your refrigerator every 2 years) (Cooper
                      & Gutowski 2015, p. 48; Kiatkittipong et al. 2007, p.
                      1343)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              Savings from buying cheaper secondhand products means dollars are
              spent elsewhere, in potentially more environmentally harmful areas
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  some economists argue secondhand markets turn consumer
                  products into 'liquid assets' making it easy for consumers to
                  sell them (Thomas 2003, p. 66)
                  <ul
                    className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3 my-2"
                    style={{ listStyle: "circle" }}
                  >
                    <li className="w-5/6">
                      this, along with the secondhand market's effect of
                      lowering overall prices (Zink & Geyer 2017, p. 598), leads
                      to an increase in consumers' wealth and thus increase in
                      overall demand (Thomas 2003, p. 66)
                    </li>
                  </ul>
                </li>
                <li className="w-5/6">
                  Secondhand products are typically priced betwen 45%-65% of new
                  equivalents (Cooper & Gutowski 2015, p. 40)
                  <ul
                    className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3 my-2"
                    style={{ listStyle: "circle" }}
                  >
                    {/* <li className="w-5/6"></li> */}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Info>

      <div className="grid grid-cols-2 grid-rows-2 col-start-1 col-span-4 row-start-2 row-span-4 w-4/5 h-4/5">
        <div className="col-start-2 row-start-2 w-full h-full border-t-8 border-l-8 rounded-2xl border-slate-800 grid">
          <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-center justify-self-start -translate-y-[calc(50%+4px)] -translate-x-[calc(50%+4px)]"></div>
          <div className="absolute h-0 w-0 border-x-[1rem] border-x-transparent border-b-[1rem] border-b-slate-800 self-start justify-self-center translate-x-[calc(50%+4px)] -translate-y-[calc(50%+4px)] rotate-90"></div>
        </div>
      </div>
    </>
  );
}

export default Reuse;
