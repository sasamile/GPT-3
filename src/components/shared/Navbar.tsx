import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { logo } from "../../assets";
import { navbar } from "../../constant";
import { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="flex pt-20 justify-between items-center px-[6rem] py-[2rem] text-white max-md:py-8 max-md:px-16 max-sm:p-8">
        <div className="flex-1 flex justify-start items-center">
          <div className="mr-[2rem] ">
            <img src={logo} alt="logo" className="w-[62.56px] h-[16.02px]" />
          </div>
          <div className="flex flex-row max-lg:hidden ">
            {navbar.map(({ href, label }) => (
              <p
                key={href}
                className="font-Manrope font-[500] text-[18px] leading-6 capitalize mx-4 cursor-pointer"
              >
                <a href={href}>{label}</a>
              </p>
            ))}
          </div>
        </div>
        <div
          className="flex justify-end
        items-center gap-8 text-xl max-sm:hidden"
        >
          <p className="font-bold">Sing in</p>
          <button
            className="py-3 px-7 text-white bg-[#ff4820] font-Manrope  font-[500] leading-6 rounded-md"
            type="button"
          >
            Sign Up
          </button>
        </div>
        <div className="ml-4 hidden relative cursor-pointer max-lg:flex">
          {toggleMenu ? (
            <RiCloseLine
              size={27}
              color="#fff"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              size={27}
              color="#fff"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <>
              <div className="flex justify-end items-end flex-col text-end bg-color-blog p-8 absolute scale-up-center top-[40px] right-0 mt-4 min-w-[150px] rounded-md shadow-2xl max-sm:top-[20px]">
                <div>
                  {navbar.map(({ href, label }) => (
                    <p key={href} className="cursor-pointer my-4 ">
                      <a href={href}>{label}</a>
                    </p>
                  ))}
                  <div className="hidden max-sm:block ">
                    <p className="font-bold py-4">Sing in</p>
                    <button
                      className="py-3 px-7 text-white bg-[#ff4820] font-Manrope  font-[500] left-[1153px] rounded-md "
                      type="button"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
