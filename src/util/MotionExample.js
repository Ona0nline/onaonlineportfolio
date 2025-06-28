import { motion } from "framer-motion";

export default function MyComponent() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            Hello world!
        </motion.div>
    );
}
