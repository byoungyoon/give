import React from 'react';
import styles from './customGiveItem.module.css';
import Image, { StaticImageData } from 'next/image';

type Props = {
  image: StaticImageData;
  text: string;
};

export default function CustomGiveItem({ image, text }: Props) {
  return (
    <div className={styles.item}>
      <Image src={image} alt='banana' className={styles.itemImage} />
      <p className={styles.itemText}>{text}</p>
    </div>
  );
}
