import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Plane, Shield, Users, Calendar, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const travelSchema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Téléphone requis'),
  route: z.string().min(1, 'Itinéraire requis'),
  departureDate: z.string().min(1, 'Date de départ requise'),
  returnDate: z.string().optional(),
  budget: z.string().min(1, 'Budget requis'),
  travelers: z.number().min(1, 'Nombre de voyageurs requis'),
  notes: z.string().optional()
});

type TravelForm = z.infer<typeof travelSchema>;

export const Travel: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm<TravelForm>({
    resolver: zodResolver(travelSchema)
  });

  const onSubmit = async (data: TravelForm) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Travel request:', data);
    setIsSubmitted(true);
    reset();
  };

  const services = [
    {
      icon: Plane,
      title: 'Billetterie Aérienne',
      description: 'Vols domestiques et internationaux aux meilleurs tarifs',
      features: ['Compagnies partenaires', 'Tarifs négociés', 'Réservation 24/7']
    },
    {
      icon: Shield,
      title: 'Assurance Voyage',
      description: 'Protection complète pour tous vos déplacements',
      features: ['Couverture médicale', 'Annulation voyage', 'Bagages perdus']
    },
    {
      icon: Users,
      title: 'Assistance Visa',
      description: 'Accompagnement complet pour vos démarches consulaires',
      features: ['Préparation dossier', 'Suivi demande', 'Conseils experts']
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
                Demande envoyée !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre demande de voyage a été envoyée avec succès. Nous vous contacterons dans les 24 heures.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="w-full">
                Faire une nouvelle demande
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
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Agence de Voyage
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Votre partenaire voyage pour tous vos déplacements professionnels et personnels. 
              Billetterie, assurance et assistance visa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Nos Services Voyage
            </h2>
            <p className="text-xl text-gray-600">
              Une gamme complète de services pour faciliter tous vos voyages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <service.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Request Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Demander un Itinéraire
            </h2>
            <p className="text-xl text-gray-600">
              Confiez-nous l'organisation de votre voyage pour une expérience sans stress
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-orange-600" />
                  Détails du voyage
                </CardTitle>
                <CardDescription>
                  Remplissez les informations ci-dessous pour recevoir votre proposition de voyage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        {...register('name')}
                        placeholder="Votre nom complet"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        {...register('email')}
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <Input
                        {...register('phone')}
                        placeholder="+243 XX XXX XXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre de voyageurs *
                      </label>
                      <Input
                        type="number"
                        min="1"
                        {...register('travelers', { valueAsNumber: true })}
                        placeholder="1"
                      />
                      {errors.travelers && (
                        <p className="text-red-600 text-sm mt-1">{errors.travelers.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Travel Details */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Détails du voyage
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Itinéraire *
                        </label>
                        <Input
                          {...register('route')}
                          placeholder="Ex: Kinshasa - Paris - Kinshasa"
                        />
                        {errors.route && (
                          <p className="text-red-600 text-sm mt-1">{errors.route.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date de départ *
                        </label>
                        <Input
                          type="date"
                          {...register('departureDate')}
                        />
                        {errors.departureDate && (
                          <p className="text-red-600 text-sm mt-1">{errors.departureDate.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date de retour
                        </label>
                        <Input
                          type="date"
                          {...register('returnDate')}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget approximatif *
                        </label>
                        <Select onValueChange={(value) => setValue('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="500-1000">500 - 1,000 USD</SelectItem>
                            <SelectItem value="1000-2500">1,000 - 2,500 USD</SelectItem>
                            <SelectItem value="2500-5000">2,500 - 5,000 USD</SelectItem>
                            <SelectItem value="5000+">Plus de 5,000 USD</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.budget && (
                          <p className="text-red-600 text-sm mt-1">{errors.budget.message}</p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Informations supplémentaires
                        </label>
                        <Textarea
                          {...register('notes')}
                          placeholder="Préférences spéciales, besoins d'assistance, etc."
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
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