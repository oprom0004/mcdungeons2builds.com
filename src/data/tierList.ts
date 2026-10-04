export interface TierItem {
  name: string;
  category: 'Melee' | 'Ranged' | 'Armor' | 'Talisman';
  tier: 'S+' | 'S' | 'A' | 'B';
  type: string;
  innatePerk: string;
  bestEnchantments: string[];
  reason: string;
}

export const TIER_LIST_ITEMS: TierItem[] = [
  {
    name: 'Obsidian Claymore of Ruin',
    category: 'Melee',
    tier: 'S+',
    type: 'Greatsword',
    innatePerk: 'Innate Void Strike & Massive 360 Sweep',
    bestEnchantments: ['Void Strike III', 'Leeching III', 'Radiance III', 'Gravity III'],
    reason: 'The absolute ruler of melee combat in the post-launch meta. Deals unmatched burst damage that multiplies per swing on corrupted mobs.',
  },
  {
    name: 'Moon Daggers of the Eclipse',
    category: 'Melee',
    tier: 'S+',
    type: 'Dual Daggers',
    innatePerk: 'Rapid 9x Soul Gathering & Critical Resonator',
    bestEnchantments: ['Soul Siphon III', 'Enigma Resonator III', 'Critical Hit III'],
    reason: 'Enables 100% infinite artifact spam. Hits so fast that soul energy is replenished before artifact animations finish.',
  },
  {
    name: 'Whirlwind Double Axe',
    category: 'Melee',
    tier: 'S',
    type: 'Double Axe',
    innatePerk: 'Innate Swirling Shockwave on Combo Finisher',
    bestEnchantments: ['Critical Hit III', 'Radiance III', 'Committed III'],
    reason: 'Consistently the easiest weapon to dominate crowd rushes. Requires zero positioning thanks to full 360-degree hitboxes.',
  },
  {
    name: 'Sun\'s Grace Warhammer',
    category: 'Melee',
    tier: 'A',
    type: 'Heavy Warhammer',
    innatePerk: 'Radiant Aura on Heavy Impact',
    bestEnchantments: ['Guarding Strike III', 'Weakening III', 'Critical Hit III'],
    reason: 'Top choice for co-op multiplayer tanks. Provides continuous team healing while staggering mini-bosses.',
  },
  {
    name: 'Voidcaller Heavy Crossbow',
    category: 'Ranged',
    tier: 'S+',
    type: 'Heavy Crossbow',
    innatePerk: 'Gravitational Vortex pulling mobs together on impact',
    bestEnchantments: ['Chain Reaction III', 'Growing III', 'Tempo Theft III'],
    reason: 'Groups an entire room of enemies into a single tile, setting them up for one-shot melee sweeps or artifact blasts.',
  },
  {
    name: 'Elite Power Bow of the Zephyr',
    category: 'Ranged',
    tier: 'S',
    type: 'Longbow',
    innatePerk: 'Triple Charge Level (Overcharge Level 4 Compatible)',
    bestEnchantments: ['Overcharge III', 'Supercharge III', 'Ricochet III'],
    reason: 'The highest single-arrow damage in the game. Capable of one-shotting stage bosses when fully charged from safety.',
  },
  {
    name: 'Feral Soul Crossbow',
    category: 'Ranged',
    tier: 'S',
    type: 'Soul Crossbow',
    innatePerk: 'Anima Conduit + Soul Siphon synergy',
    bestEnchantments: ['Multi-Shot III', 'Piercing III', 'Anima Conduit III'],
    reason: 'Passive heal machine. Merely having this equipped gives massive sustain regardless of whether you shoot it or use melee.',
  },
  {
    name: 'Deep Dark Cuirass (Siftwalker Set)',
    category: 'Armor',
    tier: 'S+',
    type: 'Plate Chestplate',
    innatePerk: '-30% Void & Corrupted Damage Taken',
    bestEnchantments: ['Deflect III', 'Protection III', 'Potion Barrier III'],
    reason: 'Mandatory piece for survival in high-tier Sift dimension expeditions. Turns deadly void miasma into minor chip damage.',
  },
  {
    name: 'Vestments of the Withered',
    category: 'Armor',
    tier: 'S',
    type: 'Cloth Chestplate',
    innatePerk: '+30% Artifact Damage, -25% Artifact Cooldown',
    bestEnchantments: ['Bag of Souls III', 'Snowball III', 'Chilling III'],
    reason: 'The core component for any caster build. Lets you fire Corrupted Beacon and Harvester with near-zero cooldown.',
  },
  {
    name: 'Full Plate Hauberk',
    category: 'Armor',
    tier: 'S',
    type: 'Heavy Armor',
    innatePerk: 'Flat 35% Damage Reduction + Thorns Aura',
    bestEnchantments: ['Thorns III', 'Cowardice III', 'Deflect III'],
    reason: 'Best all-around armor for general progression. Tanky, reliable, and completely shrugs off swarms of ordinary mobs.',
  },
  {
    name: 'Talisman of the Resolute Heart',
    category: 'Talisman',
    tier: 'S+',
    type: 'Passive Talisman',
    innatePerk: 'Cheat Death: Prevents fatal hit & grants 3s invulnerability',
    bestEnchantments: ['Innate Slot (No reroll required)'],
    reason: 'The single most valuable item for Hardcore mode and high-tier Sift runs. Protects you from unexpected burst traps.',
  },
  {
    name: 'Eldritch Soul Vessel',
    category: 'Talisman',
    tier: 'S',
    type: 'Passive Talisman',
    innatePerk: '+100 Soul Capacity & +15% Magic Crit Chance',
    bestEnchantments: ['Innate Slot'],
    reason: 'Takes soul caster builds to an entirely new tier by extending maximum energy reservoir for boss fights.',
  },
  {
    name: 'Zephyr Feather Charm',
    category: 'Talisman',
    tier: 'A',
    type: 'Passive Talisman',
    innatePerk: 'Extra Jump Charge + 20% Movement Speed',
    bestEnchantments: ['Innate Slot'],
    reason: 'Massively improves open-world exploration speed and lets you easily evade ground shockwaves and lava pits.',
  },
];
