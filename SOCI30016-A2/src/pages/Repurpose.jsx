import Info from "../features/Info";

function Repurpose() {
  return (
    <>
      <Info>REPURPOSE</Info>

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
