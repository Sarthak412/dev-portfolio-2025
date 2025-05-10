import { FiBriefcase } from "react-icons/fi";
import { IoMailOutline, IoSettingsOutline } from "react-icons/io5";
import { TfiViewGrid } from "react-icons/tfi";

export const nav_list = [
  {
    id: 1,
    label: "Work",
    icon: <FiBriefcase className="w-5 h-5" />,
    hoverStyles: `hover:bg-gradient-to-br from-red-800 to-red-400 ease-in-out duration-300 hover:text-white hover:border-red-500`,
    route: "#",
  },
  {
    id: 2,
    label: "Projects",
    icon: <TfiViewGrid className="w-5 h-5" />,
    hoverStyles: `hover:bg-gradient-to-br from-yellow-500 to-yellow-400 ease-in-out duration-300 hover:text-white hover:border-yellow-500`,
    route: "#",
  },
  {
    id: 3,
    label: "Contact",
    icon: <IoMailOutline className="w-5 h-5" />,
    hoverStyles: `hover:bg-gradient-to-br from-green-800 to-green-400 ease-in-out duration-300 hover:text-white hover:border-green-500`,
    route: "#",
  },
  // {
  //   id: 4,
  //   label: "Settings",
  //   icon: <IoSettingsOutline className="w-5 h-5" />,
  //   hoverStyles: `hover:bg-gradient-to-br from-blue-800 to-blue-400 ease-in-out duration-300 hover:text-white hover:border-blue-500`,
  //   route: "#",
  // },
];
