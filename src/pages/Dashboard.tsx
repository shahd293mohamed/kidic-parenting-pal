import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Baby, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  MessageCircle, 
  Stethoscope,
  AlertTriangle,
  TrendingUp,
  Bell
} from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';

const Dashboard = () => {
  const children = [
    { name: 'Emma Johnson', age: '2 years 3 months', avatar: '', initials: 'EJ' },
    { name: 'Liam Johnson', age: '6 months', avatar: '', initials: 'LJ' }
  ];

  const upcomingReminders = [
    { type: 'Vaccination', child: 'Emma', date: '2024-01-15', description: 'MMR Booster' },
    { type: 'Checkup', child: 'Liam', date: '2024-01-18', description: '6-month wellness visit' }
  ];

  const recentMilestones = [
    { child: 'Emma', milestone: 'First complete sentence', date: '3 days ago' },
    { child: 'Liam', milestone: 'Sitting without support', date: '1 week ago' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Sarah! 👋</h1>
          <p className="text-muted-foreground">Here's what's happening with your little ones today.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link to="/tracker">
            <Card className="hover:shadow-elegant transition-smooth cursor-pointer">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Tracker</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/educational-content">
            <Card className="hover:shadow-elegant transition-smooth cursor-pointer">
              <CardContent className="p-4 text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Education</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/chatbot">
            <Card className="hover:shadow-elegant transition-smooth cursor-pointer">
              <CardContent className="p-4 text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium">AI Assistant</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/store">
            <Card className="hover:shadow-elegant transition-smooth cursor-pointer">
              <CardContent className="p-4 text-center">
                <ShoppingCart className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-medium">Smart Store</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Children Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5" />
                  Your Children
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {children.map((child, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={child.avatar} />
                        <AvatarFallback>{child.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{child.name}</p>
                        <p className="text-sm text-muted-foreground">{child.age}</p>
                      </div>
                    </div>
                    <Link to={`/profile/child/${index + 1}`}>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                ))}
                <Link to="/profile/add-child">
                  <Button variant="outline" className="w-full">
                    + Add Another Child
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentMilestones.map((milestone, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{milestone.child}: {milestone.milestone}</p>
                      <p className="text-sm text-muted-foreground">{milestone.date}</p>
                    </div>
                    <Badge variant="secondary">New</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Upcoming Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingReminders.map((reminder, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={reminder.type === 'Vaccination' ? 'default' : 'secondary'}>
                        {reminder.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{reminder.date}</span>
                    </div>
                    <p className="font-medium text-sm">{reminder.child}</p>
                    <p className="text-sm text-muted-foreground">{reminder.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/emergency">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Emergency Protocols
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Stethoscope className="h-4 w-4 mr-2" />
                    Find Doctors
                  </Button>
                </Link>
                <Link to="/tracker/vaccines">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Vaccine Schedule
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;