import React from 'react';
import { ServicesSection, SectionTitle, ServicesGrid, ServiceCard } from './style';
import { Layout, Settings, ShoppingCart, Search } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: <Layout size={48} />,
    title: 'Desain & Pengembangan Website',
    description: 'Membangun website modern, responsif, dan fungsional sesuai kebutuhan bisnis Anda.'
  },
  {
    icon: <Settings size={48} />,
    title: 'Pemeliharaan Website',
    description: 'Layanan pemeliharaan rutin untuk memastikan website Anda tetap aman dan up-to-date.'
  },
  {
    icon: <ShoppingCart size={48} />,
    title: 'E-Commerce Website',
    description: 'Solusi toko online lengkap dengan fitur pembayaran dan manajemen produk.'
  },
  {
    icon: <Search size={48} />,
    title: 'Optimasi SEO',
    description: 'Meningkatkan visibilitas website Anda di mesin pencari untuk menarik lebih banyak pengunjung.'
  }
];

const Services = () => {
  return (
    <ServicesSection id="layanan">
      <SectionTitle>Layanan <span>Unggulan Kami</span></SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard>
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          </motion.div>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;
