export interface BuildItem {
  name: string;
  rarity: 'Common' | 'Rare' | 'Unique' | 'Sift-Corrupted';
  enchantments: string[];
  role: string;
}

export interface ArmorPiece {
  name: string;
  perk: string;
  enchantments?: string[];
}

export interface GameBuild {
  id: string;
  title: string;
  subtitle: string;
  tier: 'S+' | 'S' | 'A';
  playstyle: 'Endgame Sift' | 'Soul Magic' | 'Melee DPS' | 'Ranged' | 'Pet Summoner' | 'Tank';
  levelRequirement: string;
  rating: number;
  featured: boolean;
  description: string;
  coreLoop: string;
  weapons: {
    melee: BuildItem;
    ranged: BuildItem;
  };
  armorSet: {
    helmet: ArmorPiece;
    chestplate: ArmorPiece;
    leggings: ArmorPiece;
    boots: ArmorPiece;
    setBonus: string;
  };
  talismans: {
    name: string;
    effect: string;
    rarity: 'Unique' | 'Rare';
  }[];
  artifacts: {
    name: string;
    usage: string;
  }[];
  pros: string[];
  cons: string[];
  statRatings: {
    damage: number; // 1-5
    survivability: number;
    mobility: number;
    easeOfUse: number;
    siftViability: number;
  };
}

export const BUILDS_DATABASE: GameBuild[] = [
  {
    id: 'sift-void-cleaver',
    title: 'The Sift Void Cleaver',
    subtitle: 'Endgame Corruption Immunity & Cleave DPS',
    tier: 'S+',
    playstyle: 'Endgame Sift',
    levelRequirement: 'Level 80+ (Endgame)',
    rating: 9.9,
    featured: true,
    description: 'Specifically engineered to counter the hostile Void Miasma and Corrupted Horrors inside the new Sift dimension. Boasts 100% uptime on Void Ward with catastrophic area-of-effect cleave.',
    coreLoop: 'Enter rift -> Trigger Void Walker Boots leap -> Pop Corrupted Beacon with infinite soul siphon -> Spin with Obsidian Claymore to trigger Void Explosion procs.',
    weapons: {
      melee: {
        name: 'Obsidian Claymore of Ruin',
        rarity: 'Unique',
        enchantments: ['Void Strike III', 'Leeching III', 'Radiance III', 'Gravity III'],
        role: 'Massive arc swipes that pull corrupted mobs into a tight death vortex and instantly heal you on fatal blows.',
      },
      ranged: {
        name: 'Voidcaller Heavy Crossbow',
        rarity: 'Unique',
        enchantments: ['Chain Reaction III', 'Growing III', 'Tempo Theft III'],
        role: 'Pulls scattered snipers and Void Casters into the melee kill zone while boosting your movement speed.',
      },
    },
    armorSet: {
      helmet: {
        name: 'Crown of the Riftseer',
        perk: '+35% Void Miasma Resistance, Reveals cloaked Stalker mobs on minimap',
      },
      chestplate: {
        name: 'Deep Dark Cuirass',
        perk: '-30% Incoming damage from Corrupted entities',
        enchantments: ['Deflect III', 'Protection III', 'Chilling III'],
      },
      leggings: {
        name: 'Greaves of the Catalyst',
        perk: '+20% Damage amplification when stepping through rift gates',
      },
      boots: {
        name: 'Void Walker Striders',
        perk: 'Double-jump leaves behind an emerald shockwave that stuns regular mobs for 1.5s',
      },
      setBonus: '4-Piece Siftwalker: 40% reduction to Void status buildup and regenerates 2% HP/sec inside The Sift.',
    },
    talismans: [
      {
        name: 'Talisman of the Resolute Heart',
        effect: 'Prevents one lethal hit every 90 seconds and grants 3 seconds of invulnerability.',
        rarity: 'Unique',
      },
      {
        name: 'Sculk Membrane Shard',
        effect: 'Converts 20% of ambient vibrations into bonus Soul Energy.',
        rarity: 'Rare',
      },
    ],
    artifacts: [
      { name: 'Corrupted Beacon', usage: 'Melt elite bosses and shielded void titans from maximum range.' },
      { name: 'Iron Hide Amulet', usage: 'Maintain 50% flat damage resistance during high-density horde surges.' },
      { name: 'Death Cap Mushroom', usage: 'Skyrocket attack and movement speed for 9 seconds.' },
    ],
    pros: [
      'Highest DPS ceiling against Sift endgame bosses',
      'Immune to common one-shot environmental hazards',
      'Effortless mob grouping with Gravity + Voidcaller combo',
    ],
    cons: [
      'Demanding gear requirements (Level 80+ unique drops)',
      'Requires active management of Void status gauge',
    ],
    statRatings: {
      damage: 5,
      survivability: 5,
      mobility: 4,
      easeOfUse: 4,
      siftViability: 5,
    },
  },
  {
    id: 'soul-harvester-infinite',
    title: 'Infinite Soul Harvester',
    subtitle: 'Unlimited Spell Casting & Instant Screen Clear',
    tier: 'S+',
    playstyle: 'Soul Magic',
    levelRequirement: 'Level 40+ (Mid-to-Late Game)',
    rating: 9.8,
    featured: true,
    description: 'Harnesses the overhauled soul gathering system in Minecraft Dungeons 2. Converts every strike and mob death into devastating magic explosions with zero downtime.',
    coreLoop: 'Slash with Moon Daggers to fill soul gauge in 2 hits -> Trigger Harvester to wipe the whole screen -> Fire Torment Quiver to push back tough mini-bosses.',
    weapons: {
      melee: {
        name: 'Moon Daggers of the Eclipse',
        rarity: 'Unique',
        enchantments: ['Soul Siphon III', 'Enigma Resonator III', 'Critical Hit III'],
        role: 'Rapid dual-wield attacks generating up to 9 souls per strike with built-in crit scaling off current soul bar.',
      },
      ranged: {
        name: 'Feral Soul Crossbow',
        rarity: 'Unique',
        enchantments: ['Anima Conduit III', 'Multi-Shot III', 'Piercing III'],
        role: 'Massive passive heal per soul absorbed, guaranteeing you never run out of health flasks.',
      },
    },
    armorSet: {
      helmet: {
        name: 'Cowl of the Soul Weaver',
        perk: '+50% Soul Gathering speed and +10% Magic Artifact cooldown rate',
      },
      chestplate: {
        name: 'Vestments of the Withered',
        perk: '+30% Artifact Damage, -25% Artifact Cooldown',
        enchantments: ['Bag of Souls III', 'Potion Barrier III', 'Snowball III'],
      },
      leggings: {
        name: 'Leggings of Spectral Flight',
        perk: '+15% Move speed while soul bar is over 50% capacity',
      },
      boots: {
        name: 'Soul Strider Treads',
        perk: 'Dodge rolling passes through mobs and steals 2 souls per enemy collided with',
      },
      setBonus: '4-Piece Spirit Nexus: Artifacts consume 25% fewer souls and unleash a soul nova when triggered.',
    },
    talismans: [
      {
        name: 'Eldritch Soul Vessel',
        effect: 'Increases maximum soul storage by 100 and grants +15% magic crit chance.',
        rarity: 'Unique',
      },
      {
        name: 'Grave Walker Band',
        effect: 'Killing an elite enemy resets artifact cooldowns instantly (30s internal cooldown).',
        rarity: 'Rare',
      },
    ],
    artifacts: [
      { name: 'Harvester', usage: 'Primary screen-nuke triggering catastrophic circular soul blast.' },
      { name: 'Corrupted Beacon', usage: 'Laser beam continuous DPS for single-target shred.' },
      { name: 'Torment Quiver', usage: 'Passes through walls and knockbacks heavy vanguard shields.' },
    ],
    pros: [
      'Nearly infinite healing via Anima Conduit',
      'Insane room-clearing AOE damage',
      'Fun, high-energy spellcaster playstyle',
    ],
    cons: [
      'Squishy if caught with zero souls at stage start',
      'Requires rapid dodging in close quarters',
    ],
    statRatings: {
      damage: 5,
      survivability: 4,
      mobility: 4,
      easeOfUse: 5,
      siftViability: 4,
    },
  },
  {
    id: 'whirlwind-berserker',
    title: 'Critical Whirlwind Berserker',
    subtitle: 'The Classic Melee Dominator with 360-Degree Swings',
    tier: 'S',
    playstyle: 'Melee DPS',
    levelRequirement: 'Level 25+ (Early to Endgame)',
    rating: 9.6,
    featured: true,
    description: 'A relentless blender that spins through high-density enemy waves without stopping. Utilizes the improved double-axe hitboxes and 4-piece plate armor synergy.',
    coreLoop: 'Drink Death Cap Mushroom -> Leap into group with jump attack -> Continuously spin with Whirlwind -> Radiance rings sustain you through incoming fire.',
    weapons: {
      melee: {
        name: 'Whirlwind Double Axe',
        rarity: 'Unique',
        enchantments: ['Critical Hit III', 'Radiance III', 'Committed III', 'Swirling III'],
        role: 'Complete 360 spin attack sequence producing shockwaves and healing rings every 5th strike.',
      },
      ranged: {
        name: 'Mechanical Shortbow',
        rarity: 'Unique',
        enchantments: ['Accelerate III', 'Fuse Shot III', 'Infinity III'],
        role: 'Rapid suppression fire to trigger distant TNT barrels and chip armor before engagement.',
      },
    },
    armorSet: {
      helmet: {
        name: 'Gladiator Visor',
        perk: '+15% Melee Attack Speed',
      },
      chestplate: {
        name: 'Full Plate Hauberk',
        perk: '35% Damage Reduction, 100% Longer roll cooldown',
        enchantments: ['Thorns III', 'Deflect III', 'Cowardice III'],
      },
      leggings: {
        name: 'Titanium Greaves',
        perk: 'Immune to pushback and slow debuffs from ice/spiderwebs',
      },
      boots: {
        name: 'Stomper Sabatons',
        perk: 'Landing from a jump deals blunt kinetic damage to nearby enemies',
      },
      setBonus: '4-Piece Ironclad: Gain +20% Melee Damage and 10% lifesteal when surrounded by 3 or more mobs.',
    },
    talismans: [
      {
        name: 'Brawler Iron Coin',
        effect: 'Each consecutive hit stacks +2% melee attack speed (up to 30%).',
        rarity: 'Rare',
      },
      {
        name: 'Bloodstone of the Berserker',
        effect: 'Below 30% health, attack damage is increased by 50%.',
        rarity: 'Unique',
      },
    ],
    artifacts: [
      { name: 'Death Cap Mushroom', usage: 'Doubles attack speed for insane Whirlwind cadence.' },
      { name: 'Iron Hide Amulet', usage: 'Stack with Plate armor for 75%+ total damage reduction.' },
      { name: 'Gong of Weakening', usage: 'Weakens bosses, tripling all incoming critical damage.' },
    ],
    pros: [
      'Extremely straightforward and forgiving to play',
      'Highest consistent sustained DPS in melee range',
      'Super easy to gear up while leveling',
    ],
    cons: [
      'Slower roll mobility due to heavy plate set',
      'Vulnerable to long-range projectile volleys without Deflect',
    ],
    statRatings: {
      damage: 5,
      survivability: 5,
      mobility: 3,
      easeOfUse: 5,
      siftViability: 4,
    },
  },
  {
    id: 'minecart-swift-ranger',
    title: 'The Overworld Swift Ranger',
    subtitle: 'Maximum Mobility, Sniper Volleys & Trap Setup',
    tier: 'S',
    playstyle: 'Ranged',
    levelRequirement: 'Level 30+ (Exploration & Open World)',
    rating: 9.5,
    featured: false,
    description: 'Capitalizes on the open-world map and minecart rail networks in Minecraft Dungeons 2. Kite entire armadas of mobs while raining piercing arrows across screen lengths.',
    coreLoop: 'Deploy caltrops/freeze arrow -> Jump-dash backward with Swift Boots -> Charge Elite Power Bow shot -> Eradicate entire lines before they reach you.',
    weapons: {
      melee: {
        name: 'Chill Gale Rapier',
        rarity: 'Unique',
        enchantments: ['Freezing III', 'Thundering III', 'Radiance III'],
        role: 'Ultra-fast thrusts used purely for self-defense and keeping bruisers frozen in place.',
      },
      ranged: {
        name: 'Elite Power Bow of the Zephyr',
        rarity: 'Unique',
        enchantments: ['Overcharge III', 'Supercharge III', 'Ricochet III', 'Infinity III'],
        role: 'One-shot potential on elite mobs from two screens away when fully charged.',
      },
    },
    armorSet: {
      helmet: {
        name: 'Falconer Hood',
        perk: '+20% Ranged Damage and +15% Projectile Velocity',
      },
      chestplate: {
        name: 'Hunter Quilted Jerkin',
        perk: '+10 Bow Quiver arrows on level transition',
        enchantments: ['Speed Synergy III', 'Acrobat III', 'Swiftfoot III'],
      },
      leggings: {
        name: 'Ranger Breeches',
        perk: '+15% Faster movement speed for 4s after rolling',
      },
      boots: {
        name: 'Windrunner Boots',
        perk: 'Sprint mode activates 1 second faster and consumes 50% less stamina',
      },
      setBonus: '4-Piece Deadeye: Charged bow shots penetrate all armor and have a 25% chance to refund arrows.',
    },
    talismans: [
      {
        name: 'Zephyr Feather Charm',
        effect: 'Grants an extra jump charge and 20% increased fall recovery speed.',
        rarity: 'Unique',
      },
      {
        name: 'Archer Eagle Eye Glass',
        effect: 'Critical hits with ranged weapons increase arrow projectile speed by 50%.',
        rarity: 'Rare',
      },
    ],
    artifacts: [
      { name: 'Ghost Cloak', usage: 'Phase through trapped corridors and absorb incoming bursts.' },
      { name: 'Flaming Quiver', usage: 'Converts next 7 shots into explosive fire arrows.' },
      { name: 'Wind Horn', usage: 'Blasts advancing hordes backward, creating distance.' },
    ],
    pros: [
      'Unmatched mobility across the open-world overworld',
      'Safest playstyle against heavy-hitting melee bosses',
      'Massive single-target burst with Overcharge',
    ],
    cons: [
      'Requires good aiming and positioning',
      'Struggles in narrow subterranean dead-ends',
    ],
    statRatings: {
      damage: 5,
      survivability: 3,
      mobility: 5,
      easeOfUse: 3,
      siftViability: 4,
    },
  },
  {
    id: 'beastmaster-summoner',
    title: 'The Beastmaster Zoo Commander',
    subtitle: 'Automated Pet Army with Shared Healing',
    tier: 'A',
    playstyle: 'Pet Summoner',
    levelRequirement: 'Level 15+ (Beginner Friendly)',
    rating: 9.2,
    featured: false,
    description: 'Let your animal companions do all the heavy lifting! Commands Iron Golems, Spectral Wolves, and Soul Vexes while keeping them perpetually alive with AoE totems.',
    coreLoop: 'Summon Iron Golem & Wolves -> Drop Totem of Regeneration -> Fire Encrusted Bow to weaken targets -> Sit back as pets shred the encounters.',
    weapons: {
      melee: {
        name: 'Shepherd Crook Staff',
        rarity: 'Rare',
        enchantments: ['Prospector III', 'Radiance III', 'Looting III'],
        role: 'Empowers companions within 8 blocks with +25% attack speed and extra emerald drops.',
      },
      ranged: {
        name: 'Encrusted Web Crossbow',
        rarity: 'Unique',
        enchantments: ['Poison Cloud III', 'Wild Rage III', 'Tempo Theft III'],
        role: 'Applies Wild Rage causing enemies to fight each other while slowing them down.',
      },
    },
    armorSet: {
      helmet: {
        name: 'Crown of the Alpha Wolf',
        perk: 'Summons an additional companion wolf into your pack',
      },
      chestplate: {
        name: 'Spelunker Armor of Kinship',
        perk: 'Gives you a pet bat that attacks enemies and heals you for 10% of damage dealt',
        enchantments: ['Beast Boss III', 'Beast Burst III', 'Beast Surge III'],
      },
      leggings: {
        name: 'Pack Leader Chausses',
        perk: 'Whenever you use a potion, all active pets heal for 100% of their max HP',
      },
      boots: {
        name: 'Tamer Moccasins',
        perk: 'Increases companion movement speed by 35%',
      },
      setBonus: '4-Piece Beastmaster: Companions taunt nearby hostile mobs and reflect 20% of taken damage.',
    },
    talismans: [
      {
        name: 'Beast Flute of the Wild',
        effect: 'Reduces pet respawn cooldown from 30s down to 10s.',
        rarity: 'Unique',
      },
      {
        name: 'Totemic Amber Stone',
        effect: 'Increases radius of all deployed totems by 40%.',
        rarity: 'Rare',
      },
    ],
    artifacts: [
      { name: 'Golem Kit', usage: 'Summons an Iron Golem tank that absorbs frontline aggro.' },
      { name: 'Tasty Bone', usage: 'Summons an aggressive Wolf companion with bite bleed.' },
      { name: 'Totem of Regeneration', usage: 'Bathes you and your entire pack in persistent healing aura.' },
    ],
    pros: [
      'Extremely safe and relaxing; pets soak all boss aggro',
      'Requires minimal mechanical execution or dodging',
      'Great for solo players pushing high difficulty levels',
    ],
    cons: [
      'Lower burst DPS compared to pure Berserker or Soul builds',
      'Pets can get disoriented in complex vertical terrain',
    ],
    statRatings: {
      damage: 4,
      survivability: 5,
      mobility: 3,
      easeOfUse: 5,
      siftViability: 3,
    },
  },
  {
    id: 'ironclad-paladin-tank',
    title: 'The Ironclad Paladin Tank',
    subtitle: 'Zero Damage Taken & Party Buffing Anchor',
    tier: 'A',
    playstyle: 'Tank',
    levelRequirement: 'Level 35+ (Co-op & Raid Specialist)',
    rating: 9.3,
    featured: false,
    description: 'The premier co-op multiplayer build for 4-player parties. Stands in the center of boss arenas, absorbing all punishment while radiating defensive buffs to teammates.',
    coreLoop: 'Activate Iron Hide Amulet -> Shield Bash into enemy horde -> Drop Totem of Shielding -> Taunt boss while teammates deal uninterrupted damage.',
    weapons: {
      melee: {
        name: "Sun's Grace Warhammer",
        rarity: 'Unique',
        enchantments: ['Radiance III', 'Weakening III', 'Guarding Strike III'],
        role: 'Heavy blunt hits that proc constant healing circles for all adjacent party members.',
      },
      ranged: {
        name: 'Harpoon Heavy Crossbow',
        rarity: 'Rare',
        enchantments: ['Piercing III', 'Wild Rage III', 'Gravity III'],
        role: 'Pins elite threats to the ground and draws stray mobs away from vulnerable rangers.',
      },
    },
    armorSet: {
      helmet: {
        name: 'Bastion Greathelm',
        perk: '+25% Max HP and immunity to headshot/critical damage',
      },
      chestplate: {
        name: 'Champion Armored Plate',
        perk: 'Revives fallen teammates 50% faster, -40% damage from area hazards',
        enchantments: ['Protection III', 'Final Shout III', 'Potion Barrier III'],
      },
      leggings: {
        name: 'Bulwark Legguards',
        perk: 'Taking damage grants stacking defensive armor points',
      },
      boots: {
        name: 'Iron Anvil Sabatons',
        perk: 'Reduces knockback taken by 90%',
      },
      setBonus: '4-Piece Guardian: Diverts 25% of damage taken by nearby allies to yourself with a 50% damage reduction filter.',
    },
    talismans: [
      {
        name: 'Aegis of the Sun',
        effect: 'When health drops below 25%, triggers an immediate blinding flash that disorients all surrounding mobs.',
        rarity: 'Unique',
      },
      {
        name: 'Heart of the Bastion',
        effect: 'Grants +500 Max Health and +5 HP regeneration per second.',
        rarity: 'Rare',
      },
    ],
    artifacts: [
      { name: 'Iron Hide Amulet', usage: 'Stack with passive armor for peak damage mitigation.' },
      { name: 'Totem of Shielding', usage: 'Deploys a bubble reflecting 100% of enemy arrows and projectiles.' },
      { name: 'Gong of Weakening', usage: 'Debuffs surrounding enemies, causing them to deal 50% less damage.' },
    ],
    pros: [
      'Nearly unkillable under proper cooldown management',
      'The #1 most requested build in multiplayer matchmaking',
      'Revives teammates with zero danger under Potion Barrier',
    ],
    cons: [
      'Solo boss clear times are slower',
      'Relies on party members for high burst DPS',
    ],
    statRatings: {
      damage: 3,
      survivability: 5,
      mobility: 2,
      easeOfUse: 4,
      siftViability: 4,
    },
  },
];
