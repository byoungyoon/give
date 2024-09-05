'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './motionText.module.css';

type Props = {
  text: string;
  layoutId: string;
};

export default function MotionText({ text, layoutId }: Props) {
  return (
    <motion.p
      className={styles.centerText}
      initial={{ opacity: 0, y: 110, height: 0 }}
      animate={{ opacity: 1, y: 0, height: 70 }}
      transition={{ duration: 0.6, type: 'keyframes' }}
      layoutId={layoutId}
    >
      {text}
    </motion.p>
  );
}
