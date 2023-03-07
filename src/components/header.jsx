import Lottie from "react-lottie";
import data from "../json/camera.json";
import Content1 from "./content1";

const Header = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    renderer: "svg",
  };
  return (
    <>
      <div className="pt-2">
        <div className="py-8 md:flex xl:flex justify-centrer 2xl:mx-64">
          <div className="xl:ml-8 2xl:ml-16">
            <h1 className="text-5xl text-black px-4 md:mt-8 md:ml-4 xl:mt-12 xl:ml-8 2xl:text-6xl ">
              Content marketing made easy
            </h1>
            <p className="text-xl text-gray-400 px-4 py-4 md:my-4 md:ml-4 xl:ml-8 2xl:mb-12 ">
              Create an impactful brand image by creating and publishing
              high-quality content, at speed and scale
            </p>
            <a href="/page" className="mx-4 my-4 md:ml-8 xl:ml-16 2xl:ml-20">
              <button className="bg-blue-800 text-white text-2xl font-bold rounded-full px-28 py-4">
                Get Started
              </button>
            </a>
          </div>
          <div className="xl:mx-24 2xl:mx-64 2xl:mt-4">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>

        <div className="mx-2 ">
          <h1 className="text-sm ml-4 md:ml-56 md:mt-12 lg:ml-72 lg:pl-12 xl:ml-96 xl:pl-24 2xl:pl-96">
            2500+ BUSINESSES TRUST US WITH THEIR CONTENT
          </h1>
          <div className="flex mx-8 gap-16 mt-12 md:mx-2 lg:ml-24 xl:ml-60 2xl:pl-64 2xl:ml-32">
            <div className="md:flex md:gap-8 2xl:gap-32">
              <h1 className="text-3xl font-bold my-2">facebook</h1>
              <h1 className="text-3xl font-bold my-2">adobe</h1>
              <h1 className="text-3xl font-bold my-2">Direct</h1>
            </div>
            <div className="md:flex md:gap-8 2xl:gap-32">
              <h1 className="text-3xl font-bold my-2">IndiGO</h1>
              <h1 className="text-3xl font-bold my-2">amazon</h1>
              <h1 className="text-3xl font-bold my-2">adani</h1>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h1 className=" mx-12 font-bold text-3xl md:text-5xl md:ml-20 xl:ml-64 lg:ml-28 2xl:pl-44   ">
            Different categories to drive your business goals
          </h1>
          <div>
            <Content1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
