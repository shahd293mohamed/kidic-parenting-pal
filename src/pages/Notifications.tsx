import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Clock, CheckCircle, AlertTriangle, Heart, Calendar, MessageSquare } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'vaccine',
      title: 'Vaccination Reminder',
      message: 'Emma\'s MMR vaccine is due in 3 days',
      time: '2 hours ago',
      priority: 'high',
      read: false,
      icon: Calendar
    },
    {
      id: 2,
      type: 'milestone',
      title: 'Milestone Achievement',
      message: 'Great job! You logged Emma\'s first steps',
      time: '1 day ago',
      priority: 'medium',
      read: false,
      icon: Heart
    },
    {
      id: 3,
      type: 'doctor',
      title: 'Appointment Confirmation',
      message: 'Your appointment with Dr. Sarah Johnson is confirmed for tomorrow at 2:00 PM',
      time: '2 days ago',
      priority: 'medium',
      read: true,
      icon: CheckCircle
    },
    {
      id: 4,
      type: 'emergency',
      title: 'Emergency Protocol Update',
      message: 'New fever management guide available',
      time: '3 days ago',
      priority: 'low',
      read: true,
      icon: AlertTriangle
    },
    {
      id: 5,
      type: 'chatbot',
      title: 'AI Assistant Response',
      message: 'Your question about sleep regression has been answered',
      time: '1 week ago',
      priority: 'low',
      read: true,
      icon: MessageSquare
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      vaccine: 'bg-blue-100 text-blue-800',
      milestone: 'bg-green-100 text-green-800',
      doctor: 'bg-purple-100 text-purple-800',
      emergency: 'bg-red-100 text-red-800',
      chatbot: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'border-red-200 bg-red-50',
      medium: 'border-yellow-200 bg-yellow-50',
      low: 'border-gray-200 bg-gray-50'
    };
    return colors[priority as keyof typeof colors] || 'border-gray-200 bg-gray-50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your child's care</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
            <Button variant="outline">
              Clear All
            </Button>
          </div>
        </div>

        {/* Notification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-gray-600">Unread</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">1</p>
                  <p className="text-gray-600">High Priority</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-full">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">5</p>
                  <p className="text-gray-600">Total Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Recent Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`p-6 hover:bg-gray-50 transition-colors ${
                      !notification.read ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    } ${getPriorityColor(notification.priority)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`p-2 rounded-full ${getTypeColor(notification.type)}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                              {notification.title}
                            </h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{notification.message}</p>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="text-xs">
                              {notification.type}
                            </Badge>
                            <span className="text-sm text-gray-500">{notification.time}</span>
                            <Badge 
                              variant={notification.priority === 'high' ? 'destructive' : 'outline'}
                              className="text-xs"
                            >
                              {notification.priority} priority
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <Button variant="ghost" size="sm">
                            Mark Read
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          ×
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Empty State (when no notifications) */}
        {notifications.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications yet</h3>
              <p className="text-gray-600">You'll receive notifications about vaccinations, milestones, and more here.</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Notifications;