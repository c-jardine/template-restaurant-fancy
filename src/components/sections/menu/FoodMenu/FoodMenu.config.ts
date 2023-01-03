import { FoodMenuItemsProps } from './FoodMenu.types';

export const Appetizers: FoodMenuItemsProps = {
  category: 'Appetizers',
  items: [
    {
      name: 'Charcuterie Board',
      description: 'Three selections of meats, accoutrements, crostini',
      price: 18,
    },
    {
      name: 'Artisan Cheese Board',
      description: 'Three selections of cheese, accoutrements, crostini',
      price: 19,
    },
    {
      name: 'La Quercia Prosciutto',
      description:
        'Baby arugala, kale, piquillos, marcona almonds, manchego, sherry vin',
      price: 14,
    },
    {
      name: 'Butternut Squash Soup',
      description: 'Pepitas, apple fennel, compote, pumpkin oil',
      price: 8,
    },
  ],
};

export const Sides: FoodMenuItemsProps = {
  category: 'Sides',
  items: [
    {
      name: 'Candied Bacon',
      description: 'Brown sugar, cayenne pepper',
      price: 7,
    },
    {
      name: 'Shishito Peppers',
      description: 'Wasabi yuzu vin',
      price: 10,
    },
    {
      name: 'Kettle Chips',
      description: 'Crispy, thin-sliced potatoes',
      price: 4,
    },
    {
      name: 'French Fries',
      description: 'Hand-cut potatoes',
      price: 6,
    },
  ],
};

export const Specialty: FoodMenuItemsProps = {
  category: 'Specialty',
  items: [
    {
      name: 'Naked oysters',
      description: 'Mignonette',
      price: 24,
    },
    {
      name: 'Grilled shrimp',
      description: 'Kaffir lime ancho chile rub, spicy aioli',
      price: 17,
    },
    {
      name: 'Lamb Chops',
      description: 'Blackened, mint chimi churri, onion straws',
      price: 32,
    },
    {
      name: 'Chicken Wings',
      description: 'Wood fired, xoco chipotle agave sauce',
      price: 16,
    },
  ],
};

export const Entrees: FoodMenuItemsProps = {
  category: 'Entrees',
  items: [
    {
      name: 'Pork Chop',
      description:
        'Cremini mushrooms, pearl onions, marble potato hash, red wine caramel',
      price: 27,
    },
    {
      name: "Butcher's Cut",
      description: 'Broccolini, yukon potato puree, red wine demi glace',
      price: 32,
    },
    {
      name: 'Short Rib',
      description: 'Celery root mash, root vegetables',
      price: 37,
    },
    {
      name: "Butcher's Burger",
      description:
        'Short rib and brisket, candied bacon, red onion marmalade, french fries',
      price: 16,
    },
  ],
};

export const LighterFare: FoodMenuItemsProps = {
  category: 'Lighter Fare',
  items: [
    {
      name: 'Roasted Chicken',
      description: 'Cauliflower, brussels sprouts, grits, pan jus',
      price: 25,
    },
    {
      name: 'Duck',
      description: 'Mint pea puree, port cherry gastrique, pear fennel slaw',
      price: 42,
    },
    {
      name: 'Crispy Skin Salmon',
      description: 'Shiitake mushrooms, zucchini, bok choy, soy bourbon glaze',
      price: 30,
    },
    {
      name: 'Sweet Potato Agnoloti',
      description: 'Sage cream, cranberry roasted winter squash, brown butter',
      price: 22,
    },
  ],
};
