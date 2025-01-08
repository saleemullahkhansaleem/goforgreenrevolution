import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { NavbarMobile } from ".";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
  },
  { name: "Gallery", href: "/gallery" },
  {
    name: "GGR Team",
    href: "/team",
  },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <>
      <NavbarMobile navigation={navigation} />
      <div className="hidden xl:flex gap-[1px]">
        {navigation.map((item, index) => (
          <div className="group relative" key={index}>
            <NavLink
              className={({ isActive }) =>
                `cursor-pointer px-4 h-full flex items-center gap-1 hover:text-primary text-sm border-b-2 ${
                  isActive
                    ? "text-whit border-primary rounde-b bg-primary/20 font-semibold"
                    : "text-foreground border-transparent"
                }`
              }
              onClick={(e) => {
                item?.subItems && e.preventDefault();
              }}
              to={item.href}
            >
              {item.name} {item?.subItems && <MdKeyboardArrowDown size={16} />}
            </NavLink>
            {item?.subItems && (
              <div className="absolute top-full left-0 p-2 hidden group-hover:flex flex-col bg-background shadow-lg text-nowrap min-w-60 rounded-b">
                {item?.subItems?.map((subItem, ind) => (
                  <div className="relative group/sub" key={ind}>
                    <NavLink
                      to={subItem.href}
                      className={({ isActive }) =>
                        `px-4 py-2 hover:bg-accent text-sm rounded flex items-center justify-between ${
                          isActive
                            ? "text-primary bg-accent"
                            : "text-foreground"
                        }`
                      }
                    >
                      {subItem.name}{" "}
                      {subItem?.subItems && <MdKeyboardArrowRight size={20} />}
                    </NavLink>
                    {subItem?.subItems && (
                      <div
                        className={`absolute right-full p-2 top-0 hidden group-hover/sub:flex flex-col bg-background shadow-lg text-nowrap min-w-48 rounded`}
                      >
                        {subItem?.subItems?.map((sub, i) => (
                          <NavLink
                            className={({ isActive }) =>
                              `cursor-pointer px-4 py-2 hover:bg-accent text-sm rounded ${
                                isActive
                                  ? "text-primary bg-accent"
                                  : "text-foreground"
                              }`
                            }
                            key={i}
                            to={sub.href}
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
