import styles from "../style";
import { robot } from "../assets"; 
import GetStarted from "./GetStarted";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} w-full min-h-[92.3vh]`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}>


        {/* Headings */}
        <div className="flex flex-row justify-center items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-neutral-900 dark:text-white ss:leading-[100.8px] leading-[75px]">
            Spend Smarter, Save Faster. <br className="sm:block hidden" />
            {/* <span className="text-gradient">Save Faster.</span> */}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-neutral-700 dark:text-dimWhite`}>
          Manage your budgets, set spending goals, and stay financially aware with a smart and intuitive dashboard. All in real-time.
        </p>
      </div>

      {/* Image with gradients */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>


        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 bg-[#ff80b5] opacity-30 blur-2xl rounded-full" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bg-[#ffffff] dark:bg-white/10 opacity-10 blur-3xl bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 bg-[#38bdf8] opacity-30 blur-2xl rounded-full" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
