import { motion } from "framer-motion";
import '../index.css';

const Loader = ({ position, top, left, translate, backgroundColor ,height , width }) => {
  return (
    <div 
      className={`flex gap-1 ${position}`} 
      style={{
        top: top,
        left: left,
        transform: `translate(${translate})`,
        zIndex: 829349823,
      }}
    >
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className={`h-[${height}] w-[${width}] bg-[${backgroundColor}] rounded-full`}
          animate={{y:[0 , -15, 0]}}
          transition={{duration: 0.4 , repeat: Infinity, repeatDelay: index*0.2}}
        />
      ))}
    </div>
  );
};

export default Loader;
