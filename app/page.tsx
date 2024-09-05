'use client';

import Give1 from './image/banana.png';
import Give2 from './image/body-butter.png';
import Give3 from './image/coffee.jpg';
import Give4 from './image/coffie_whole_beans.png';
import Give5 from './image/ellips.jpg';
import Give6 from './image/kinocandy.jpg';
import Give7 from './image/koffie.png';
import Give8 from './image/mogoreng.jpg';
import Give9 from './image/noni.png';
import Give10 from './image/relaxa-candy.jpg';
import Give11 from './image/sensatia.png';
import Give12 from './image/snack1.png';
import Give13 from './image/tiger.jpg';
import Give14 from './image/yava.jpg';
import styles from './page.module.css';
import Header from './image/header.png';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Date from './image/date.png';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleDoubleDown } from 'react-icons/fa';
import CustomGiveItem from '@/app/_component/CustomGiveItem';
import MotionText from '@/app/_component/MotionText';

const MOTION_LAYOUT = 'layout';

export default function Home() {
  const [timer, setTimer] = useState(0);

  const centerText = useMemo(
    () => [
      '안녕하세요.',
      '용호씨?',
      '여행 축하드리고',
      '중요한거',
      '잊어버릴까봐',
      '이렇게 기록해드려요',
      '정말 착하죠?',
      '그러니',
      '살아서 돌아와',
      '기념품 주세요~',
    ],
    [],
  );
  const giveData = useMemo(
    () => [
      {
        image: Give1,
        text: '말린 바나나 얇게 슬라이스',
      },
      {
        image: Give2,
        text: '바디크림 body butter',
      },
      {
        image: Give3,
        text: '커피',
      },
      {
        image: Give4,
        text: '커피2',
      },
      {
        image: Give5,
        text: '헤어 에센스 ellips',
      },
      {
        image: Give6,
        text: '마이쮸같은 사탕 kinocandy',
      },
      {
        image: Give7,
        text: '커피3',
      },
      {
        image: Give8,
        text: '라면 mogoreng',
      },
      {
        image: Give9,
        text: '노니 건강식품',
      },
      {
        image: Give10,
        text: '사탕',
      },
      {
        image: Give11,
        text: '자외선 진정 피부 바디크림 sensatia',
      },
      {
        image: Give12,
        text: '과자',
      },
      {
        image: Give13,
        text: '호랑이연고',
      },
      {
        image: Give14,
        text: '그래놀라 yava',
      },
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
        <motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className={styles.header}
          >
            <Image src={Header} alt='header' className={styles.headerImage} />
            <div>
              <h3 className={styles.headerTitle}>
                당신의 여행을 <strong>응원</strong>합니다.
              </h3>
              <h3 className={styles.headerTitle}>
                꼭 <strong>살아서</strong> 돌아오세요.
              </h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className={styles.body}
          >
            <Image src={Date} alt='date' className={styles.date} />
            <FaAngleDoubleDown className={styles.arrow} size={25} />
            <div className={styles.giveList}>
              {giveData.map((datum, index) => (
                <CustomGiveItem
                  key={index}
                  image={datum.image}
                  text={datum.text}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
