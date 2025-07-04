import React from 'react';
import { TrendingUp, Target, Calendar, Award, Activity, User, Clock, Star } from 'lucide-react';

const ProgressDashboard: React.FC = () => {
  const stats = [
    { icon: Activity, label: 'Classes Attended', value: '24', change: '+12%', color: 'text-emerald-600' },
    { icon: Clock, label: 'Hours Trained', value: '36', change: '+18%', color: 'text-blue-600' },
    { icon: Target, label: 'Goals Achieved', value: '3', change: '+50%', color: 'text-purple-600' },
    { icon: Award, label: 'Streak Days', value: '15', change: '+5 days', color: 'text-orange-600' }
  ];

  const recentClasses = [
    { name: 'Morning Vinyasa Flow', date: '2024-01-15', instructor: 'Sarah Johnson', rating: 5 },
    { name: 'HIIT Bootcamp', date: '2024-01-13', instructor: 'Mike Chen', rating: 4 },
    { name: 'Power Yoga', date: '2024-01-11', instructor: 'Sarah Johnson', rating: 5 },
    { name: 'Strength & Conditioning', date: '2024-01-09', instructor: 'Lisa Rodriguez', rating: 4 }
  ];

  const goals = [
    { title: 'Attend 30 Classes', progress: 80, current: 24, target: 30 },
    { title: 'Master Handstand', progress: 65, current: 65, target: 100 },
    { title: 'Lose 10 lbs', progress: 70, current: 7, target: 10 },
    { title: 'Run 5K in 25 min', progress: 45, current: 28, target: 25 }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Progress</span>
          </h1>
          <p className="text-xl text-gray-600">Track your fitness journey and celebrate your achievements.</p>
        </div>

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome back, Alex!</h2>
              <p className="text-emerald-100">You're doing great! Keep up the momentum.</p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-medium ${stat.color} bg-green-50 px-2 py-1 rounded-full`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Goals Progress */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-emerald-500" />
              Your Goals
            </h3>
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{goal.title}</span>
                    <span className="text-sm text-gray-600">
                      {goal.title.includes('lbs') ? `${goal.current} lbs` : 
                       goal.title.includes('min') ? `${goal.current} min` : 
                       goal.title.includes('Classes') ? `${goal.current}/${goal.target}` :
                       `${goal.progress}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Classes */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-emerald-500" />
              Recent Classes
            </h3>
            <div className="space-y-4">
              {recentClasses.map((cls, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div>
                    <h4 className="font-semibold text-gray-900">{cls.name}</h4>
                    <p className="text-gray-600 text-sm">{cls.instructor}</p>
                    <p className="text-gray-500 text-xs">{new Date(cls.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < cls.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Progress Chart Placeholder */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-emerald-500" />
            Weekly Activity
          </h3>
          <div className="h-64 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Interactive chart would go here</p>
              <p className="text-gray-500 text-sm">Track your weekly progress and improvements</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Book Next Class
          </button>
          <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-emerald-50 transition-all duration-300">
            Update Goals
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgressDashboard;