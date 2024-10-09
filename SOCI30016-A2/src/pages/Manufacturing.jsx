import Info from "../features/Info";

function Manufacturing() {
  return (
    <>
      <Info name="MANUFACTURING">
        <div className="flex flex-col content-center h-full w-full py-3 px-3 gap-6">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              Production of <b>single smartphone</b> emits <b>16kgs of CO2</b>{" "}
              and cost <b>14,000 litres of water</b> (Abd El Aziz, 2022;
              Liboiron et al. 2022)
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  14.5 billion smartphones produced between 2007-2021. Assuming
                  a 3 year life span of the phone equates to 12 litres of water
                  per day to cover a smartphone's water cost (Liboiron et al.
                  2022)
                </li>
                <li className="w-5/6">
                  The entire lifecycle of the{" "}
                  <b>iPhone 6s emitted about 95 kg of CO2</b>, 85% of which
                  occurred in the manufacturing stage (Suckling & Lee, 2015)
                </li>
                <li className="w-5/6">
                  In addition,{" "}
                  <b>
                    building an iPhone 7 Plus creates roughly 10% more CO2
                    emissions than an iPhone 6s does
                  </b>{" "}
                  (Wilson, 2018)
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              Manufacturing & resource extraction account for approximately
              20-30% of the total lifecycle energy requirements of a computer
              (Sahni et al. 2010)
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  <p>
                    Though notably this potentially goes against other data
                    which claims the manufacturing phase of a laptop accounts
                    for 75%-85% of its overall carbon footprint (depending on
                    how closely related energy requirements and carbon footprint
                    are):
                  </p>
                  <a
                    href="https://circularcomputing.com/news/carbon-footprint-laptop/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-blue-500"
                  >
                    https://circularcomputing.com/news/carbon-footprint-laptop/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Info>
    </>
  );
}

export default Manufacturing;
