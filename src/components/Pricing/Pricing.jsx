import React from 'react';
import { PricingSection, PricingTitle, PricingGrid, PricingCard, SelectBtn } from './style';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const packages = [
  {
    title: 'Paket Landing Page',
    price: 'Rp2,800,000',
    features: [
      'Landing Page (1 Page Website)',
      'Domain (.co.id 1 Tahun)',
      'Hosting 1 Tahun'
    ]
  },
  {
    title: 'Paket Website Standar',
    price: 'Rp7,850,000',
    features: [
      'Website Max 5 Page',
      'Gallery/Product Page',
      'Admin Panel',
      'Domain (.co.id 1 Tahun)',
      'Hosting 1 Tahun',
      'Free Maintenance 12 Bulan',
      'Free Update 12 Bulan'
    ]
  },
  {
    title: 'Paket E-Commerce',
    price: 'Rp14,600,000',
    features: [
      'Website Unlimited Page',
      'Gallery/Product Page',
      'Call to Action ke Whatsapp',
      'Admin Panel',
      'Dashboard Penjualan',
      'Domain (.co.id 1 Tahun)',
      'Hosting 1 Tahun',
      'Free Maintenance Unlimited',
      'Free Update Unlimited',
      'Source Code'
    ]
  }
];

const Pricing = () => {
  return (
    <PricingSection id="harga">
      <PricingTitle>Price List <span>Layanan Website</span></PricingTitle>
      <PricingGrid>
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <PricingCard>
              <h3>{pkg.title}</h3>
              <div className="price">{pkg.price}</div>
              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}><Check size={18} /> {feature}</li>
                ))}
              </ul>
              <SelectBtn>Pilih Paket</SelectBtn>
            </PricingCard>
          </motion.div>
        ))}
      </PricingGrid>
    </PricingSection>
  );
};

export default Pricing;
