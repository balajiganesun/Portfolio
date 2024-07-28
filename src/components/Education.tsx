import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BCA in Bachelor of Computer Application"
            subTitle="Periyar University of Salem (2020 - 2023)"
            result="7.6 CGPA"
           
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Sree Gokulam Metric HR.Secondary School (2020)"
            result="78%"
            
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sree Gokulam Metric HR.Secondary School (2018)"
            result="70%"
            
          />
        </div>
      </div>
      {/* part Two */}

     
    </motion.div>
  );
};

export default Education;
