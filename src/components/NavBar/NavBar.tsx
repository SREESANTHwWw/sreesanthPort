import { useEffect, useState } from "react";
import SideBar from "./SIdeBar";
import { VscThreeBars } from "react-icons/vsc";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  console.log(isMobile);

  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const BarFun = () => {
    setOpen(true);
    setIsScrolled(false);
  };

  return (
    <>
      <div
        className={`w-full md:h-32 h-20 flex justify-center items-center fixed bg-linear-to-r from-(--main-bg-color-1) to-(--main-bg-color-2) z-50 transition-all duration-300
       backdrop-blur-3xl
        `}
      >
        <div className="flex items-center w-[85%] justify-between gap-10">
          <div className={`font-bold font-sans sm:text-3xl text-xl text-white`}>
            <h1 className="font-[Dancing_Script]">SREESANTH M</h1>
          </div>

          {isOpen && (
            <SideBar
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              isScroller={isScrolled}
            />
          )}
          <div className="grid-cols-4 items-center gap-6 font-Saira sm:grid hidden">
            {["Home", "About", "Projects", "Contact"].map((item) => {
              const id = item.toLowerCase();

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="group text-2xl transition  duration-300 text-white cursor-pointer"
                >
                  {item}
                  <span
                    className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5
            bg-white
          `}
                  />
                </a>
              );
            })}
          </div>

          <button className="sm:hidden text-3xl text-white" onClick={BarFun}>
            <VscThreeBars size={32} />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
