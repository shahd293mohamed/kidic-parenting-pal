import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Users, 
  Star,
  Play,
  Download,
  Bookmark
} from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';

const EducationalContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const montessoriActivities = [
    {
      title: 'Practical Life: Pouring Water',
      description: 'Develop fine motor skills and concentration through simple pouring exercises',
      ageGroup: '18 months - 3 years',
      duration: '15-20 minutes',
      difficulty: 'Beginner',
      materials: ['Small pitcher', 'Two bowls', 'Sponge'],
      category: 'Practical Life'
    },
    {
      title: 'Sensorial: Color Sorting',
      description: 'Enhance visual discrimination and classification skills',
      ageGroup: '2-4 years',
      duration: '10-15 minutes',
      difficulty: 'Beginner',
      materials: ['Colored objects', 'Sorting trays'],
      category: 'Sensorial'
    },
    {
      title: 'Language: Sandpaper Letters',
      description: 'Introduction to letter recognition and phonetic sounds',
      ageGroup: '3-5 years',
      duration: '5-10 minutes',
      difficulty: 'Intermediate',
      materials: ['Sandpaper letters', 'Tray'],
      category: 'Language'
    }
  ];

  const parentingTips = [
    {
      title: 'Managing Toddler Tantrums',
      excerpt: 'Understanding the root causes of tantrums and effective strategies to handle them',
      readTime: '5 min read',
      category: 'Behavior',
      author: 'Dr. Sarah Chen'
    },
    {
      title: 'Creating a Sleep Routine',
      excerpt: 'Establishing healthy sleep habits that benefit the whole family',
      readTime: '7 min read',
      category: 'Sleep',
      author: 'Dr. Michael Torres'
    },
    {
      title: 'Nutrition for Growing Minds',
      excerpt: 'Essential nutrients for cognitive development in early childhood',
      readTime: '6 min read',
      category: 'Nutrition',
      author: 'Dr. Emily Watson'
    }
  ];

  const ageSpecificContent = [
    {
      ageRange: '0-6 months',
      topics: ['Tummy Time', 'Sensory Play', 'Sleep Patterns', 'Feeding Guidelines'],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      ageRange: '6-12 months',
      topics: ['Introduction to Solids', 'Crawling Encouragement', 'Language Development'],
      color: 'bg-green-100 text-green-800'
    },
    {
      ageRange: '1-2 years',
      topics: ['Walking Confidence', 'First Words', 'Independence Building'],
      color: 'bg-purple-100 text-purple-800'
    },
    {
      ageRange: '2-3 years',
      topics: ['Potty Training', 'Social Skills', 'Creative Expression'],
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Educational Content</h1>
          <p className="text-muted-foreground">Montessori-inspired activities and expert parenting guidance</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search activities, tips, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs defaultValue="activities" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="activities">Montessori Activities</TabsTrigger>
            <TabsTrigger value="tips">Parenting Tips</TabsTrigger>
            <TabsTrigger value="age-specific">Age-Specific Guides</TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {montessoriActivities.map((activity, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{activity.category}</Badge>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {activity.ageGroup}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 mr-2" />
                        {activity.difficulty}
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Materials needed:</p>
                        <div className="flex flex-wrap gap-1">
                          {activity.materials.map((material, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Start Activity
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {parentingTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{tip.category}</Badge>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                    <CardDescription>{tip.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {tip.readTime}
                      </div>
                      <p className="text-sm text-muted-foreground">By {tip.author}</p>
                    </div>
                    <Button className="w-full mt-4">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="age-specific" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {ageSpecificContent.map((content, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{content.ageRange}</span>
                      <Badge className={content.color}>{content.ageRange}</Badge>
                    </CardTitle>
                    <CardDescription>
                      Essential developmental topics and activities for this age group
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="font-medium text-sm">Key Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {content.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Guide
                      </Button>
                    </div>
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

export default EducationalContent;