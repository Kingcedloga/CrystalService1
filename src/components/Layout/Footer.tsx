import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { offices } from '../../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/Logo 11.png" 
                alt="LogisticsPro Logo" 
                className="h-8 w-auto"
              />
              <div>
                <div className="text-xl font-bold">LogisticsPro</div>
                <div className="text-xs text-gray-400">Transport & Voyage</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Votre partenaire de confiance pour tous vos besoins logistiques et de voyage en République Démocratique du Congo.
            </p>
            <p className="text-gray-400 text-xs">
              RCCM: 21-B-00409
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/customs" className="text-gray-400 hover:text-white transition-colors">Dédouanement</Link></li>
              <li><Link to="/freight" className="text-gray-400 hover:text-white transition-colors">Fret & Transport</Link></li>
              <li><Link to="/travel" className="text-gray-400 hover:text-white transition-colors">Agence de Voyage</Link></li>
              <li><Link to="/tracking" className="text-gray-400 hover:text-white transition-colors">Suivi d'expédition</Link></li>
              <li><Link to="/quote" className="text-gray-400 hover:text-white transition-colors">Demander un devis</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white transition-colors">Partenaires</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Carrières</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">Actualités</Link></li>
              <li><Link to="/offices" className="text-gray-400 hover:text-white transition-colors">Nos bureaux</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Kinshasa, Gombe</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+243 81 234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@logisticspro.cd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 LogisticsPro RDC. Tous droits réservés. RCCM: 21-B-00409
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};