'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckIcon, 
  XIcon, 
  StarIcon 
} from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: 99000,
    description: "Paket ideal untuk pemula yang ingin memulai perjalanan digital",
    features: [
      "Akses 2 sesi webinar",
      "Materi dasar digital",
      "Sertifikat peserta",
      "Konsultasi umum"
    ],
    exclusions: [
      "Rekaman eksklusif",
      "Mentoring intensif",
      "Akses komunitas premium"
    ],
    recommended: false
  },
  {
    name: "Pro",
    price: 250000,
    description: "Paket komprehensif untuk pengembangan keterampilan digital",
    features: [
      "Akses penuh semua sesi",
      "Materi premium",
      "Sertifikat kompetensi",
      "Konsultasi lanjutan",
      "Rekaman webinar",
      "Akses grup eksklusif"
    ],
    exclusions: [
      "Mentoring personal",
      "Proyek kolaborasi khusus"
    ],
    recommended: true
  },
  {
    name: "Elite",
    price: 499000,
    description: "Paket premium untuk akselerasi potensi digital",
    features: [
      "Semua fitur Pro",
      "Mentoring personal",
      "Proyek kolaborasi khusus",
      "Networking eksklusif",
      "Konsultasi intensif",
      "Akses materi tambahan"
    ],
    exclusions: [],
    recommended: false
  }
];

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('Pro');

  return (
    <section className="bg-orange-50 py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-orange-600 mb-4"
          >
            Pilih Paket Webinar
          </motion.h2>
          <p className="text-orange-800 max-w-2xl mx-auto">
            Temukan paket yang sesuai dengan kebutuhan dan ambisi digitalmu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(plan.name)}
              className={`relative rounded-2xl p-6 shadow-lg transform transition-all duration-300 
                          ${activeCategory === plan.name 
                            ? 'border-4 border-orange-500 scale-105' 
                            : 'border-4 border-transparent'}
                          ${plan.recommended 
                            ? 'bg-gradient-to-br from-orange-100 to-orange-200' 
                            : 'bg-white'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 m-4">
                  <StarIcon className="w-6 h-6 text-orange-600" />
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-4 
                              ${plan.recommended 
                                ? 'text-orange-800' 
                                : 'text-gray-800'}`}>
                {plan.name}
              </h3>

              <p className="text-orange-600 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-orange-700">
                  Rp {plan.price.toLocaleString()}
                </span>
                <span className="text-orange-500 ml-2">/ webinar</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-orange-700 mb-3">
                  Fitur Termasuk:
                </h4>
                {plan.features.map((feature) => (
                  <div 
                    key={feature} 
                    className="flex items-center mb-2"
                  >
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-orange-800">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.exclusions.length > 0 && (
                <div>
                  <h4 className="font-semibold text-orange-700 mb-3">
                    Tidak Termasuk:
                  </h4>
                  {plan.exclusions.map((exclusion) => (
                    <div 
                      key={exclusion} 
                      className="flex items-center mb-2"
                    >
                      <XIcon className="w-5 h-5 text-red-500 mr-2" />
                      <span className="text-orange-600 line-through">
                        {exclusion}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full mt-6 transition-all duration-300
                            ${plan.recommended 
                              ? 'bg-orange-600 text-white hover:bg-orange-700' 
                              : 'bg-orange-100 text-orange-700 hover:bg-orange-200'}`}
              >
                Pilih Paket
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;