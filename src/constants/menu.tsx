import {
  BiBox,
  BiCategory,
  BiCategoryAlt,
  BiShoppingBag,
  BiUser,
} from "react-icons/bi";

export const backofficeMenu = [
  {
    name: "Overview",
    link: "/backoffice",
    icon: <BiCategoryAlt className="text-xl" />,
    subMenu: [],
  },
  {
    name: "Products",
    link: "/backoffice/products",
    icon: <BiBox className="text-xl" />,
    subMenu: [],
  },
  {
    name: "Orders",
    link: "/backoffice/orders",
    icon: <BiShoppingBag className="text-xl" />,
    subMenu: [],
  },
  {
    name: "Customers",
    link: "/backoffice/customers",
    icon: <BiUser className="text-xl" />,
    subMenu: [],
  },
  // {
  //   name: "Categories",
  //   link: "/backoffice/categories",
  //   icon: <BiCategory className="text-xl" />,
  //   subMenu: [],
  // },
];
