
// Fix: Import React to resolve the 'React' namespace used in React.ReactNode
import React from 'react';

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  text: string;
  author: string;
  age: string;
}

export interface Ingredient {
  name: string;
  benefit: string;
}