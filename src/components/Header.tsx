import { ai, people } from "../assets";

function Header() {
  return (
    <>
      <div className="flex max-lg:flex-col mt-20 pb-20" id="home">
        <div className=" flex-1 flex justify-center items-start flex-col mx-20 max-lg:mx-12 ">
          <h1 className="gradient__text font-Manrope font-[800] text-[62px] leading-[75px] tracking-tighter max-md:text-[48px] max-md:leading-[60px] max-sm::text-[36px] max-sm:leading-[48px]">
            Let's Build Something Amazing with GPT-3 openAI
          </h1>
          <p className="font-Manrope font-normal text-[20px] leading-10 mt-6 text-color-text max-md:text-[16px] max-md:leading-8 max-sm:text-[14px] max-sm:leading-[24px] ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="w-full mt-8 mb-4 grid grid-cols-3 text-white">
            <input
              type="email"
              placeholder="Your Email Address"
              className="col-span-2 bg-color-footer min-h-[40px] pl-6 rounded-tl-md rounded-bl-md text-[18px] outline-none max-md:text-[14px] max-sm:text-[12px]"
            />
            <button
              type="button"
              className="col-span-1 bg-[#FF4820] rounded-tr-md rounded-br-md text-[18px] font-bold  w-[80%] flex-1 max-md:text-[14px] max-sm:text-[12px]"
            >
              Get Started
            </button>
          </div>
          <div className="w-full flex justify-start items-center mt-8 max-md:my-20 max-md:flex-col">
            <img src={people} alt="people" className="w-[181.79px] h-[38px]" />
            <p className=" font-Manrope ml-4 text-[12px] leading-10 text-white font-[500] text-center">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </>
  );
}

export default Header;
