import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, MapPin, Calendar, Clock, CheckCircle, Circle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { mockTrackingData } from '../data/mockData';
import { TrackingStatus } from '../types';

export const Tracking: React.FC = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingStatus[] | null>(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError('');
    const data = mockTrackingData[trackingCode.toUpperCase()];
    
    if (data) {
      setTrackingData(data);
    } else {
      setError('Code de suivi non trouvé. Vérifiez votre code et réessayez.');
      setTrackingData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Suivi d'Expédition
          </h1>
          <p className="text-xl text-gray-600">
            Suivez vos envois en temps réel avec notre système de tracking avancé
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2 text-brand-blue-600" />
                Rechercher votre expédition
              </CardTitle>
              <CardDescription>
                Entrez votre code de suivi pour voir le statut de votre expédition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Ex: EXP001234 ou MAR567890"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} className="sm:w-auto">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-sm mt-2"
                >
                  {error}
                </motion.p>
              )}
              <div className="mt-4 text-sm text-gray-500">
                <p><strong>Codes d'exemple:</strong> EXP001234, MAR567890</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tracking Results */}
        {trackingData && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-brand-blue-600" />
                  Statut de l'expédition: {trackingCode.toUpperCase()}
                </CardTitle>
                <CardDescription>
                  Voici le détail du parcours de votre expédition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingData.map((status, index) => (
                    <motion.div
                      key={status.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex flex-col items-center">
                        {status.completed ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <Circle className="h-6 w-6 text-gray-300" />
                        )}
                        {index < trackingData.length - 1 && (
                          <div className={`w-0.5 h-12 mt-2 ${status.completed ? 'bg-green-500' : 'bg-gray-300'}`} />
                        )}
                      </div>
                      
                      <div className="flex-1 pb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className={`font-semibold ${status.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                              {status.status}
                            </h3>
                            <p className={`text-sm ${status.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                              {status.description}
                            </p>
                            <div className={`flex items-center mt-1 text-xs ${status.completed ? 'text-gray-500' : 'text-gray-400'}`}>
                              <MapPin className="h-3 w-3 mr-1" />
                              {status.location}
                            </div>
                          </div>
                          
                          {status.date && (
                            <div className={`text-right text-sm ${status.completed ? 'text-gray-600' : 'text-gray-400'} mt-2 sm:mt-0`}>
                              <div className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {status.date}
                              </div>
                              <div className="flex items-center mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                {status.time}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};