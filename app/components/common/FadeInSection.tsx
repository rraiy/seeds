'use client';

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const FadeInSection = ({ children }: { children: JSX.Element }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 80, friction: 30 },
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default FadeInSection;
