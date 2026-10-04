export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS_LIST: FAQItem[] = [
  {
    question: 'How do character builds work in Minecraft Dungeons 2?',
    answer: 'Unlike the first game where armor was a single piece, Minecraft Dungeons 2 features a 4-piece armor system (Helmet, Chestplate, Leggings, and Boots). Each piece grants unique innate perks, and wearing sets triggers powerful 4-piece set bonuses. Players combine these armor pieces with a Melee weapon, Ranged weapon, 3 Artifacts, and the newly introduced Talisman slots to craft specialized loadouts for different content.',
  },
  {
    question: 'What is the best overall build in Minecraft Dungeons 2 right now?',
    answer: 'The current top meta build is the "Sift Void Cleaver" for endgame players (boasting high Void Miasma resistance and screen-clearing cleave) and the "Infinite Soul Harvester" for general gameplay (offering unmatched infinite survivability with Anima Conduit and room-wiping burst damage with the Harvester artifact).',
  },
  {
    question: 'How do you unlock the new dimension "The Sift"?',
    answer: 'The Sift is unlocked after clearing the main Overworld campaign. Players must find ancient portal frame fragments hidden inside the Deep Dark biome and activate them using Void Infused Eyes dropped by Corrupted Wardens.',
  },
  {
    question: 'What are Talismans and how do you equip them?',
    answer: 'Talismans are a brand-new passive gear category in Minecraft Dungeons 2. Players have two Talisman slots that provide permanent game-changing passive perks (such as death prevention, cooldown resets, and movement enhancements) without consuming active artifact activation slots.',
  },
  {
    question: 'Can you respec enchantments and gear in Minecraft Dungeons 2?',
    answer: 'Yes! The Blacksmith and Enchanter at camp have been revamped. You can now re-roll individual enchantment slots for gold or salvage obsolete gear to recover 100% of your invested enchantment points.',
  },
  {
    question: 'How does jumping and vertical mobility affect combat?',
    answer: 'Minecraft Dungeons 2 introduces a dedicated jump mechanic. Players can jump over ground shockwaves, execute plunging kinetic aerial attacks, and scale cliffs to reach vantage points for sniper bows and trap placement.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS_LIST.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
