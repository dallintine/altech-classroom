import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};

const navListMenuItems = [
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Primary",
    pageUrl: "/home",
    description:
      "Foundational education for young learners in a nurturing environment.",
  },

  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "JHS",
    pageUrl: "/jhs",
    description:
      "Transition period with a focus on core subjects and exploration.",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "SHS",
    pageUrl: "/shs",
    description:
      "Advanced education with specialized subjects and college preparation.",
  },
  /* {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "WebDev",
    description: "High quality UI Kits helps you to 2x faster.",
  }, */
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, pageUrl }, key) => (
      <Link to={pageUrl} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          <Link to="/">Home</Link>
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <UserCircleIcon className="h-[18px] w-[18px]" />
          About
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <ChatBubbleLeftRightIcon className="h-[18px] w-[18px]" />
          <Link to="/contact">Contact</Link>
        </ListItem>
      </Typography>
    </List>
  );
}

export default function NavBar() {
  const { user, dispatch } = useContext(Context);
  const [openNav, setOpenNav] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/home");
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <img
            className="mr-4 cursor-pointer py-1 max-w-xs max-h-14"
            src="logo.png"
            alt="site logo"
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <div className="hidden gap-2 lg:flex">
          {user ? (
            <>
              <Link
                to="/write"
                className="middle none center rounded-lg border-2 border-green py-3 px-6 font-sans text-md font-bold uppercase text-blue transition duration-200 hover:bg-hoverLight/25"
              >
                {user && "Write"}
              </Link>
              <span
                className="middle none center rounded-lg border-2 bg-hoverDark py-3 px-6 font-sans text-md font-bold uppercase text-white transition duration-200  hover:cursor-pointer"
                onClick={handleLogout}
              >
                {user && "Logout"}
              </span>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="middle none center rounded-lg bg-blue py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-contrast transition-all hover:shadow-lg hover:shadow-contrast"
              >
                Log In
              </Link>

              <Link
                to="/register"
                class="middle none center mr-3 rounded-lg border border-green py-3 px-6 font-sans text-xs font-bold uppercase text-green transition-all hover:opacity-75 focus:ring focus:ring-green"
                data-ripple-dark="true"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link className="middle none center rounded-lg bg-blue py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-contrast transition-all hover:shadow-lg hover:shadow-contrast">
            Log In
          </Link>

          <Link
            class="middle none center mr-3 rounded-lg border border-green py-3 px-6 font-sans text-xs font-bold uppercase text-green transition-all hover:opacity-75 focus:ring focus:ring-green"
            data-ripple-dark="true"
          >
            Register
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}
