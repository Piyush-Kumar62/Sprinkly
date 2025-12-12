import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const handleDashboardNavigate = () => {
    navigate(token ? "/dashboard" : "/login");
  };

  const handleCreateLinkNavigate = () => {
    navigate(token ? "/dashboard" : "/register");
  };
  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl   md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Revolutionize Link Sharing with Sprinkly.
          </motion.h1>
          <p className="text-slate-700 text-sm my-5">
            Sprinkly takes the hassle out of URL shortening, making it easier
            than ever to share links quickly and efficiently. Seamlessly create
            clean, custom short links through an intuitive platform designed for
            speed and simplicity. Start sharing smarter with Sprinkly today.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={handleDashboardNavigate}
              className="bg-custom-gradient  w-40 text-white rounded-md  py-2"
            >
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={handleCreateLinkNavigate}
              className="border-btnColor border w-40 text-btnColor rounded-md  py-2 "
            >
              Create Short Link
            </motion.button>
          </div>
        </div>
        <div className="   flex-1 flex   justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            src="/images/img2.png"
            alt=""
          />
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Trusted by individuals and teams at the world best companies{" "}
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Effortless Short Links"
            desc="Create memorable, compact URLs in just seconds. Sprinkly’s streamlined workflow means you can shorten links instantly and manage them with complete ease—no technical skills required."
          />
          <Card
            title="Comprehensive Analytics"
            desc="Unlock actionable insights with detailed analytics, including click tracking, geographic distribution, and traffic sources. Leverage this data to refine campaigns and maximize every link’s impact."
          />
          <Card
            title="Enhanced Security"
            desc="Sprinkly protects your links using advanced encryption and the latest security protocols. Your data and URLs stay safe, secure, and confidential at all times."
          />
          <Card
            title="Blazing Fast & Always Available"
            desc="Experience ultra-fast redirects and industry-leading uptime. Sprinkly ensures your links are accessible and responsive—delivering a flawless experience for your audience every time."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
