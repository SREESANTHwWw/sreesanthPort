import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
  isScroller: boolean;
};

const SideBar = ({ isOpen, onClose, isScroller }: SideBarProps) => {
  useEffect(() => {
    if (isScroller) {
      onClose();
    }
  }, [isScroller, isOpen]);

  return (
    <>
      {/* MOBILE OVERLAY */}
      {/* <div
        className={`fixed inset-0 bg-red-500 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div> */}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-screen w-full bg-black/80  text-white p-6 z-50 transition-transform duration-300
        ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 md:static`}
      >
        {/* Close button only on mobile */}
        <button className="text-3xl mb-6 md:hidden" onClick={onClose}>
          <IoClose size={30} />
        </button>

        {/* Menu Links */}
        <nav className="flex flex-col items-center gap-6 text-xl">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-300 font-Saira font-semibold"
              onClick={onClose}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
