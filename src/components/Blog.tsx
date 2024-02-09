import { blog01, blog02, blog03, blog04, blog05 } from "../assets";

interface BlogProps {
  img: string;
  clase?: string;
  clasediv?: string;
  clases2?: string;
  claseP?: string;
  clasesP?: string;
  claseImg?:string;
}

function BlogPs({ img, clasediv, clases2, claseP, clasesP,claseImg }: BlogProps) {
  return (
    <div className={`${clasediv}`}>
      <img src={img} alt="Imganes" className={claseImg} />
      <div className={`bg-color-blog grid  ${clases2} `}>
        <div>
          <p className="text-[11.65px] font-[700] font-Manrope">
            Fedrero 26,2024
          </p>
          <h1 className={`${claseP} font-bold font-Manrope`}>
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h1>
        </div>
        <p
          className={` grid text-[11.65px] font-[700] font-Manrope  ${clasesP}`}
        >
          React Full Article
        </p>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <article className="w-[80%] mx-auto text-white mt-52" id="library">
      <h1 className="font-Manrope font-bold text-[62px] gradient__text w-[701px] mb-36 max-md:w-full max-md:text-[30px] max-md:text-center">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-12  ">
        <BlogPs
          img={blog01}
          claseImg="md:h-[40%] w-full "
          clasediv="row-span-2 max-md:row-span-1"
          claseP="md:text-[25.11px] max-md:text-[19.32px]"
          clases2="md:p-12 md:h-[377.27px] w-full max-md:p-8 max-md:gap-12"
          clasesP="items-end "
        />
        <BlogPs
          img={blog02}
          claseP="text-[19.32px]"
          clases2="p-8 w-full gap-12"
        />
        <BlogPs
          img={blog03}
          claseP="text-[19.32px]"
          clases2="p-8 w-full gap-12"
        />
        <BlogPs
          img={blog04}
          claseP="text-[19.32px]"
          clases2="p-8 w-full gap-12"
        />
        <BlogPs
          img={blog05}
          claseP="text-[19.32px]"
          clases2="p-8 w-full gap-12"
        />
      </div>
    </article>
  );
}

export default Blog;
