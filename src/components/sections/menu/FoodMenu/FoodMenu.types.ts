import React from 'react';

export interface FoodMenuItemProps {
  name: string;
  description: string;
  price: number;
}

export interface FoodMenuItemsProps {
  category: string;
  items: FoodMenuItemProps[];
}

export interface CategoryHeaderProps {
  children: React.ReactNode;
}
