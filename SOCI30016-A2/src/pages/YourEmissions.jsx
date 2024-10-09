import Info from "../features/Info";

const LAPTOP_CO2 = +import.meta.env.VITE_LAPTOP_CO2;
const WEB_CO2 = +import.meta.env.VITE_WEB_CO2;

function YourEmissions() {
  return (
    <>
      <Info name="YOUR EMISSIONS WHILE EXPLORING THIS WEBSITE">
        <div className="flex flex-col justify-around content-center h-full w-full">
          <p>
            Emissions calculated here are a rough approximation according to the
            following data:
          </p>
          <div className="w-full">
            <p>
              Actions on this website are calculated according to data from this
              website, which calculates that each page load contributes{" "}
              {WEB_CO2} grams of CO2 emissions to the atmosphere:{" "}
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
              Laptop CO2 emissions were calculated according to data from the
              below website:{" "}
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
              className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
              style={{ listStyle: "disc" }}
            >
              <li className="w-5/6">
                Though data varies according to different laptops/computers,
                this website used the mean 61.5 kgCO2
              </li>
            </ul>
          </div>
        </div>
      </Info>
    </>
  );
}

export default YourEmissions;
