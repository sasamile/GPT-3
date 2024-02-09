import { possibility } from "../assets";

function Possibility() {
  return (
    <section className="flex w-[80%] max-md:w-[90%] mx-auto items-end mt-8 flex-1 max-lg:flex-wrap max-md:gap-10 " id="case">
      <img
        src={possibility}
        alt="posibity"
        className="w-[546px] h-[607.53px] "
      />
      <div className="grid gap-8">
        <p className="text-[#71E5FF] text-[16px] font-Manrope">
          Request Early Access to Get Started
        </p>
        <h1 className="gradient__text text-[34px] font-Manrope font-bold">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-[16px] text-color-text leading-[38px]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="font-[500] text-[16px] font-Manrope text-[#FF8A71]">
          Request Early Access to Get Started
        </p>
      </div>
    </section>
  );
}

export default Possibility;
