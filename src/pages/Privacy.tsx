import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const Privacy: React.FC = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Collecte des Données',
      content: 'Nous collectons uniquement les informations nécessaires à la fourniture de nos services logistiques et de voyage. Ces données incluent vos informations de contact, détails d\'expédition, et préférences de voyage.'
    },
    {
      icon: Lock,
      title: 'Protection des Données',
      content: 'Vos données personnelles sont protégées par des mesures de sécurité techniques et organisationnelles conformes aux standards internationaux. Nous utilisons le cryptage SSL et des serveurs sécurisés.'
    },
    {
      icon: Users,
      title: 'Partage des Données',
      content: 'Nous ne vendons ni ne louons vos données personnelles. Nous pouvons partager vos informations uniquement avec nos partenaires logistiques pour l\'exécution de vos commandes.'
    },
    {
      icon: Shield,
      title: 'Vos Droits',
      content: 'Vous avez le droit d\'accéder, modifier, ou supprimer vos données personnelles. Contactez-nous à privacy@logisticspro.cd pour exercer ces droits.'
    }
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
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              LogisticsPro s'engage à protéger votre vie privée et vos données personnelles 
              conformément aux meilleures pratiques internationales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-gray-600 text-center mb-8">
              Dernière mise à jour: 15 janvier 2025
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <section.icon className="h-5 w-5 mr-2 text-blue-600" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{section.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact for Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Questions sur vos données ?
                </h3>
                <p className="text-gray-600 mb-6">
                  Pour toute question concernant cette politique de confidentialité 
                  ou l'utilisation de vos données personnelles, contactez notre 
                  délégué à la protection des données.
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Email:</strong> privacy@logisticspro.cd</p>
                  <p><strong>Téléphone:</strong> +243 81 234 5678</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};