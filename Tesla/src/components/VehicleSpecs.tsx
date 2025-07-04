import React from 'react';

interface Spec {
  label: string;
  value: string;
}

interface VehicleSpecsProps {
  specs: Spec[];
}

const VehicleSpecs: React.FC<VehicleSpecsProps> = ({ specs }) => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
      {specs.map((spec) => (
        <div key={spec.label} className="text-center">
          <p className="text-2xl font-medium">{spec.value}</p>
          <p className="text-sm">{spec.label}</p>
        </div>
      ))}
    </div>
  );
};

export default VehicleSpecs;