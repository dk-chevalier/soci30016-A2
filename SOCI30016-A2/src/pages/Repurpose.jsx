import Info from "../features/Info";

function Repurpose() {
  return (
    <>
      <Info name="REPURPOSE">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              One study found that{" "}
              <b>
                repurposing can be environmentally preferable to
                reuse/remanufacture
              </b>
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  they found repurposing an old smartphone as a personal parking
                  meter resulted in 100% displacement of such parking meters and
                  thus more environmental benefits, rather than the minimal
                  displacement of new phones that generally occurs if instead
                  reused as a secondhand phone (Zink et al. 2014, p. 1107)
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

export default Repurpose;
