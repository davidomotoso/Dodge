const ContactInfo = () => {
  return (
    <aside className="w-[27rem] border-l pt-20 pl-8 pb-8">
      <h3 className="text-white text-2xl font-medium mb-5">
        CONTACT INOFRMATION
      </h3>
      <section className="flex flex-col gap-7">
        <input
          type="text"
          name="Name"
          placeholder="Name"
          className="rounded-full p-4 py-3 w-full placeholder:font-medium placeholder:text-white bg-[#2c2c36] text-white text-lg"
        />
        <input
          type="text"
          name="Email"
          placeholder="Email"
          className="rounded-full p-4 py-3 w-full placeholder:font-medium placeholder:text-white bg-[#2c2c36] text-white text-lg"
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          className="rounded-full p-4 py-3 w-full placeholder:font-medium placeholder:text-white bg-[#2c2c36] text-white text-lg"
        />
        <section>
          <input
            type="radio"
            name="privacypolicy"
            className="accent-[#ffba00]"
          />
          <p className="text-lg text-[#5c5c5c] inline-block pl-2 font-medium">
            I agree with the <span className="text-white">privacy policy</span>
          </p>
          <button
            type="submit"
            className="mt-8 border border-[#FFBA00] py-4 px-12 rounded-full text-[#FFBA00] font-semibold"
          >
            Know More
          </button>
        </section>
      </section>
    </aside>
  );
};

export default ContactInfo;
