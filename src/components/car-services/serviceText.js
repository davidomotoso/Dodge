const ServiceTest = () => {
  const texts = [
    {
      title: "Engine upgrades",
      body: "Elevate your vehicles' performance, with Dodge's engine upgrades.",
      icon: "bi bi-chevron-double-up",
    },
    {
      title: "Free Support",
      body: "Dodge aims to provide a comprehensive support ecosystem to enhance the ownership experience.",
      icon: "bi bi-tools",
    },
    {
      title: "Security  inspections",
      body: "Dodge is committed to ensuring the their occupants.",
      icon: "bi bi-shield-check",
    },
    {
      title: "Brake checkup",
      body: "well-engineered brake systems that prioritize safety and reliability.",
      icon: "bi bi-ev-front",
    },
  ];
  return (
    <>
      {texts.map((text, index) => (
        <section
          key={index}
          className="flex flex-col
          gap-12 w-[17rem]"
        >
          <section className="w-max h-max hover:scale-105 duration-500">
            <i
              className={`${text.icon} text-6xl shadow-lg shadow-black/50 w-max h-max px-8 py-6 rounded-full `}
            />
          </section>
          <section>
            <h3 className="text-lg font-bold mb-3">{text.title}</h3>
            <p className="text-lg leading-relaxed font-normal">{text.body}</p>
          </section>
        </section>
      ))}
    </>
  );
};

export default ServiceTest;
