import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Briefcase, MapPin, Clock, Users, Upload, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { mockJobs } from '../data/mockData';

const applicationSchema = z.object({
  position: z.string().min(1, 'Poste requis'),
  firstName: z.string().min(2, 'Prénom requis'),
  lastName: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Téléphone requis'),
  experience: z.string().min(1, 'Expérience requise'),
  motivation: z.string().min(20, 'Lettre de motivation requise (minimum 20 caractères)')
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export const Careers: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema)
  });

  const onSubmit = async (data: ApplicationForm) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Job application:', data);
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
                Candidature envoyée !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre candidature a été envoyée avec succès. Nous étudierons votre profil et vous contacterons si votre profil correspond à nos besoins.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="w-full">
                Postuler à un autre poste
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
      <section className="bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 text-white py-16 min-h-[75vh] mt-[-5rem] lg:mt-[-6rem] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-[5rem] lg:pt-[6rem]"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Rejoignez Notre Équipe
            </h1>
            <p className="text-xl text-brand-blue-100 max-w-3xl mx-auto">
              Construisez votre carrière avec le leader logistique en RDC. 
              Nous offrons un environnement de travail dynamique et des opportunités de croissance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Offers */}
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
              Offres d'Emploi
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos opportunités de carrière
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {mockJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                        <CardDescription className="mt-2">
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.department}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                          </div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Exigences:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-brand-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-xs text-gray-500 mb-4">
                      Publié le {new Date(job.postedAt).toLocaleDateString('fr-FR')}
                    </div>
                    
                    <Button 
                      className="w-full" 
                      onClick={() => {
                        setSelectedJob(job.title);
                        setValue('position', job.title);
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Postuler maintenant
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Application Form */}
          <motion.div
            id="application-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                 <Users className="h-5 w-5 mr-2 text-brand-blue-600" />
                  Postuler à un Poste
                </CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous pour nous envoyer votre candidature
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poste souhaité *
                    </label>
                    <Select value={selectedJob} onValueChange={(value) => {
                      setValue('position', value);
                      setSelectedJob(value);
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un poste" />
                      </SelectTrigger>
                      <SelectContent>
                        {mockJobs.map((job) => (
                          <SelectItem key={job.id} value={job.title}>
                            {job.title} - {job.location}
                          </SelectItem>
                        ))}
                        <SelectItem value="autre">Candidature spontanée</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.position && (
                      <p className="text-red-600 text-sm mt-1">{errors.position.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <Input
                        {...register('firstName')}
                        placeholder="Votre prénom"
                      />
                      {errors.firstName && (
                        <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <Input
                        {...register('lastName')}
                        placeholder="Votre nom"
                      />
                      {errors.lastName && (
                        <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Années d'expérience *
                    </label>
                    <Select onValueChange={(value) => setValue('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre expérience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Moins d'1 an</SelectItem>
                        <SelectItem value="1-3">1 à 3 ans</SelectItem>
                        <SelectItem value="3-5">3 à 5 ans</SelectItem>
                        <SelectItem value="5-10">5 à 10 ans</SelectItem>
                        <SelectItem value="10+">Plus de 10 ans</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.experience && (
                      <p className="text-red-600 text-sm mt-1">{errors.experience.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lettre de motivation *
                    </label>
                    <Textarea
                      {...register('motivation')}
                      placeholder="Parlez-nous de votre motivation et de vos compétences..."
                      rows={6}
                    />
                    {errors.motivation && (
                      <p className="text-red-600 text-sm mt-1">{errors.motivation.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CV (PDF) *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Glissez votre CV ici ou cliquez pour sélectionner
                      </p>
                      <input type="file" accept=".pdf" className="hidden" />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue-600 hover:bg-brand-blue-700" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
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