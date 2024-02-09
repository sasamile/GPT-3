interface ParrafosProps {
  title: string;
  label: string;
}
function Parrafos({ title, label }: ParrafosProps) {
  return (
    <div className="grid gap-20 max-md:gap-10  relative nav-link">
      <h1 className="font-Manrope font-bold text-[22px] ">{title}</h1>
      <p className="font-[500] text-[16px] font-Manrope leading-[30px]">
        {label}
      </p>
    </div>
  );
}

function WhatGpt3() {
  return (
    <div className="text-white gpt3-bg w-[80%] max-md:w-[95%] mx-auto" id="what">
      <div className="p-20 pt-40">
        <div className="grid grid-cols-3 justify-between max-md:grid-cols-1">
          <h1 className="w-[151px] max-md:w-full text-[22px] font-Manrope font-bold leading-[75px] relative nav-link">
            What is GPT-3
          </h1>
          <p className="col-span-2 font-Manrope font-[500] text-[16px] leading-[30px]">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="flex justify-between mt-16 max-md:flex-col">
          <h1 className="w-[472px] max-md:w-full max-md:my-8 font-Manrope font-bold text-[34px] max-md:text-[28px] gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p className="gradient__text text-[16px] font-[500] ">
            <a href="">Explore The Library</a>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-20 mt-40 max-md:mt-20 max-md:grid-cols-1 max-md:gap-40">
          <Parrafos
            title="Chatbots"
            label="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          />
          <Parrafos
            title="Knowledgebase"
            label="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Parrafos
            title="Education"
            label="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatGpt3;
