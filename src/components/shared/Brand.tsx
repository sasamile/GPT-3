import { brand } from "../../constant";

function Brand() {
  return (
    <div className="flex flex-wrap justify-center items-center mb-44">
      {brand.map(({ alt, imgUrl }) => (
        <div key={alt} className="flex-1 max-w-[150px] min-w-[120px] m-4 flex justify-center items-center ">
          <img src={imgUrl} alt={alt} />
        </div>
      ))}
    </div>
  );
}

export default Brand;
