import Info from "../features/Info";

function YourEmissions() {
  return (
    <>
      <Info name="YOUR EMISSIONS WHILE EXPLORING THIS WEBSITE">
        <div className="flex flex-col justify-around content-center h-full w-full">
          <p>
            Emissions calculated here are a rough approximation according to the
            following data:
          </p>
          <p>
            Actions on this website are calculated according to data from this
            website:{" "}
            <a
              href="https://www.websitecarbon.com/website/soci30016-a2-vercel-app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://www.websitecarbon.com/website/soci30016-a2-vercel-app/
            </a>
          </p>
          <p>
            Laptop CO2 emissions were calculated according to data from this
            website:{" "}
            <a
              href="https://circularcomputing.com/news/carbon-footprint-laptop/"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://circularcomputing.com/news/carbon-footprint-laptop/
            </a>
          </p>
        </div>
      </Info>
    </>
  );
}

export default YourEmissions;
