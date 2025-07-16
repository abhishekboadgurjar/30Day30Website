import React, { useState } from 'react';
import { Search, Package, MapPin, Clock, CheckCircle, Truck, AlertCircle } from 'lucide-react';

const TrackingSection: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock tracking data
    const mockData = {
      trackingNumber: trackingNumber,
      status: 'in_transit',
      estimatedDelivery: '2024-01-20',
      currentLocation: 'Distribution Center - Chicago, IL',
      recipient: 'John Smith',
      sender: 'ABC Company',
      packageType: 'Medium Package',
      weight: '2.5 lbs',
      events: [
        {
          date: '2024-01-18',
          time: '2:30 PM',
          status: 'Package picked up',
          location: 'New York, NY',
          description: 'Package has been picked up from sender'
        },
        {
          date: '2024-01-18',
          time: '6:45 PM',
          status: 'In transit',
          location: 'Newark, NJ',
          description: 'Package departed from origin facility'
        },
        {
          date: '2024-01-19',
          time: '8:15 AM',
          status: 'In transit',
          location: 'Philadelphia, PA',
          description: 'Package in transit to next facility'
        },
        {
          date: '2024-01-19',
          time: '3:20 PM',
          status: 'In transit',
          location: 'Chicago, IL',
          description: 'Package arrived at distribution center'
        }
      ]
    };
    
    setTrackingData(mockData);
    setIsLoading(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'picked_up':
        return <Package className="w-5 h-5 text-blue-500" />;
      case 'in_transit':
        return <Truck className="w-5 h-5 text-yellow-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'exception':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'picked_up':
        return 'text-blue-600 bg-blue-100';
      case 'in_transit':
        return 'text-yellow-600 bg-yellow-100';
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'exception':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Track Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Package</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter your tracking number to get real-time updates on your package location and delivery status.
          </p>
        </div>

        {/* Tracking Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleTrack} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., SW123456789)"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Tracking...
                  </div>
                ) : (
                  'Track Package'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Tracking Results */}
        {trackingData && (
          <div className="max-w-4xl mx-auto">
            {/* Package Status Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Package Status</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Tracking Number:</span>
                      <span className="font-mono font-semibold">{trackingData.trackingNumber}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trackingData.status)}`}>
                        In Transit
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Current Location:</span>
                      <span className="font-medium">{trackingData.currentLocation}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Estimated Delivery:</span>
                      <span className="font-medium text-green-600">{new Date(trackingData.estimatedDelivery).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Package Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">From:</span>
                      <span className="font-medium">{trackingData.sender}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">To:</span>
                      <span className="font-medium">{trackingData.recipient}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Package Type:</span>
                      <span className="font-medium">{trackingData.packageType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Weight:</span>
                      <span className="font-medium">{trackingData.weight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Tracking History</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                  {trackingData.events.map((event: any, index: number) => (
                    <div key={index} className="relative flex items-start">
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-blue-500 rounded-full">
                        {getStatusIcon(event.status)}
                      </div>
                      
                      {/* Event Content */}
                      <div className="ml-6 flex-1">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{event.status}</h4>
                            <div className="flex items-center text-gray-600 text-sm">
                              <Clock className="w-4 h-4 mr-1" />
                              {event.date} at {event.time}
                            </div>
                          </div>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <p className="text-gray-700">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sample Tracking Numbers */}
        {!trackingData && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Try a Sample Tracking Number</h3>
              <p className="text-gray-600 mb-6">Don't have a tracking number? Try one of these samples:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {['SW123456789', 'SW987654321', 'SW456789123'].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setTrackingNumber(sample)}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-mono text-sm"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tracking Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Updates</h3>
            <p className="text-gray-600">Get live updates on your package location and status.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Delivery Estimates</h3>
            <p className="text-gray-600">Accurate delivery time predictions based on current location.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed History</h3>
            <p className="text-gray-600">Complete timeline of your package journey from pickup to delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;