import Info from "../features/Info";

function Use() {
  return (
    <>
      <Info name="USE PHASE">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              <b>Emissions associated with social media usage</b>
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  <b>TikTok</b> - emits 2.63 grams of CO2 per minute of each
                  active user
                </li>
                <li className="w-5/6">
                  <b>Reddit</b> - emits 2.48 grams of CO2 per minute of each
                  active user
                </li>
                <li className="w-5/6">
                  <b>Instagram</b> - emits 1.05 grams of CO2 per minute of each
                  active user
                </li>
                <li className="w-5/6">
                  <b>Twitter</b> - emits 0.6 grams of CO2 per minute of each
                  active user
                </li>
                <li className="w-5/6">
                  <b>YouTube</b> - emits 0.46 grams of CO2 per minute of each
                  active user
                </li>
                <li className="w-5/6">
                  <p>Data gathered from:</p>
                  <a
                    href="https://planbe.eco/en/blog/what-is-the-digital-carbon-footprint/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-blue-500"
                  >
                    https://planbe.eco/en/blog/what-is-the-digital-carbon-footprint/
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <b>AI vs Google emissions:</b>
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  1 query to generative AI emits approximately 4.32 grams of CO2
                </li>
                <li className="w-5/6">
                  1 query to Google emits approximately 0.2 grams of CO2
                </li>
                <li className="w-5/6">(Girvan, 2024)</li>
              </ul>
            </div>
            <div>
              Rechargeable battery powered products also contribute to 'standby
              power', which is power consumed by a plugged in battery-charger
              when it is not in use (Zink et al. 2014, p. 1107)
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  a 2000 study found that{" "}
                  <b>
                    5-13% of all power worldwide is consumed by standby power.
                  </b>{" "}
                  Due to regulations this has decreased over time, though still
                  remains significant (Zink et al. 2014, p. 1107)
                </li>
              </ul>
            </div>
            <div>
              Data centre electricity usage and emissions are a necessary part
              of the use-phase emissions and energy consumption of any products
              connected to the internet
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3 gap-2 my-2"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  e.g. in 2011 the energy consumption of data centres surpassed{" "}
                  <b>10% of global electricity consumption</b> (Velkova 2016, p.
                  3)
                </li>
                <li className="w-5/6">
                  a 2015 study showed that the National Security Agency's
                  surveillance data centre, which is the 3rd largest in the
                  world, requires <b>1.7 million gallons of water per day</b> to
                  keep its servers cooled and running (Velkova 2016, p. 3)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Info>
    </>
  );
}

export default Use;
