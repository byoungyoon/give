import type { Metadata } from 'next';
import localFont from 'next/font/local';
import styles from './page.module.css';
import cx from 'classnames';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '용호 여행',
  description: '기념품을 사주는 용호',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cx(geistSans.variable, geistMono.variable, styles.body)}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
