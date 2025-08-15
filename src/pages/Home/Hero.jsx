// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { BsFolderFill } from "react-icons/bs";
// import { FaDownload } from "react-icons/fa";
// import { ReactTyped } from "react-typed";


// const Hero = () => {
//     return (
//         <section className="bg-gray-50 dark:bg-gray-900 py-16">
//             <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12">

//                 {/* Left Content */}
//                 <div className="flex-1 text-center md:text-left space-y-4">
//                     {/* Badge */}
//                     <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
//                         Welcome to my portfolio
//                     </span>

//                     {/* Heading */}
//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//                         Hi, I'm <span className="text-blue-600">Sabrina Boby</span>
//                     </h1>

//                     <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300">
//                         <ReactTyped
//                             strings={[
//                                 "Full Stack Developer",
//                                 "MERN Stack Developer",
//                                 "Frontend Specialist",
//                                 "Backend Enthusiast"
//                             ]}
//                             typeSpeed={100}
//                             backSpeed={50}
//                             loop
//                         />
//                     </h2>

//                     {/* Description */}
//                     <p className="text-gray-600 dark:text-gray-400 max-w-xl">
//                         I’m a dedicated full-stack developer specializing in the MERN stack,
//                         with solid project management experience. I enjoy building efficient,
//                         user-friendly applications and leading teams to deliver successful projects.
//                     </p>

//                     {/* Action Buttons */}
//                     <div className="flex flex-wrap gap-4 pt-4">
//                         <a
//                             href="#projects"
//                             className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
//                         >
//                             <BsFolderFill className="mr-2" /> View Projects
//                         </a>
//                         <a
//                             href="/resume/Bidyut_Resume.pdf"
//                             download
//                             className="inline-flex items-center bg-gray-900 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-800 transition"
//                         >
//                             <FaDownload className="mr-2" /> Resume
//                         </a>
//                     </div>

//                     {/* Social Icons */}
//                     <div className="flex gap-4 pt-6">
//                         <a
//                             href="https://github.com/yourusername"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800"
//                         >
//                             <FaGithub size={24} />
//                         </a>
//                         <a
//                             href="https://linkedin.com/in/yourusername"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
//                         >
//                             <FaLinkedin size={24} />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right Image */}
//                 <div className="flex-1 flex justify-center mb-8 md:mb-0">
//                     <img
//                         src="/images/profile.jpg" // replace with your image path
//                         alt="Bidyut"
//                         className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;


import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFolderFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

// import "./Hero.css"; // custom CSS for animations
import centerImg from "../../assets/myimg.jpg"; // your fixed image
// import icon1 from "../assets/icons/react.png";
// import icon2 from "../assets/icons/node.png";
// import icon3 from "../assets/icons/ts.png";
// import icon4 from "../assets/icons/mongo.png";

const Hero = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-16 overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12">

                {/* Left Content */}
                <motion.div
                    className="flex-1 text-center md:text-left space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.span
                        className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium shadow-md"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Welcome to my portfolio
                    </motion.span>

                    {/* Heading */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            Sabrina Boby
                        </span>
                    </motion.h1>

                    {/* Typing Effect */}
                    <motion.h2
                        className="text-xl font-medium text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <ReactTyped
                            strings={[
                                "Full Stack Developer",
                                "MERN Stack Developer",
                                "Frontend Specialist",
                                "Backend Enthusiast"
                            ]}
                            typeSpeed={80}
                            backSpeed={50}
                            loop
                        />
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-gray-600 dark:text-gray-400 max-w-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        I’m a dedicated full-stack developer specializing in the MERN stack,
                        with solid project management experience. I enjoy building efficient,
                        user-friendly applications and leading teams to deliver successful projects.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4 pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <BsFolderFill className="mr-2" /> View Projects
                        </a>
                        <a
                            href="/resume/Bidyut_Resume.pdf"
                            download
                            className="inline-flex items-center bg-gray-900 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transform transition duration-300"
                        >
                            <FaDownload className="mr-2" /> Resume
                        </a>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        className="flex gap-4 pt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 hover:scale-110 transform transition duration-300"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-110 transform transition duration-300"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center mb-8 md:mb-0">
                    <img
                        src={centerImg} // replace with your image path
                        alt="Bidyut"
                        className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
