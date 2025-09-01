import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FileText, Package, MapPin, DollarSign, Upload, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const quoteSchema = z.object({
  serviceType: z.string().min(1, 'Type de service requis'),
  incoterm: z.string().optional(),
  weight: z.number().min(0.1, 'Poids doit être supérieur à 0'),
  volume: z.number().min(0.1, 'Volume doit être supérieur à 0'),
  origin: z.string().min(1, 'Origine requise'),
  destination: z.string().min(1, 'Destination requise'),
  value: z.number().min(1, 'Valeur requise'),
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Téléphone requis'),
  company: z.string().optional(),
  description: z.string().optional()
});

type QuoteForm = z.infer<typeof quoteSchema>;

export const Quote: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch
  } = useForm<QuoteForm>({
    resolver: zodResolver(quoteSchema)
  });

  const serviceType = watch('serviceType');

  const onSubmit = async (data: QuoteForm) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Quote request:', data);
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
                Demande envoyée !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre demande de devis a été envoyée avec succès. Nous vous contacterons dans les 24 heures.
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Demander un Devis
          </h1>
          <p className="text-xl text-gray-600">
            Remplissez le formulaire ci-dessous pour recevoir votre devis personnalisé
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-brand-blue-600" />
                Informations de l'expédition
              </CardTitle>
              <CardDescription>
                Tous les champs marqués d'un astérisque (*) sont obligatoires
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de service *
                  </label>
                  <Select onValueChange={(value) => {
                    setValue('serviceType', value);
                    setSelectedService(value);
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="douane-terrestre">Dédouanement Terrestre</SelectItem>
                      <SelectItem value="douane-maritime">Dédouanement Maritime</SelectItem>
                      <SelectItem value="douane-aerien">Dédouanement Aérien</SelectItem>
                      <SelectItem value="transport-terrestre">Transport Terrestre</SelectItem>
                      <SelectItem value="transport-maritime">Transport Maritime</SelectItem>
                      <SelectItem value="transport-aerien">Transport Aérien</SelectItem>
                      <SelectItem value="groupage">Groupage</SelectItem>
                      <SelectItem value="express">Service Express</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-red-600 text-sm mt-1">{errors.serviceType.message}</p>
                  )}
                </div>

                {/* Incoterm - Show only for transport services */}
                {serviceType?.includes('transport') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Incoterm
                    </label>
                    <Select onValueChange={(value) => setValue('incoterm', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un incoterm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EXW">EXW - Ex Works</SelectItem>
                        <SelectItem value="FCA">FCA - Free Carrier</SelectItem>
                        <SelectItem value="CPT">CPT - Carriage Paid To</SelectItem>
                        <SelectItem value="CIP">CIP - Carriage and Insurance Paid</SelectItem>
                        <SelectItem value="DAP">DAP - Delivered at Place</SelectItem>
                        <SelectItem value="DPU">DPU - Delivered at Place Unloaded</SelectItem>
                        <SelectItem value="DDP">DDP - Delivered Duty Paid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Shipment Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poids (kg) *
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      {...register('weight', { valueAsNumber: true })}
                      placeholder="Ex: 150.5"
                    />
                    {errors.weight && (
                      <p className="text-red-600 text-sm mt-1">{errors.weight.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Volume (m³) *
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      {...register('volume', { valueAsNumber: true })}
                      placeholder="Ex: 2.5"
                    />
                    {errors.volume && (
                      <p className="text-red-600 text-sm mt-1">{errors.volume.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Origine *
                    </label>
                    <Input
                      {...register('origin')}
                      placeholder="Ex: Kinshasa, RDC"
                    />
                    {errors.origin && (
                      <p className="text-red-600 text-sm mt-1">{errors.origin.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination *
                    </label>
                    <Input
                      {...register('destination')}
                      placeholder="Ex: Lubumbashi, RDC"
                    />
                    {errors.destination && (
                      <p className="text-red-600 text-sm mt-1">{errors.destination.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Valeur de la marchandise (USD) *
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      {...register('value', { valueAsNumber: true })}
                      placeholder="Ex: 5000"
                    />
                    {errors.value && (
                      <p className="text-red-600 text-sm mt-1">{errors.value.message}</p>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Informations de contact
                  </h3>
                  
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

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description supplémentaire
                    </label>
                    <Textarea
                      {...register('description')}
                      placeholder="Détails supplémentaires sur votre demande..."
                      rows={4}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};