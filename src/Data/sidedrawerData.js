import { BiSolidAdjust, BiSolidCircle } from "react-icons/bi";
import { CiCircleAlert, CiCircleMore } from "react-icons/ci";

export const sideDrawerData = [
  {
    id: 1,
    category: "Solid",
    icon: <BiSolidCircle />,
    numberOfIcons: 14,
  },
  {
    id: 2,
    category: "Regular",
    icon: <BiSolidAdjust />,
    numberOfIcons: 13,
  },
  {
    id: 3,
    category: "Light",
    icon: <CiCircleAlert />,
    numberOfIcons: 10,
  },
  {
    id: 4,
    category: "Thin",
    icon: <CiCircleMore />,
    numberOfIcons: 11,
  },
];
