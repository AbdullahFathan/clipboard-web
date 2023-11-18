import { menuConst } from "../constants/footer";

const Footer = () => {
  return (
    <footer className="section-contaier bg-gray-50">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <img src="/images/logo.svg" alt="logo" className="scale-50" />

        <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-10 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
          {/*Menu*/}
          <div className=" flex flex-col space-y-4 md:flex-row md:ml-24 md:space-y-0 md:space-x-24">
            {menuConst.map((item, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 text-center md:text-left"
              >
                <a href="#" className="hover:text-strongCyan">
                  {item.menu1}
                </a>
                <a href="#" className="hover:text-strongCyan">
                  {item.menu2}
                </a>
              </div>
            ))}
            {/*Social */}
            <div className="flex flex-row justify-between w-32 py-1">
              <a href="#">
                <img
                  src="/images/icon-facebook.svg"
                  alt="facebook"
                  className="duration-200 ficon"
                />
              </a>
              <a href="#">
                <img
                  src="/images/icon-instagram.svg"
                  alt="facebook"
                  className="duration-200 ficon"
                />
              </a>
              <a href="#">
                <img
                  src="/images/icon-twitter.svg"
                  alt="facebook"
                  className="duration-200 ficon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
