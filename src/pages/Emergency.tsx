import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  AlertTriangle, 
  Phone, 
  Heart,
  Thermometer,
  Zap,
  Droplets,
  Shield,
  Clock,
  Download
} from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';

const Emergency = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const emergencyContacts = [
    { service: 'Emergency Services', number: '911', type: 'emergency' },
    { service: 'Poison Control', number: '1-800-222-1222', type: 'poison' },
    { service: 'Pediatric Nurse Line', number: '1-855-KID-HELP', type: 'medical' }
  ];

  const protocols = [
    {
      id: 1,
      title: 'High Fever (Over 102°F)',
      icon: Thermometer,
      severity: 'high',
      category: 'Medical',
      steps: [
        'Take child\'s temperature again to confirm',
        'Remove excess clothing and blankets',
        'Give acetaminophen or ibuprofen (age-appropriate dose)',
        'Encourage fluid intake',
        'Use lukewarm sponge bath if needed',
        'Call doctor if fever persists or child shows severe symptoms'
      ],
      whenToCall911: 'Fever over 104°F, difficulty breathing, unresponsiveness, or seizure'
    },
    {
      id: 2,
      title: 'Choking',
      icon: AlertTriangle,
      severity: 'critical',
      category: 'Emergency',
      steps: [
        'Stay calm and assess the situation',
        'For infants: 5 back blows, then 5 chest thrusts',
        'For toddlers: Heimlich maneuver - upward abdominal thrusts',
        'Continue until object is expelled or child becomes unconscious',
        'If unconscious, begin CPR and call 911 immediately'
      ],
      whenToCall911: 'Unable to remove object, child becomes unconscious, or turns blue'
    },
    {
      id: 3,
      title: 'Allergic Reaction',
      icon: Shield,
      severity: 'high',
      category: 'Medical',
      steps: [
        'Identify and remove the allergen if possible',
        'Give antihistamine (Benadryl) if available and age-appropriate',
        'Monitor breathing and consciousness',
        'Use EpiPen if prescribed and symptoms are severe',
        'Keep child calm and in comfortable position'
      ],
      whenToCall911: 'Difficulty breathing, swelling of face/throat, severe rash, or loss of consciousness'
    },
    {
      id: 4,
      title: 'Cuts and Bleeding',
      icon: Droplets,
      severity: 'medium',
      category: 'Injury',
      steps: [
        'Apply direct pressure with clean cloth',
        'Elevate the injured area above heart level if possible',
        'Do not remove embedded objects',
        'Clean around wound with water (not hydrogen peroxide)',
        'Cover with sterile bandage',
        'Monitor for signs of infection'
      ],
      whenToCall911: 'Bleeding won\'t stop after 10 minutes of pressure, deep cuts, or spurting blood'
    },
    {
      id: 5,
      title: 'Poisoning',
      icon: AlertTriangle,
      severity: 'critical',
      category: 'Emergency',
      steps: [
        'Remove child from source of poison',
        'Do NOT induce vomiting unless instructed by poison control',
        'Call Poison Control immediately: 1-800-222-1222',
        'Have poison container/information ready',
        'Follow poison control instructions exactly',
        'Monitor child\'s breathing and consciousness'
      ],
      whenToCall911: 'Child is unconscious, having difficulty breathing, or seizures'
    },
    {
      id: 6,
      title: 'Seizures',
      icon: Zap,
      severity: 'critical',
      category: 'Medical',
      steps: [
        'Stay calm and time the seizure',
        'Place child on their side on a soft surface',
        'Do NOT put anything in their mouth',
        'Remove nearby objects that could cause injury',
        'Do NOT restrain the child',
        'Stay with child until seizure ends and they are fully awake'
      ],
      whenToCall911: 'Seizure lasts more than 5 minutes, child has difficulty breathing, or multiple seizures'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return '🚨';
      case 'high': return '⚠️';
      case 'medium': return '⚡';
      default: return '💡';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Emergency Protocols</h1>
          <p className="text-muted-foreground">Quick-access guides for health emergencies - Available offline</p>
        </div>

        {/* Emergency Contacts */}
        <Card className="mb-8 border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <Phone className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
            <CardDescription className="text-red-600">
              Keep these numbers easily accessible at all times
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div>
                    <p className="font-medium text-gray-900">{contact.service}</p>
                    <p className="text-2xl font-bold text-red-600">{contact.number}</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search emergency protocols (e.g., fever, choking, allergic reaction)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Protocols Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {protocols.map((protocol) => {
            const IconComponent = protocol.icon;
            return (
              <Card key={protocol.id} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <Badge className={getSeverityColor(protocol.severity)}>
                        {getSeverityIcon(protocol.severity)} {protocol.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <Badge variant="outline">{protocol.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{protocol.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Steps to follow:</h4>
                      <ol className="space-y-1 text-sm">
                        {protocol.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <span className="font-medium text-primary mr-2">{stepIndex + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-red-800 text-sm">Call 911 if:</p>
                          <p className="text-red-700 text-sm">{protocol.whenToCall911}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Offline Access Note */}
        <Card className="mt-8 bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Offline Access
            </CardTitle>
            <CardDescription>
              These emergency protocols are available offline once downloaded. Make sure to download them for quick access during emergencies.
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
    </div>
  );
};

export default Emergency;