import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../../data/mockData';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Votre Confiance, Notre Fierté
          </h2>
          <p className="text-xl text-gray-600">
            Des chiffres qui témoignent de notre expertise et de votre satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 mb-4 hover:shadow-xl transition-shadow duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-4xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-100 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};