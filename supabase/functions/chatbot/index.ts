import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatRequest {
  message: string
  history?: ChatMessage[]
}

// Base de connaissances sur Crystal Services
const companyKnowledge = `
Crystal Services SARL est une entreprise leader en solutions logistiques et de voyage en République Démocratique du Congo depuis plus de 15 ans.

INFORMATIONS GÉNÉRALES:
- Nom: Crystal Services SARL
- RCCM: 21-B-00409
- Fondée en: 2010
- Siège social: Avenue de la Justice, Résidence Victoire, 3ème niveau, Gombe - Kinshasa, RDC
- Capital social: 500,000 USD
- Plus de 2,500 clients satisfaits
- Plus de 50,000 expéditions traitées
- 200+ partenaires actifs

SERVICES PRINCIPAUX:
1. DÉDOUANEMENT:
   - Dédouanement terrestre (24-48h)
   - Dédouanement maritime (2-5 jours)
   - Dédouanement aérien (4-12h)
   - Gestion complète des formalités douanières

2. FRET & TRANSPORT:
   - Transport terrestre (jusqu'à 25 tonnes)
   - Transport maritime (conteneurs FCL/LCL)
   - Transport aérien (jusqu'à 10 tonnes)
   - Groupage et services express

3. AGENCE DE VOYAGE:
   - Billetterie aérienne
   - Assurance voyage
   - Assistance visa
   - Voyages d'affaires et personnels

4. REPRÉSENTATION MARITIME:
   - Représentation de navires dans les ports congolais
   - Gestion de la documentation maritime
   - Services aux équipages

5. CONSULTANCE:
   - Sous-traitance commerciale
   - Facilitation de documents auprès de l'État
   - Conseil stratégique et accompagnement
   - Obtention de licences et permis

BUREAUX:
- Kinshasa (Gombe): +243 81 234 5678, kinshasa@crystalservices.cd
- Matadi: +243 81 345 6789, matadi@crystalservices.cd
- Lubumbashi: +243 81 456 7890, lubumbashi@crystalservices.cd
- Beni: +243 81 567 8901, beni@crystalservices.cd

CONTACT PRINCIPAL:
- Email: info@crystalservices.cd
- Téléphone: +243 81 234 5678
- Horaires: Lundi-Vendredi 8h-17h, Samedi 8h-12h

LICENCES ET CERTIFICATIONS:
- Commissionnaire en Douane: Agrément DGDA N° CD/DGDA/2021/045
- Transport de Marchandises: Licence N° TR/2021/089
- Agence de Voyage: Licence N° AGV/2021/156

VALEURS:
- Intégrité: Transparence et honnêteté
- Excellence: Qualité dans chaque service
- Partenariat: Relations durables basées sur la confiance
- Engagement: Développement économique de la RDC
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, history = [] }: ChatRequest = await req.json()

    // Construire le contexte de conversation
    const systemPrompt = `Tu es l'assistant virtuel de Crystal Services SARL, une entreprise de logistique et voyage en RDC. 
    
Utilise UNIQUEMENT les informations suivantes pour répondre aux questions:
${companyKnowledge}

INSTRUCTIONS:
- Réponds uniquement aux questions concernant Crystal Services
- Sois professionnel, courtois et précis
- Si tu ne connais pas une information spécifique, dirige vers le contact approprié
- Utilise un ton amical mais professionnel
- Réponds en français
- Si la question n'est pas liée à Crystal Services, explique poliment que tu ne peux aider que pour les questions concernant l'entreprise

Exemple de réponses:
- Pour les tarifs: "Je vous invite à demander un devis personnalisé via notre formulaire ou en contactant directement nos bureaux."
- Pour des informations non disponibles: "Pour cette information spécifique, je vous recommande de contacter notre équipe au +243 81 234 5678 ou info@crystalservices.cd"`;

    // Préparer les messages pour l'API
    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message }
    ];

    // Simuler une réponse d'IA (remplacez par votre API préférée)
    // Pour OpenAI, utilisez: const response = await fetch('https://api.openai.com/v1/chat/completions', ...)
    
    // Réponse simulée basée sur des mots-clés
    let aiResponse = generateResponse(message);

    return new Response(
      JSON.stringify({ 
        response: aiResponse,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: 'Erreur lors du traitement de votre demande',
        details: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})

function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Services
  if (lowerMessage.includes('service') || lowerMessage.includes('que faites-vous')) {
    return "Crystal Services propose 5 services principaux :\n\n🚛 **Dédouanement** (terrestre, maritime, aérien)\n🚢 **Transport & Frêt** (tous modes de transport)\n✈️ **Agence de Voyage** (billetterie, visa, assurance)\n⚓ **Représentation Maritime** (services portuaires)\n💼 **Consultance** (sous-traitance, facilitation administrative)\n\nSouhaitez-vous plus d'informations sur un service en particulier ?";
  }
  
  // Contact
  if (lowerMessage.includes('contact') || lowerMessage.includes('téléphone') || lowerMessage.includes('email')) {
    return "📞 **Nos coordonnées :**\n\n**Siège social (Kinshasa):**\n• Téléphone: +243 89 42 41 281\n• Email: info@crystalservices.org\n• Adresse: Avenue de la Justice, Résidence Victoire, 3ème niveau, Gombe\n\n**Autres bureaux:**\n• Matadi: +243 81 345 6789\n• Lubumbashi: +243 81 456 7890\n• Beni: +243 81 567 8901\n\n⏰ Horaires: Lun-Ven 8h-17h, Sam 8h-12h";
  }
  
  // Dédouanement
  if (lowerMessage.includes('dédouanement') || lowerMessage.includes('douane')) {
    return "🛃 **Services de Dédouanement :**\n\n• **Terrestre**: 24-48 heures\n• **Maritime**: 2-5 jours\n• **Aérien**: 4-12 heures\n\nNous gérons toutes les formalités douanières avec notre agrément DGDA N° CD/DGDA/2021/045.\n\nPour un devis personnalisé, contactez-nous ou utilisez notre formulaire en ligne !";
  }
  
  // Transport
  if (lowerMessage.includes('transport') || lowerMessage.includes('fret')) {
    return "🚛 **Solutions de Transport :**\n\n• **Terrestre**: Jusqu'à 25 tonnes\n• **Maritime**: Conteneurs FCL/LCL\n• **Aérien**: Jusqu'à 10 tonnes\n• **Services spéciaux**: Groupage, Express\n\nLicence de transport N° TR/2021/089\n\nBesoin d'un devis ? Contactez-nous avec vos détails d'expédition !";
  }
  
  // Voyage
  if (lowerMessage.includes('voyage') || lowerMessage.includes('billet') || lowerMessage.includes('visa')) {
    return "✈️ **Agence de Voyage :**\n\n• **Billetterie aérienne** (vols domestiques et internationaux)\n• **Assurance voyage** complète\n• **Assistance visa** et formalités\n• **Voyages d'affaires** et personnels\n\nLicence d'agence N° AGV/2021/156\n\nContactez nos conseillers voyage pour vos projets de déplacement !";
  }
  
  // Consultance
  if (lowerMessage.includes('consultance') || lowerMessage.includes('sous-traitance') || lowerMessage.includes('documents état') || lowerMessage.includes('conseil')) {
    return "💼 **Services de Consultance :**\n\n• **Sous-traitance commerciale** (identification partenaires, négociation)\n• **Facilitation administrative** (licences, RCCM, certificats)\n• **Conseil stratégique** (étude marché, implantation RDC)\n• **Accompagnement personnalisé** selon vos besoins\n\n**Délais**: 1-8 semaines selon le projet\n\nContactez nos consultants pour une analyse gratuite de vos besoins !";
  }
  
  // Tarifs
  if (lowerMessage.includes('tarif') || lowerMessage.includes('prix') || lowerMessage.includes('coût')) {
    return "💰 **Tarification :**\n\nNos tarifs dépendent de plusieurs facteurs (destination, poids, volume, urgence, etc.).\n\nPour obtenir un **devis gratuit et personnalisé** :\n• Utilisez notre formulaire en ligne\n• Appelez-nous au +243 81 234 5678\n• Écrivez à info@crystalservices.cd\n\nNous vous répondrons dans les 24 heures !";
  }
  
  // Suivi
  if (lowerMessage.includes('suivi') || lowerMessage.includes('tracking') || lowerMessage.includes('suivre')) {
    return "📦 **Suivi d'expédition :**\n\nVous pouvez suivre votre expédition en temps réel sur notre site web avec votre code de suivi.\n\n**Codes d'exemple pour test :**\n• EXP001234 (transport terrestre)\n• MAR567890 (transport maritime)\n\nBesoin d'aide ? Contactez-nous avec votre numéro de suivi !";
  }
  
  // À propos
  if (lowerMessage.includes('à propos') || lowerMessage.includes('histoire') || lowerMessage.includes('entreprise')) {
    return "🏢 **À propos de Crystal Services :**\n\n• **Fondée en 2010** à Kinshasa\n• **15+ années d'expérience** en logistique\n• **2,500+ clients satisfaits**\n• **4 bureaux** à travers la RDC\n• **RCCM**: 21-B-00409\n\n**Notre mission**: Faciliter les échanges commerciaux en RDC avec des solutions logistiques fiables et professionnelles.\n\nDécouvrez notre histoire complète sur notre page 'À Propos' !";
  }
  
  // Bureaux
  if (lowerMessage.includes('bureau') || lowerMessage.includes('adresse') || lowerMessage.includes('où')) {
    return "📍 **Nos Bureaux :**\n\n🏢 **Kinshasa (Siège)** - Gombe\n📧 kinshasa@crystalservices.cd\n\n🚢 **Matadi** - Centre-ville\n📧 matadi@crystalservices.cd\n\n⛏️ **Lubumbashi** - Katuba\n📧 lubumbashi@crystalservices.cd\n\n🌿 **Beni** - Kivu\n📧 beni@crystalservices.cd\n\nTous ouverts Lun-Ven 8h-17h, Sam 8h-12h";
  }
  
  // Salutations
  if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
    return "👋 **Bonjour et bienvenue chez Crystal Services !**\n\nJe suis votre assistant virtuel, prêt à répondre à toutes vos questions sur nos services logistiques et de voyage.\n\n**Comment puis-je vous aider aujourd'hui ?**\n• Informations sur nos services\n• Demande de devis\n• Suivi d'expédition\n• Coordonnées de nos bureaux\n• Ou toute autre question !";
  }
  
  // Merci
  if (lowerMessage.includes('merci') || lowerMessage.includes('thank')) {
    return "😊 **De rien !**\n\nC'est un plaisir de vous aider. N'hésitez pas si vous avez d'autres questions sur Crystal Services.\n\n**Besoin d'une assistance personnalisée ?**\nContactez notre équipe au +243 81 234 5678 ou info@crystalservices.cd\n\nBonne journée ! 🌟";
  }
  
  // Réponse par défaut
  return "🤖 **Bonjour !**\n\nJe suis l'assistant virtuel de Crystal Services. Je peux vous renseigner sur :\n\n• 🚛 Nos services (dédouanement, transport, voyage, consultance)\n• 📞 Nos coordonnées et bureaux\n• 💰 Demandes de devis\n• 📦 Suivi d'expéditions\n• 🏢 Informations sur l'entreprise\n\n**Posez-moi votre question !** Pour des besoins spécifiques, contactez directement notre équipe au +243 81 234 5678.";
}