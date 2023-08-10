'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About BeyondRealms" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">BeyondRealms</span>, a journey into the universe' unknown corners.
         We unveil the universe's mysteries that lay far beyond the commonplace here, guiding you on a {' '}
        <span className="font-extrabold text-white">
        cosmic voyage
        </span>{' '}
        unlike any other. Join us as we explore the hidden corners of {' '}
        <span className="font-extrabold text-white">space and time</span> 
         , from the baffling regions of dark matter to the astounding mysteries of distant galaxies, 
         beyond the stars and planets. Prepare to have your vision of the universe challenged as we go on a quest to uncover the extraordinary, 
         the remarkable that resides just beyond the edge of our comprehension. {' '}
        <span className="font-extrabold text-white">Welcome to BeyondRealms</span> , a universe that defies convention.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
