import Info from "../features/Info";

function Mining() {
  return (
    <>
      <Info name="MINING">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              Manufacturing & resource extraction account for approximately
              20-30% of the total lifecycle energy requirements of a computer
              (Sahni et al. 2010)
            </div>
          </div>

          <div className="h-full w-full flex flex-col gap-10">
            <div>
              <p>
                1,200kgs of earth is mined when constructing a laptop, with
                laptop components often containing mercury, lead, chromium, and
                other heavy metals:
              </p>

              <a
                href="https://circularcomputing.com/news/carbon-footprint-laptop/"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-500"
              >
                https://circularcomputing.com/news/carbon-footprint-laptop/
              </a>
            </div>
          </div>
        </div>
      </Info>
    </>
  );
}

export default Mining;
