import { BiSolidAdjust, BiSolidCircle } from "react-icons/bi";
import { CiCircleAlert, CiCircleMore } from "react-icons/ci";

export const sideDrawerData = [
  {
    id: 1,
    filter: "Solid",
    icon: <BiSolidCircle />,
    numberOfIcons: 14,
  },
  {
    id: 2,
    filter: "Regular",
    icon: <BiSolidAdjust />,
    numberOfIcons: 13,
  },
  {
    id: 3,
    filter: "Light",
    icon: <CiCircleAlert />,
    numberOfIcons: 10,
  },
  {
    id: 4,
    filter: "Thin",
    icon: <CiCircleMore />,
    numberOfIcons: 11,
  },
];
