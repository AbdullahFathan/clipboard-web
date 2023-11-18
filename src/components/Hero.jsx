const Hero = () => {
  return (
    <section id="hero" className="section-contaier mb-40 pt-16">
      <img src="/images/logo.svg" alt="logo" className="mx-auto my-16" />
      <h3 className="heading3">A history of everything you copy</h3>
      <p className=" max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices
      </p>
      <div className="button-container">
        <button
          type="button"
          className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
        >
          Download for Android
        </button>
        <button
          type="button"
          className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
        >
          Download for Windows
        </button>
      </div>
    </section>
  );
};
export default Hero;
