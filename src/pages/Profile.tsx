import React, { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Baby, Edit3, Plus, Calendar, MapPin, Phone, Mail, Camera } from 'lucide-react';

const Profile = () => {
  const [editingParent, setEditingParent] = useState(false);
  const [editingChild, setEditingChild] = useState<number | null>(null);

  const parentData = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, City, State 12345',
    joinDate: 'January 2024',
    familyCode: 'FAM123456'
  };

  const children = [
    {
      id: 1,
      name: 'Emma Johnson',
      birthday: '2022-03-15',
      age: '2 years old',
      gender: 'Female',
      allergies: ['Peanuts', 'Dairy'],
      medicalNotes: 'Regular checkups, no major health issues',
      avatar: '',
      milestones: 12,
      vaccinations: '85% complete'
    },
    {
      id: 2,
      name: 'James Johnson',
      birthday: '2024-01-20',
      age: '11 months old',
      gender: 'Male',
      allergies: [],
      medicalNotes: 'Healthy development, no concerns',
      avatar: '',
      milestones: 6,
      vaccinations: '70% complete'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-600">Manage your family information</p>
          </div>
          <Button>
            <Edit3 className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <Tabs defaultValue="parent" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="parent">Parent Profile</TabsTrigger>
            <TabsTrigger value="children">Children Profiles</TabsTrigger>
          </TabsList>

          {/* Parent Profile Tab */}
          <TabsContent value="parent">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <Card className="lg:col-span-1">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-2xl">SJ</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full p-2">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle>{parentData.name}</CardTitle>
                  <p className="text-gray-600">Parent</p>
                  <Badge variant="secondary" className="mt-2">
                    Family Code: {parentData.familyCode}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Joined {parentData.joinDate}
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{children.length}</p>
                    <p className="text-sm text-gray-600">Children Profiles</p>
                  </div>
                </CardContent>
              </Card>

              {/* Details Card */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Personal Information
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setEditingParent(!editingParent)}
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      {editingParent ? 'Cancel' : 'Edit'}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {editingParent ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={parentData.name} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={parentData.email} />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue={parentData.phone} />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" defaultValue={parentData.address} />
                      </div>
                      <div className="md:col-span-2 flex gap-3">
                        <Button>Save Changes</Button>
                        <Button variant="outline" onClick={() => setEditingParent(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">{parentData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">{parentData.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-gray-600">{parentData.address}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Children Profiles Tab */}
          <TabsContent value="children">
            <div className="space-y-6">
              {/* Add Child Button */}
              <Card className="border-2 border-dashed border-gray-300 hover:border-primary transition-colors">
                <CardContent className="p-8 text-center">
                  <Button size="lg">
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Child Profile
                  </Button>
                  <p className="text-gray-600 mt-2">Create a profile for your child to start tracking their development</p>
                </CardContent>
              </Card>

              {/* Children List */}
              {children.map((child) => (
                <Card key={child.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Baby className="w-5 h-5 mr-2" />
                        {child.name}
                      </span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditingChild(editingChild === child.id ? null : child.id)}
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        {editingChild === child.id ? 'Cancel' : 'Edit'}
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {editingChild === child.id ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`name-${child.id}`}>Child Name</Label>
                          <Input id={`name-${child.id}`} defaultValue={child.name} />
                        </div>
                        <div>
                          <Label htmlFor={`birthday-${child.id}`}>Birthday</Label>
                          <Input id={`birthday-${child.id}`} type="date" defaultValue={child.birthday} />
                        </div>
                        <div>
                          <Label htmlFor={`gender-${child.id}`}>Gender</Label>
                          <select className="w-full p-2 border rounded-md" defaultValue={child.gender}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor={`allergies-${child.id}`}>Allergies</Label>
                          <Input id={`allergies-${child.id}`} defaultValue={child.allergies.join(', ')} placeholder="Separate with commas" />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor={`notes-${child.id}`}>Medical Notes</Label>
                          <Textarea id={`notes-${child.id}`} defaultValue={child.medicalNotes} />
                        </div>
                        <div className="md:col-span-2 flex gap-3">
                          <Button>Save Changes</Button>
                          <Button variant="outline" onClick={() => setEditingChild(null)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                          <Avatar className="w-16 h-16 mx-auto mb-3">
                            <AvatarImage src={child.avatar} />
                            <AvatarFallback>{child.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <p className="font-medium">{child.age}</p>
                          <p className="text-sm text-gray-600">{child.gender}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Quick Stats</h4>
                          <div className="space-y-1 text-sm">
                            <p><span className="font-medium">{child.milestones}</span> milestones logged</p>
                            <p><span className="font-medium">{child.vaccinations}</span> vaccinated</p>
                            <p><span className="font-medium">{child.birthday}</span> birthday</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Allergies</h4>
                          <div className="flex flex-wrap gap-1">
                            {child.allergies.length > 0 ? (
                              child.allergies.map((allergy, index) => (
                                <Badge key={index} variant="destructive" className="text-xs">
                                  {allergy}
                                </Badge>
                              ))
                            ) : (
                              <span className="text-sm text-gray-500">None reported</span>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Medical Notes</h4>
                          <p className="text-sm text-gray-600 line-clamp-3">{child.medicalNotes}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;