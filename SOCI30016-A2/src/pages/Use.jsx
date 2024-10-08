import Info from "../features/Info";

function Use() {
  return (
    <>
      <Info name="USE PHASE">
        <div className="flex flex-col justify-around content-center h-full w-full py-3 px-3">
          <div className="h-full w-full flex flex-col gap-10">
            <div>
              Though e-products directly consumer energy due to power
              requirements, rechargeable battery powered products can also
              contribute to 'standby power', which is power consumed by a
              plugged in battery-charger when it is not in use (Zink et al.
              2014, p. 1107)
              <ul
                className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3"
                style={{ listStyle: "disc" }}
              >
                <li className="w-5/6">
                  a 2000 study found that 5-13% of all power worldwide is
                  consumed by standby power, though due to regulations this has
                  decreased over time, though still remains significant (Zink et
                  al. 2014, p. 1107)
                  <ul
                    className="flex flex-col justify-around content-end items-end self-end justify-self-endpy-3 px-3 mt-2"
                    style={{ listStyle: "circle" }}
                  >
                    {/* <li className="w-5/6"></li> */}
                  </ul>
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
