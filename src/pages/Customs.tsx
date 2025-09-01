import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Ship, Plane, CheckCircle, ArrowRight, FileCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export const Customs: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: 'Dédouanement Terrestre',
      description: 'Services douaniers pour le transport routier et ferroviaire',
      features: [
        'Déclaration en douane import/export',
        'Gestion des formalités administratives',
        'Assistance technique et réglementaire',
        'Suivi des dossiers en temps réel'
      ],
      timeframe: '24-48 heures', 
      color: 'from-brand-blue-400 to-brand-blue-500'
    },
    {
      icon: Ship,
      title: 'Dédouanement Maritime',
      description: 'Expertise portuaire pour vos expéditions maritimes',
      features: [
        'Déclaration conteneurs FCL/LCL',
        'Coordination avec les autorités portuaires',
        'Gestion des surestaries',
        'Inspection et contrôle qualité'
      ],
      timeframe: '2-5 jours', 
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Plane,
      title: 'Dédouanement Aérien',
      description: 'Solutions rapides pour le fret aérien',
      features: [
        'Traitement prioritaire',
        'Dédouanement express',
        'Gestion des marchandises spéciales',
        'Coordination avec les compagnies aériennes'
      ],
      timeframe: '4-12 heures', 
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const faq = [
    {
      question: 'Quels documents sont nécessaires pour le dédouanement ?',
      answer: 'Les documents requis incluent généralement la facture commerciale, le connaissement/lettre de transport aérien, la liste de colisage, le certificat d\'origine, et tout document spécifique selon la nature de la marchandise.'
    },
    {
      question: 'Combien de temps prend le processus de dédouanement ?',
      answer: 'Le délai varie selon le mode de transport : 4-12h pour l\'aérien, 24-48h pour le terrestre, et 2-5 jours pour le maritime. Ces délais peuvent être réduits avec nos services express.'
    },
    {
      question: 'Gérez-vous les taxes et droits de douane ?',
      answer: 'Oui, nous calculons et gérons le paiement de tous les droits de douane, taxes, et frais administratifs selon la législation en vigueur.'
    },
    {
      question: 'Proposez-vous un service de conseil douanier ?',
      answer: 'Absolument. Nos experts fournissent des conseils sur la classification tarifaire, les procédures d\'importation/exportation, et l\'optimisation des coûts douaniers.'
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
              Services de Dédouanement
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expertise complète en procédures douanières pour tous vos modes de transport. 
              Simplifiez vos opérations avec nos solutions sur mesure.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/quote">
                <FileCheck className="h-5 w-5 mr-2" />
                Demander un devis
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center"> 
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2"> 
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="text-sm text-gray-600">Délai moyen</div>
                      <div className="font-semibold text-gray-900">{service.timeframe}</div> 
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/quote">
                        Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur nos services de dédouanement
            </p>
          </motion.div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};