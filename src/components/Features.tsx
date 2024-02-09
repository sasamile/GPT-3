import { Parrafos } from "../constant";

function Features() {
  return (
    <section className="flex max-lg:flex-col  gap-40 max-md:gap-10 mt-40 w-[80%] max-md:w-[90%] mx-auto" id="open">
      <div>
        <h1 className="gradient__text font-Manrope font-bold text-[34px] w-full my-20">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="text-[#F4856E] text-[16px] font-[500] font-Manrope">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="text-white my-12 grid place-items-center gap-20">
        {Parrafos.map(({ title, label }) => (
          <div
            className="flex gap-32 max-md:gap-10 max-md:flex-col"
            key={title}
          >
            <h1 className=" font-Manrope font-bold text-[20px] max-md:text-center max-lg:w-[80%] mx-auto md:text-[16px]  relative nav-link w-[400px]">
              {title}
            </h1>

            <p className="font-Manrope font-[500] text-[14px] text-color-text max-md:text-center">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
