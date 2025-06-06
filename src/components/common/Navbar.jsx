import { Link } from "@tanstack/react-router";
import navIcon from "../../assets/nav/Storefront.png";
import userIcon from "../../assets/nav/User.png";
import Button from "../Button";
import { useState } from "react";

const navItem = ["MarketPlace", "Rankings", "Connect a Wallet"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex flex-row flex-wrap items-center justify-between px-4 md:px-12 py-5 font-bold font-mono">
        <Link to="/">
          <div className="flex flex-row items-center gap-3">
            <div>
              <img className="w-full" src={navIcon} alt="" />
            </div>
            <div>
              <h1 className="text-2xl">NFT Marketplace</h1>
            </div>
          </div>
        </Link>
        {/* Hamburger for small screens */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-1 w-6 bg-white mb-1 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block h-1 w-6 bg-white mb-1 transition-all ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-1 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
        <div className="hidden md:block">
          <ul className="flex flex-row flex-wrap items-center justify-evenly gap-4">
            <Link to="/marketPlace">
              <li>{navItem[0]}</li>
            </Link>
            <Link to="/rankings">
              <li>{navItem[1]}</li>
            </Link>
            <Link to="/wallet">
              <li>{navItem[2]}</li>
            </Link>
            <li>
              <Button image={userIcon} text={"Sign Up"} />
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-8 px-4 pb-4">
          <ul className="flex flex-col gap-8">
            <Link to="/marketPlace" onClick={() => setIsOpen(false)}>
              <li>{navItem[0]}</li>
            </Link>
            <Link to="/rankings" onClick={() => setIsOpen(false)}>
              <li>{navItem[1]}</li>
            </Link>
            <Link to="/wallet" onClick={() => setIsOpen(false)}>
              <li>{navItem[2]}</li>
            </Link>
            <li>
              <Button image={userIcon} text={"Sign Up"} />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
