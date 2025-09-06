import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { mockNews } from '../data/mockData';

export const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 min-h-[75vh] mt-[-5rem] lg:mt-[-6rem] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-[5rem] lg:pt-[6rem]"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6"> 
              Actualités & Nouvelles
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Restez informé des dernières nouvelles de Crystal Services et des évolutions 
              du secteur logistique en République Démocratique du Congo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-brand-blue-100 text-brand-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.publishedAt).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-brand-blue-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent> 
                    <Button variant="outline" className="w-full group-hover:bg-brand-blue-500 group-hover:text-white transition-colors" asChild>
                      <Link to={`/news/${article.id}`}>
                        Lire l'article
                        {/* <ArrowRight className="ml-2 h-4 w-4" /> */} 
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <Newspaper className="h-12 w-12 text-brand-blue-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Restez Informé
                </h2>
                <p className="text-gray-600 mb-6">
                  Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
                  et offres spéciales directement dans votre boîte mail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Votre adresse email" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
                  />
                  <Button>
                    S'abonner
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};