import React from 'react';

export interface DrinkMenuItemProps {
  name: string;
  description?: string;
  price: number;
}

export interface DrinkMenuItemsProps {
  category: string;
  items: DrinkMenuItemProps[];
}

