import React from 'react';
import { HeroSection, HeroContent, HeroImage, CTAButton } from './style';
import imgHero from '../../../assets/images/2.png';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kembangkan Bisnis Anda Melalui <span>Website Profesional</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Solusi software terbaik untuk pertumbuhan bisnis digital Anda. Kami membantu Anda membangun kehadiran online yang kuat dan efektif.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CTAButton>Hubungi Kami Hari Ini</CTAButton>
        </motion.div>
      </HeroContent>
      <HeroImage>
        <motion.img
          src={imgHero}
          alt="Professional Website Development"
          referrerPolicy="no-referrer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;
