function Introduction() {
  return (
    <>
      <section className="dark:text-gray-50 relative font-rubik flex flex-col min-h-[100vh] justify-center items-start ">
        <div className="max-w-4xl ml-4 sm:ml-10 md:ml-28 sm:mr-0 mb-52">
          <div id="Name" className="m-1 mt-2">
            <h2 className=" text-4xl sm:text-7xl font-bold tracking-tight transition delay-600 ease-InOutExpo">
              Rodrigo Cariello
            </h2>
          </div>
          <div id="Slogan" className="m-1 mt-2">
            <h2 className="text-2xl sm:text-6xl font-bold tracking-tight transition delay-600 ease-InOutExpo">
              I build things for the web
            </h2>
          </div>
          <div id="Presentation" className="mt-4 m-1">
            <p className="text-sm font-medium sm:text-lg max-w-sm md:max-w-xl leading-5 tracking-tight text-start text-gray-500 dark:text-gray-400 transition delay-600 ease-InOutExpo">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products at Upstatement.
            </p>
          </div>
          <div id="Button" className="m-1 mt-4">
            <button className=" bg-gray-900 dark:bg-gray-50 p-1 text-xs sm:text-lg rounded-md  text-slate-50 dark:text-gray-900">
              Veja Mais
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
