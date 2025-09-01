import React from 'react';
import { motion } from 'framer-motion';
import { Building, FileText, Shield, Scale } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const Legal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Informations légales et réglementaires concernant LogisticsPro SARL 
              et ses activités en République Démocratique du Congo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center"> 
                    <Building className="h-5 w-5 mr-2 text-brand-blue-500" />
                    Informations sur l'Entreprise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dénomination Sociale</h4>
                      <p className="text-gray-600">LogisticsPro SARL</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Forme Juridique</h4>
                      <p className="text-gray-600">Société à Responsabilité Limitée</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">RCCM</h4>
                      <p className="text-gray-600">21-B-00409</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Capital Social</h4>
                      <p className="text-gray-600">500,000 USD</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Siège Social</h4>
                      <p className="text-gray-600">Avenue des Cliniques, Immeuble Forescom, 2ème étage, Gombe - Kinshasa, RDC</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Activité Principale</h4>
                      <p className="text-gray-600">Services logistiques, transport et voyage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Licenses */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center"> 
                    <FileText className="h-5 w-5 mr-2 text-brand-blue-500" />
                    Licences et Autorisations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Commissionnaire en Douane</h4>
                    <p className="text-gray-600">
                      Agrément DGDA N° CD/DGDA/2021/045 - Autorisation d'exercer les activités 
                      de commissionnaire en douane sur l'ensemble du territoire de la RDC.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transport de Marchandises</h4>
                    <p className="text-gray-600">
                      Licence de transport N° TR/2021/089 - Autorisation de transport terrestre, 
                      maritime et aérien de marchandises diverses et dangereuses.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Agence de Voyage</h4>
                    <p className="text-gray-600">
                      Licence d'agence de voyage N° AGV/2021/156 - Autorisation de vente de 
                      billets d'avion et organisation de voyages touristiques et d'affaires.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center"> 
                    <Shield className="h-5 w-5 mr-2 text-brand-blue-500" />
                    Conformité Réglementaire
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    LogisticsPro SARL opère en pleine conformité avec la législation de la 
                    République Démocratique du Congo et les conventions internationales 
                    applicables au transport et à la logistique.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Réglementations Nationales</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Code douanier de la RDC</li>
                        <li>• Loi sur le transport terrestre</li>
                        <li>• Réglementation des agences de voyage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Conventions Internationales</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Convention CMR (transport routier)</li>
                        <li>• Convention de Varsovie (transport aérien)</li>
                        <li>• Règles de Hambourg (transport maritime)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Dispute Resolution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center"> 
                    <Scale className="h-5 w-5 mr-2 text-brand-blue-500" />
                    Résolution des Litiges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    En cas de litige, nous privilégions la résolution amiable. Si aucun accord 
                    ne peut être trouvé, les litiges seront soumis aux tribunaux compétents 
                    de Kinshasa, République Démocratique du Congo.
                  </p>
                  <div className="bg-brand-blue-50 border-brand-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Légal</h4>
                    <p className="text-gray-600 text-sm">
                      Pour toute question juridique: legal@logisticspro.cd<br />
                      Téléphone: +243 81 234 5678
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};