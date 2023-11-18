import { superchargeConst } from "../constants/supercharge";

const Supercharge = () => {
  return (
    <section className="section-contaier">
      <h3 className="heading3">Supercharge your workflow</h3>
      <p className="section-content mb-16">
        We've got the tools to boost your productivity.
      </p>
      <div className=" flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
        {superchargeConst.map((item, index) => (
          <div key={index} className=" flex flex-col items-center space-y-5">
            <img src={item.image} alt="" className="mb-6" />
            <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
              {item.title}
            </h5>
            <p className=" max-w-md text-grayishBlue">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Supercharge;
