'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import useFitter, { Main } from 'react-page-fitter';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

type AdjusterProps = {
  children: ReactNode;
};

const PageRoot = ({ children }: AdjusterProps): JSX.Element => {
  const pathname = usePathname();
  const isFit = useFitter();
  if (isFit === undefined) return <div className={styles.spinner} />;

  return (
    <Main
      location={pathname}
      className={`${styles.pages_root} ${pathname.includes('/posts/') && styles.slug_margin_top}`}
      classFitIn={styles.fit_in}
      classFitOut={styles.fit_out}
    >
      {children}
    </Main>
  );
};

export default PageRoot;