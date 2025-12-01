import clsx from "clsx";
import { motion } from "framer-motion";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "relative px-14 pb-14 pt-11 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        containerClassName,
      )}
    >
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="h6 mb-8 text-p4"
      >
        {item.comment}
      </motion.blockquote>

      <div className="flex items-center max-xl:-mr-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5"
        >
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="body-2 mb-0.5 text-p1">{item.name}</h4>
          <p className="small-compact uppercase text-s3">{item.role}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default TestimonialItem;
