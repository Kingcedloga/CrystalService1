import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { offices } from '../data/mockData';

const contactSchema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Téléphone requis'),
  company: z.string().optional(),
  subject: z.string().min(1, 'Sujet requis'),
  service: z.string().min(1, 'Service requis'),
  message: z.string().min(10, 'Message requis (minimum 10 caractères)')
});

type ContactForm = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Contact form:', data);
    setIsSubmitted(true);
    reset();
  };

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
                Message envoyé !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre message a été envoyé avec succès. Nous vous contacterons dans les 24 heures.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="w-full">
                Envoyer un autre message
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans vos projets logistiques et de voyage.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nos Coordonnées
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">+243 81 234 5678</p>
                  <p className="text-sm text-gray-500">Lundi - Vendredi: 8h00 - 17h00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@logisticspro.cd</p>
                  <p className="text-sm text-gray-500">Réponse sous 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Siège Social</h3>
                  <p className="text-gray-600">Avenue des Cliniques, Immeuble Forescom</p>
                  <p className="text-gray-600">2ème étage, Gombe - Kinshasa</p>
                </div>
              </div>
            </div>

            {/* Office Cards */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Nos Bureaux</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{office.city}</h4>
                      <p className="text-sm text-gray-600 mb-1">{office.address}</p>
                      <p className="text-sm text-blue-600">{office.phone}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
                  Envoyez-nous un message
                </CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                        Entreprise
                      </label>
                      <Input
                        {...register('company')}
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service concerné *
                    </label>
                    <Select onValueChange={(value) => setValue('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="douane">Dédouanement</SelectItem>
                        <SelectItem value="transport">Fret & Transport</SelectItem>
                        <SelectItem value="voyage">Agence de Voyage</SelectItem>
                        <SelectItem value="partenariat">Partenariat</SelectItem>
                        <SelectItem value="autre">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-red-600 text-sm mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <Input
                      {...register('subject')}
                      placeholder="Objet de votre demande"
                    />
                    {errors.subject && (
                      <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder="Décrivez votre demande en détail..."
                      rows={6}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};