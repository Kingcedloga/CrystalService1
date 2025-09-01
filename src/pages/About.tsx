import React from 'react';
import { motion } from 'framer-motion';
import { Building, Shield, Users, Award, Target, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { stats } from '../data/mockData';

export const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Intégrité',
      description: 'Nous opérons avec transparence et honnêteté dans toutes nos transactions'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque service que nous fournissons'
    },
    {
      icon: Users,
      title: 'Partenariat',
      description: 'Nous construisons des relations durables basées sur la confiance mutuelle'
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Nous nous engageons pour le développement économique de la RDC'
    }
  ];

  const milestones = [
    { year: '2010', event: 'Création de LogisticsPro avec une équipe de 5 personnes' },
    { year: '2013', event: 'Ouverture du bureau de Matadi et expansion maritime' },
    { year: '2016', event: 'Lancement de l\'agence de voyage et services visa' },
    { year: '2019', event: 'Expansion vers Lubumbashi et le Katanga' },
    { year: '2022', event: 'Digitalisation complète des services' },
    { year: '2025', event: 'Plus de 2,500 clients actifs et 4 bureaux' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6"> 
              À Propos de LogisticsPro
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leader en solutions logistiques et de voyage en République Démocratique du Congo 
              depuis plus de 15 ans, nous connectons les entreprises au monde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Fondée en 2010 à Kinshasa, LogisticsPro est née de la vision de faciliter les échanges 
                commerciaux en République Démocratique du Congo. Nos fondateurs, forts d'une expérience 
                internationale en logistique, ont identifié le besoin crucial d'un partenaire fiable 
                pour accompagner les entreprises dans leurs opérations d'import-export.
              </p>
              <p className="mb-6">
                Aujourd'hui, avec nos 4 bureaux stratégiquement situés à Kinshasa, Matadi, Lubumbashi 
                et Beni, nous servons plus de 2,500 clients à travers tout le territoire national. 
                Notre équipe de 60+ professionnels qualifiés maîtrise parfaitement les spécificités 
                du marché congolais et les réglementations internationales.
              </p>
              <p>
                Enregistrée sous le RCCM 21-B-00409, LogisticsPro s'engage à respecter les plus 
                hauts standards de conformité et de qualité dans tous ses services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300"> 
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              LogisticsPro en Chiffres
            </h2>
            <p className="text-xl text-gray-300">
              Des résultats qui témoignent de notre expertise
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
                <div className="text-3xl lg:text-4xl font-bold text-brand-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600">
              15 années d'innovation et de croissance continue
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="bg-brand-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <p className="text-gray-600">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Informations Légales
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Raison Sociale</h3>
                    <p className="text-gray-600">LogisticsPro SARL</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">RCCM</h3>
                    <p className="text-gray-600">21-B-00409</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Siège Social</h3>
                    <p className="text-gray-600">Kinshasa, Gombe - RDC</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Activités</h3>
                    <p className="text-gray-600">Transport, Logistique, Voyage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};