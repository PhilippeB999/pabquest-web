/* ============================================================
   ChantierQuest — Données du programme DEP 5220 / 5720
   Conduite d'engins de chantier / Construction Equipment Operation
   20 compétences officielles (source: AdmissionFP.com)
   Les questions QCM sont des EXEMPLES à valider/remplacer par
   les enseignants du programme.

   Format des choix: chaque question a un tableau "choices" où
   chaque item a { fr, en, correct }. L'ordre est mélangé au
   moment de l'affichage (voir app.js) — la position de la bonne
   réponse change donc à chaque tentative.
   ============================================================ */

const PROGRAM = {
  fr: { title: "PAB — Assistance à la personne", subtitle: "DEP 5358 — Préposé aux bénéficiaires" },
  en: { title: "PAB — Personal Care Attendant", subtitle: "DVS 5358" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes": l'élève touche un terme puis
   sa définition correspondante. pairs: tableau de
   { term_fr, term_en, def_fr, def_en }. Toutes les paires doivent être
   associées correctement pour que la question soit considérée réussie. */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (mise en situation): un court
   scénario réaliste suivi d'un choix multiple basé sur le jugement
   professionnel. Réutilise le même format "choices" qu'un QCM standard. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulté d'une quête. Chaque compétence est maintenant
   divisée en 3 paliers progressifs (tiers[]), débloqués l'un après l'autre:
   Débutant -> Intermédiaire -> Avancé. Réussir le palier 1 d'une compétence
   déverrouille la compétence suivante sur la carte; réussir le palier 3
   (Avancé) accorde le badge de maîtrise de la compétence. */
const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage. */
const COMPETENCIES = [
 {
  "id": "m1",
  "order": 1,
  "title_fr": "Analyse des métiers & éthique",
  "title_en": "Analyse des métiers & éthique",
  "icon": "⚖️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel organisme réglemente la profession de PAB au Québec?",
      "en": "Quel organisme réglemente la profession de PAB au Québec?",
      "choices": [
       {
        "fr": "OIIQ",
        "en": "OIIQ"
       },
       {
        "fr": "MSSS",
        "en": "MSSS"
       },
       {
        "fr": "CISSS/CIUSSS",
        "en": "CISSS/CIUSSS",
        "correct": true
       },
       {
        "fr": "CNO",
        "en": "CNO"
       }
      ],
      "explFr": "Les CISSS/CIUSSS supervisent l'embauche et les pratiques des PAB dans leurs établissements.",
      "explEn": "Les CISSS/CIUSSS supervisent l'embauche et les pratiques des PAB dans leurs établissements."
     },
     {
      "fr": "Qu'est-ce que le secret professionnel implique pour le PAB?",
      "en": "Qu'est-ce que le secret professionnel implique pour le PAB?",
      "choices": [
       {
        "fr": "Partager les infos avec la famille seulement",
        "en": "Partager les infos avec la famille seulement"
       },
       {
        "fr": "Ne divulguer aucune info confidentielle sur le client",
        "en": "Ne divulguer aucune info confidentielle sur le client",
        "correct": true
       },
       {
        "fr": "Communiquer à tous les collègues",
        "en": "Communiquer à tous les collègues"
       },
       {
        "fr": "Documenter dans un journal personnel",
        "en": "Documenter dans un journal personnel"
       }
      ],
      "explFr": "Le secret professionnel oblige à ne pas divulguer les informations confidentielles sur le client, sauf exceptions légales.",
      "explEn": "Le secret professionnel oblige à ne pas divulguer les informations confidentielles sur le client, sauf exceptions légales."
     },
     {
      "fr": "Lequel de ces actes est dans le champ de pratique du PAB?",
      "en": "Lequel de ces actes est dans le champ de pratique du PAB?",
      "choices": [
       {
        "fr": "Administrer des médicaments par injection",
        "en": "Administrer des médicaments par injection"
       },
       {
        "fr": "Poser un diagnostic infirmier",
        "en": "Poser un diagnostic infirmier"
       },
       {
        "fr": "Aider à la toilette et à l'hygiène personnelle",
        "en": "Aider à la toilette et à l'hygiène personnelle",
        "correct": true
       },
       {
        "fr": "Prescrire des examens de laboratoire",
        "en": "Prescrire des examens de laboratoire"
       }
      ],
      "explFr": "L'assistance à l'hygiène personnelle est au cœur du rôle du PAB.",
      "explEn": "L'assistance à l'hygiène personnelle est au cœur du rôle du PAB."
     },
     {
      "fr": "Face à une situation d'abus sur un résident, le PAB doit:",
      "en": "Face à une situation d'abus sur un résident, le PAB doit:",
      "choices": [
       {
        "fr": "Ignorer et continuer son travail",
        "en": "Ignorer et continuer son travail"
       },
       {
        "fr": "En parler à la famille seulement",
        "en": "En parler à la famille seulement"
       },
       {
        "fr": "Signaler immédiatement à son supérieur",
        "en": "Signaler immédiatement à son supérieur",
        "correct": true
       },
       {
        "fr": "Attendre pour voir si ça se répète",
        "en": "Attendre pour voir si ça se répète"
       }
      ],
      "explFr": "Tout soupçon d'abus doit être signalé immédiatement. La Loi sur la maltraitance des personnes aînées l'exige.",
      "explEn": "Tout soupçon d'abus doit être signalé immédiatement. La Loi sur la maltraitance des personnes aînées l'exige."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quelle est la différence entre déontologie et éthique?",
      "en": "Quelle est la différence entre déontologie et éthique?",
      "choices": [
       {
        "fr": "Ce sont deux mots pour la même chose",
        "en": "Ce sont deux mots pour la même chose"
       },
       {
        "fr": "La déontologie = règles obligatoires de la profession; l'éthique = réflexion sur les valeurs morales",
        "en": "La déontologie = règles obligatoires de la profession; l'éthique = réflexion sur les valeurs morales",
        "correct": true
       },
       {
        "fr": "L'éthique est obligatoire, la déontologie est facultative",
        "en": "L'éthique est obligatoire, la déontologie est facultative"
       },
       {
        "fr": "La déontologie s'applique seulement aux médecins",
        "en": "La déontologie s'applique seulement aux médecins"
       }
      ],
      "explFr": "La déontologie est l'ensemble des règles formelles de conduite professionnelle. L'éthique est une réflexion plus large sur ce qui est juste et bien.",
      "explEn": "La déontologie est l'ensemble des règles formelles de conduite professionnelle. L'éthique est une réflexion plus large sur ce qui est juste et bien."
     },
     {
      "fr": "Un PAB peut refuser d'effectuer un soin si:",
      "en": "Un PAB peut refuser d'effectuer un soin si:",
      "choices": [
       {
        "fr": "Il est fatigué ce jour-là",
        "en": "Il est fatigué ce jour-là"
       },
       {
        "fr": "Le client est difficile",
        "en": "Le client est difficile"
       },
       {
        "fr": "Le soin dépasse ses compétences ou va à l'encontre de ses valeurs éthiques fondamentales",
        "en": "Le soin dépasse ses compétences ou va à l'encontre de ses valeurs éthiques fondamentales",
        "correct": true
       },
       {
        "fr": "Il préfère faire autre chose",
        "en": "Il préfère faire autre chose"
       }
      ],
      "explFr": "Un PAB peut refuser un soin qui dépasse ses compétences légales ou qui viole des principes éthiques fondamentaux, mais doit en aviser son supérieur.",
      "explEn": "Un PAB peut refuser un soin qui dépasse ses compétences légales ou qui viole des principes éthiques fondamentaux, mais doit en aviser son supérieur."
     },
     {
      "fr": "Le principe d'autonomie du client signifie:",
      "en": "Le principe d'autonomie du client signifie:",
      "choices": [
       {
        "fr": "Le client peut faire n'importe quoi sans supervision",
        "en": "Le client peut faire n'importe quoi sans supervision"
       },
       {
        "fr": "Le client a le droit de prendre ses propres décisions concernant ses soins",
        "en": "Le client a le droit de prendre ses propres décisions concernant ses soins",
        "correct": true
       },
       {
        "fr": "Le PAB décide ce qui est le mieux pour le client",
        "en": "Le PAB décide ce qui est le mieux pour le client"
       },
       {
        "fr": "L'autonomie s'applique seulement aux clients cognitifs",
        "en": "L'autonomie s'applique seulement aux clients cognitifs"
       }
      ],
      "explFr": "L'autonomie est le droit fondamental du client à prendre ses propres décisions éclairées concernant ses soins, même si le PAB n'est pas d'accord.",
      "explEn": "L'autonomie est le droit fondamental du client à prendre ses propres décisions éclairées concernant ses soins, même si le PAB n'est pas d'accord."
     },
     {
      "fr": "Qu'est-ce qu'un conflit d'intérêts pour un PAB?",
      "en": "Qu'est-ce qu'un conflit d'intérêts pour un PAB?",
      "choices": [
       {
        "fr": "Quand deux clients ont des besoins différents en même temps",
        "en": "Quand deux clients ont des besoins différents en même temps"
       },
       {
        "fr": "Quand l'intérêt personnel du PAB entre en conflit avec l'intérêt du client",
        "en": "Quand l'intérêt personnel du PAB entre en conflit avec l'intérêt du client",
        "correct": true
       },
       {
        "fr": "Quand le PAB et l'infirmière ne s'entendent pas",
        "en": "Quand le PAB et l'infirmière ne s'entendent pas"
       },
       {
        "fr": "Quand les horaires sont trop chargés",
        "en": "Quand les horaires sont trop chargés"
       }
      ],
      "explFr": "Un conflit d'intérêts survient quand l'intérêt personnel du PAB (financier, personnel, familial) risque d'influencer ses décisions professionnelles au détriment du client.",
      "explEn": "Un conflit d'intérêts survient quand l'intérêt personnel du PAB (financier, personnel, familial) risque d'influencer ses décisions professionnelles au détriment du client."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Vous constatez que votre collègue parle brusquement à M. Tremblay (82 ans) et l'appelle 'le vieux grincheux'. M. Tremblay semble embarrassé et se referme. Plus tard, ce même collègue vous demande de ne rien dire car 'c'est juste une blague'.\n\nQuelle est la meilleure approche?",
      "en": "Vous constatez que votre collègue parle brusquement à M. Tremblay (82 ans) et l'appelle 'le vieux grincheux'. M. Tremblay semble embarrassé et se referme. Plus tard, ce même collègue vous demande de ne rien dire car 'c'est juste une blague'.\n\nQuelle est la meilleure approche?",
      "choices": [
       {
        "fr": "Promettre de ne rien dire — vous ne voulez pas de conflit avec votre collègue",
        "en": "Promettre de ne rien dire — vous ne voulez pas de conflit avec votre collègue"
       },
       {
        "fr": "Intervenir poliment auprès du collègue sur le coup, puis signaler la situation à votre supérieur",
        "en": "Intervenir poliment auprès du collègue sur le coup, puis signaler la situation à votre supérieur",
        "correct": true
       },
       {
        "fr": "Ignorer — ce n'est pas votre rôle de surveiller vos collègues",
        "en": "Ignorer — ce n'est pas votre rôle de surveiller vos collègues"
       }
      ],
      "explFr": "✅ Bravo! Double action: intervention immédiate pour protéger le résident + signalement pour que la situation soit documentée et encadrée. C'est votre obligation légale et éthique.",
      "explEn": "✅ Bravo! Double action: intervention immédiate pour protéger le résident + signalement pour que la situation soit documentée et encadrée. C'est votre obligation légale et éthique."
     },
     {
      "type": "scenario",
      "fr": "La fille de Mme Roy vous appelle et vous demande: 'Comment va ma mère? Est-ce qu'elle mange bien? Quels médicaments prend-elle?' Vous connaissez bien Mme Roy et avez de bonnes nouvelles à partager. La fille semble sincèrement préoccupée.\n\nComment répondez-vous à cet appel?",
      "en": "La fille de Mme Roy vous appelle et vous demande: 'Comment va ma mère? Est-ce qu'elle mange bien? Quels médicaments prend-elle?' Vous connaissez bien Mme Roy et avez de bonnes nouvelles à partager. La fille semble sincèrement préoccupée.\n\nComment répondez-vous à cet appel?",
      "choices": [
       {
        "fr": "Répondre en détail — la fille est la famille et a le droit de savoir",
        "en": "Répondre en détail — la fille est la famille et a le droit de savoir"
       },
       {
        "fr": "Expliquer poliment que vous ne pouvez pas partager d'informations par téléphone sans l'accord de Mme Roy, et l'inviter à venir rendre visite ou à parler directement à l'infirmière responsable",
        "en": "Expliquer poliment que vous ne pouvez pas partager d'informations par téléphone sans l'accord de Mme Roy, et l'inviter à venir rendre visite ou à parler directement à l'infirmière responsable",
        "correct": true
       },
       {
        "fr": "Raccrocher sans répondre pour éviter tout problème légal",
        "en": "Raccrocher sans répondre pour éviter tout problème légal"
       }
      ],
      "explFr": "✅ Parfait! Le secret professionnel s'applique à tous, famille comprise. Vous respectez la confidentialité tout en proposant une solution alternative.",
      "explEn": "✅ Parfait! Le secret professionnel s'applique à tous, famille comprise. Vous respectez la confidentialité tout en proposant une solution alternative."
     },
     {
      "type": "scenario",
      "fr": "M. Gagnon (79 ans, lucide) refuse catégoriquement son bain depuis 3 jours, disant: 'Je suis propre, j'ai pas besoin de me laver tous les jours.' Son hygiène commence à poser un problème. L'infirmière vous demande d'insister.\n\nComment gérez-vous cette situation?",
      "en": "M. Gagnon (79 ans, lucide) refuse catégoriquement son bain depuis 3 jours, disant: 'Je suis propre, j'ai pas besoin de me laver tous les jours.' Son hygiène commence à poser un problème. L'infirmière vous demande d'insister.\n\nComment gérez-vous cette situation?",
      "choices": [
       {
        "fr": "Forcer le bain avec l'aide d'un collègue — l'infirmière a donné l'ordre et c'est pour sa santé",
        "en": "Forcer le bain avec l'aide d'un collègue — l'infirmière a donné l'ordre et c'est pour sa santé"
       },
       {
        "fr": "Respecter le refus, proposer des alternatives (débarbouillette, soin partiel), documenter le refus, l'aviser des risques sanitaires calmement, et rapporter à l'infirmière",
        "en": "Respecter le refus, proposer des alternatives (débarbouillette, soin partiel), documenter le refus, l'aviser des risques sanitaires calmement, et rapporter à l'infirmière",
        "correct": true
       },
       {
        "fr": "Ignorer la demande de l'infirmière et ne plus essayer de donner le bain",
        "en": "Ignorer la demande de l'infirmière et ne plus essayer de donner le bain"
       }
      ],
      "explFr": "✅ Excellent! Un client lucide a le droit de refuser des soins. Votre rôle est d'informer, de proposer des compromis et de rapporter.",
      "explEn": "✅ Excellent! Un client lucide a le droit de refuser des soins. Votre rôle est d'informer, de proposer des compromis et de rapporter."
     }
    ]
   }
  ]
 },
 {
  "id": "m2",
  "order": 2,
  "title_fr": "Prévention des infections",
  "title_en": "Prévention des infections",
  "icon": "🦠",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quand doit-on procéder à l'hygiène des mains selon les 5 moments de l'OMS?",
      "en": "Quand doit-on procéder à l'hygiène des mains selon les 5 moments de l'OMS?",
      "choices": [
       {
        "fr": "Seulement avant les repas",
        "en": "Seulement avant les repas"
       },
       {
        "fr": "Avant et après chaque contact direct avec le client",
        "en": "Avant et après chaque contact direct avec le client",
        "correct": true
       },
       {
        "fr": "Une fois par heure en tout temps",
        "en": "Une fois par heure en tout temps"
       },
       {
        "fr": "Uniquement après avoir touché du sang",
        "en": "Uniquement après avoir touché du sang"
       }
      ],
      "explFr": "Les 5 moments de l'OMS: avant contact patient, avant geste aseptique, après risque exposition liquides biologiques, après contact patient, après contact environnement patient.",
      "explEn": "Les 5 moments de l'OMS: avant contact patient, avant geste aseptique, après risque exposition liquides biologiques, après contact patient, après contact environnement patient."
     },
     {
      "fr": "La friction avec solution hydroalcoolique (SHA) est inefficace contre:",
      "en": "La friction avec solution hydroalcoolique (SHA) est inefficace contre:",
      "choices": [
       {
        "fr": "Le virus de la grippe",
        "en": "Le virus de la grippe"
       },
       {
        "fr": "Le Staphylocoque aureus",
        "en": "Le Staphylocoque aureus"
       },
       {
        "fr": "Clostridium difficile (C. diff)",
        "en": "Clostridium difficile (C. diff)",
        "correct": true
       },
       {
        "fr": "Le coronavirus",
        "en": "Le coronavirus"
       }
      ],
      "explFr": "C. diff produit des spores résistantes à la SHA. Seul le lavage à l'eau et au savon pendant 20 secondes minimum est efficace contre C. diff.",
      "explEn": "C. diff produit des spores résistantes à la SHA. Seul le lavage à l'eau et au savon pendant 20 secondes minimum est efficace contre C. diff."
     },
     {
      "fr": "L'ordre correct pour retirer l'EPI est:",
      "en": "L'ordre correct pour retirer l'EPI est:",
      "choices": [
       {
        "fr": "Masque → gants → blouse → lunettes",
        "en": "Masque → gants → blouse → lunettes"
       },
       {
        "fr": "Gants → blouse → lunettes → masque",
        "en": "Gants → blouse → lunettes → masque",
        "correct": true
       },
       {
        "fr": "Lunettes → masque → gants → blouse",
        "en": "Lunettes → masque → gants → blouse"
       },
       {
        "fr": "Blouse → masque → lunettes → gants",
        "en": "Blouse → masque → lunettes → gants"
       }
      ],
      "explFr": "On retire d'abord les gants (les plus contaminés), puis la blouse, puis les lunettes/visière, puis le masque en dernier car il protège les voies respiratoires.",
      "explEn": "On retire d'abord les gants (les plus contaminés), puis la blouse, puis les lunettes/visière, puis le masque en dernier car il protège les voies respiratoires."
     },
     {
      "fr": "Les précautions de contact sont indiquées pour un résident atteint de:",
      "en": "Les précautions de contact sont indiquées pour un résident atteint de:",
      "choices": [
       {
        "fr": "Grippe saisonnière",
        "en": "Grippe saisonnière"
       },
       {
        "fr": "Tuberculose pulmonaire",
        "en": "Tuberculose pulmonaire"
       },
       {
        "fr": "SARM (Staphylocoque aureus résistant)",
        "en": "SARM (Staphylocoque aureus résistant)",
        "correct": true
       },
       {
        "fr": "Pneumonie virale",
        "en": "Pneumonie virale"
       }
      ],
      "explFr": "Le SARM se transmet par contact direct avec la peau ou les surfaces contaminées. Gants et blouse sont requis pour tous les soins.",
      "explEn": "Le SARM se transmet par contact direct avec la peau ou les surfaces contaminées. Gants et blouse sont requis pour tous les soins."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quelle est la durée minimale recommandée pour le lavage des mains à l'eau et au savon?",
      "en": "Quelle est la durée minimale recommandée pour le lavage des mains à l'eau et au savon?",
      "choices": [
       {
        "fr": "5 secondes",
        "en": "5 secondes"
       },
       {
        "fr": "10 secondes",
        "en": "10 secondes"
       },
       {
        "fr": "20 secondes",
        "en": "20 secondes",
        "correct": true
       },
       {
        "fr": "60 secondes",
        "en": "60 secondes"
       }
      ],
      "explFr": "20 secondes minimum — soit le temps de chanter 'Joyeux anniversaire' deux fois — permet d'éliminer efficacement la majorité des agents pathogènes.",
      "explEn": "20 secondes minimum — soit le temps de chanter 'Joyeux anniversaire' deux fois — permet d'éliminer efficacement la majorité des agents pathogènes."
     },
     {
      "fr": "Les précautions de type 'gouttelettes' s'appliquent pour:",
      "en": "Les précautions de type 'gouttelettes' s'appliquent pour:",
      "choices": [
       {
        "fr": "La tuberculose (particules aériennes)",
        "en": "La tuberculose (particules aériennes)"
       },
       {
        "fr": "La grippe saisonnière",
        "en": "La grippe saisonnière",
        "correct": true
       },
       {
        "fr": "C. difficile",
        "en": "C. difficile"
       },
       {
        "fr": "SARM",
        "en": "SARM"
       }
      ],
      "explFr": "La grippe se transmet par gouttelettes (>5 microns) qui ne restent pas longtemps en suspension. Un masque chirurgical à 1 mètre suffit. La tuberculose nécessite un respirateur N95.",
      "explEn": "La grippe se transmet par gouttelettes (>5 microns) qui ne restent pas longtemps en suspension. Un masque chirurgical à 1 mètre suffit. La tuberculose nécessite un respirateur N95."
     },
     {
      "fr": "Qu'est-ce que la transmission par voie aérienne requiert comme protection?",
      "en": "Qu'est-ce que la transmission par voie aérienne requiert comme protection?",
      "choices": [
       {
        "fr": "Gants et blouse seulement",
        "en": "Gants et blouse seulement"
       },
       {
        "fr": "Masque chirurgical",
        "en": "Masque chirurgical"
       },
       {
        "fr": "Respirateur N95 et chambre à pression négative",
        "en": "Respirateur N95 et chambre à pression négative",
        "correct": true
       },
       {
        "fr": "Lunettes de protection seulement",
        "en": "Lunettes de protection seulement"
       }
      ],
      "explFr": "La tuberculose, la varicelle et la rougeole se transmettent par voie aérienne (particules <5 microns). Un respirateur N95 et une chambre à pression négative sont nécessaires.",
      "explEn": "La tuberculose, la varicelle et la rougeole se transmettent par voie aérienne (particules <5 microns). Un respirateur N95 et une chambre à pression négative sont nécessaires."
     },
     {
      "fr": "Un bris de gants lors d'un soin chez un client en précautions de contact: vous devez:",
      "en": "Un bris de gants lors d'un soin chez un client en précautions de contact: vous devez:",
      "choices": [
       {
        "fr": "Continuer le soin, les gants ont fait leur travail",
        "en": "Continuer le soin, les gants ont fait leur travail"
       },
       {
        "fr": "Retirer les gants, effectuer l'hygiène des mains, enfiler de nouveaux gants",
        "en": "Retirer les gants, effectuer l'hygiène des mains, enfiler de nouveaux gants",
        "correct": true
       },
       {
        "fr": "Mettre une deuxième paire de gants par-dessus",
        "en": "Mettre une deuxième paire de gants par-dessus"
       },
       {
        "fr": "Signaler uniquement à la fin du quart",
        "en": "Signaler uniquement à la fin du quart"
       }
      ],
      "explFr": "Un bris = contamination potentielle. Stop du soin, retrait des gants contaminés, hygiène des mains immédiate, nouveaux gants. Le signalement à l'infirmière s'impose aussi.",
      "explEn": "Un bris = contamination potentielle. Stop du soin, retrait des gants contaminés, hygiène des mains immédiate, nouveaux gants. Le signalement à l'infirmière s'impose aussi."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Mme Gagné est en chambre d'isolement pour C. difficile avec diarrhée importante. Vous devez l'aider à se lever pour aller aux toilettes. La boîte de SHA est à l'entrée de la chambre. Votre collègue dit: 'Mets juste les gants, ça va aller vite'.\n\nComment procédez-vous correctement?",
      "en": "Mme Gagné est en chambre d'isolement pour C. difficile avec diarrhée importante. Vous devez l'aider à se lever pour aller aux toilettes. La boîte de SHA est à l'entrée de la chambre. Votre collègue dit: 'Mets juste les gants, ça va aller vite'.\n\nComment procédez-vous correctement?",
      "choices": [
       {
        "fr": "Suivre le conseil du collègue: juste les gants pour aller vite",
        "en": "Suivre le conseil du collègue: juste les gants pour aller vite"
       },
       {
        "fr": "Se laver mains eau+savon, mettre gants ET blouse, aider Mme Gagné, retirer EPI à la sortie, se relaver mains eau+savon",
        "en": "Se laver mains eau+savon, mettre gants ET blouse, aider Mme Gagné, retirer EPI à la sortie, se relaver mains eau+savon",
        "correct": true
       },
       {
        "fr": "Entrer avec SHA + gants + blouse — c'est suffisant pour une aide courte",
        "en": "Entrer avec SHA + gants + blouse — c'est suffisant pour une aide courte"
       }
      ],
      "explFr": "✅ Parfait! C. diff = TOUJOURS eau et savon (avant et après). Gants + blouse obligatoires. EPI retiré dans l'ordre correct à la sortie de la chambre.",
      "explEn": "✅ Parfait! C. diff = TOUJOURS eau et savon (avant et après). Gants + blouse obligatoires. EPI retiré dans l'ordre correct à la sortie de la chambre."
     },
     {
      "type": "scenario",
      "fr": "Vous êtes en salle commune quand M. Tremblay (en précautions de contact pour SARM) appelle au secours — il est tombé et saigne. Vos gants sont dans l'autre couloir.\n\nQue faites-vous?",
      "en": "Vous êtes en salle commune quand M. Tremblay (en précautions de contact pour SARM) appelle au secours — il est tombé et saigne. Vos gants sont dans l'autre couloir.\n\nQue faites-vous?",
      "choices": [
       {
        "fr": "Aller chercher vos gants d'abord — les précautions de contact sont non négociables",
        "en": "Aller chercher vos gants d'abord — les précautions de contact sont non négociables"
       },
       {
        "fr": "Appeler à l'aide pour qu'un collègue apporte les EPI, stabiliser M. Tremblay en minimisant le contact direct avec le sang, et effectuer une hygiène des mains rigoureuse après",
        "en": "Appeler à l'aide pour qu'un collègue apporte les EPI, stabiliser M. Tremblay en minimisant le contact direct avec le sang, et effectuer une hygiène des mains rigoureuse après",
        "correct": true
       },
       {
        "fr": "Regarder de loin et appeler l'infirmière sans intervenir pour préserver les précautions",
        "en": "Regarder de loin et appeler l'infirmière sans intervenir pour préserver les précautions"
       }
      ],
      "explFr": "✅ L'urgence médicale prime. Appel à l'aide + minimisation du contact + hygiène après = balance appropriée.",
      "explEn": "✅ L'urgence médicale prime. Appel à l'aide + minimisation du contact + hygiène après = balance appropriée."
     },
     {
      "type": "scenario",
      "fr": "Vous vous déplacez rapidement entre 5 chambres pour distribuer les repas. Un collègue vous dit: 'Arrête de te laver les mains entre chaque chambre — on est en retard et tu touches juste les plateaux, pas les clients.'\n\nQuelle est votre réponse?",
      "en": "Vous vous déplacez rapidement entre 5 chambres pour distribuer les repas. Un collègue vous dit: 'Arrête de te laver les mains entre chaque chambre — on est en retard et tu touches juste les plateaux, pas les clients.'\n\nQuelle est votre réponse?",
      "choices": [
       {
        "fr": "Suivre le conseil du collègue pour ne pas prendre de retard",
        "en": "Suivre le conseil du collègue pour ne pas prendre de retard"
       },
       {
        "fr": "Maintenir l'hygiène des mains entre les chambres avec la SHA (20 secondes) et expliquer l'importance de cette pratique au collègue",
        "en": "Maintenir l'hygiène des mains entre les chambres avec la SHA (20 secondes) et expliquer l'importance de cette pratique au collègue",
        "correct": true
       },
       {
        "fr": "Porter des gants pour tout le service pour éviter de devoir se laver les mains",
        "en": "Porter des gants pour tout le service pour éviter de devoir se laver les mains"
       }
      ],
      "explFr": "✅ La SHA prend 20 secondes. Les précautions de base s'appliquent à toutes les activités.",
      "explEn": "✅ La SHA prend 20 secondes. Les précautions de base s'appliquent à toutes les activités."
     }
    ]
   }
  ]
 },
 {
  "id": "m3",
  "order": 3,
  "title_fr": "Soins palliatifs & fin de vie",
  "title_en": "Soins palliatifs & fin de vie",
  "icon": "🕊️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "L'objectif PRINCIPAL des soins palliatifs est de:",
      "en": "L'objectif PRINCIPAL des soins palliatifs est de:",
      "choices": [
       {
        "fr": "Guérir la maladie à tout prix",
        "en": "Guérir la maladie à tout prix"
       },
       {
        "fr": "Prolonger la vie le plus longtemps possible",
        "en": "Prolonger la vie le plus longtemps possible"
       },
       {
        "fr": "Soulager la douleur et améliorer la qualité de vie",
        "en": "Soulager la douleur et améliorer la qualité de vie",
        "correct": true
       },
       {
        "fr": "Préparer la famille au deuil uniquement",
        "en": "Préparer la famille au deuil uniquement"
       }
      ],
      "explFr": "Les soins palliatifs visent le confort, la dignité et la qualité de vie pour le patient ET sa famille. Ils ne visent ni à hâter ni à retarder la mort.",
      "explEn": "Les soins palliatifs visent le confort, la dignité et la qualité de vie pour le patient ET sa famille. Ils ne visent ni à hâter ni à retarder la mort."
     },
     {
      "fr": "Le 'râle agonique' en fin de vie indique:",
      "en": "Le 'râle agonique' en fin de vie indique:",
      "choices": [
       {
        "fr": "Une douleur intense nécessitant un analgésique urgent",
        "en": "Une douleur intense nécessitant un analgésique urgent"
       },
       {
        "fr": "Une accumulation de sécrétions dans la gorge — son normal en fin de vie",
        "en": "Une accumulation de sécrétions dans la gorge — son normal en fin de vie",
        "correct": true
       },
       {
        "fr": "Une urgence respiratoire nécessitant la réanimation",
        "en": "Une urgence respiratoire nécessitant la réanimation"
       },
       {
        "fr": "Que le patient a besoin d'être repositionné immédiatement",
        "en": "Que le patient a besoin d'être repositionné immédiatement"
       }
      ],
      "explFr": "Le râle agonique est causé par des sécrétions. C'est normal en fin de vie et n'indique PAS de douleur. C'est souvent plus difficile pour la famille que pour le patient.",
      "explEn": "Le râle agonique est causé par des sécrétions. C'est normal en fin de vie et n'indique PAS de douleur. C'est souvent plus difficile pour la famille que pour le patient."
     },
     {
      "fr": "Lors du décès d'un résident, la première chose que le PAB doit faire est:",
      "en": "Lors du décès d'un résident, la première chose que le PAB doit faire est:",
      "choices": [
       {
        "fr": "Contacter immédiatement la famille",
        "en": "Contacter immédiatement la famille"
       },
       {
        "fr": "Préparer le corps",
        "en": "Préparer le corps"
       },
       {
        "fr": "Aviser l'infirmière responsable",
        "en": "Aviser l'infirmière responsable",
        "correct": true
       },
       {
        "fr": "Documenter dans le dossier",
        "en": "Documenter dans le dossier"
       }
      ],
      "explFr": "L'infirmière est légalement responsable de constater le décès officiellement. Le PAB doit l'aviser en tout premier lieu avant toute autre action.",
      "explEn": "L'infirmière est légalement responsable de constater le décès officiellement. Le PAB doit l'aviser en tout premier lieu avant toute autre action."
     },
     {
      "fr": "La sédation palliative est:",
      "en": "La sédation palliative est:",
      "choices": [
       {
        "fr": "Une forme d'euthanasie",
        "en": "Une forme d'euthanasie"
       },
       {
        "fr": "L'administration de médicaments pour réduire la conscience face à des symptômes réfractaires — prescrite par le médecin",
        "en": "L'administration de médicaments pour réduire la conscience face à des symptômes réfractaires — prescrite par le médecin",
        "correct": true
       },
       {
        "fr": "Un droit que le PAB peut administrer si le client souffre",
        "en": "Un droit que le PAB peut administrer si le client souffre"
       },
       {
        "fr": "Réservée aux dernières heures de vie seulement",
        "en": "Réservée aux dernières heures de vie seulement"
       }
      ],
      "explFr": "La sédation palliative réduit la conscience pour soulager des symptômes réfractaires (douleur, détresse respiratoire). Elle est prescrite par le médecin et administrée par l'infirmière.",
      "explEn": "La sédation palliative réduit la conscience pour soulager des symptômes réfractaires (douleur, détresse respiratoire). Elle est prescrite par le médecin et administrée par l'infirmière."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quels sont les signes physiques habituels dans les derniers jours de vie?",
      "en": "Quels sont les signes physiques habituels dans les derniers jours de vie?",
      "choices": [
       {
        "fr": "Augmentation de l'appétit et de l'énergie",
        "en": "Augmentation de l'appétit et de l'énergie"
       },
       {
        "fr": "Respiration irrégulière, extrémités froides et marbrées, diminution de la conscience",
        "en": "Respiration irrégulière, extrémités froides et marbrées, diminution de la conscience",
        "correct": true
       },
       {
        "fr": "Fièvre élevée et sudation abondante uniquement",
        "en": "Fièvre élevée et sudation abondante uniquement"
       },
       {
        "fr": "Agitation et agressivité constantes",
        "en": "Agitation et agressivité constantes"
       }
      ],
      "explFr": "Les signes de fin de vie incluent: respiration de Cheyne-Stokes, extrémités froides/marbrées, peau bleutée (cyanose), diminution de la conscience, absence d'urine.",
      "explEn": "Les signes de fin de vie incluent: respiration de Cheyne-Stokes, extrémités froides/marbrées, peau bleutée (cyanose), diminution de la conscience, absence d'urine."
     },
     {
      "fr": "Comment le PAB peut-il soutenir la famille d'un résident en fin de vie?",
      "en": "Comment le PAB peut-il soutenir la famille d'un résident en fin de vie?",
      "choices": [
       {
        "fr": "Partager ses propres expériences de deuil",
        "en": "Partager ses propres expériences de deuil"
       },
       {
        "fr": "Promettre que tout ira bien",
        "en": "Promettre que tout ira bien"
       },
       {
        "fr": "Offrir sa présence, écouter sans jugement et assurer le confort du résident",
        "en": "Offrir sa présence, écouter sans jugement et assurer le confort du résident",
        "correct": true
       },
       {
        "fr": "Éviter les discussions sur la mort car c'est tabou",
        "en": "Éviter les discussions sur la mort car c'est tabou"
       }
      ],
      "explFr": "Présence bienveillante, écoute active et soins de confort sont les contributions précieuses du PAB. Pas besoin de grands discours — être là suffit souvent.",
      "explEn": "Présence bienveillante, écoute active et soins de confort sont les contributions précieuses du PAB. Pas besoin de grands discours — être là suffit souvent."
     },
     {
      "fr": "Le 'deuil anticipé' désigne:",
      "en": "Le 'deuil anticipé' désigne:",
      "choices": [
       {
        "fr": "Le deuil vécu après le décès",
        "en": "Le deuil vécu après le décès"
       },
       {
        "fr": "Le processus de deuil vécu avant le décès, par le patient et sa famille, en anticipant la perte",
        "en": "Le processus de deuil vécu avant le décès, par le patient et sa famille, en anticipant la perte",
        "correct": true
       },
       {
        "fr": "Une technique thérapeutique réservée aux psychologues",
        "en": "Une technique thérapeutique réservée aux psychologues"
       },
       {
        "fr": "L'état du patient qui refuse de mourir",
        "en": "L'état du patient qui refuse de mourir"
       }
      ],
      "explFr": "Le deuil anticipé est normal et sain. La famille (et le patient lui-même) peut vivre toutes les étapes du deuil AVANT le décès. Le PAB peut soutenir ce processus par sa présence.",
      "explEn": "Le deuil anticipé est normal et sain. La famille (et le patient lui-même) peut vivre toutes les étapes du deuil AVANT le décès. Le PAB peut soutenir ce processus par sa présence."
     },
     {
      "type": "scenario",
      "fr": "M. Beauchamp, 78 ans, est en phase terminale d'un cancer. Sa fille vous prend à part en pleurant: 'Est-ce qu'il souffre? Est-ce qu'il entend encore ce qu'on lui dit? Combien de temps lui reste-t-il?' Il est confortablement installé, sous médication contre la douleur, respiration de Cheyne-Stokes.\n\nQuelle est la meilleure réponse du PAB?",
      "en": "M. Beauchamp, 78 ans, est en phase terminale d'un cancer. Sa fille vous prend à part en pleurant: 'Est-ce qu'il souffre? Est-ce qu'il entend encore ce qu'on lui dit? Combien de temps lui reste-t-il?' Il est confortablement installé, sous médication contre la douleur, respiration de Cheyne-Stokes.\n\nQuelle est la meilleure réponse du PAB?",
      "choices": [
       {
        "fr": "Dire: 'Il lui reste probablement 24-48 heures' pour qu'elle se prépare",
        "en": "Dire: 'Il lui reste probablement 24-48 heures' pour qu'elle se prépare"
       },
       {
        "fr": "Écouter avec empathie, confirmer qu'il semble confortable, lui dire que l'ouïe est souvent préservée jusqu'à la fin, et orienter vers l'infirmière pour les questions médicales",
        "en": "Écouter avec empathie, confirmer qu'il semble confortable, lui dire que l'ouïe est souvent préservée jusqu'à la fin, et orienter vers l'infirmière pour les questions médicales",
        "correct": true
       },
       {
        "fr": "Dire: 'Je ne suis pas autorisé à répondre à ces questions' et quitter",
        "en": "Dire: 'Je ne suis pas autorisé à répondre à ces questions' et quitter"
       }
      ],
      "explFr": "✅ Parfait! Présence + empathie + information rassurante (l'ouïe reste active) + redirection appropriée. Vous pouvez encourager la famille à lui parler, lui tenir la main.",
      "explEn": "✅ Parfait! Présence + empathie + information rassurante (l'ouïe reste active) + redirection appropriée. Vous pouvez encourager la famille à lui parler, lui tenir la main."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "M. Simard (67 ans, cancer en phase terminale) vous dit avec des larmes: 'Je veux mourir. Je souffre trop. Pouvez-vous m'aider à en finir?'\n\nComment répondez-vous?",
      "en": "M. Simard (67 ans, cancer en phase terminale) vous dit avec des larmes: 'Je veux mourir. Je souffre trop. Pouvez-vous m'aider à en finir?'\n\nComment répondez-vous?",
      "choices": [
       {
        "fr": "Lui expliquer que c'est impossible légalement et changer de sujet",
        "en": "Lui expliquer que c'est impossible légalement et changer de sujet"
       },
       {
        "fr": "S'asseoir avec lui, accueillir sa souffrance avec empathie, assurer que tout est fait pour soulager sa douleur, et informer immédiatement l'infirmière",
        "en": "S'asseoir avec lui, accueillir sa souffrance avec empathie, assurer que tout est fait pour soulager sa douleur, et informer immédiatement l'infirmière",
        "correct": true
       },
       {
        "fr": "Lui promettre d'en parler au médecin pour obtenir 'quelque chose de plus fort'",
        "en": "Lui promettre d'en parler au médecin pour obtenir 'quelque chose de plus fort'"
       }
      ],
      "explFr": "✅ Présence empathique + signalement à l'équipe pour réévaluer la médication et l'accompagnement.",
      "explEn": "✅ Présence empathique + signalement à l'équipe pour réévaluer la médication et l'accompagnement."
     },
     {
      "type": "scenario",
      "fr": "Mme Nguyen vient de décéder. Sa famille vous demande de ne pas toucher le corps pendant 2 heures selon leurs croyances religieuses et de leur permettre de faire certains rituels.\n\nComment gérez-vous cette situation?",
      "en": "Mme Nguyen vient de décéder. Sa famille vous demande de ne pas toucher le corps pendant 2 heures selon leurs croyances religieuses et de leur permettre de faire certains rituels.\n\nComment gérez-vous cette situation?",
      "choices": [
       {
        "fr": "Préparer le corps immédiatement selon les procédures standard",
        "en": "Préparer le corps immédiatement selon les procédures standard"
       },
       {
        "fr": "Respecter la demande dans la mesure du possible, aviser l'infirmière pour coordonner les délais, et s'assurer que les besoins médicaux sont gérés",
        "en": "Respecter la demande dans la mesure du possible, aviser l'infirmière pour coordonner les délais, et s'assurer que les besoins médicaux sont gérés",
        "correct": true
       },
       {
        "fr": "Laisser la famille seule sans aviser l'infirmière",
        "en": "Laisser la famille seule sans aviser l'infirmière"
       }
      ],
      "explFr": "✅ Les soins culturellement sensibles incluent les rites post-mortem. Un délai raisonnable peut généralement être accordé.",
      "explEn": "✅ Les soins culturellement sensibles incluent les rites post-mortem. Un délai raisonnable peut généralement être accordé."
     }
    ]
   }
  ]
 },
 {
  "id": "m4",
  "order": 4,
  "title_fr": "Premiers secours",
  "title_en": "Premiers secours",
  "icon": "🚑",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Un résident s'étouffe et ne peut plus parler ni tousser efficacement. Vous effectuez:",
      "en": "Un résident s'étouffe et ne peut plus parler ni tousser efficacement. Vous effectuez:",
      "choices": [
       {
        "fr": "Le bouche-à-bouche",
        "en": "Le bouche-à-bouche"
       },
       {
        "fr": "Des tapes dans le dos seulement",
        "en": "Des tapes dans le dos seulement"
       },
       {
        "fr": "La manœuvre de Heimlich (poussées abdominales)",
        "en": "La manœuvre de Heimlich (poussées abdominales)",
        "correct": true
       },
       {
        "fr": "Lui donnez de l'eau pour débloquer",
        "en": "Lui donnez de l'eau pour débloquer"
       }
      ],
      "explFr": "Obstruction COMPLÈTE (ne peut plus parler/tousser) = manœuvre de Heimlich immédiate. Si la personne peut encore tousser, encourager la toux d'abord.",
      "explEn": "Obstruction COMPLÈTE (ne peut plus parler/tousser) = manœuvre de Heimlich immédiate. Si la personne peut encore tousser, encourager la toux d'abord."
     },
     {
      "fr": "Vous trouvez un résident inconscient qui ne répond pas. La PREMIÈRE étape est:",
      "en": "Vous trouvez un résident inconscient qui ne répond pas. La PREMIÈRE étape est:",
      "choices": [
       {
        "fr": "Commencer les compressions cardiaques immédiatement",
        "en": "Commencer les compressions cardiaques immédiatement"
       },
       {
        "fr": "Appeler de l'aide et activer le système d'urgence",
        "en": "Appeler de l'aide et activer le système d'urgence",
        "correct": true
       },
       {
        "fr": "Lui donner de l'eau ou de la nourriture",
        "en": "Lui donner de l'eau ou de la nourriture"
       },
       {
        "fr": "Mettre en position latérale de sécurité",
        "en": "Mettre en position latérale de sécurité"
       }
      ],
      "explFr": "Toujours appeler à l'aide et activer le code d'urgence EN PREMIER ou simultanément. Seul, vous ne pouvez pas maintenir la RCR indéfiniment.",
      "explEn": "Toujours appeler à l'aide et activer le code d'urgence EN PREMIER ou simultanément. Seul, vous ne pouvez pas maintenir la RCR indéfiniment."
     },
     {
      "fr": "Le ratio compressions/ventilations en RCR adulte est:",
      "en": "Le ratio compressions/ventilations en RCR adulte est:",
      "choices": [
       {
        "fr": "15:2",
        "en": "15:2"
       },
       {
        "fr": "30:2",
        "en": "30:2",
        "correct": true
       },
       {
        "fr": "15:1",
        "en": "15:1"
       },
       {
        "fr": "5:1",
        "en": "5:1"
       }
      ],
      "explFr": "30 compressions pour 2 ventilations est le ratio standard pour adultes. La priorité est de ne jamais interrompre les compressions plus de 10 secondes.",
      "explEn": "30 compressions pour 2 ventilations est le ratio standard pour adultes. La priorité est de ne jamais interrompre les compressions plus de 10 secondes."
     },
     {
      "fr": "Devant une chute avec suspicion de fracture, le PAB doit:",
      "en": "Devant une chute avec suspicion de fracture, le PAB doit:",
      "choices": [
       {
        "fr": "Aider le résident à se lever doucement pour évaluer",
        "en": "Aider le résident à se lever doucement pour évaluer"
       },
       {
        "fr": "NE PAS bouger le résident et appeler l'infirmière",
        "en": "NE PAS bouger le résident et appeler l'infirmière",
        "correct": true
       },
       {
        "fr": "Masser la zone douloureuse pour soulager",
        "en": "Masser la zone douloureuse pour soulager"
       },
       {
        "fr": "Donner un analgésique disponible au besoin",
        "en": "Donner un analgésique disponible au besoin"
       }
      ],
      "explFr": "JAMAIS mobiliser une personne après une chute avec suspicion de fracture — risque de lésion médullaire ou d'aggravation. Rester avec la personne, la rassurer, appeler l'infirmière.",
      "explEn": "JAMAIS mobiliser une personne après une chute avec suspicion de fracture — risque de lésion médullaire ou d'aggravation. Rester avec la personne, la rassurer, appeler l'infirmière."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "La profondeur correcte des compressions thoraciques chez l'adulte est:",
      "en": "La profondeur correcte des compressions thoraciques chez l'adulte est:",
      "choices": [
       {
        "fr": "1-2 cm",
        "en": "1-2 cm"
       },
       {
        "fr": "3-4 cm",
        "en": "3-4 cm"
       },
       {
        "fr": "5-6 cm",
        "en": "5-6 cm",
        "correct": true
       },
       {
        "fr": "7-8 cm",
        "en": "7-8 cm"
       }
      ],
      "explFr": "5-6 cm de profondeur avec relâchement COMPLET entre chaque compression (ne pas rester appuyé). Fréquence: 100-120 compressions par minute.",
      "explEn": "5-6 cm de profondeur avec relâchement COMPLET entre chaque compression (ne pas rester appuyé). Fréquence: 100-120 compressions par minute."
     },
     {
      "fr": "Un résident présente une glycémie de 2.8 mmol/L (hypoglycémie). S'il est CONSCIENT et peut avaler, vous:",
      "en": "Un résident présente une glycémie de 2.8 mmol/L (hypoglycémie). S'il est CONSCIENT et peut avaler, vous:",
      "choices": [
       {
        "fr": "Appelez l'infirmière et n'intervenez pas",
        "en": "Appelez l'infirmière et n'intervenez pas"
       },
       {
        "fr": "Donnez 15g de glucides rapides (jus, sucre) et avisez l'infirmière",
        "en": "Donnez 15g de glucides rapides (jus, sucre) et avisez l'infirmière",
        "correct": true
       },
       {
        "fr": "Administrez du glucagon",
        "en": "Administrez du glucagon"
       },
       {
        "fr": "Allongez le résident et attendez",
        "en": "Allongez le résident et attendez"
       }
      ],
      "explFr": "Régle du 15: 15g de glucides rapides (125ml jus, 3-4 comprimés glucose), réévaluer après 15 min. TOUJOURS aviser l'infirmière. Si inconscient: ne rien donner par la bouche.",
      "explEn": "Régle du 15: 15g de glucides rapides (125ml jus, 3-4 comprimés glucose), réévaluer après 15 min. TOUJOURS aviser l'infirmière. Si inconscient: ne rien donner par la bouche."
     },
     {
      "fr": "Face à une personne qui fait une crise d'épilepsie tonico-clonique, vous:",
      "en": "Face à une personne qui fait une crise d'épilepsie tonico-clonique, vous:",
      "choices": [
       {
        "fr": "Retenez fermement la personne pour éviter les blessures",
        "en": "Retenez fermement la personne pour éviter les blessures"
       },
       {
        "fr": "Mettez un objet dans sa bouche pour protéger sa langue",
        "en": "Mettez un objet dans sa bouche pour protéger sa langue"
       },
       {
        "fr": "Éloignez les objets dangereux, protégez la tête, notez la durée, avisez l'infirmière",
        "en": "Éloignez les objets dangereux, protégez la tête, notez la durée, avisez l'infirmière",
        "correct": true
       },
       {
        "fr": "Versez de l'eau froide sur la personne pour la réveiller",
        "en": "Versez de l'eau froide sur la personne pour la réveiller"
       }
      ],
      "explFr": "NE JAMAIS retenir ni mettre quoi que ce soit dans la bouche. Protéger la tête, éloigner les dangers, noter la durée (urgence si >5 min), PLS après la crise, aviser l'infirmière.",
      "explEn": "NE JAMAIS retenir ni mettre quoi que ce soit dans la bouche. Protéger la tête, éloigner les dangers, noter la durée (urgence si >5 min), PLS après la crise, aviser l'infirmière."
     },
     {
      "fr": "Le DEA (défibrillateur) doit être utilisé:",
      "en": "Le DEA (défibrillateur) doit être utilisé:",
      "choices": [
       {
        "fr": "Seulement par les médecins",
        "en": "Seulement par les médecins"
       },
       {
        "fr": "Dès que disponible en cas d'arrêt cardiaque — même par un non-professionnel",
        "en": "Dès que disponible en cas d'arrêt cardiaque — même par un non-professionnel",
        "correct": true
       },
       {
        "fr": "Uniquement en milieu hospitalier",
        "en": "Uniquement en milieu hospitalier"
       },
       {
        "fr": "Après 5 minutes de RCR infructueuse",
        "en": "Après 5 minutes de RCR infructueuse"
       }
      ],
      "explFr": "Le DEA est conçu pour être utilisé par TOUT LE MONDE. Il analyse lui-même le rythme et donne les instructions vocales. Chaque minute sans défibrillation réduit les chances de survie de 10%.",
      "explEn": "Le DEA est conçu pour être utilisé par TOUT LE MONDE. Il analyse lui-même le rythme et donne les instructions vocales. Chaque minute sans défibrillation réduit les chances de survie de 10%."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Vous entrez dans la chambre de Mme Côté (68 ans) pour les soins du matin. Vous la trouvez sur le sol, inconsciente. Elle ne répond pas à votre voix ni à vos secousses légères à l'épaule. Sa respiration semble absente ou agonale (gasps). Vous êtes seul(e) dans la chambre.\n\nDécrivez la séquence d'actions correcte:",
      "en": "Vous entrez dans la chambre de Mme Côté (68 ans) pour les soins du matin. Vous la trouvez sur le sol, inconsciente. Elle ne répond pas à votre voix ni à vos secousses légères à l'épaule. Sa respiration semble absente ou agonale (gasps). Vous êtes seul(e) dans la chambre.\n\nDécrivez la séquence d'actions correcte:",
      "choices": [
       {
        "fr": "Commencer immédiatement les compressions cardiaques — chaque seconde compte!",
        "en": "Commencer immédiatement les compressions cardiaques — chaque seconde compte!"
       },
       {
        "fr": "Appuyer sur le bouton d'urgence en criant 'À l'aide! Code bleu!', évaluer la respiration (≤10 sec), commencer 30 compressions, demander le DEA dès qu'il arrive",
        "en": "Appuyer sur le bouton d'urgence en criant 'À l'aide! Code bleu!', évaluer la respiration (≤10 sec), commencer 30 compressions, demander le DEA dès qu'il arrive",
        "correct": true
       },
       {
        "fr": "Courir chercher l'infirmière au poste, puis revenir commencer la RCR",
        "en": "Courir chercher l'infirmière au poste, puis revenir commencer la RCR"
       }
      ],
      "explFr": "✅ Séquence parfaite: Activation secours → Évaluation rapide → RCR immédiate → DEA dès disponible. Ne jamais quitter la victime. Minimiser les interruptions des compressions.",
      "explEn": "✅ Séquence parfaite: Activation secours → Évaluation rapide → RCR immédiate → DEA dès disponible. Ne jamais quitter la victime. Minimiser les interruptions des compressions."
     },
     {
      "type": "scenario",
      "fr": "Vous aidez Mme Leclerc (74 ans) à se lever du lit. Elle perd soudainement connaissance et s'effondre. Elle reprend conscience après 10 secondes: 'Je me suis sentie partir...' Elle ne se plaint d'aucune douleur.\n\nQuelles sont vos actions immédiates?",
      "en": "Vous aidez Mme Leclerc (74 ans) à se lever du lit. Elle perd soudainement connaissance et s'effondre. Elle reprend conscience après 10 secondes: 'Je me suis sentie partir...' Elle ne se plaint d'aucune douleur.\n\nQuelles sont vos actions immédiates?",
      "choices": [
       {
        "fr": "L'aider à se relever puisqu'elle est consciente et ne se plaint de rien",
        "en": "L'aider à se relever puisqu'elle est consciente et ne se plaint de rien"
       },
       {
        "fr": "Maintenir Mme Leclerc allongée, appuyer sur le bouton d'urgence, rester avec elle et noter les détails de l'incident",
        "en": "Maintenir Mme Leclerc allongée, appuyer sur le bouton d'urgence, rester avec elle et noter les détails de l'incident",
        "correct": true
       },
       {
        "fr": "La remettre au lit et signaler l'incident en fin de quart",
        "en": "La remettre au lit et signaler l'incident en fin de quart"
       }
      ],
      "explFr": "✅ Syncope = évaluation médicale obligatoire même si récupération rapide.",
      "explEn": "✅ Syncope = évaluation médicale obligatoire même si récupération rapide."
     },
     {
      "type": "scenario",
      "fr": "20 minutes après son repas, M. Bouchard présente: urticaire sur tout le corps, gonflement des lèvres, difficultés à avaler et respiration sifflante.\n\nComment réagissez-vous?",
      "en": "20 minutes après son repas, M. Bouchard présente: urticaire sur tout le corps, gonflement des lèvres, difficultés à avaler et respiration sifflante.\n\nComment réagissez-vous?",
      "choices": [
       {
        "fr": "Lui donner un antihistaminique de votre trousse",
        "en": "Lui donner un antihistaminique de votre trousse"
       },
       {
        "fr": "Activer immédiatement l'urgence, rester avec M. Bouchard, le positionner confortablement et noter l'heure et les aliments consommés",
        "en": "Activer immédiatement l'urgence, rester avec M. Bouchard, le positionner confortablement et noter l'heure et les aliments consommés",
        "correct": true
       },
       {
        "fr": "Surveiller 30 minutes avant d'alerter — peut-être juste des démangeaisons",
        "en": "Surveiller 30 minutes avant d'alerter — peut-être juste des démangeaisons"
       }
      ],
      "explFr": "✅ Anaphylaxie possible = CODE D'URGENCE IMMÉDIAT. Chaque minute compte.",
      "explEn": "✅ Anaphylaxie possible = CODE D'URGENCE IMMÉDIAT. Chaque minute compte."
     }
    ]
   }
  ]
 },
 {
  "id": "m5",
  "order": 5,
  "title_fr": "Approches relationnelles",
  "title_en": "Approches relationnelles",
  "icon": "🤝",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "L'écoute active implique principalement:",
      "en": "L'écoute active implique principalement:",
      "choices": [
       {
        "fr": "Préparer sa réponse pendant que l'autre parle",
        "en": "Préparer sa réponse pendant que l'autre parle"
       },
       {
        "fr": "Hocher la tête continuellement pour montrer qu'on écoute",
        "en": "Hocher la tête continuellement pour montrer qu'on écoute"
       },
       {
        "fr": "Être pleinement présent, reformuler et valider la compréhension",
        "en": "Être pleinement présent, reformuler et valider la compréhension",
        "correct": true
       },
       {
        "fr": "Résoudre immédiatement le problème exprimé",
        "en": "Résoudre immédiatement le problème exprimé"
       }
      ],
      "explFr": "L'écoute active: présence totale, sans jugement, contact visuel, reformulation pour valider ('Si je comprends bien, vous dites que...'). La reformulation confirme qu'on a bien compris.",
      "explEn": "L'écoute active: présence totale, sans jugement, contact visuel, reformulation pour valider ('Si je comprends bien, vous dites que...'). La reformulation confirme qu'on a bien compris."
     },
     {
      "fr": "Un résident atteint d'Alzheimer refuse sa douche en criant. La meilleure approche est:",
      "en": "Un résident atteint d'Alzheimer refuse sa douche en criant. La meilleure approche est:",
      "choices": [
       {
        "fr": "Insister fermement pour maintenir la routine",
        "en": "Insister fermement pour maintenir la routine"
       },
       {
        "fr": "Documenter le refus et revenir plus tard avec une autre approche",
        "en": "Documenter le refus et revenir plus tard avec une autre approche",
        "correct": true
       },
       {
        "fr": "Demander à 2 collègues de l'immobiliser pour sa sécurité",
        "en": "Demander à 2 collègues de l'immobiliser pour sa sécurité"
       },
       {
        "fr": "Annuler la douche définitivement et ne plus en parler",
        "en": "Annuler la douche définitivement et ne plus en parler"
       }
      ],
      "explFr": "Le refus de soins doit être RESPECTÉ dans l'immédiat. Documenter, aviser l'infirmière, revenir plus tard avec: autre moment, autre intervenant, autre type de soin (bain de lit, débarbouillette).",
      "explEn": "Le refus de soins doit être RESPECTÉ dans l'immédiat. Documenter, aviser l'infirmière, revenir plus tard avec: autre moment, autre intervenant, autre type de soin (bain de lit, débarbouillette)."
     },
     {
      "fr": "La communication non verbale représente environ quel pourcentage de la communication totale?",
      "en": "La communication non verbale représente environ quel pourcentage de la communication totale?",
      "choices": [
       {
        "fr": "20%",
        "en": "20%"
       },
       {
        "fr": "40%",
        "en": "40%"
       },
       {
        "fr": "55-65%",
        "en": "55-65%",
        "correct": true
       },
       {
        "fr": "90%",
        "en": "90%"
       }
      ],
      "explFr": "55-65% de la communication est non verbale (expressions faciales, posture, gestuelle, contact visuel, ton de voix). Votre langage corporel 'parle' avant même vos mots.",
      "explEn": "55-65% de la communication est non verbale (expressions faciales, posture, gestuelle, contact visuel, ton de voix). Votre langage corporel 'parle' avant même vos mots."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "L'approche de validation (Naomi Feil) avec les personnes atteintes de démence consiste à:",
      "en": "L'approche de validation (Naomi Feil) avec les personnes atteintes de démence consiste à:",
      "choices": [
       {
        "fr": "Corriger gentiment leurs erreurs de réalité",
        "en": "Corriger gentiment leurs erreurs de réalité"
       },
       {
        "fr": "Reconnaître et valider leurs émotions sans nécessairement corriger leur réalité",
        "en": "Reconnaître et valider leurs émotions sans nécessairement corriger leur réalité",
        "correct": true
       },
       {
        "fr": "Changer de sujet dès qu'ils disent quelque chose d'incohérent",
        "en": "Changer de sujet dès qu'ils disent quelque chose d'incohérent"
       },
       {
        "fr": "Les distraire avec la télévision",
        "en": "Les distraire avec la télévision"
       }
      ],
      "explFr": "La validation consiste à rejoindre la réalité ÉMOTIONNELLE de la personne, pas à corriger les faits. 'Je vois que vous êtes inquiet...' plutôt que 'Mais non, vous êtes à la retraite!'",
      "explEn": "La validation consiste à rejoindre la réalité ÉMOTIONNELLE de la personne, pas à corriger les faits. 'Je vois que vous êtes inquiet...' plutôt que 'Mais non, vous êtes à la retraite!'"
     },
     {
      "fr": "Un client vous dit: 'Je ne veux pas que vous m'aidiez, je veux le faire seul.' Vous devez:",
      "en": "Un client vous dit: 'Je ne veux pas que vous m'aidiez, je veux le faire seul.' Vous devez:",
      "choices": [
       {
        "fr": "Insister car c'est plus rapide de l'aider",
        "en": "Insister car c'est plus rapide de l'aider"
       },
       {
        "fr": "Respecter son choix et l'encourager à maintenir son autonomie",
        "en": "Respecter son choix et l'encourager à maintenir son autonomie",
        "correct": true
       },
       {
        "fr": "Appeler l'infirmière car le client est non-coopératif",
        "en": "Appeler l'infirmière car le client est non-coopératif"
       },
       {
        "fr": "Aller aider d'autres clients et oublier ce résident",
        "en": "Aller aider d'autres clients et oublier ce résident"
       }
      ],
      "explFr": "Respecter l'autonomie = principe fondamental. Rester à proximité pour la sécurité, encourager verbalement, n'intervenir que si demandé ou en cas de danger. L'autonomie préservée = meilleure qualité de vie.",
      "explEn": "Respecter l'autonomie = principe fondamental. Rester à proximité pour la sécurité, encourager verbalement, n'intervenir que si demandé ou en cas de danger. L'autonomie préservée = meilleure qualité de vie."
     },
     {
      "fr": "Face à un client qui exprime de la colère envers vous, la meilleure réaction est:",
      "en": "Face à un client qui exprime de la colère envers vous, la meilleure réaction est:",
      "choices": [
       {
        "fr": "Répondre avec fermeté pour montrer que vous êtes en autorité",
        "en": "Répondre avec fermeté pour montrer que vous êtes en autorité"
       },
       {
        "fr": "Quitter la pièce immédiatement",
        "en": "Quitter la pièce immédiatement"
       },
       {
        "fr": "Garder un ton calme, valider l'émotion, chercher à comprendre la source de la colère",
        "en": "Garder un ton calme, valider l'émotion, chercher à comprendre la source de la colère",
        "correct": true
       },
       {
        "fr": "Appeler la sécurité",
        "en": "Appeler la sécurité"
       }
      ],
      "explFr": "La colère est souvent un signe de douleur, de peur ou de perte de contrôle. Ton calme + 'Je vois que vous êtes fâché. Dites-moi ce qui ne va pas.' désamorce généralement la situation.",
      "explEn": "La colère est souvent un signe de douleur, de peur ou de perte de contrôle. Ton calme + 'Je vois que vous êtes fâché. Dites-moi ce qui ne va pas.' désamorce généralement la situation."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "M. Lapointe (85 ans, démence modérée) croit qu'il est encore à son travail de comptable et demande avec insistance depuis 40 minutes à 'retourner au bureau pour une réunion urgente'. Il est de plus en plus agité et commence à vouloir sortir. Rappeler sa retraite l'agite davantage.\n\nQuelle approche choisissez-vous?",
      "en": "M. Lapointe (85 ans, démence modérée) croit qu'il est encore à son travail de comptable et demande avec insistance depuis 40 minutes à 'retourner au bureau pour une réunion urgente'. Il est de plus en plus agité et commence à vouloir sortir. Rappeler sa retraite l'agite davantage.\n\nQuelle approche choisissez-vous?",
      "choices": [
       {
        "fr": "Lui expliquer calmement et patiemment: 'M. Lapointe, vous êtes à la retraite depuis 20 ans, vous n'avez plus de bureau. Vous êtes en sécurité ici.'",
        "en": "Lui expliquer calmement et patiemment: 'M. Lapointe, vous êtes à la retraite depuis 20 ans, vous n'avez plus de bureau. Vous êtes en sécurité ici.'"
       },
       {
        "fr": "Valider l'émotion et rediriger: 'Je vois que c'est très important pour vous, votre travail. Vos collègues gèrent bien en ce moment. Venez, on va prendre un café et je vous montre quelque chose d'intéressant.'",
        "en": "Valider l'émotion et rediriger: 'Je vois que c'est très important pour vous, votre travail. Vos collègues gèrent bien en ce moment. Venez, on va prendre un café et je vous montre quelque chose d'intéressant.'",
        "correct": true
       },
       {
        "fr": "L'ignorer et continuer votre travail — il va se calmer seul",
        "en": "L'ignorer et continuer votre travail — il va se calmer seul"
       }
      ],
      "explFr": "✅ Parfait! Technique de validation + redirection douce. On reconnaît SON importance, on le rassure sur le travail, puis on propose une activité concrète. L'émotion (urgence) est validée même si le contenu (réunion) ne l'est pas.",
      "explEn": "✅ Parfait! Technique de validation + redirection douce. On reconnaît SON importance, on le rassure sur le travail, puis on propose une activité concrète. L'émotion (urgence) est validée même si le contenu (réunion) ne l'est pas."
     },
     {
      "type": "scenario",
      "fr": "En faisant la toilette de Mme Pelletier (70 ans), elle vous dit: 'Le médecin m'a dit hier que j'ai Alzheimer. Je ne sais pas quoi faire. Je ne veux pas perdre la tête.' Elle pleure doucement.\n\nQuelle est la meilleure réponse?",
      "en": "En faisant la toilette de Mme Pelletier (70 ans), elle vous dit: 'Le médecin m'a dit hier que j'ai Alzheimer. Je ne sais pas quoi faire. Je ne veux pas perdre la tête.' Elle pleure doucement.\n\nQuelle est la meilleure réponse?",
      "choices": [
       {
        "fr": "La rassurer: 'Ne vous inquiétez pas, l'Alzheimer ça va lentement!'",
        "en": "La rassurer: 'Ne vous inquiétez pas, l'Alzheimer ça va lentement!'"
       },
       {
        "fr": "Arrêter, lui faire face, l'écouter avec empathie, valider ses émotions et l'encourager à exprimer ses craintes",
        "en": "Arrêter, lui faire face, l'écouter avec empathie, valider ses émotions et l'encourager à exprimer ses craintes",
        "correct": true
       },
       {
        "fr": "Continuer la toilette en disant 'Je vais en parler à l'infirmière'",
        "en": "Continuer la toilette en disant 'Je vais en parler à l'infirmière'"
       }
      ],
      "explFr": "✅ Présence pleine, écoute sans jugement, validation émotionnelle. Être là et entendre suffit souvent.",
      "explEn": "✅ Présence pleine, écoute sans jugement, validation émotionnelle. Être là et entendre suffit souvent."
     },
     {
      "type": "scenario",
      "fr": "M. Côté (82 ans) refuse de se lever depuis 3 jours, mange très peu et dit: 'À quoi ça sert? Ma femme est morte, mes enfants sont loin, personne ne viendrait si je mourais demain.'\n\nQuelle est votre approche?",
      "en": "M. Côté (82 ans) refuse de se lever depuis 3 jours, mange très peu et dit: 'À quoi ça sert? Ma femme est morte, mes enfants sont loin, personne ne viendrait si je mourais demain.'\n\nQuelle est votre approche?",
      "choices": [
       {
        "fr": "Le motiver: 'Vous avez de beaux enfants, vous êtes en bonne santé...'",
        "en": "Le motiver: 'Vous avez de beaux enfants, vous êtes en bonne santé...'"
       },
       {
        "fr": "S'asseoir avec lui, accueillir sa souffrance ('Vous portez beaucoup de chagrin...'), l'écouter sans corriger, et signaler à l'infirmière les signes de dépression",
        "en": "S'asseoir avec lui, accueillir sa souffrance ('Vous portez beaucoup de chagrin...'), l'écouter sans corriger, et signaler à l'infirmière les signes de dépression",
        "correct": true
       },
       {
        "fr": "Le laisser tranquille — il a le droit d'être triste",
        "en": "Le laisser tranquille — il a le droit d'être triste"
       }
      ],
      "explFr": "✅ Les propos de M. Côté peuvent indiquer une dépression sévère. Présence empathique + signalement pour évaluation psychiatrique.",
      "explEn": "✅ Les propos de M. Côté peuvent indiquer une dépression sévère. Présence empathique + signalement pour évaluation psychiatrique."
     }
    ]
   }
  ]
 },
 {
  "id": "m6",
  "order": 6,
  "title_fr": "AVQ & soins de longue durée",
  "title_en": "AVQ & soins de longue durée",
  "icon": "🏥",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Lors du bain au lit, l'ordre de lavage recommandé est:",
      "en": "Lors du bain au lit, l'ordre de lavage recommandé est:",
      "choices": [
       {
        "fr": "Pieds → visage → organes génitaux → dos",
        "en": "Pieds → visage → organes génitaux → dos"
       },
       {
        "fr": "Visage → corps → organes génitaux → dos",
        "en": "Visage → corps → organes génitaux → dos",
        "correct": true
       },
       {
        "fr": "Dos → visage → pieds → organes génitaux",
        "en": "Dos → visage → pieds → organes génitaux"
       },
       {
        "fr": "Organes génitaux → corps → visage → pieds",
        "en": "Organes génitaux → corps → visage → pieds"
       }
      ],
      "explFr": "Du plus propre au plus souillé: visage (plus propre) → corps → organes génitaux (zone plus contaminée) → dos. Changer l'eau et le gant entre les zones.",
      "explEn": "Du plus propre au plus souillé: visage (plus propre) → corps → organes génitaux (zone plus contaminée) → dos. Changer l'eau et le gant entre les zones."
     },
     {
      "fr": "La position de Fowler haute (90°) est utilisée pour:",
      "en": "La position de Fowler haute (90°) est utilisée pour:",
      "choices": [
       {
        "fr": "La prévention des plaies de pression sur le coccyx",
        "en": "La prévention des plaies de pression sur le coccyx"
       },
       {
        "fr": "Faciliter la respiration et l'alimentation orale",
        "en": "Faciliter la respiration et l'alimentation orale",
        "correct": true
       },
       {
        "fr": "Le traitement de l'hypotension orthostatique",
        "en": "Le traitement de l'hypotension orthostatique"
       },
       {
        "fr": "Les soins périnéaux uniquement",
        "en": "Les soins périnéaux uniquement"
       }
      ],
      "explFr": "La position de Fowler haute (tête de lit à 90°) favorise l'expansion pulmonaire et facilite la déglutition lors des repas. À maintenir 30 min après les repas pour éviter l'aspiration.",
      "explEn": "La position de Fowler haute (tête de lit à 90°) favorise l'expansion pulmonaire et facilite la déglutition lors des repas. À maintenir 30 min après les repas pour éviter l'aspiration."
     },
     {
      "fr": "Pour prévenir les plaies de pression, le repositionnement doit se faire:",
      "en": "Pour prévenir les plaies de pression, le repositionnement doit se faire:",
      "choices": [
       {
        "fr": "Toutes les 8 heures pour les clients alités",
        "en": "Toutes les 8 heures pour les clients alités"
       },
       {
        "fr": "Une fois par jour au lever",
        "en": "Une fois par jour au lever"
       },
       {
        "fr": "Toutes les 2 heures (moins si client partiellement mobile)",
        "en": "Toutes les 2 heures (moins si client partiellement mobile)",
        "correct": true
       },
       {
        "fr": "Seulement si le client se plaint d'inconfort",
        "en": "Seulement si le client se plaint d'inconfort"
       }
      ],
      "explFr": "Toutes les 2 heures pour les clients à risque ou immobiles. Un client qui peut se repositionner seul (même partiellement) peut nécessiter des rappels toutes les 4 heures.",
      "explEn": "Toutes les 2 heures pour les clients à risque ou immobiles. Un client qui peut se repositionner seul (même partiellement) peut nécessiter des rappels toutes les 4 heures."
     },
     {
      "fr": "Lors d'un soin d'hygiène, vous remarquez un érythème (rougeur) non blanchissant de 2 cm sur le coccyx. Vous devez:",
      "en": "Lors d'un soin d'hygiène, vous remarquez un érythème (rougeur) non blanchissant de 2 cm sur le coccyx. Vous devez:",
      "choices": [
       {
        "fr": "Masser vigoureusement pour activer la circulation",
        "en": "Masser vigoureusement pour activer la circulation"
       },
       {
        "fr": "Mettre une crème hydratante et surveiller",
        "en": "Mettre une crème hydratante et surveiller"
       },
       {
        "fr": "Signaler immédiatement à l'infirmière, documenter, repositionner",
        "en": "Signaler immédiatement à l'infirmière, documenter, repositionner",
        "correct": true
       },
       {
        "fr": "Attendre la prochaine évaluation hebdomadaire",
        "en": "Attendre la prochaine évaluation hebdomadaire"
       }
      ],
      "explFr": "Érythème non blanchissant = stade 1 de plaie de pression. Signalement IMMÉDIAT à l'infirmière, documentation (localisation, taille, aspect), repositionnement. JAMAIS masser une zone de rougeur — aggrave les lésions.",
      "explEn": "Érythème non blanchissant = stade 1 de plaie de pression. Signalement IMMÉDIAT à l'infirmière, documentation (localisation, taille, aspect), repositionnement. JAMAIS masser une zone de rougeur — aggrave les lésions."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Le principe du 'mécanisme corporel' lors des transferts vise à:",
      "en": "Le principe du 'mécanisme corporel' lors des transferts vise à:",
      "choices": [
       {
        "fr": "Maximiser la vitesse du transfert",
        "en": "Maximiser la vitesse du transfert"
       },
       {
        "fr": "Protéger le dos du PAB et assurer la sécurité du client",
        "en": "Protéger le dos du PAB et assurer la sécurité du client",
        "correct": true
       },
       {
        "fr": "Minimiser le confort du client pendant le déplacement",
        "en": "Minimiser le confort du client pendant le déplacement"
       },
       {
        "fr": "Éviter d'utiliser les aides techniques",
        "en": "Éviter d'utiliser les aides techniques"
       }
      ],
      "explFr": "Bonne utilisation du mécanisme corporel: écarter les pieds, fléchir les genoux (pas le dos), contracter les abdominaux, garder la charge proche du corps. Protège le PAB des blessures et assure la sécurité du client.",
      "explEn": "Bonne utilisation du mécanisme corporel: écarter les pieds, fléchir les genoux (pas le dos), contracter les abdominaux, garder la charge proche du corps. Protège le PAB des blessures et assure la sécurité du client."
     },
     {
      "fr": "Lors de l'alimentation d'un client avec difficulté de déglutition (dysphagie), vous devez:",
      "en": "Lors de l'alimentation d'un client avec difficulté de déglutition (dysphagie), vous devez:",
      "choices": [
       {
        "fr": "Pencher sa tête vers l'arrière pour faciliter le passage",
        "en": "Pencher sa tête vers l'arrière pour faciliter le passage"
       },
       {
        "fr": "Asseoir le client à 90°, petites bouchées, texture adaptée, surveiller les signes d'aspiration",
        "en": "Asseoir le client à 90°, petites bouchées, texture adaptée, surveiller les signes d'aspiration",
        "correct": true
       },
       {
        "fr": "Lui donner des liquides clairs seulement",
        "en": "Lui donner des liquides clairs seulement"
       },
       {
        "fr": "Alimenter rapidement pour qu'il ne se fatigue pas",
        "en": "Alimenter rapidement pour qu'il ne se fatigue pas"
       }
      ],
      "explFr": "Dysphagie: position assise à 90°, tête légèrement vers l'avant (menton au cou), petites bouchées/gorgées, texture modifiée selon prescription, surveiller: toux, voix mouillée, étouffement.",
      "explEn": "Dysphagie: position assise à 90°, tête légèrement vers l'avant (menton au cou), petites bouchées/gorgées, texture modifiée selon prescription, surveiller: toux, voix mouillée, étouffement."
     },
     {
      "fr": "Un client porte une sonde urinaire (cathéter). Lors des soins, vous devez:",
      "en": "Un client porte une sonde urinaire (cathéter). Lors des soins, vous devez:",
      "choices": [
       {
        "fr": "Débrancher temporairement pour faciliter la mobilisation",
        "en": "Débrancher temporairement pour faciliter la mobilisation"
       },
       {
        "fr": "Maintenir le sac collecteur en dessous du niveau de la vessie et éviter les coudures",
        "en": "Maintenir le sac collecteur en dessous du niveau de la vessie et éviter les coudures",
        "correct": true
       },
       {
        "fr": "Vider le sac seulement lorsqu'il est complètement plein",
        "en": "Vider le sac seulement lorsqu'il est complètement plein"
       },
       {
        "fr": "Nettoyer l'insertion avec de l'alcool",
        "en": "Nettoyer l'insertion avec de l'alcool"
       }
      ],
      "explFr": "Sac collecteur toujours SOUS la vessie (prévient reflux infectieux), jamais au sol, pas de coudures ni tension sur la sonde. Vider le sac quand aux 2/3 plein ou selon protocole. Soins périnéaux eau+savon.",
      "explEn": "Sac collecteur toujours SOUS la vessie (prévient reflux infectieux), jamais au sol, pas de coudures ni tension sur la sonde. Vider le sac quand aux 2/3 plein ou selon protocole. Soins périnéaux eau+savon."
     },
     {
      "type": "scenario",
      "fr": "En faisant la toilette complète de M. Bernard (78 ans, alité depuis 2 semaines suite à une fracture de hanche), vous remarquez: 1) une rougeur de 3 cm sur le coccyx qui ne blanchit pas, 2) une petite plaie ouverte de 1 cm sur le talon gauche, 3) sa peau est très sèche et squameuse. Il ne se plaint de rien.\n\nQuelles sont vos actions par ordre de priorité?",
      "en": "En faisant la toilette complète de M. Bernard (78 ans, alité depuis 2 semaines suite à une fracture de hanche), vous remarquez: 1) une rougeur de 3 cm sur le coccyx qui ne blanchit pas, 2) une petite plaie ouverte de 1 cm sur le talon gauche, 3) sa peau est très sèche et squameuse. Il ne se plaint de rien.\n\nQuelles sont vos actions par ordre de priorité?",
      "choices": [
       {
        "fr": "Appliquer de la crème sur tout le corps et continuer le soin — vous reparlerez à l'infirmière à la fin du quart",
        "en": "Appliquer de la crème sur tout le corps et continuer le soin — vous reparlerez à l'infirmière à la fin du quart"
       },
       {
        "fr": "Terminer le soin, documenter les 3 observations avec localisation et taille, signaler immédiatement à l'infirmière, et éviter tout appui sur les zones atteintes",
        "en": "Terminer le soin, documenter les 3 observations avec localisation et taille, signaler immédiatement à l'infirmière, et éviter tout appui sur les zones atteintes",
        "correct": true
       },
       {
        "fr": "Masser vigoureusement la rougeur du coccyx pour activer la circulation, puis signaler",
        "en": "Masser vigoureusement la rougeur du coccyx pour activer la circulation, puis signaler"
       }
      ],
      "explFr": "✅ Parfait! Terminer le soin = ne pas laisser le client à moitié lavé. Documentation précise = traçabilité. Signalement immédiat = intervention rapide. Décharge des zones = prévention aggravation.",
      "explEn": "✅ Parfait! Terminer le soin = ne pas laisser le client à moitié lavé. Documentation précise = traçabilité. Signalement immédiat = intervention rapide. Décharge des zones = prévention aggravation."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Lors de votre tournée de nuit, M. Vaillancourt (84 ans, sous anticoagulants) a baissé ses ridelles et ses pantoufles sont au milieu du plancher. Il vous dit qu'il se lève parfois la nuit pour les toilettes 'sans déranger'.\n\nComment gérez-vous cette situation?",
      "en": "Lors de votre tournée de nuit, M. Vaillancourt (84 ans, sous anticoagulants) a baissé ses ridelles et ses pantoufles sont au milieu du plancher. Il vous dit qu'il se lève parfois la nuit pour les toilettes 'sans déranger'.\n\nComment gérez-vous cette situation?",
      "choices": [
       {
        "fr": "Remonter les ridelles sans rien dire — c'est pour sa sécurité",
        "en": "Remonter les ridelles sans rien dire — c'est pour sa sécurité"
       },
       {
        "fr": "Discuter des risques avec M. Vaillancourt, déplacer ses pantoufles près du lit, s'assurer qu'il a la sonnette, offrir l'urinoir de nuit, et aviser l'infirmière",
        "en": "Discuter des risques avec M. Vaillancourt, déplacer ses pantoufles près du lit, s'assurer qu'il a la sonnette, offrir l'urinoir de nuit, et aviser l'infirmière",
        "correct": true
       },
       {
        "fr": "Installer une alarme de lit — c'est la meilleure surveillance",
        "en": "Installer une alarme de lit — c'est la meilleure surveillance"
       }
      ],
      "explFr": "✅ Approche globale: communication + environnement sécurisé + alternatives + signalement. Sous anticoagulants, une chute peut être fatale.",
      "explEn": "✅ Approche globale: communication + environnement sécurisé + alternatives + signalement. Sous anticoagulants, une chute peut être fatale."
     },
     {
      "type": "scenario",
      "fr": "Vous aidez Mme Bergeron (89 ans, AVC récent, dysphagie légère) à manger. Un collègue vous crie: 'Tu finiras son plateau plus tard, les autres attendent!'\n\nComment gérez-vous cette situation?",
      "en": "Vous aidez Mme Bergeron (89 ans, AVC récent, dysphagie légère) à manger. Un collègue vous crie: 'Tu finiras son plateau plus tard, les autres attendent!'\n\nComment gérez-vous cette situation?",
      "choices": [
       {
        "fr": "Augmenter le rythme de l'alimentation pour aller plus vite",
        "en": "Augmenter le rythme de l'alimentation pour aller plus vite"
       },
       {
        "fr": "Terminer le repas à un rythme sécuritaire, puis signaler la surcharge au superviseur — la sécurité alimentaire ne peut être sacrifiée",
        "en": "Terminer le repas à un rythme sécuritaire, puis signaler la surcharge au superviseur — la sécurité alimentaire ne peut être sacrifiée",
        "correct": true
       },
       {
        "fr": "Laisser le plateau pour plus tard — Mme Bergeron peut attendre",
        "en": "Laisser le plateau pour plus tard — Mme Bergeron peut attendre"
       }
      ],
      "explFr": "✅ La dysphagie exige vigilance et temps. La surcharge doit être signalée pour redistribution.",
      "explEn": "✅ La dysphagie exige vigilance et temps. La surcharge doit être signalée pour redistribution."
     }
    ]
   }
  ]
 },
 {
  "id": "m7",
  "order": 7,
  "title_fr": "Maladies & incapacités physiques",
  "title_en": "Maladies & incapacités physiques",
  "icon": "🩺",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Les signes classiques d'un AVC (accident vasculaire cérébral) incluent:",
      "en": "Les signes classiques d'un AVC (accident vasculaire cérébral) incluent:",
      "choices": [
       {
        "fr": "Douleur thoracique et essoufflement",
        "en": "Douleur thoracique et essoufflement"
       },
       {
        "fr": "Affaissement du visage, faiblesse d'un bras, difficulté à parler",
        "en": "Affaissement du visage, faiblesse d'un bras, difficulté à parler",
        "correct": true
       },
       {
        "fr": "Douleur abdominale intense et vomissements",
        "en": "Douleur abdominale intense et vomissements"
       },
       {
        "fr": "Fièvre élevée et rigidité de la nuque",
        "en": "Fièvre élevée et rigidité de la nuque"
       }
      ],
      "explFr": "TEST VITE: Visage (affaissé?), Incapacité (bras faible?), Trouble de la parole (incompréhensible?), Extrême urgence (appeler le 911). Chaque minute compte — 1.9 million de neurones meurent par minute.",
      "explEn": "TEST VITE: Visage (affaissé?), Incapacité (bras faible?), Trouble de la parole (incompréhensible?), Extrême urgence (appeler le 911). Chaque minute compte — 1.9 million de neurones meurent par minute."
     },
     {
      "fr": "La maladie de Parkinson se caractérise principalement par:",
      "en": "La maladie de Parkinson se caractérise principalement par:",
      "choices": [
       {
        "fr": "Des pertes de mémoire et désorientation",
        "en": "Des pertes de mémoire et désorientation"
       },
       {
        "fr": "Tremblements au repos, rigidité musculaire, lenteur des mouvements (bradykinésie)",
        "en": "Tremblements au repos, rigidité musculaire, lenteur des mouvements (bradykinésie)",
        "correct": true
       },
       {
        "fr": "Des hallucinations et délires",
        "en": "Des hallucinations et délires"
       },
       {
        "fr": "Une faiblesse musculaire progressive",
        "en": "Une faiblesse musculaire progressive"
       }
      ],
      "explFr": "Parkinson: triade classique = tremblements au repos ('roulement de pilule'), rigidité (membre en tuyau de plomb), bradykinésie (lenteur). Démarche à petits pas, visage figé, micrographie.",
      "explEn": "Parkinson: triade classique = tremblements au repos ('roulement de pilule'), rigidité (membre en tuyau de plomb), bradykinésie (lenteur). Démarche à petits pas, visage figé, micrographie."
     },
     {
      "fr": "Un client diabétique présente: sueurs, tremblements, confusion, pâleur. Vous suspectez:",
      "en": "Un client diabétique présente: sueurs, tremblements, confusion, pâleur. Vous suspectez:",
      "choices": [
       {
        "fr": "Une hyperglycémie (trop de sucre)",
        "en": "Une hyperglycémie (trop de sucre)"
       },
       {
        "fr": "Une hypoglycémie (manque de sucre)",
        "en": "Une hypoglycémie (manque de sucre)",
        "correct": true
       },
       {
        "fr": "Un épisode d'hypertension",
        "en": "Un épisode d'hypertension"
       },
       {
        "fr": "Une réaction allergique",
        "en": "Une réaction allergique"
       }
      ],
      "explFr": "Hypoglycémie: sueurs, tremblements, pâleur, confusion, faim intense, irritabilité. Si conscient: 15g sucres rapides. Si inconscient: NE RIEN donner par la bouche — aviser infirmière urgence.",
      "explEn": "Hypoglycémie: sueurs, tremblements, pâleur, confusion, faim intense, irritabilité. Si conscient: 15g sucres rapides. Si inconscient: NE RIEN donner par la bouche — aviser infirmière urgence."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "La MPOC (maladie pulmonaire obstructive chronique) nécessite que le PAB:",
      "en": "La MPOC (maladie pulmonaire obstructive chronique) nécessite que le PAB:",
      "choices": [
       {
        "fr": "Encourage le client à respirer le plus rapidement possible",
        "en": "Encourage le client à respirer le plus rapidement possible"
       },
       {
        "fr": "Positionne le client en Fowler haute, surveille la dyspnée, évite les irritants respiratoires",
        "en": "Positionne le client en Fowler haute, surveille la dyspnée, évite les irritants respiratoires",
        "correct": true
       },
       {
        "fr": "Administre de l'oxygène dès que la saturation passe sous 95%",
        "en": "Administre de l'oxygène dès que la saturation passe sous 95%"
       },
       {
        "fr": "Évite toute activité physique pour le client",
        "en": "Évite toute activité physique pour le client"
       }
      ],
      "explFr": "MPOC: position Fowler haute pour maximiser l'expansion pulmonaire. Surveiller signes de détresse (labeur respiratoire, cyanose). L'oxygène est prescrit — la saturation cible MPOC peut être 88-92%, pas 95%.",
      "explEn": "MPOC: position Fowler haute pour maximiser l'expansion pulmonaire. Surveiller signes de détresse (labeur respiratoire, cyanose). L'oxygène est prescrit — la saturation cible MPOC peut être 88-92%, pas 95%."
     },
     {
      "fr": "L'hémiplégie désigne:",
      "en": "L'hémiplégie désigne:",
      "choices": [
       {
        "fr": "Paralysie des deux jambes",
        "en": "Paralysie des deux jambes"
       },
       {
        "fr": "Paralysie d'un côté du corps (bras + jambe du même côté)",
        "en": "Paralysie d'un côté du corps (bras + jambe du même côté)",
        "correct": true
       },
       {
        "fr": "Paralysie des quatre membres",
        "en": "Paralysie des quatre membres"
       },
       {
        "fr": "Faiblesse musculaire généralisée",
        "en": "Faiblesse musculaire généralisée"
       }
      ],
      "explFr": "Hémiplégie: paralysie complète d'un côté (suite souvent à un AVC). Hémiparésie = faiblesse d'un côté. Paraplégique = jambes. Tétraplégique = 4 membres. Ces distinctions guident les soins.",
      "explEn": "Hémiplégie: paralysie complète d'un côté (suite souvent à un AVC). Hémiparésie = faiblesse d'un côté. Paraplégique = jambes. Tétraplégique = 4 membres. Ces distinctions guident les soins."
     },
     {
      "fr": "Pour un client avec contractures aux membres supérieurs, les soins d'hygiène doivent inclure:",
      "en": "Pour un client avec contractures aux membres supérieurs, les soins d'hygiène doivent inclure:",
      "choices": [
       {
        "fr": "Forcer les membres en extension pour nettoyer correctement",
        "en": "Forcer les membres en extension pour nettoyer correctement"
       },
       {
        "fr": "Nettoyer et sécher soigneusement les plis cutanés, mobiliser doucement dans l'amplitude permise",
        "en": "Nettoyer et sécher soigneusement les plis cutanés, mobiliser doucement dans l'amplitude permise",
        "correct": true
       },
       {
        "fr": "Éviter de toucher les zones contracturées",
        "en": "Éviter de toucher les zones contracturées"
       },
       {
        "fr": "Appliquer de la chaleur intense pour détendre les muscles",
        "en": "Appliquer de la chaleur intense pour détendre les muscles"
       }
      ],
      "explFr": "Les plis de contractures retiennent l'humidité, créant des conditions idéales pour infections et macérations. Hygiène douce dans les plis, séchage complet, mobilisation dans l'amplitude POSSIBLE sans forcer.",
      "explEn": "Les plis de contractures retiennent l'humidité, créant des conditions idéales pour infections et macérations. Hygiène douce dans les plis, séchage complet, mobilisation dans l'amplitude POSSIBLE sans forcer."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Vous allez chercher Mme Dupuis (71 ans) pour le déjeuner. En entrant dans sa chambre, vous la trouvez assise dans son fauteuil mais quelque chose ne va pas: le côté droit de son visage semble affaisser, elle tient son bras droit avec son bras gauche, et quand elle essaie de vous parler, les mots sont incompréhensibles. Cela a commencé il y a environ 10 minutes.\n\nQuelle est votre action immédiate?",
      "en": "Vous allez chercher Mme Dupuis (71 ans) pour le déjeuner. En entrant dans sa chambre, vous la trouvez assise dans son fauteuil mais quelque chose ne va pas: le côté droit de son visage semble affaisser, elle tient son bras droit avec son bras gauche, et quand elle essaie de vous parler, les mots sont incompréhensibles. Cela a commencé il y a environ 10 minutes.\n\nQuelle est votre action immédiate?",
      "choices": [
       {
        "fr": "Lui donner un verre de jus de fruit pensant que c'est une hypoglycémie",
        "en": "Lui donner un verre de jus de fruit pensant que c'est une hypoglycémie"
       },
       {
        "fr": "Appuyer sur le bouton d'urgence/appeler l'infirmière IMMÉDIATEMENT, noter l'heure de début des symptômes, ne pas la déplacer, rester avec elle",
        "en": "Appuyer sur le bouton d'urgence/appeler l'infirmière IMMÉDIATEMENT, noter l'heure de début des symptômes, ne pas la déplacer, rester avec elle",
        "correct": true
       },
       {
        "fr": "L'allonger sur son lit et attendre que ça passe — peut-être que c'est juste de la fatigue",
        "en": "L'allonger sur son lit et attendre que ça passe — peut-être que c'est juste de la fatigue"
       }
      ],
      "explFr": "✅ AVC = URGENCE ABSOLUE. L'heure de début est critique pour décider du traitement thrombolytique (fenêtre de 4h30). Ne pas déplacer risque de chute. Chaque minute compte.",
      "explEn": "✅ AVC = URGENCE ABSOLUE. L'heure de début est critique pour décider du traitement thrombolytique (fenêtre de 4h30). Ne pas déplacer risque de chute. Chaque minute compte."
     },
     {
      "type": "scenario",
      "fr": "En apportant le déjeuner à M. Fortin (diabétique, 76 ans), vous le trouvez irritable, confus. Il vous demande 'qui vous êtes' alors qu'il vous connaît bien. Sa peau est moite.\n\nVous suspectez une hypoglycémie. Que faites-vous?",
      "en": "En apportant le déjeuner à M. Fortin (diabétique, 76 ans), vous le trouvez irritable, confus. Il vous demande 'qui vous êtes' alors qu'il vous connaît bien. Sa peau est moite.\n\nVous suspectez une hypoglycémie. Que faites-vous?",
      "choices": [
       {
        "fr": "Lui donner 2-3 comprimés de glucose puis partir pour les autres clients",
        "en": "Lui donner 2-3 comprimés de glucose puis partir pour les autres clients"
       },
       {
        "fr": "Évaluer s'il peut avaler — si oui, donner 15g de glucides rapides, aviser l'infirmière immédiatement, rester avec lui et réévaluer après 15 minutes",
        "en": "Évaluer s'il peut avaler — si oui, donner 15g de glucides rapides, aviser l'infirmière immédiatement, rester avec lui et réévaluer après 15 minutes",
        "correct": true
       },
       {
        "fr": "Appeler l'infirmière et attendre sans rien faire — vous n'êtes pas autorisé à administrer quoi que ce soit",
        "en": "Appeler l'infirmière et attendre sans rien faire — vous n'êtes pas autorisé à administrer quoi que ce soit"
       }
      ],
      "explFr": "✅ Règle du 15 appliquée correctement. La confusion peut signifier incapacité à avaler — dans ce cas, appel d'urgence.",
      "explEn": "✅ Règle du 15 appliquée correctement. La confusion peut signifier incapacité à avaler — dans ce cas, appel d'urgence."
     },
     {
      "type": "scenario",
      "fr": "Mme Poirier (MPOC sévère) vous appelle paniquée: 'Je n'arrive plus à respirer!' Ses narines bougent beaucoup, ses muscles du cou se contractent, ses lèvres sont légèrement bleutées.\n\nVotre séquence d'actions:",
      "en": "Mme Poirier (MPOC sévère) vous appelle paniquée: 'Je n'arrive plus à respirer!' Ses narines bougent beaucoup, ses muscles du cou se contractent, ses lèvres sont légèrement bleutées.\n\nVotre séquence d'actions:",
      "choices": [
       {
        "fr": "Lui donner son inhalateur et l'encourager à respirer calmement — elle a l'habitude",
        "en": "Lui donner son inhalateur et l'encourager à respirer calmement — elle a l'habitude"
       },
       {
        "fr": "Activer l'urgence immédiatement, positionner en Fowler haute, rester calme, surveiller la saturation si disponible, ne pas laisser la cliente seule",
        "en": "Activer l'urgence immédiatement, positionner en Fowler haute, rester calme, surveiller la saturation si disponible, ne pas laisser la cliente seule",
        "correct": true
       },
       {
        "fr": "L'allonger pour se reposer, puis chercher l'infirmière",
        "en": "L'allonger pour se reposer, puis chercher l'infirmière"
       }
      ],
      "explFr": "✅ Détresse sévère = urgence médicale. Fowler maximise l'expansion pulmonaire. Votre calme réduit la panique.",
      "explEn": "✅ Détresse sévère = urgence médicale. Fowler maximise l'expansion pulmonaire. Votre calme réduit la panique."
     }
    ]
   }
  ]
 },
 {
  "id": "m8",
  "order": 8,
  "title_fr": "Médicaments & soins invasifs",
  "title_en": "Médicaments & soins invasifs",
  "icon": "💊",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Selon la Loi sur les infirmières et infirmiers, le PAB peut-il administrer des médicaments?",
      "en": "Selon la Loi sur les infirmières et infirmiers, le PAB peut-il administrer des médicaments?",
      "choices": [
       {
        "fr": "Oui, tous les médicaments oraux",
        "en": "Oui, tous les médicaments oraux"
       },
       {
        "fr": "Non, jamais — l'administration de médicaments est réservée aux infirmiers",
        "en": "Non, jamais — l'administration de médicaments est réservée aux infirmiers"
       },
       {
        "fr": "Oui, certains actes spécifiques délégués peuvent être faits sous conditions strictes et formation",
        "en": "Oui, certains actes spécifiques délégués peuvent être faits sous conditions strictes et formation",
        "correct": true
       },
       {
        "fr": "Oui, les médicaments topiques seulement",
        "en": "Oui, les médicaments topiques seulement"
       }
      ],
      "explFr": "L'administration de médicaments est un acte infirmier. Cependant, certains actes très spécifiques peuvent être délégués au PAB avec formation, protocole écrit et supervision. Ex: application de crème prescrite selon protocole.",
      "explEn": "L'administration de médicaments est un acte infirmier. Cependant, certains actes très spécifiques peuvent être délégués au PAB avec formation, protocole écrit et supervision. Ex: application de crème prescrite selon protocole."
     },
     {
      "fr": "Le PAB peut appliquer une crème topique prescrite si:",
      "en": "Le PAB peut appliquer une crème topique prescrite si:",
      "choices": [
       {
        "fr": "Le client lui demande poliment",
        "en": "Le client lui demande poliment"
       },
       {
        "fr": "Il y a un protocole écrit, une formation reçue et une supervision infirmière disponible",
        "en": "Il y a un protocole écrit, une formation reçue et une supervision infirmière disponible",
        "correct": true
       },
       {
        "fr": "C'est une crème vendue sans ordonnance",
        "en": "C'est une crème vendue sans ordonnance"
       },
       {
        "fr": "Le médecin lui a dit verbalement de le faire",
        "en": "Le médecin lui a dit verbalement de le faire"
       }
      ],
      "explFr": "Délégation d'acte: TOUJOURS protocole écrit + formation spécifique reçue + supervision infirmière. Sans ces trois conditions, le PAB ne peut pas effectuer l'acte, même simple en apparence.",
      "explEn": "Délégation d'acte: TOUJOURS protocole écrit + formation spécifique reçue + supervision infirmière. Sans ces trois conditions, le PAB ne peut pas effectuer l'acte, même simple en apparence."
     },
     {
      "fr": "Vous voyez qu'un résident n'a pas pris ses médicaments du déjeuner. Vous devez:",
      "en": "Vous voyez qu'un résident n'a pas pris ses médicaments du déjeuner. Vous devez:",
      "choices": [
       {
        "fr": "Les lui donner vous-même pour ne pas qu'il manque sa dose",
        "en": "Les lui donner vous-même pour ne pas qu'il manque sa dose"
       },
       {
        "fr": "Jeter les médicaments et ne rien dire",
        "en": "Jeter les médicaments et ne rien dire"
       },
       {
        "fr": "Aviser immédiatement l'infirmière et NE PAS administrer les médicaments",
        "en": "Aviser immédiatement l'infirmière et NE PAS administrer les médicaments",
        "correct": true
       },
       {
        "fr": "Demander à un collègue PAB de les donner",
        "en": "Demander à un collègue PAB de les donner"
       }
      ],
      "explFr": "L'administration de médicaments n'est PAS dans le champ de pratique du PAB (sauf actes délégués spécifiques). Aviser l'infirmière qui prendra la décision appropriée.",
      "explEn": "L'administration de médicaments n'est PAS dans le champ de pratique du PAB (sauf actes délégués spécifiques). Aviser l'infirmière qui prendra la décision appropriée."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Un client a une sonde nasogastrique (SNG). Le rôle du PAB est:",
      "en": "Un client a une sonde nasogastrique (SNG). Le rôle du PAB est:",
      "choices": [
       {
        "fr": "Administrer les médicaments par la SNG selon le calendrier",
        "en": "Administrer les médicaments par la SNG selon le calendrier"
       },
       {
        "fr": "Surveiller la position de la sonde, signaler tout inconfort ou déplacement à l'infirmière",
        "en": "Surveiller la position de la sonde, signaler tout inconfort ou déplacement à l'infirmière",
        "correct": true
       },
       {
        "fr": "Irriguer la sonde si elle est bouchée",
        "en": "Irriguer la sonde si elle est bouchée"
       },
       {
        "fr": "Ajuster le débit de la nutrition entérale",
        "en": "Ajuster le débit de la nutrition entérale"
       }
      ],
      "explFr": "Le PAB surveille et signale — il n'administre pas, n'irrigue pas, et n'ajuste pas. Signes à surveiller: déplacement de la sonde, inconfort du client, toux, vomissements, rougeur aux narines.",
      "explEn": "Le PAB surveille et signale — il n'administre pas, n'irrigue pas, et n'ajuste pas. Signes à surveiller: déplacement de la sonde, inconfort du client, toux, vomissements, rougeur aux narines."
     },
     {
      "fr": "Concernant les pansements, le rôle du PAB est:",
      "en": "Concernant les pansements, le rôle du PAB est:",
      "choices": [
       {
        "fr": "Changer tous les pansements selon sa propre évaluation",
        "en": "Changer tous les pansements selon sa propre évaluation"
       },
       {
        "fr": "Signaler tout changement à l'apparence de la plaie/pansement à l'infirmière",
        "en": "Signaler tout changement à l'apparence de la plaie/pansement à l'infirmière",
        "correct": true
       },
       {
        "fr": "Faire les pansements simples sans prescription",
        "en": "Faire les pansements simples sans prescription"
       },
       {
        "fr": "Appliquer des antibiotiques topiques sur toute plaie ouverte",
        "en": "Appliquer des antibiotiques topiques sur toute plaie ouverte"
       }
      ],
      "explFr": "Le changement de pansements est généralement un acte infirmier (évaluation de la plaie). Le PAB signale les changements: pansement saturé, décollé, odeur, augmentation de la douleur, rougeur péri-plaie.",
      "explEn": "Le changement de pansements est généralement un acte infirmier (évaluation de la plaie). Le PAB signale les changements: pansement saturé, décollé, odeur, augmentation de la douleur, rougeur péri-plaie."
     },
     {
      "fr": "Face à une erreur de médicament (mauvais médicament donné à un client), vous devez:",
      "en": "Face à une erreur de médicament (mauvais médicament donné à un client), vous devez:",
      "choices": [
       {
        "fr": "Ne rien dire pour éviter les problèmes",
        "en": "Ne rien dire pour éviter les problèmes"
       },
       {
        "fr": "Surveiller le client et espérer qu'il ne se passe rien",
        "en": "Surveiller le client et espérer qu'il ne se passe rien"
       },
       {
        "fr": "Aviser immédiatement l'infirmière, documenter, surveiller le client pour effets indésirables",
        "en": "Aviser immédiatement l'infirmière, documenter, surveiller le client pour effets indésirables",
        "correct": true
       },
       {
        "fr": "Donner un antidote si vous en connaissez un",
        "en": "Donner un antidote si vous en connaissez un"
       }
      ],
      "explFr": "Erreur médicamenteuse = signalement IMMÉDIAT même si 'rien ne semble se passer'. L'infirmière évaluera et contactera le médecin si nécessaire. La transparence protège le client ET l'équipe.",
      "explEn": "Erreur médicamenteuse = signalement IMMÉDIAT même si 'rien ne semble se passer'. L'infirmière évaluera et contactera le médecin si nécessaire. La transparence protège le client ET l'équipe."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "La fille de M. Côté vous apporte une boîte de médicaments achetés en pharmacie sans ordonnance (ibuprofène 400mg) et vous demande: 'Mon père a souvent mal. Pourriez-vous lui en donner 1 comprimé quand il a mal? Le pharmacien a dit que c'est sans danger.' M. Côté opine de la tête pour dire oui.\n\nQue répondez-vous?",
      "en": "La fille de M. Côté vous apporte une boîte de médicaments achetés en pharmacie sans ordonnance (ibuprofène 400mg) et vous demande: 'Mon père a souvent mal. Pourriez-vous lui en donner 1 comprimé quand il a mal? Le pharmacien a dit que c'est sans danger.' M. Côté opine de la tête pour dire oui.\n\nQue répondez-vous?",
      "choices": [
       {
        "fr": "Accepter puisque c'est sans ordonnance et que le client est consentant",
        "en": "Accepter puisque c'est sans ordonnance et que le client est consentant"
       },
       {
        "fr": "Refuser poliment, expliquer que vous n'êtes pas autorisé à administrer des médicaments, et référer la demande à l'infirmière responsable",
        "en": "Refuser poliment, expliquer que vous n'êtes pas autorisé à administrer des médicaments, et référer la demande à l'infirmière responsable",
        "correct": true
       },
       {
        "fr": "Dire non sans explication et partir",
        "en": "Dire non sans explication et partir"
       }
      ],
      "explFr": "✅ Parfait! Réponse professionnelle: 'Je comprends que votre père souffre et je vais en parler à l'infirmière immédiatement pour qu'on trouve une solution pour sa douleur.' Vous protégez le client ET respectez votre rôle.",
      "explEn": "✅ Parfait! Réponse professionnelle: 'Je comprends que votre père souffre et je vais en parler à l'infirmière immédiatement pour qu'on trouve une solution pour sa douleur.' Vous protégez le client ET respectez votre rôle."
     },
     {
      "type": "scenario",
      "fr": "En changeant les draps de M. Beaulieu, vous trouvez sous son oreiller plusieurs comprimés emballés dans des mouchoirs. Il vous dit: 'J'en ai besoin pour quand ça sera le moment.'\n\nComment agissez-vous?",
      "en": "En changeant les draps de M. Beaulieu, vous trouvez sous son oreiller plusieurs comprimés emballés dans des mouchoirs. Il vous dit: 'J'en ai besoin pour quand ça sera le moment.'\n\nComment agissez-vous?",
      "choices": [
       {
        "fr": "Jeter discrètement les médicaments et ne rien dire",
        "en": "Jeter discrètement les médicaments et ne rien dire"
       },
       {
        "fr": "Sécuriser les médicaments, demander doucement ce qu'il veut dire par 'le moment', et aviser immédiatement l'infirmière avec ses paroles exactes",
        "en": "Sécuriser les médicaments, demander doucement ce qu'il veut dire par 'le moment', et aviser immédiatement l'infirmière avec ses paroles exactes",
        "correct": true
       },
       {
        "fr": "Lui demander de remettre lui-même les médicaments à l'infirmière",
        "en": "Lui demander de remettre lui-même les médicaments à l'infirmière"
       }
      ],
      "explFr": "✅ URGENCE psychologique. Accumulation de médicaments + 'quand ça sera le moment' = risque suicidaire. Sécurisation + signalement immédiat.",
      "explEn": "✅ URGENCE psychologique. Accumulation de médicaments + 'quand ça sera le moment' = risque suicidaire. Sécurisation + signalement immédiat."
     },
     {
      "type": "scenario",
      "fr": "Mme Tremblay (sonde depuis 5 jours) a une urine trouble, très foncée et malodorante. Elle se plaint de douleurs abdominales et a une légère fièvre.\n\nVos observations et actions?",
      "en": "Mme Tremblay (sonde depuis 5 jours) a une urine trouble, très foncée et malodorante. Elle se plaint de douleurs abdominales et a une légère fièvre.\n\nVos observations et actions?",
      "choices": [
       {
        "fr": "Vider le sac, faire les soins périnéaux et noter en fin de quart",
        "en": "Vider le sac, faire les soins périnéaux et noter en fin de quart"
       },
       {
        "fr": "Documenter précisément (couleur, odeur, quantité, douleur, température) et signaler immédiatement à l'infirmière",
        "en": "Documenter précisément (couleur, odeur, quantité, douleur, température) et signaler immédiatement à l'infirmière",
        "correct": true
       },
       {
        "fr": "Rincer la sonde avec de l'eau stérile pour nettoyer",
        "en": "Rincer la sonde avec de l'eau stérile pour nettoyer"
       }
      ],
      "explFr": "✅ Observation précise = information clinique précieuse. Les infections sur sonde peuvent devenir des septicémies.",
      "explEn": "✅ Observation précise = information clinique précieuse. Les infections sur sonde peuvent devenir des septicémies."
     }
    ]
   }
  ]
 },
 {
  "id": "m9",
  "order": 9,
  "title_fr": "Soins à domicile",
  "title_en": "Soins à domicile",
  "icon": "🏠",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "La principale différence entre les soins en établissement et les soins à domicile pour le PAB est:",
      "en": "La principale différence entre les soins en établissement et les soins à domicile pour le PAB est:",
      "choices": [
       {
        "fr": "Les soins à domicile sont toujours moins complexes",
        "en": "Les soins à domicile sont toujours moins complexes"
       },
       {
        "fr": "À domicile, le PAB travaille souvent seul dans l'environnement du client avec moins de ressources immédiates",
        "en": "À domicile, le PAB travaille souvent seul dans l'environnement du client avec moins de ressources immédiates",
        "correct": true
       },
       {
        "fr": "Les soins à domicile n'incluent pas l'hygiène personnelle",
        "en": "Les soins à domicile n'incluent pas l'hygiène personnelle"
       },
       {
        "fr": "À domicile, le PAB peut administrer tous les médicaments",
        "en": "À domicile, le PAB peut administrer tous les médicaments"
       }
      ],
      "explFr": "À domicile: travail souvent isolé, environnement non contrôlé, ressources limitées, famille présente (dynamiques complexes). Nécessite plus d'autonomie, de jugement et de communication proactive.",
      "explEn": "À domicile: travail souvent isolé, environnement non contrôlé, ressources limitées, famille présente (dynamiques complexes). Nécessite plus d'autonomie, de jugement et de communication proactive."
     },
     {
      "fr": "Lors d'une visite à domicile, vous remarquez que la maison est insalubre et que le client semble mal nourri. Vous devez:",
      "en": "Lors d'une visite à domicile, vous remarquez que la maison est insalubre et que le client semble mal nourri. Vous devez:",
      "choices": [
       {
        "fr": "Nettoyer vous-même toute la maison avant de partir",
        "en": "Nettoyer vous-même toute la maison avant de partir"
       },
       {
        "fr": "Documenter vos observations et signaler à votre superviseur/coordonnateur",
        "en": "Documenter vos observations et signaler à votre superviseur/coordonnateur",
        "correct": true
       },
       {
        "fr": "Acheter de la nourriture avec votre propre argent pour le client",
        "en": "Acheter de la nourriture avec votre propre argent pour le client"
       },
       {
        "fr": "Ne rien dire — ce n'est pas votre rôle de commenter l'environnement du client",
        "en": "Ne rien dire — ce n'est pas votre rôle de commenter l'environnement du client"
       }
      ],
      "explFr": "Observer et signaler = rôle fondamental du PAB à domicile. Vous êtes souvent le seul professionnel qui voit la réalité quotidienne du client. Documenter + signaler au coordonnateur qui mobilisera les ressources appropriées.",
      "explEn": "Observer et signaler = rôle fondamental du PAB à domicile. Vous êtes souvent le seul professionnel qui voit la réalité quotidienne du client. Documenter + signaler au coordonnateur qui mobilisera les ressources appropriées."
     },
     {
      "fr": "La famille d'un client à domicile vous demande d'effectuer des soins supplémentaires non inclus dans votre plan de service. Vous devez:",
      "en": "La famille d'un client à domicile vous demande d'effectuer des soins supplémentaires non inclus dans votre plan de service. Vous devez:",
      "choices": [
       {
        "fr": "Faire les soins demandés pour ne pas décevoir la famille",
        "en": "Faire les soins demandés pour ne pas décevoir la famille"
       },
       {
        "fr": "Refuser d'effectuer des actes qui dépassent votre plan de service et aviser votre superviseur",
        "en": "Refuser d'effectuer des actes qui dépassent votre plan de service et aviser votre superviseur",
        "correct": true
       },
       {
        "fr": "Facturer les soins supplémentaires directement à la famille",
        "en": "Facturer les soins supplémentaires directement à la famille"
       },
       {
        "fr": "Faire les soins mais ne rien documenter",
        "en": "Faire les soins mais ne rien documenter"
       }
      ],
      "explFr": "Le PAB à domicile travaille selon un plan de service précis. Les modifications doivent passer par le coordonnateur. Dépasser son mandat sans autorisation expose à des risques légaux et de responsabilité.",
      "explEn": "Le PAB à domicile travaille selon un plan de service précis. Les modifications doivent passer par le coordonnateur. Dépasser son mandat sans autorisation expose à des risques légaux et de responsabilité."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Concernant votre sécurité personnelle lors des visites à domicile:",
      "en": "Concernant votre sécurité personnelle lors des visites à domicile:",
      "choices": [
       {
        "fr": "La sécurité du client prime toujours sur votre sécurité personnelle",
        "en": "La sécurité du client prime toujours sur votre sécurité personnelle"
       },
       {
        "fr": "Signaler toute situation menaçante (violence, animal dangereux, environnement dangereux) à votre employeur",
        "en": "Signaler toute situation menaçante (violence, animal dangereux, environnement dangereux) à votre employeur",
        "correct": true
       },
       {
        "fr": "Entrer dans toutes les situations même dangereuses — vous êtes professionnel",
        "en": "Entrer dans toutes les situations même dangereuses — vous êtes professionnel"
       },
       {
        "fr": "Gérer seul les situations difficiles sans déranger le superviseur",
        "en": "Gérer seul les situations difficiles sans déranger le superviseur"
       }
      ],
      "explFr": "Le PAB a le droit et le devoir d'assurer SA sécurité. Face à une menace (violence conjugale, intoxication, animal agressif, structure dangereuse), vous pouvez quitter et appeler les ressources appropriées.",
      "explEn": "Le PAB a le droit et le devoir d'assurer SA sécurité. Face à une menace (violence conjugale, intoxication, animal agressif, structure dangereuse), vous pouvez quitter et appeler les ressources appropriées."
     },
     {
      "fr": "À domicile, vous observez des signes possibles de violence conjugale (client apeuré, ecchymoses, conjoint contrôlant). Vous devez:",
      "en": "À domicile, vous observez des signes possibles de violence conjugale (client apeuré, ecchymoses, conjoint contrôlant). Vous devez:",
      "choices": [
       {
        "fr": "Confronter directement le conjoint",
        "en": "Confronter directement le conjoint"
       },
       {
        "fr": "Ignorer — c'est une affaire privée de famille",
        "en": "Ignorer — c'est une affaire privée de famille"
       },
       {
        "fr": "Trouver un moment seul avec le client, lui exprimer votre préoccupation, et signaler à votre coordonnateur",
        "en": "Trouver un moment seul avec le client, lui exprimer votre préoccupation, et signaler à votre coordonnateur",
        "correct": true
       },
       {
        "fr": "Appeler la police immédiatement",
        "en": "Appeler la police immédiatement"
       }
      ],
      "explFr": "Violence conjugale: ne jamais confronter l'agresseur (dangereux). Chercher un moment privé avec la victime, valider sa réalité, lui donner des ressources si elle le souhaite, et signaler au coordonnateur. La loi peut exiger un signalement.",
      "explEn": "Violence conjugale: ne jamais confronter l'agresseur (dangereux). Chercher un moment privé avec la victime, valider sa réalité, lui donner des ressources si elle le souhaite, et signaler au coordonnateur. La loi peut exiger un signalement."
     },
     {
      "type": "scenario",
      "fr": "Lors d'une visite chez Mme Arsenault (82 ans, vivant seule), vous remarquez: réfrigérateur presque vide (quelques condiments), plusieurs médicaments non pris depuis une semaine (blister complet intact), maison très froide (thermostat à 14°C), et Mme Arsenault vous dit: 'Je n'ai plus faim, je n'ai plus envie de rien... à quoi ça sert?'\n\nQuelles sont vos actions prioritaires?",
      "en": "Lors d'une visite chez Mme Arsenault (82 ans, vivant seule), vous remarquez: réfrigérateur presque vide (quelques condiments), plusieurs médicaments non pris depuis une semaine (blister complet intact), maison très froide (thermostat à 14°C), et Mme Arsenault vous dit: 'Je n'ai plus faim, je n'ai plus envie de rien... à quoi ça sert?'\n\nQuelles sont vos actions prioritaires?",
      "choices": [
       {
        "fr": "Faire son épicerie avec votre propre argent, ajuster le thermostat à 21°C, et lui promettre de revenir plus souvent",
        "en": "Faire son épicerie avec votre propre argent, ajuster le thermostat à 21°C, et lui promettre de revenir plus souvent"
       },
       {
        "fr": "Écouter Mme Arsenault avec empathie, lui poser des questions sur son état ('Depuis quand? Y a-t-il eu un événement?'), assurer sa sécurité immédiate et signaler URGENCE à votre coordonnateur tous les éléments observés",
        "en": "Écouter Mme Arsenault avec empathie, lui poser des questions sur son état ('Depuis quand? Y a-t-il eu un événement?'), assurer sa sécurité immédiate et signaler URGENCE à votre coordonnateur tous les éléments observés",
        "correct": true
       },
       {
        "fr": "Terminer votre soin habituel et documenter en fin de visite — vous avez d'autres clients à voir",
        "en": "Terminer votre soin habituel et documenter en fin de visite — vous avez d'autres clients à voir"
       }
      ],
      "explFr": "✅ Parfait! Écoute empathique d'abord (elle exprime peut-être des idées suicidaires). Évaluation rapide. Signalement urgent = mobilisation de l'équipe: infirmière (médicaments), travailleur social (alimentation, chaleur), médecin (dépression).",
      "explEn": "✅ Parfait! Écoute empathique d'abord (elle exprime peut-être des idées suicidaires). Évaluation rapide. Signalement urgent = mobilisation de l'équipe: infirmière (médicaments), travailleur social (alimentation, chaleur), médecin (dépression)."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Lors d'une visite chez M. Ouellet (77 ans), son voisin frappe à la porte: 'Je veux juste savoir si Ernest va bien — ça fait 3 jours que je ne l'ai pas vu.' M. Ouellet est dans sa chambre.\n\nComment gérez-vous cela?",
      "en": "Lors d'une visite chez M. Ouellet (77 ans), son voisin frappe à la porte: 'Je veux juste savoir si Ernest va bien — ça fait 3 jours que je ne l'ai pas vu.' M. Ouellet est dans sa chambre.\n\nComment gérez-vous cela?",
      "choices": [
       {
        "fr": "Rassurer le voisin: 'Oui, M. Ouellet va bien'",
        "en": "Rassurer le voisin: 'Oui, M. Ouellet va bien'"
       },
       {
        "fr": "Expliquer que vous ne pouvez pas confirmer la présence de clients, suggérer au voisin d'appeler directement M. Ouellet, et mentionner l'échange à M. Ouellet",
        "en": "Expliquer que vous ne pouvez pas confirmer la présence de clients, suggérer au voisin d'appeler directement M. Ouellet, et mentionner l'échange à M. Ouellet",
        "correct": true
       },
       {
        "fr": "Inviter le voisin à entrer pour voir M. Ouellet",
        "en": "Inviter le voisin à entrer pour voir M. Ouellet"
       }
      ],
      "explFr": "✅ Ni confirmer ni infirmer la présence d'un client. M. Ouellet pourra décider lui-même de contacter son voisin.",
      "explEn": "✅ Ni confirmer ni infirmer la présence d'un client. M. Ouellet pourra décider lui-même de contacter son voisin."
     },
     {
      "type": "scenario",
      "fr": "Le fils de Mme Beauchamp lui fait signer des documents 'pour les finances', prend du liquide dans son portefeuille en disant 'je te rembourserai', et Mme Beauchamp semble anxieuse quand il est là.\n\nQue faites-vous?",
      "en": "Le fils de Mme Beauchamp lui fait signer des documents 'pour les finances', prend du liquide dans son portefeuille en disant 'je te rembourserai', et Mme Beauchamp semble anxieuse quand il est là.\n\nQue faites-vous?",
      "choices": [
       {
        "fr": "Ne rien dire — c'est une affaire de famille",
        "en": "Ne rien dire — c'est une affaire de famille"
       },
       {
        "fr": "Observer et documenter objectivement, chercher un moment seul avec Mme Beauchamp, et signaler au coordonnateur",
        "en": "Observer et documenter objectivement, chercher un moment seul avec Mme Beauchamp, et signaler au coordonnateur",
        "correct": true
       },
       {
        "fr": "Demander directement au fils ce qu'il fait avec l'argent",
        "en": "Demander directement au fils ce qu'il fait avec l'argent"
       }
      ],
      "explFr": "✅ Documentation + moment seul avec la cliente + signalement. Vous rapportez des faits, vous n'accusez pas.",
      "explEn": "✅ Documentation + moment seul avec la cliente + signalement. Vous rapportez des faits, vous n'accusez pas."
     }
    ]
   }
  ]
 },
 {
  "id": "m10",
  "order": 10,
  "title_fr": "Intégration au milieu de travail",
  "title_en": "Intégration au milieu de travail",
  "icon": "👥",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "La communication de relève (rapport de quart) doit inclure:",
      "en": "La communication de relève (rapport de quart) doit inclure:",
      "choices": [
       {
        "fr": "Seulement les incidents graves",
        "en": "Seulement les incidents graves"
       },
       {
        "fr": "Les observations pertinentes sur chaque client: état, soins effectués, refus, changements",
        "en": "Les observations pertinentes sur chaque client: état, soins effectués, refus, changements",
        "correct": true
       },
       {
        "fr": "Les opinions personnelles sur les collègues",
        "en": "Les opinions personnelles sur les collègues"
       },
       {
        "fr": "Uniquement les informations demandées par l'infirmière",
        "en": "Uniquement les informations demandées par l'infirmière"
       }
      ],
      "explFr": "La relève assure la continuité des soins. Elle doit inclure: état général de chaque client, soins effectués, refus, changements observés, douleur, alimentation, élimination, comportement. Pas d'opinions personnelles.",
      "explEn": "La relève assure la continuité des soins. Elle doit inclure: état général de chaque client, soins effectués, refus, changements observés, douleur, alimentation, élimination, comportement. Pas d'opinions personnelles."
     },
     {
      "fr": "Face à un conflit avec un collègue qui affecte les soins aux clients, vous devez:",
      "en": "Face à un conflit avec un collègue qui affecte les soins aux clients, vous devez:",
      "choices": [
       {
        "fr": "Attendre que ça se règle seul",
        "en": "Attendre que ça se règle seul"
       },
       {
        "fr": "En parler directement avec le collègue d'abord, puis au superviseur si non résolu",
        "en": "En parler directement avec le collègue d'abord, puis au superviseur si non résolu",
        "correct": true
       },
       {
        "fr": "En parler aux autres collègues pour obtenir leur soutien",
        "en": "En parler aux autres collègues pour obtenir leur soutien"
       },
       {
        "fr": "Ignorer le collègue et travailler seul",
        "en": "Ignorer le collègue et travailler seul"
       }
      ],
      "explFr": "Approche graduelle: 1. Communication directe et respectueuse avec le collègue 2. Si non résolu: superviseur 3. Si persistant: ressources RH. Ne jamais impliquer les clients dans les conflits d'équipe.",
      "explEn": "Approche graduelle: 1. Communication directe et respectueuse avec le collègue 2. Si non résolu: superviseur 3. Si persistant: ressources RH. Ne jamais impliquer les clients dans les conflits d'équipe."
     },
     {
      "fr": "La documentation des soins (notes d'observation) doit être:",
      "en": "La documentation des soins (notes d'observation) doit être:",
      "choices": [
       {
        "fr": "Complète, objective, précise, datée et signée",
        "en": "Complète, objective, précise, datée et signée",
        "correct": true
       },
       {
        "fr": "Rédigée 48h après pour avoir le temps de bien réfléchir",
        "en": "Rédigée 48h après pour avoir le temps de bien réfléchir"
       },
       {
        "fr": "Remplie par l'infirmière seulement",
        "en": "Remplie par l'infirmière seulement"
       },
       {
        "fr": "Vague pour éviter les problèmes légaux",
        "en": "Vague pour éviter les problèmes légaux"
       }
      ],
      "explFr": "Documentation: FACTUELLE (ce qu'on voit/entend/mesure, pas ce qu'on interprète), COMPLÈTE, PRÉCISE (heure, date), SIGNÉE. 'Non documenté = non fait' en droit de la santé.",
      "explEn": "Documentation: FACTUELLE (ce qu'on voit/entend/mesure, pas ce qu'on interprète), COMPLÈTE, PRÉCISE (heure, date), SIGNÉE. 'Non documenté = non fait' en droit de la santé."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Le travail en équipe interdisciplinaire signifie pour le PAB:",
      "en": "Le travail en équipe interdisciplinaire signifie pour le PAB:",
      "choices": [
       {
        "fr": "Faire le travail de tout le monde si nécessaire",
        "en": "Faire le travail de tout le monde si nécessaire"
       },
       {
        "fr": "Collaborer avec les différents professionnels, partager ses observations et respecter les rôles de chacun",
        "en": "Collaborer avec les différents professionnels, partager ses observations et respecter les rôles de chacun",
        "correct": true
       },
       {
        "fr": "Obéir à tous les professionnels sans questionner",
        "en": "Obéir à tous les professionnels sans questionner"
       },
       {
        "fr": "Travailler uniquement avec les autres PAB",
        "en": "Travailler uniquement avec les autres PAB"
       }
      ],
      "explFr": "Interdisciplinarité: chaque professionnel apporte son expertise. Le PAB est un PARTENAIRE précieux qui partage ses observations quotidiennes uniques. Respecter les rôles ≠ se taire quand on observe quelque chose d'important.",
      "explEn": "Interdisciplinarité: chaque professionnel apporte son expertise. Le PAB est un PARTENAIRE précieux qui partage ses observations quotidiennes uniques. Respecter les rôles ≠ se taire quand on observe quelque chose d'important."
     },
     {
      "fr": "Vous êtes en désaccord avec une directive de l'infirmière concernant les soins d'un client. Vous devez:",
      "en": "Vous êtes en désaccord avec une directive de l'infirmière concernant les soins d'un client. Vous devez:",
      "choices": [
       {
        "fr": "Suivre la directive sans poser de questions",
        "en": "Suivre la directive sans poser de questions"
       },
       {
        "fr": "Ignorer la directive et faire à votre façon",
        "en": "Ignorer la directive et faire à votre façon"
       },
       {
        "fr": "Exprimer votre préoccupation respectueusement à l'infirmière et demander des clarifications",
        "en": "Exprimer votre préoccupation respectueusement à l'infirmière et demander des clarifications",
        "correct": true
       },
       {
        "fr": "En parler au client pour avoir son opinion",
        "en": "En parler au client pour avoir son opinion"
       }
      ],
      "explFr": "Exprimer une préoccupation professionnelle respectueuse est non seulement permis mais attendu. 'J'ai une question sur cette directive — j'ai observé que...' L'infirmière peut avoir plus d'informations. Si la situation persiste: superviseur.",
      "explEn": "Exprimer une préoccupation professionnelle respectueuse est non seulement permis mais attendu. 'J'ai une question sur cette directive — j'ai observé que...' L'infirmière peut avoir plus d'informations. Si la situation persiste: superviseur."
     },
     {
      "fr": "L'épuisement professionnel (burnout) chez le PAB peut se manifester par:",
      "en": "L'épuisement professionnel (burnout) chez le PAB peut se manifester par:",
      "choices": [
       {
        "fr": "Augmentation de la motivation et de l'énergie",
        "en": "Augmentation de la motivation et de l'énergie"
       },
       {
        "fr": "Cynisme, épuisement chronique, diminution de l'empathie et erreurs fréquentes",
        "en": "Cynisme, épuisement chronique, diminution de l'empathie et erreurs fréquentes",
        "correct": true
       },
       {
        "fr": "Amélioration des relations avec les collègues",
        "en": "Amélioration des relations avec les collègues"
       },
       {
        "fr": "Besoin de moins dormir",
        "en": "Besoin de moins dormir"
       }
      ],
      "explFr": "Burnout: épuisement émotionnel/physique, cynisme ('à quoi ça sert'), dépersonnalisation (clients = numéros), sentiment d'inefficacité. Risque pour le client ET le PAB. Programme d'aide aux employés disponible.",
      "explEn": "Burnout: épuisement émotionnel/physique, cynisme ('à quoi ça sert'), dépersonnalisation (clients = numéros), sentiment d'inefficacité. Risque pour le client ET le PAB. Programme d'aide aux employés disponible."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Votre collègue PAB prend régulièrement de longues pauses, laissant les résidents qui lui sont assignés sans soins. Vous vous retrouvez à couvrir son travail en plus du vôtre, ce qui vous épuise. Quand vous lui en avez parlé discrètement, il a répondu: 'Si tu me dénonces, tu vas le regretter.' Vous avez peur des représailles mais les soins des résidents en souffrent.\n\nQuelle est la meilleure façon de gérer cette situation?",
      "en": "Votre collègue PAB prend régulièrement de longues pauses, laissant les résidents qui lui sont assignés sans soins. Vous vous retrouvez à couvrir son travail en plus du vôtre, ce qui vous épuise. Quand vous lui en avez parlé discrètement, il a répondu: 'Si tu me dénonces, tu vas le regretter.' Vous avez peur des représailles mais les soins des résidents en souffrent.\n\nQuelle est la meilleure façon de gérer cette situation?",
      "choices": [
       {
        "fr": "Continuer à couvrir votre collègue pour éviter les conflits — les résidents sont pris en charge de toute façon",
        "en": "Continuer à couvrir votre collègue pour éviter les conflits — les résidents sont pris en charge de toute façon"
       },
       {
        "fr": "Documenter les incidents avec dates/heures, signaler la situation à votre superviseur, et mentionner la menace reçue — vous êtes protégé(e) contre les représailles par la loi",
        "en": "Documenter les incidents avec dates/heures, signaler la situation à votre superviseur, et mentionner la menace reçue — vous êtes protégé(e) contre les représailles par la loi",
        "correct": true
       },
       {
        "fr": "En parler aux autres collègues pour créer une coalition contre ce PAB",
        "en": "En parler aux autres collègues pour créer une coalition contre ce PAB"
       }
      ],
      "explFr": "✅ Excellent! Documentation = preuve objective. Signalement au superviseur = votre responsabilité professionnelle. Les menaces de représailles sont illégales (harcèlement). La Loi vous protège. Le silence ne règle rien.",
      "explEn": "✅ Excellent! Documentation = preuve objective. Signalement au superviseur = votre responsabilité professionnelle. Les menaces de représailles sont illégales (harcèlement). La Loi vous protège. Le silence ne règle rien."
     },
     {
      "type": "scenario",
      "fr": "Lors d'un transfert, vous réalisez que vous n'avez pas mis le frein du fauteuil de Mme Lavoie. Elle ne s'est pas blessée. Votre collègue dit: 'Ne dis rien — il ne s'est rien passé.'\n\nComment gérez-vous cela?",
      "en": "Lors d'un transfert, vous réalisez que vous n'avez pas mis le frein du fauteuil de Mme Lavoie. Elle ne s'est pas blessée. Votre collègue dit: 'Ne dis rien — il ne s'est rien passé.'\n\nComment gérez-vous cela?",
      "choices": [
       {
        "fr": "Suivre le conseil du collègue — inutile de créer des problèmes",
        "en": "Suivre le conseil du collègue — inutile de créer des problèmes"
       },
       {
        "fr": "Déclarer l'incident (rapport AH-223), informer l'infirmière, et apprendre de l'erreur",
        "en": "Déclarer l'incident (rapport AH-223), informer l'infirmière, et apprendre de l'erreur",
        "correct": true
       },
       {
        "fr": "Ne rien dire mais redoubler d'attention — vous avez appris",
        "en": "Ne rien dire mais redoubler d'attention — vous avez appris"
       }
      ],
      "explFr": "✅ La déclaration n'est pas une punition mais un outil d'amélioration. Ces incidents permettent d'identifier et prévenir les risques.",
      "explEn": "✅ La déclaration n'est pas une punition mais un outil d'amélioration. Ces incidents permettent d'identifier et prévenir les risques."
     },
     {
      "type": "scenario",
      "fr": "Une résidente refuse d'être soignée par votre collègue Amina (d'origine africaine) en disant: 'Je veux pas être touchée par une Noire.' Amina est présente et visiblement blessée.\n\nComment gérez-vous cela?",
      "en": "Une résidente refuse d'être soignée par votre collègue Amina (d'origine africaine) en disant: 'Je veux pas être touchée par une Noire.' Amina est présente et visiblement blessée.\n\nComment gérez-vous cela?",
      "choices": [
       {
        "fr": "Respecter la demande — la résidente a le droit de choisir",
        "en": "Respecter la demande — la résidente a le droit de choisir"
       },
       {
        "fr": "Expliquer calmement que la discrimination n'est pas acceptée, soutenir Amina, et signaler l'incident au superviseur",
        "en": "Expliquer calmement que la discrimination n'est pas acceptée, soutenir Amina, et signaler l'incident au superviseur",
        "correct": true
       },
       {
        "fr": "Dire à Amina que certains résidents sont 'comme ça' et de ne pas en faire de cas",
        "en": "Dire à Amina que certains résidents sont 'comme ça' et de ne pas en faire de cas"
       }
      ],
      "explFr": "✅ Vous pouvez prendre en charge temporairement tout en signalant. Le soutien à Amina et la documentation sont essentiels.",
      "explEn": "✅ Vous pouvez prendre en charge temporairement tout en signalant. Le soutien à Amina et la documentation sont essentiels."
     }
    ]
   }
  ]
 }
];

/* ---- Textes de l'interface (bilingue) ---- */
const UI_TEXT = {
  fr: {
    appName: "PABQuest",
    tagline: "Deviens préposé(e) aux bénéficiaires — DEP 5358",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! Badge débloqué 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "PABQuest",
    tagline: "Become a care pro — DVS 5325",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! Badge unlocked 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": [
   "🥚",
   "🥚",
   "🦎",
   "🦎",
   "🐲",
   "🐲",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉"
  ]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": [
   "🥚",
   "🥚",
   "🐴",
   "🐴",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄"
  ]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅"
  ]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
