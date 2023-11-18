import { featureCons } from "../constants/feature";

const Feature = () => {
  return (
    <section className="section-contaier my-20 ">
      <div className="relative flex flex-col md:flex-row md:space-x-32">
        <div className="md:w-1/2 ">
          <img
            src="/images/image-computer.png"
            alt=""
            className="md:absolute top-0 right-[42%] md:w-[70%]"
          />
        </div>
        <div className="flex flex-col mt-16 mb-24  space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
          {featureCons.map((item, index) => (
            <div key={index}>
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                {item.title}
              </h5>
              <p className=" max-w-md text-grayishBlue">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Feature;
