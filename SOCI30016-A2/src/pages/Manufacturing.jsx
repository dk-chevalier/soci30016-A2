import Info from "../features/Info";

function Manufacturing() {
  return (
    <>
      <Info name="MANUFACTURING">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              Manufacturing & resource extraction account for approximately
              20-30% of the total lifecycle energy requirements of a computer
              (Sahni et al. 2010)
            </div>
          </div>
        </div>
      </Info>
    </>
  );
}

export default Manufacturing;
