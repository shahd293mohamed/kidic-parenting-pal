import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  TrendingUp, 
  Calendar, 
  Ruler, 
  Weight, 
  Brain,
  Syringe,
  Plus,
  Edit
} from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';

const Tracker = () => {
  const [selectedChild, setSelectedChild] = useState('emma');
  
  const children = [
    { id: 'emma', name: 'Emma Johnson', age: '2 years 3 months' },
    { id: 'liam', name: 'Liam Johnson', age: '6 months' }
  ];

  const milestones = [
    { category: 'Physical', milestone: 'Walking independently', completed: true, date: '2023-12-15' },
    { category: 'Cognitive', milestone: 'First words', completed: true, date: '2023-11-20' },
    { category: 'Social', milestone: 'Playing with others', completed: false, expected: '2024-02-01' },
    { category: 'Language', milestone: 'Two-word phrases', completed: true, date: '2024-01-05' }
  ];

  const vaccines = [
    { name: 'DTaP (1st dose)', completed: true, date: '2023-08-15', nextDue: null },
    { name: 'Polio (1st dose)', completed: true, date: '2023-08-15', nextDue: null },
    { name: 'MMR Booster', completed: false, date: null, nextDue: '2024-01-15' },
    { name: 'Hepatitis B (3rd dose)', completed: true, date: '2023-10-10', nextDue: null }
  ];

  const growthData = [
    { type: 'Height', value: '89 cm', percentile: '75th', date: '2024-01-10' },
    { type: 'Weight', value: '12.5 kg', percentile: '60th', date: '2024-01-10' },
    { type: 'Head Circumference', value: '47 cm', percentile: '80th', date: '2024-01-10' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Child Tracker</h1>
            <p className="text-muted-foreground">Monitor your child's development, growth, and health milestones</p>
          </div>
          
          <Select value={selectedChild} onValueChange={setSelectedChild}>
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {children.map((child) => (
                <SelectItem key={child.id} value={child.id}>
                  {child.name} ({child.age})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="milestones" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="milestones">Milestones</TabsTrigger>
            <TabsTrigger value="vaccines">Vaccines</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
          </TabsList>

          <TabsContent value="milestones" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Development Milestones
                  </CardTitle>
                  <CardDescription>Track your child's developmental progress</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Milestone
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${milestone.completed ? 'bg-primary' : 'bg-muted'}`} />
                        <div>
                          <p className="font-medium">{milestone.milestone}</p>
                          <p className="text-sm text-muted-foreground">
                            {milestone.category} • {milestone.completed ? `Completed: ${milestone.date}` : `Expected: ${milestone.expected}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={milestone.completed ? 'default' : 'secondary'}>
                          {milestone.completed ? 'Completed' : 'Upcoming'}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vaccines" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Syringe className="h-5 w-5" />
                    Vaccination Schedule
                  </CardTitle>
                  <CardDescription>Keep track of your child's immunizations</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Record Vaccine
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {vaccines.map((vaccine, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${vaccine.completed ? 'bg-primary' : 'bg-yellow-500'}`} />
                        <div>
                          <p className="font-medium">{vaccine.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {vaccine.completed ? `Given: ${vaccine.date}` : `Due: ${vaccine.nextDue}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={vaccine.completed ? 'default' : 'destructive'}>
                          {vaccine.completed ? 'Completed' : 'Due Soon'}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="growth" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Growth Records
                  </CardTitle>
                  <CardDescription>Monitor your child's physical development</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Measurement
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {growthData.map((data, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {data.type === 'Height' && <Ruler className="h-5 w-5" />}
                          {data.type === 'Weight' && <Weight className="h-5 w-5" />}
                          {data.type === 'Head Circumference' && <Brain className="h-5 w-5" />}
                          {data.type}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-2xl font-bold">{data.value}</p>
                          <p className="text-sm text-muted-foreground">{data.percentile} percentile</p>
                          <p className="text-xs text-muted-foreground">Last updated: {data.date}</p>
                          <Progress value={parseInt(data.percentile)} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Tracker;