'use client';

import styles from './page.module.css';
import Header from './image/header.png';
import { useEffect, useMemo, useState } from 'react';
import MotionText from '@/app/_component/MotionText';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const MOTION_LAYOUT = 'layout';

export default function Home() {
  const [timer, setTimer] = useState(0);

  const centerText = useMemo(
    () => [
      '안녕하세요.',
      '용호씨?',
      '여행 축하드리고',
      '중요한거',
      '기록해드릴게요',
      '바로',
      '기념품 목록입니다~',
    ],
    [],
  );
  const hasContent = useMemo(() => centerText.length <= timer, [timer]);

  useEffect(() => {
    if (hasContent) return;

    setTimeout(() => {
      setTimer((prevState) => prevState + 1);
    }, 1700);
  }, [timer]);

  return (
    <section className={styles.section}>
      <AnimatePresence>
        {!hasContent && (
          <motion.article
            className={styles.centerArticle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className={styles.centerTextGroup}>
              {centerText.map(
                (text, index) =>
                  timer === index && (
                    <MotionText
                      key={index}
                      text={text}
                      layoutId={MOTION_LAYOUT}
                    />
                  ),
              )}
            </div>
          </motion.article>
        )}
      </AnimatePresence>
      {hasContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <header className={styles.header}>
            <Image src={Header} alt='header' className={styles.headerImage} />
            <div>
              <h3 className={styles.headerTitle}>
                당신의 여행을 <strong>응원</strong>합니다.
              </h3>
              <h3 className={styles.headerTitle}>
                꼭 <strong>살아서</strong> 돌아오세요.
              </h3>
            </div>
          </header>
        </motion.div>
      )}
    </section>
  );
}
