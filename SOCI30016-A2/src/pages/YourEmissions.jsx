import Info from "../features/Info";

const LAPTOP_CO2 = +import.meta.env.VITE_LAPTOP_CO2;
const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function YourEmissions() {
  return (
    <>
      <Info name="YOUR EMISSIONS WHILE EXPLORING THIS WEBSITE">
        <div className="flex flex-col gap-5 justify-around content-center h-full w-full">
          <p>
            Emissions calculated here are a rough approximation according to the
            following data:
          </p>
          <div className="w-full">
            <p>
              Actions on this website are calculated according to data from this
              website, which calculates that{" "}
              <b>each page load contributes {WEB_CO2} grams of CO2 emissions</b>{" "}
              to the atmosphere:{" "}
            </p>
            <a
              href="https://www.websitecarbon.com/website/soci30016-a2-vercel-app/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-500"
            >
              https://www.websitecarbon.com/website/soci30016-a2-vercel-app/
            </a>
          </div>
          <div className="w-full">
            <p>
              Laptops are approximated to{" "}
              <b>emit {LAPTOP_CO2} grams of CO2 per second of usage</b>,
              according to data from the below website:{" "}
            </p>
            <a
              href="https://circularcomputing.com/news/carbon-footprint-laptop/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-500"
            >
              https://circularcomputing.com/news/carbon-footprint-laptop/
            </a>
            <ul
              className="flex flex-col justify-around gap-2 content-end items-end self-end justify-self-endpy-3 px-3"
              style={{ listStyle: "disc" }}
            >
              <li className="w-5/6">
                Though data varies according to different laptops/computers,
                this website used the mean calculated amount of 61.5kg of CO2
                emissions over the entire use-phase of a laptop, assuming a
                lifetime of 4 years, and 8 hours a day usage.
              </li>
              <li className="w-5/6">
                To then calculate the rough emissions of a laptop per second of
                usage, we calculate the seconds of usage over a laptops lifetime
                (4yrs x 365days x 8hrs x 60min x 60sec = 42,048,000 seconds
                usage) and divide the total CO2 emissions in grams (61,500g) by
                the seconds
              </li>
              <li className="w-5/6 font-semibold">
                61,500g / 42,048,000sec = {LAPTOP_CO2} grams of CO2 emitted per
                second
              </li>
            </ul>
          </div>
        </div>
      </Info>
    </>
  );
}

export default YourEmissions;
