import React from 'react';

interface SpecGroup {
  title: string;
  specs: {
    name: string;
    value: string;
  }[];
}

const Specifications: React.FC = () => {
  const specGroups: SpecGroup[] = [
    {
      title: 'Performance',
      specs: [
        { name: 'Processor', value: 'Quantum A16 Bionic' },
        { name: 'CPU', value: '6-core (2 performance, 4 efficiency)' },
        { name: 'GPU', value: '5-core neural engine' },
        { name: 'RAM', value: '8GB unified memory' }
      ]
    },
    {
      title: 'Display',
      specs: [
        { name: 'Type', value: 'Super Retina XDR' },
        { name: 'Size', value: '6.7 inches (diagonal)' },
        { name: 'Resolution', value: '2778 x 1284 pixels at 458 ppi' },
        { name: 'Technology', value: 'OLED with ProMotion' }
      ]
    },
    {
      title: 'Battery',
      specs: [
        { name: 'Capacity', value: '4,500 mAh' },
        { name: 'Video Playback', value: 'Up to 28 hours' },
        { name: 'Audio Playback', value: 'Up to 95 hours' },
        { name: 'Fast Charging', value: '50% in 30 minutes' }
      ]
    },
    {
      title: 'Storage',
      specs: [
        { name: 'Options', value: '128GB, 256GB, 512GB, 1TB' },
        { name: 'Type', value: 'High-speed NVMe' }
      ]
    }
  ];

  return (
    <section id="specs" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Technical Specifications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Engineering excellence. Down to the last detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-4xl mx-auto">
          {specGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {group.title}
              </h3>
              <dl className="space-y-4">
                {group.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between">
                    <dt className="text-gray-600">{spec.name}</dt>
                    <dd className="text-gray-900 font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;