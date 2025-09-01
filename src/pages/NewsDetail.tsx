import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mockNews } from '../data/mockData';

export const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = mockNews.find(news => news.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Button asChild>
            <Link to="/news">Retour aux actualités</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button variant="outline" asChild>
            <Link to="/news">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux actualités
            </Link>
          </Button>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </div>
            
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                  {article.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(article.publishedAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {article.title}
              </h1>

              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                <p className="text-xl text-gray-700 mb-6 font-medium">
                  {article.excerpt}
                </p>
                
                <div className="space-y-4">
                  <p>
                    Cette nouvelle ligne maritime représente un investissement majeur dans notre capacité 
                    de transport et témoigne de notre engagement à améliorer les connexions commerciales 
                    entre la République Démocratique du Congo et l'Afrique de l'Ouest.
                  </p>
                  
                  <p>
                    Grâce à ce nouveau service, nos clients bénéficieront de délais de transit réduits, 
                    de tarifs compétitifs et d'une fiabilité accrue pour leurs expéditions vers les 
                    principaux ports de la région, notamment Lagos, Abidjan et Dakar.
                  </p>
                  
                  <p>
                    "Cette expansion s'inscrit dans notre stratégie de développement continental", 
                    explique notre Directeur Général. "Nous répondons ainsi aux besoins croissants 
                    de nos clients qui cherchent à diversifier leurs marchés d'exportation."
                  </p>
                  
                  <p>
                    Le premier navire de cette nouvelle ligne partira le 1er février 2025 depuis 
                    le port de Matadi. Les réservations sont d'ores et déjà ouvertes auprès de 
                    tous nos bureaux.
                  </p>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center justify-between pt-6 border-t">
                <div className="flex items-center space-x-2 text-gray-500">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm">Partager cet article</span>
                </div>
                <Button asChild>
                  <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.article>
      </div>
    </div>
  );
};