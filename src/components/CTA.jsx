const CTA = () => {
  return (
    <section className="section-contaier my-20">
      <h3 className="heading3">Clipboard for iOS and MacOS</h3>
      <p className=" section-content mb-10">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
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
export default CTA;
