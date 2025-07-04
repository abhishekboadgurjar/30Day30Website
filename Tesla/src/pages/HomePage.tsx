import React from 'react';
import ModelSection from '../components/ModelSection';
import EnergySection from '../components/EnergySection';
import AccessoriesSection from '../components/AccessoriesSection';

const models = [
  {
    id: 'model-s',
    title: 'Model S',
    subtitle: 'Plaid',
    description: 'Beyond Ludicrous',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-S-Desktop.png',
    specs: [
      { label: 'Range', value: '396 mi' },
      { label: '0-60 mph', value: '1.99 s' },
      { label: 'Top Speed', value: '200 mph' },
      { label: 'Peak Power', value: '1,020 hp' }
    ]
  },
  {
    id: 'model-3',
    title: 'Model 3',
    subtitle: 'Lease starting at $329/mo',
    description: '',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-3-Desktop.png',
    specs: [
      { label: 'Range', value: '358 mi' },
      { label: '0-60 mph', value: '3.1 s' },
      { label: 'Top Speed', value: '162 mph' },
      { label: 'Dual Motor', value: 'AWD' }
    ]
  },
  {
    id: 'model-x',
    title: 'Model X',
    subtitle: 'Plaid',
    description: '',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-X-Desktop.png',
    specs: [
      { label: 'Range', value: '335 mi' },
      { label: '0-60 mph', value: '2.5 s' },
      { label: 'Top Speed', value: '163 mph' },
      { label: 'Seating', value: 'Up to 7' }
    ]
  },
  {
    id: 'model-y',
    title: 'Model Y',
    subtitle: '',
    description: '',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-Y-Desktop.png',
    specs: [
      { label: 'Range', value: '330 mi' },
      { label: '0-60 mph', value: '3.5 s' },
      { label: 'Top Speed', value: '155 mph' },
      { label: 'Cargo Space', value: '76 cu ft' }
    ]
  },
  {
    id: 'cybertruck',
    title: 'Cybertruck',
    subtitle: '',
    description: 'Better utility than a truck with more performance than a sports car',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Cybertruck-Desktop.png',
    specs: [
      { label: 'Range', value: '500+ mi' },
      { label: '0-60 mph', value: '2.9 s' },
      { label: 'Towing', value: '14,000 lbs' },
      { label: 'Payload', value: '3,500 lbs' }
    ]
  }
];

const HomePage: React.FC = () => {
  return (
    <main className="w-full snap-y snap-mandatory h-screen overflow-y-auto">
      {models.map((model, index) => (
        <ModelSection key={model.id} model={model} index={index} />
      ))}
      <EnergySection />
      <AccessoriesSection />
    </main>
  );
};

export default HomePage;