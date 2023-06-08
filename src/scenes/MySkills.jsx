import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skills from "../assets/skills-image.png";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <div>
      <section id="skills" className="pt-10 pb-24">
        {/* HEADER AND IMAGE SECTION */}
        <div className="md:flex md:justify-between md:gap-16 mt-32">
          <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              MY <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-1/3" />
            <p className="mt-10 mb-7">
              I am a skilled React developer with expertise in various concepts
              such as React components, hooks, Redux, Redux Thunk, React
              Bootstrap, Tailwind CSS, HTML, CSS, Material-UI, GitHub Pages,
              Axios, and Firebase. I possess a comprehensive understanding of
              these technologies, allowing me to build robust and responsive web
              applications.
            </p>
          </motion.div>

          <div className="mt-16 md:mt-0">
            {isAboveLarge ? (
              <div
                className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
              >
                <img alt="skills" className="z-6 " src={skills} />
              </div>
            ) : (
              <img alt="skills" className="z-6 " src={skills} />
            )}
          </div>
        </div>

        {/* SKILLS */}
        <div className="md:flex md:justify-between mt-16 gap-32">
          {/* EXPERIENCE */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">01</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  React, Bootstrap, Tailwind CSS
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
              React is at the core of my skill set, and I have a deep
              understanding of its fundamental concepts and principles. From
              building reusable components to managing state with hooks and
              Redux, I am well-versed in leveraging React's powerful features to
              create dynamic and interactive user interfaces. Additionally, I
              have knowledge integrating React with various libraries and
              frameworks, such as React Bootstrap and Material-UI, to enhance
              the visual appeal and functionality of applications.
            </p>
          </motion.div>

          {/* INNOVATIVE */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">02</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  HTML,CSS,Javascript
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
              I have a solid foundation in HTML, CSS, and JavaScript, which are
              the building blocks of modern web development. With HTML, I can
              structure web content and create semantic markup for better
              accessibility and SEO. CSS allows me to style and design user
              interfaces, ensuring a visually appealing and responsive layout.
              JavaScript empowers me to bring interactivity and dynamic
              functionality to web applications, enabling smooth user
              experiences and advanced features.
            </p>
          </motion.div>
          {/* IMAGINATIVE */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">03</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  Analytical Skill
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
              With my strong analytical skills and problem-solving mindset, I
              excel at tackling complex challenges in software development. I
              have honed my problem-solving abilities through extensive practice
              and have successfully solved over 220 questions on platforms like
              LeetCode and GeeksforGeeks. This experience has enhanced my
              logical thinking and algorithmic proficiency, enabling me to
              efficiently devise optimal solutions for various programming
              problems. I possess a keen attention to detail, allowing me to
              identify patterns, optimize code efficiency.
            </p>
          </motion.div>
        </div>
        {/* ********************* */}
        <div className="md:flex md:justify-between mt-2 gap-32">
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">01</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  Node JS
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
              I possess strong proficiency in Node.js, a runtime environment for
              building efficient server-side applications using JavaScript. With
              expertise in server-side JavaScript, I am adept at leveraging
              Node.js's asynchronous and event-driven architecture to ensure
              optimal performance. My skill set includes utilizing the extensive
              NPM ecosystem to incorporate third-party packages and libraries. I
              am experienced in developing highly scalable applications,
              proficient in Express.js for building robust and RESTful APIs.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">02</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  Express JS and MongoDB
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
              I have extensive experience with Express.js, a popular web
              application framework built on top of Node.js. Proficient in
              developing robust and RESTful APIs, I leverage Express.js to
              create scalable and efficient backend solutions. Additionally, I
              am skilled in working with MongoDB, a flexible and scalable NoSQL
              database. With hands-on experience in designing and implementing
              MongoDB schemas, I ensure efficient data storage and retrieval. I
              am proficient in utilizing MongoDB's query language and features
              to handle complex data operations and optimize database
              performance.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">03</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  SQL,MySQL
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
              I have a strong command over SQL (Structured Query Language),
              which is the standard language for managing relational databases.
              Proficient in writing complex SQL queries, I can efficiently
              retrieve, manipulate, and analyze data from databases. I have
              experience in designing and optimizing database schemas, ensuring
              data integrity and performance. With expertise in using SQL, I can
              handle tasks such as creating and modifying database tables,
              managing indexes, and implementing data security measures. My
              knowledge of SQL empowers me to work with various database
              management systems, such as MySQL, PostgreSQL, and Oracle.
            </p>
          </motion.div>
        </div>
      </section>
      {/* <LineGradient width="w-full"/> */}
    </div>
  );
};

export default MySkills;
