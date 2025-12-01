import { socials } from "../constants/index.jsx";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container py-10"
      >
        <div className="flex w-full max-md:flex-col">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5"
          >
            <p className="opacity-70">Copyright, JS Mastery</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center sm:ml-auto"
          >
            <motion.p
              whileHover={{ scale: 1.05, color: "var(--p1)" }}
              transition={{ duration: 0.2 }}
              className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1"
            >
              Privacy Policy
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05, color: "var(--p1)" }}
              transition={{ duration: 0.2 }}
              className="text-p5 transition-all duration-500 hover:text-p1"
            >
              Terms of Use
            </motion.p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end"
          >
            {socials.map(({ id, url, icon, title }, index) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  href={url}
                  className="social-icon"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </footer>
  );
};
export default Footer;
