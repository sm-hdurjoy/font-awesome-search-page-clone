import { VscVerifiedFilled } from "react-icons/vsc";
import { GiSharpShuriken } from "react-icons/gi";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

export const filterData = [
  {
    id: 1,
    category: "Classic",
    icon: <VscVerifiedFilled size={35} />,
  },
  {
    id: 2,
    category: "Sharp",
    icon: <GiSharpShuriken size={35} />,
  },
  {
    id: 3,
    category: "Brand",
    icon:<FaFontAwesomeFlag size={35} />,
  },
  {
    id: 4,
    category: "Free",
    icon: <AiFillThunderbolt size={35} />,
  },
];
