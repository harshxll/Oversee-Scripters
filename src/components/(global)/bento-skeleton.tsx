import{motion} from 'framer-motion'
import img2 from "@/app/assets/2.jpeg"
import img3 from "@/app/assets/3.jpeg"
import img4 from "@/app/assets/4.jpeg"
import img5 from "@/app/assets/5.jpeg"
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
   
  const SkeletonOne = () => {
    const variants = {
      initial: {
        x: 0,
      },
      animate: {
        x: 10,
        rotate: 5,
        transition: {
          duration: 0.2,
        },
      },
    };
    const variantsSecond = {
      initial: {
        x: 0,
      },
      animate: {
        x: -10,
        rotate: -5,
        transition: {
          duration: 0.2,
        },
      },
    };
   
    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <motion.div
          variants={variants}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
        >
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
          <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        </motion.div>
        <motion.div
          variants={variantsSecond}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
        >
          <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
        <motion.div
          variants={variants}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
        >
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
          <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        </motion.div>
      </motion.div>
    );
  };
  const SkeletonTwo = () => {
    const variants = {
      initial: {
        width: 0,
      },
      animate: {
        width: "100%",
        transition: {
          duration: 0.2,
        },
      },
      hover: {
        width: ["0%", "100%"],
        transition: {
          duration: 2,
        },
      },
    };
    const arr = new Array(6).fill(0);
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        {arr.map((_, i) => (
          <motion.div
            key={"skelenton-two" + i}
            variants={variants}
            style={{
              maxWidth: Math.random() * (100 - 40) + 40 + "%",
            }}
            className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
          ></motion.div>
        ))}
      </motion.div>
    );
  };
  const SkeletonThree = () => {
    const variants = {
      initial: {
        backgroundPosition: "0 50%",
      },
      animate: {
        backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
      },
    };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
        style={{
          background:
            "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          backgroundSize: "400% 400%",
        }}
      >
        <motion.div className="h-full w-full rounded-lg"></motion.div>
      </motion.div>
    );
  };
  const SkeletonFour = () => {
    const first = {
      initial: {
        x: 20,
        rotate: -5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    const second = {
      initial: {
        x: -20,
        rotate: 5,
      },
      hover: {
        x: 0,
        rotate: 0,
      },
    };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
      >
        <motion.div
          variants={first}
          className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <Image
            src={img3}
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Online Scheduling Tool          </p>
          <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Trust
          </p>
        </motion.div>
        <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
          <Image
            src={img5}
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Centralized Communication
          </p>
          <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Care
          </p>
        </motion.div>
        <motion.div
          variants={second}
          className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
        >
          <Image
            src={img4}
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10"
          />
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Optimized Scheduling Processes
          </p>
          <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
            Hospitality
          </p>
        </motion.div>
      </motion.div>
    );
  };
  const SkeletonFive = () => {
    const variants = {
      initial: {
        x: 0,
      },
      animate: {
        x: 10,
        rotate: 5,
        transition: {
          duration: 0.2,
        },
      },
    };
    const variantsSecond = {
      initial: {
        x: 0,
      },
      animate: {
        x: -10,
        rotate: -5,
        transition: {
          duration: 0.2,
        },
      },
    };
   
    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <motion.div
          variants={variants}
          className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
        >
          <Image
            src={img2}
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-10 w-10"
          />
          <p className="text-xs text-neutral-500">
          Hi, I've been having persistent headaches lately. Can you help?
          </p>
        </motion.div>
        <motion.div
          variants={variantsSecond}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
        >
          <p className="text-xs text-neutral-500"> Absolutely. Any other symptoms?</p>
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
      </motion.div>
    );
  };
  export const items = [
    {
      title: "Innovative Disease Detection",
      description: (
        <span className="text-sm">
         Utilize cutting-edge AI technology in our chatbot to swiftly identify health issues, ensuring early intervention and improved outcomes.
        </span>
      ),
      header: <SkeletonOne />,
      className: "md:col-span-1",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Empowering Health Discovery",
      description: (
        <span className="text-sm">
          Seamlessly detect diseases through our chatbot's advanced diagnostic capabilities, revolutionizing proactive healthcare.
        </span>
      ),
      header: <SkeletonTwo />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Enhanced Patient-Doctor Connectivity",
      description: (
        <span className="text-sm">
         Effortlessly schedule meetings with healthcare professionals, fostering seamless communication and personalized treatment plans
        </span>
      ),
      header: <SkeletonThree />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Streamlined Appointment Management",
      description: (
        <span className="text-sm">
          Simplify the scheduling process for patients and doctors, optimizing time management and enhancing healthcare accessibility.
        </span>
      ),
      header: <SkeletonFour />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
   
    {
      title: "Personalized Wellness Solutions",
      description: (
        <span className="text-sm">
          Experience tailored health recommendations through our chatbot, promoting individualized care and holistic well-being.
        </span>
      ),
      header: <SkeletonFive />,
      className: "md:col-span-1",
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];