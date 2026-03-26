import React from 'react';
import { WhyUsSection, WhyUsImage, WhyUsContent, WhyUsGrid, WhyUsCard } from './style';
import img1 from '../../../assets/images/1.png';
import { Users, Monitor, DollarSign, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: <Users size={32} />,
    title: 'Tim Berpengalaman',
    description: 'Keahlian teknis tinggi untuk hasil maksimal.'
  },
  {
    icon: <Monitor size={32} />,
    title: 'Desain Modern & Responsive',
    description: 'Tampilan website yang elegan di semua perangkat.'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Harga Kompetitif',
    description: 'Solusi berkualitas dengan biaya yang terjangkau.'
  },
  {
    icon: <Headphones size={32} />,
    title: 'Dukungan Pelanggan Cepat',
    description: 'Tim support kami siap membantu Anda kapan saja.'
  }
];

const WhyUs = () => {
  return (
    <WhyUsSection id="mengapa-kami">
      <WhyUsImage>
        <motion.img
          src={img1}
          alt="Our Professional Team"
          referrerPolicy="no-referrer"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </WhyUsImage>
      <WhyUsContent>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Mengapa <span>Memilih Kami?</span>
        </motion.h2>
        <WhyUsGrid>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <WhyUsCard>
                {reason.icon}
                <h4>{reason.title}</h4>
              </WhyUsCard>
            </motion.div>
          ))}
        </WhyUsGrid>
      </WhyUsContent>
    </WhyUsSection>
  );
};

export default WhyUs;
