import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  offerings: string[];
  capabilities: string[];
  sectionId: string;
}