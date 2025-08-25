import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

interface SnackbarProps {
  message?: string | null;
  type?: "success" | "error";
  onClose?: () => void;
}

export default function Snackbar({ message, type = "success", onClose }: SnackbarProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        onClose?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  // Determine the title based on the type
  const title = type === "success" ? "Success" : "Error";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={message}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-5 right-5 z-[999999] flex items-start gap-3 px-4 py-3 rounded-lg shadow-lg text-white ${
            type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {/* Icon */}
          <div className="mt-1">
            {type === "success" ? (
              <CheckCircle size={28} />
            ) : (
              <XCircle size={28} />
            )}
          </div>

          {/* Text Section */}
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{title}</span>
            <span className="text-sm">{message}</span>
          </div>
        </motion.div>

      )}
    </AnimatePresence>
  );
}