import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Handshake, Building, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const partnerSchema = z.object({
  companyName: z.string().min(2, 'Nom de l\'entreprise requis'),
  sector: z.string().min(1, 'Secteur d\'activité requis'),
  services: z.string().min(1, 'Services proposés requis'),
  contactName: z.string().min(2, 'Nom du contact requis'),
  contactPosition: z.string().min(2, 'Poste requis'),
  contactEmail: z.string().email('Email invalide'),
  contactPhone: z.string().min(10, 'Téléphone requis'),
  description: z.string().min(10, 'Description requise (minimum 10 caractères)')
});

type PartnerForm = z.infer<typeof partnerSchema>;

export const Partners: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm<PartnerForm>({
    resolver: zodResolver(partnerSchema)
  });

  const onSubmit = async (data: PartnerForm) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Partner request:', data);
    setIsSubmitted(true);
    reset();
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Croissance Mutuelle',
      description: 'Développez votre activité grâce à notre réseau étendu de clients'
    },
    {
      icon: Users,
      title: 'Support Expert',
      description: 'Bénéficiez de notre expertise technique et commerciale'
    },
    {
      icon: Building,
      title: 'Réputation Solide',
      description: 'Associez-vous à une marque reconnue sur le marché congolais'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Candidature envoyée !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre candidature de partenariat a été envoyée avec succès. Nous étudierons votre dossier et vous contacterons sous 72 heures.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="w-full">
                Nouvelle candidature
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Devenez Notre Partenaire
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            <p className="text-xl text-brand-blue-100 max-w-3xl mx-auto mb-8">
              Rejoignez un réseau de partenaires de confiance et développez votre activité 
              avec le leader logistique en RDC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi Nous Rejoindre ?
            </h2>
            <p className="text-xl text-gray-600">
              Des avantages concrets pour faire grandir votre entreprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <benefit.icon className="h-12 w-12 text-brand-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Partner Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Handshake className="h-5 w-5 mr-2 text-brand-blue-600" />
                  Candidature de Partenariat
                </CardTitle>
                <CardDescription>
                  Présentez votre entreprise et vos services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Company Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Informations sur l'entreprise
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom de l'entreprise *
                        </label>
                        <Input
                          {...register('companyName')}
                          placeholder="Nom de votre entreprise"
                        />
                        {errors.companyName && (
                          <p className="text-red-600 text-sm mt-1">{errors.companyName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Secteur d'activité *
                        </label>
                        <Select onValueChange={(value) => setValue('sector', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre secteur" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="transport">Transport</SelectItem>
                            <SelectItem value="logistique">Logistique</SelectItem>
                            <SelectItem value="douane">Services douaniers</SelectItem>
                            <SelectItem value="voyage">Agence de voyage</SelectItem>
                            <SelectItem value="technologie">Technologie</SelectItem>
                            <SelectItem value="finance">Services financiers</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.sector && (
                          <p className="text-red-600 text-sm mt-1">{errors.sector.message}</p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Services proposés *
                        </label>
                        <Input
                          {...register('services')}
                          placeholder="Décrivez vos principaux services"
                        />
                        {errors.services && (
                          <p className="text-red-600 text-sm mt-1">{errors.services.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact Person */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Personne de contact
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom du contact *
                        </label>
                        <Input
                          {...register('contactName')}
                          placeholder="Nom de la personne de contact"
                        />
                        {errors.contactName && (
                          <p className="text-red-600 text-sm mt-1">{errors.contactName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Poste/Fonction *
                        </label>
                        <Input
                          {...register('contactPosition')}
                          placeholder="Ex: Directeur Commercial"
                        />
                        {errors.contactPosition && (
                          <p className="text-red-600 text-sm mt-1">{errors.contactPosition.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          {...register('contactEmail')}
                          placeholder="contact@entreprise.com"
                        />
                        {errors.contactEmail && (
                          <p className="text-red-600 text-sm mt-1">{errors.contactEmail.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <Input
                          {...register('contactPhone')}
                          placeholder="+243 XX XXX XXXX"
                        />
                        {errors.contactPhone && (
                          <p className="text-red-600 text-sm mt-1">{errors.contactPhone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="border-t pt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Présentation de votre entreprise *
                    </label>
                    <Textarea
                      {...register('description')}
                      placeholder="Présentez votre entreprise, vos forces, et pourquoi vous souhaitez devenir notre partenaire..."
                      rows={6}
                    />
                    {errors.description && (
                      <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue-600 hover:bg-brand-blue-700" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la candidature'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};