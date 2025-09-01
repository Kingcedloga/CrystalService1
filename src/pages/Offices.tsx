import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { offices } from '../data/mockData';

export const Offices: React.FC = () => {
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
              Nos Bureaux
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              LogisticsPro dispose d'un réseau de bureaux stratégiquement situés 
              à travers la République Démocratique du Congo pour vous servir au mieux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center">
                      <MapPin className="h-6 w-6 text-brand-blue-600 mr-2" />
                      {office.city}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Bureau {office.district}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-gray-900 font-medium">Adresse</p>
                          <p className="text-gray-600 text-sm">{office.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-gray-900 font-medium">Téléphone</p> 
                          <p className="text-gray-600 text-sm">{office.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-gray-900 font-medium">Email</p>
                          <p className="text-gray-600 text-sm">{office.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                        <div>
                          <p className="text-gray-900 font-medium">Horaires</p>
                          <p className="text-gray-600 text-sm">Lundi - Vendredi: 8h00 - 17h00</p>
                          <p className="text-gray-600 text-sm">Samedi: 8h00 - 12h00</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          Appeler 
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Présence Nationale
            </h2>
            <p className="text-xl text-gray-600">
              Un réseau stratégique pour couvrir tout le territoire congolais
            </p>
          </motion.div>

          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="bg-brand-blue-600 text-white rounded-lg p-6 max-w-md mx-auto">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Carte Interactive</h3>
              <p className="text-blue-100">
                Localisez facilement nos bureaux à travers la RDC
              </p>
              <Button className="mt-4 bg-white text-brand-blue-600 hover:bg-gray-100">
                Voir sur Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};