import { Brain, Activity, Shield } from 'lucide-react';
import { Service } from '../types';

export const serviceData: Service[] = [
  {
    id: 1,
    title: "Robotics Consultation",
    description: "Expert guidance to optimize your robotics strategy and implementation, backed by years of industry experience and technical expertise.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1470",
    sectionId: "consultation",
    offerings: [
      "Comprehensive robotics strategy development",
      "Technical architecture planning",
      "Risk assessment and mitigation strategies",
      "Integration planning and optimization",
      "Cost-benefit analysis and ROI projections"
    ],
    capabilities: [
      "Industry-specific expertise",
      "Custom solution design",
      "Technology stack evaluation",
      "Vendor selection support",
      "Implementation roadmapping",
      "Performance optimization"
    ]
  },
  {
    id: 2,
    title: "Robotic Simulation & Optimization",
    description: "Advanced virtual testing and performance analysis to perfect your robotics systems before deployment.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1470",
    sectionId: "simulation",
    offerings: [
      "Virtual environment modeling",
      "Performance simulation and analysis",
      "System behavior prediction",
      "Optimization recommendations",
      "Failure mode testing"
    ],
    capabilities: [
      "Real-time simulation",
      "Physics-based modeling",
      "Multi-robot scenarios",
      "Environmental factors",
      "Load testing",
      "Performance metrics"
    ]
  },
  {
    id: 3,
    title: "System Testing & Quality Assurance",
    description: "Comprehensive testing protocols and compliance verification to ensure your robotics systems meet the highest standards.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1470",
    sectionId: "testing",
    offerings: [
      "End-to-end system testing",
      "Safety compliance verification",
      "Performance benchmarking",
      "Quality assurance protocols",
      "Documentation and reporting"
    ],
    capabilities: [
      "Automated testing",
      "Safety standards",
      "Performance metrics",
      "Stress testing",
      "Integration testing",
      "Compliance verification"
    ]
  }
];