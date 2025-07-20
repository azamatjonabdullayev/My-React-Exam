import logo from "../assets/w_logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0c1622] flex items-center justify-center mt-[65px] px-[315px] py-[200px]">
        <div className="flex items-center justify-center gap-[150px]">
          <div className="font-[Inter] flex flex-col items-start justify-center gap-5">
            <img src={logo} alt="logo.svg" />
            <p className="w-[264px]">
              Browned butter and brown sugar caramelly goodness, crispy edges
              thick and soft centers and melty little puddles of chocolate.
            </p>
          </div>

          <ul className="flex flex-col gap-2.5">
            <li className="font-[Manrope]">
              <h2 className="text-xl font-extrabold">Company</h2>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">About us</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">The Test Kitchen</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Podcast</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Events</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Jobs</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2.5">
            <li className="font-[Manrope]">
              <h2 className="text-xl font-extrabold">Get Help</h2>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Contacts & FAQ</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Orders & Returns</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Gift Cards</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Register</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Catalog</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2.5">
            <li className="font-[Manrope]">
              <h2 className="text-xl font-extrabold">Explore</h2>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">The Shop</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Recieps</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Food</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Travel</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Hotline</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2.5">
            <li className="font-[Manrope]">
              <h2 className="text-xl font-extrabold">Follow Us ON</h2>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Facebook</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Twitter</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Instagram</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Youtube</a>
            </li>

            <li className="font-[Inter] font-medium">
              <a href="#">Pinterest</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
