'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuoteStore } from './useQuoteStore';
import { X } from 'lucide-react';
import StepController from './stepController';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

export default function QuoteEstimatorModal({ isOpen = true, onClose }: Props) {
  const reset = useQuoteStore((s) => s.reset);

  const handleClose = () => {
    reset();
    if (onClose) onClose(); // Only call if provided
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-2xl bg-gray-900 text-white rounded-2xl shadow-xl p-6 relative"
            initial={{ scale: 0.95, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 50 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {onClose && (
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                aria-label="Close Quote Estimator"
              >
                <X className="w-6 h-6" />
              </button>
            )}
            <StepController />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
