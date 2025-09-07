import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  MapPin, 
  Star, 
  Calendar,
  Phone,
  Globe,
  Filter,
  ExternalLink
} from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      specialty: 'Pediatrician',
      rating: 4.9,
      reviews: 127,
      location: 'Downtown Medical Center',
      distance: '2.3 km',
      availability: 'Next available: Tomorrow 2:00 PM',
      phone: '+1 (555) 123-4567',
      experience: '12 years',
      languages: ['English', 'Mandarin'],
      image: ''
    },
    {
      id: 2,
      name: 'Dr. Michael Torres',
      specialty: 'Developmental Pediatrician',
      rating: 4.8,
      reviews: 89,
      location: 'Children\'s Hospital',
      distance: '3.7 km',
      availability: 'Next available: Friday 10:30 AM',
      phone: '+1 (555) 234-5678',
      experience: '15 years',
      languages: ['English', 'Spanish'],
      image: ''
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      specialty: 'Child Psychologist',
      rating: 4.9,
      reviews: 156,
      location: 'Wellness Center',
      distance: '1.8 km',
      availability: 'Next available: Monday 3:00 PM',
      phone: '+1 (555) 345-6789',
      experience: '8 years',
      languages: ['English', 'French'],
      image: ''
    },
    {
      id: 4,
      name: 'Dr. James Rodriguez',
      specialty: 'Pediatric Nutritionist',
      rating: 4.7,
      reviews: 73,
      location: 'Family Health Clinic',
      distance: '4.2 km',
      availability: 'Next available: Wednesday 11:00 AM',
      phone: '+1 (555) 456-7890',
      experience: '10 years',
      languages: ['English', 'Spanish'],
      image: ''
    }
  ];

  const specialties = [
    { value: 'all', label: 'All Specialties' },
    { value: 'pediatrician', label: 'Pediatrician' },
    { value: 'developmental', label: 'Developmental Pediatrician' },
    { value: 'psychology', label: 'Child Psychologist' },
    { value: 'nutrition', label: 'Pediatric Nutritionist' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'downtown', label: 'Downtown' },
    { value: 'north', label: 'North Side' },
    { value: 'south', label: 'South Side' },
    { value: 'east', label: 'East Side' }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Doctors</h1>
          <p className="text-muted-foreground">Connect with pediatric specialists and book appointments</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg border border-border mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search doctors or clinics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty.value} value={specialty.value}>
                    {specialty.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Doctors List */}
        <div className="grid gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-elegant transition-smooth">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={doctor.image} />
                      <AvatarFallback className="text-lg font-semibold">
                        {getInitials(doctor.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-foreground">{doctor.name}</h3>
                      <p className="text-primary font-medium">{doctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-muted-foreground ml-1">
                          {doctor.rating} ({doctor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <MapPin className="h-4 w-4 mr-2" />
                          {doctor.location}
                        </div>
                        <p className="text-xs text-muted-foreground ml-6">{doctor.distance} away</p>
                      </div>
                      <div>
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {doctor.availability}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{doctor.experience} experience</span>
                      <div className="flex space-x-1">
                        {doctor.languages.map((lang, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 pt-2">
                      <Button className="flex-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </Button>
                      <Button variant="outline" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Globe className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vezeeta Integration Note */}
        <Card className="mt-8 bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Book Through Vezeeta
            </CardTitle>
            <CardDescription>
              For seamless appointment booking, you'll be redirected to Vezeeta.com to complete your reservation with your selected doctor.
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
    </div>
  );
};

export default Doctors;