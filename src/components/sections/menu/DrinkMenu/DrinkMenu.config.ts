import { DrinkMenuItemsProps } from './DrinkMenu.types';

export const OnTapBeer: DrinkMenuItemsProps = {
  category: 'On Tap',
  items: [
    {
      name: 'Budweiser',
      price: 4,
    },
    {
      name: 'Bud Lite',
      price: 4,
    },
    {
      name: 'Miller Lite',
      price: 4,
    },
    {
      name: 'Yeungling',
      price: 4,
    },
    {
      name: 'Guiness',
      price: 4,
    },
    {
      name: 'Blue Moon',
      price: 4,
    },
  ],
};

export const BottledBeer: DrinkMenuItemsProps = {
  category: 'Bottled Beer',
  items: [
    {
      name: 'Heineken',
      price: 4,
    },
    {
      name: 'Dos Equis',
      price: 4,
    },
    {
      name: 'Labatt Blue',
      price: 4,
    },
  ],
};

export const CraftBeer: DrinkMenuItemsProps = {
  category: 'Craft Beer',
  items: [
    {
      name: 'Sierra Nevada Pale Ale',
      price: 6,
    },
    {
      name: 'Two Hearted IPA',
      price: 6,
    },
    {
      name: 'Fat Tire',
      price: 6,
    },
    {
      name: 'Heady Topper IPA',
      price: 6,
    },
    {
      name: 'Daisy Cutter',
      price: 7,
    },
    {
      name: 'Voodoo Ranger',
      price: 7,
    },
    {
      name: 'Samuel Adams Boston Lager',
      price: 6,
    },
    {
      name: 'Allagash White',
      price: 8,
    },
    {
      name: 'Odell IPA',
      price: 6,
    },
    {
      name: 'Pliny the Elder',
      price: 9,
    },
    {
      name: 'Old Rasputin Stout',
      price: 7,
    },
  ],
};

export const Cocktails: DrinkMenuItemsProps = {
  category: 'Cocktails',
  items: [
    {
      name: 'Manhattan',
      description: 'Bourbon, sweet vermouth, bitters, maraschino cherry',
      price: 8,
    },
    {
      name: 'Old Fashioned',
      description: 'Bourbon, sugar, bitters, muddled fruit',
      price: 8,
    },
    {
      name: 'Kentucky Mule',
      description: 'Bourbon, ginger beer, lime',
      price: 7,
    },
    {
      name: 'Electric Lemonade',
      description: 'Gin, vodka, simple syrup, lemonade',
      price: 9,
    },
    {
      name: '3 Rum Paradise',
      description: 'Mix of dark and light rum, cranberry and pineapple juice',
      price: 9,
    },
    {
      name: 'Long Island Iced Tea',
      description: 'Vodka, rum, tequila, gin, triple sec, lemon juice',
      price: 8,
    },
    {
      name: 'Classic Mojito',
      description: 'Rum, lime juice, sugar, bitters, club soda, mint',
      price: 8,
    },
  ],
};
