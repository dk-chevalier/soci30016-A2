import Info from "../features/Info";

function Recycle() {
  return (
    <>
      <Info>
        <h2 className="px-4 py-2 text-lg">RECYCLING</h2>
        <div className="flex flex-col justify-around content-center h-full w-full">
          <p></p>
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
