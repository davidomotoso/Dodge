const ScrollAnimation = () => {
  return (
    <section className="flex gap-5 items-center justify-center mt-5 pb-4">
      <div className="bg-white h-3 w-3 rounded-full relative before:absolute before:border before:w-5 scale-105 before:border-gray-400 before:top-[0.37em] before:left-3"></div>
      <div className="bg-gray-400 h-3 w-3 rounded-full relative before:absolute before:border before:w-5 before:border-gray-400 before:top-[0.37em] before:left-3"></div>
      <div className="bg-gray-400 h-3 w-3 rounded-full 3"></div>
    </section>
  );
};

export default ScrollAnimation;
