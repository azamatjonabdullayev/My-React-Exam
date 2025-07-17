import type { JSX } from "react";
import logo from "../assets/w_logo.svg";
import "../styles/Header.css";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const Header = (): JSX.Element => {
  return (
    <>
      <header className="text-white">
        <section className="upper-header bg-[#12253e] flex items-center justify-around py-5">
          <section className="flex items-center gap-7 left-side">
            <img src={logo} alt="logo" />

            <button>
              <FaBars />
            </button>
          </section>

          <section className="flex items-center justify-center gap-5">
            <form className="relative w-[425px]">
              <input
                className="block bg-inherit  w-full outline-none border border-[#334863] rounded-[30px] py-2 px-4"
                type="text"
                placeholder="Search here..."
              />

              <IoSearch className="absolute  translate-y-[-50%] top-1/2 right-3 size-5" />
            </form>

            <div className="flex items-center justify-center gap-4 text-white social-icons">
              <a href="https://facebook.com" target="_blank">
                <ImFacebook />
              </a>
              <a href="https://x.com" target="_blank">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
          </section>
        </section>

        <section className="lower-header bg-[#183354] h-[60px] flex items-center justify-around">
          <ul className="flex items-center gap-10 text-sm font-extrabold navs ">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About us</a>
            </li>

            <li>
              <a href="#">Features</a>
            </li>

            <li>
              <a href="#">Categories</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul className="flex items-center gap-7 icons-section">
            <li className="relative">
              <a href="#">
                <CiHeart className="size-7" />

                <span className="absolute -top-1 -right-2 size-5 rounded-full text-[10px]  bg-[#f4796c] flex items-center justify-center">
                  0
                </span>
              </a>
            </li>

            <li className="relative">
              <a href="#">
                <FaShoppingBasket className="size-7" />

                <span className="absolute -top-1 -right-2 size-5 rounded-full text-[10px]  bg-[#f4796c] flex items-center justify-center">
                  0
                </span>
              </a>
            </li>

            <li className="sign-in-li ">
              <a href="#" className="flex items-center gap-2.5">
                <FaRegUserCircle className="size-7" />

                <span className="font-extrabold">Sign In</span>
              </a>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Header;
