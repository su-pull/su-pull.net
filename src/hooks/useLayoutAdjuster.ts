import { useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import useSWRInfinite from 'swr/infinite';
import getKey from 'libs/getKey';
import PostsData from 'types/PostsData';

const useLayoutAdjuster = (lowCss: string, highCss: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isToggleClass, setIsToggleClass] = useState('layout_center_content');
  const pathname = usePathname();
  const { data } = useSWRInfinite<PostsData>(getKey, {
    revalidateFirstPage: false,
  });
  useLayoutEffect(() => {
    const contentHeight = ref.current?.offsetHeight;
    const isContentWindow = (contentHeight as number) < window.innerHeight;
    setIsToggleClass(isContentWindow ? lowCss : highCss);
  }, [pathname, data, lowCss, highCss]);

  return { ref, isToggleClass };
};

export default useLayoutAdjuster;
