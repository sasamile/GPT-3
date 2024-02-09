 
import { logo } from "../assets";
import { footer1, footer2, footer3 } from "../constant";

function Footer() {
  return (
    <footer className="text-white bg-color-footer  mt-40 p-40">
      <h1 className="gradient__text font-Manrope font-bold text-5xl w-[90%] md:w-[821px] md:text-[62px] py-32 text-center mx-auto">
        Do you want to step in to the future before others
      </h1>
      <div className="text-center mb-56">
        <button
          type="button"
          className="text-[18px] font-Manrope border border-white py-2 px-4"
        >
          Request Early Access
        </button>
      </div>

      <div className="w-[80%] grid md:grid-cols-2 grid-cols-1 justify-between items-center mx-auto ">
        <div className="grid gap-8 max-md:items-center max-md:justify-center">
          <img src={logo} alt=" gpt3" className="w-[118px] max-md:mx-auto" />
          <p className="text-[12px] max-md:text-center">
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="grid md:grid-cols-3  grid-cols-2 md:gap-56 gap-16  mt-20">
          <div>
            {footer1.map(({ label }, index) => {
              const active = "Links";

              return (
                <ul className="py-4" key={index}>
                  <li
                    className={`${
                      label === active && "font-bold text-[14px]"
                    }text-[12px]`}
                  >
                    {label}
                  </li>
                </ul>
              );
            })}
          </div>
          <div>
            {footer2.map(({ label }, index) => {
              const active = "Company";

              return (
                <ul key={index} className="py-4">
                  <li
                    className={`${
                      label === active && "font-bold text-[14px]"
                    }text-[12px]`}
                  >
                    {label}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="max-md:col-span-2 max-md:text-center">
            {footer3.map(({ label }, index) => {
              const active = "Get in touch";

              return (
                <ul key={index} className="py-4">
                  <li
                    className={`${
                      label === active && "font-bold text-[14px]"
                    }text-[12px]`}
                  >
                    {label}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
