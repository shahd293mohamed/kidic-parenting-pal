import React, { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Smartphone, 
  Globe, 
  Moon, 
  Volume2,
  Lock,
  Eye,
  Trash2,
  Download,
  LogOut,
  Users,
  Key,
  AlertTriangle
} from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    vaccines: true,
    milestones: true,
    appointments: true,
    emergency: true,
    educational: false,
    marketing: false
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: false,
    shareData: false,
    analytics: true
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-600">Customize your KidCare experience</p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* App Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <SettingsIcon className="w-5 h-5 mr-2" />
                    App Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-gray-600">Switch to dark theme</p>
                    </div>
                    <Switch id="dark-mode" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="sound">Sound Effects</Label>
                      <p className="text-sm text-gray-600">Play sounds for interactions</p>
                    </div>
                    <Switch id="sound" defaultChecked />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="ar">Arabic</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="UTC-5">Eastern Time (UTC-5)</option>
                      <option value="UTC-6">Central Time (UTC-6)</option>
                      <option value="UTC-7">Mountain Time (UTC-7)</option>
                      <option value="UTC-8">Pacific Time (UTC-8)</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              {/* Device & Sync */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Device & Sync
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="auto-sync">Auto Sync</Label>
                      <p className="text-sm text-gray-600">Sync data across devices</p>
                    </div>
                    <Switch id="auto-sync" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="offline-mode">Offline Mode</Label>
                      <p className="text-sm text-gray-600">Access content without internet</p>
                    </div>
                    <Switch id="offline-mode" defaultChecked />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Connected Devices</Label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <Smartphone className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-sm">iPhone 14 Pro</span>
                        </div>
                        <Badge variant="secondary">Current</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 mr-2 text-gray-500" />
                          <span className="text-sm">Chrome Browser</span>
                        </div>
                        <Button variant="ghost" size="sm">Remove</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Essential Notifications</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="vaccines">Vaccination Reminders</Label>
                        <p className="text-sm text-gray-600">Get notified about upcoming vaccines</p>
                      </div>
                      <Switch 
                        id="vaccines" 
                        checked={notifications.vaccines}
                        onCheckedChange={(checked) => setNotifications({...notifications, vaccines: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="milestones">Milestone Tracking</Label>
                        <p className="text-sm text-gray-600">Reminders to log development milestones</p>
                      </div>
                      <Switch 
                        id="milestones" 
                        checked={notifications.milestones}
                        onCheckedChange={(checked) => setNotifications({...notifications, milestones: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="appointments">Appointment Reminders</Label>
                        <p className="text-sm text-gray-600">Doctor appointment notifications</p>
                      </div>
                      <Switch 
                        id="appointments" 
                        checked={notifications.appointments}
                        onCheckedChange={(checked) => setNotifications({...notifications, appointments: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="emergency">Emergency Alerts</Label>
                        <p className="text-sm text-gray-600">Critical health and safety alerts</p>
                      </div>
                      <Switch 
                        id="emergency" 
                        checked={notifications.emergency}
                        onCheckedChange={(checked) => setNotifications({...notifications, emergency: checked})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Optional Notifications</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="educational">Educational Content</Label>
                        <p className="text-sm text-gray-600">New articles and activity suggestions</p>
                      </div>
                      <Switch 
                        id="educational" 
                        checked={notifications.educational}
                        onCheckedChange={(checked) => setNotifications({...notifications, educational: checked})}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="marketing">Marketing Updates</Label>
                        <p className="text-sm text-gray-600">Product updates and promotions</p>
                      </div>
                      <Switch 
                        id="marketing" 
                        checked={notifications.marketing}
                        onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-medium text-gray-900 mb-4">Notification Schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quiet-start">Quiet Hours Start</Label>
                      <Input id="quiet-start" type="time" defaultValue="22:00" />
                    </div>
                    <div>
                      <Label htmlFor="quiet-end">Quiet Hours End</Label>
                      <Input id="quiet-end" type="time" defaultValue="07:00" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Privacy Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="profile-visible">Profile Visibility</Label>
                      <p className="text-sm text-gray-600">Make your profile visible to other parents</p>
                    </div>
                    <Switch 
                      id="profile-visible" 
                      checked={privacy.profileVisible}
                      onCheckedChange={(checked) => setPrivacy({...privacy, profileVisible: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="share-data">Share Anonymous Data</Label>
                      <p className="text-sm text-gray-600">Help improve our services with anonymous usage data</p>
                    </div>
                    <Switch 
                      id="share-data" 
                      checked={privacy.shareData}
                      onCheckedChange={(checked) => setPrivacy({...privacy, shareData: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="analytics">Analytics Tracking</Label>
                      <p className="text-sm text-gray-600">Allow us to track app usage for improvements</p>
                    </div>
                    <Switch 
                      id="analytics" 
                      checked={privacy.analytics}
                      onCheckedChange={(checked) => setPrivacy({...privacy, analytics: checked})}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Data Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Download Your Data</h4>
                      <p className="text-sm text-gray-600">Get a copy of all your data in JSON format</p>
                    </div>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Data Portability</h4>
                      <p className="text-sm text-gray-600">Export your data to use with other services</p>
                    </div>
                    <Button variant="outline">Export</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Account Settings */}
          <TabsContent value="account">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="current-password">Change Password</Label>
                    <div className="space-y-3 mt-2">
                      <Input id="current-password" type="password" placeholder="Current password" />
                      <Input id="new-password" type="password" placeholder="New password" />
                      <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                      <Button>Update Password</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline">
                      <Key className="w-4 h-4 mr-2" />
                      Enable 2FA
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Family Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Family Code</h4>
                      <Badge variant="secondary">FAM123456</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Share this code with family members to join your account</p>
                    <Button variant="outline" size="sm">Generate New Code</Button>
                  </div>
                  
                  <div>
                    <Label>Connected Family Members</Label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">John Johnson</p>
                          <p className="text-sm text-gray-600">Partner • Joined Jan 2024</p>
                        </div>
                        <Button variant="ghost" size="sm">Remove</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Danger Zone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-red-900">Delete Account</h4>
                      <p className="text-sm text-red-700">Permanently delete your account and all data</p>
                    </div>
                    <Button variant="destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Account
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">Sign Out All Devices</h4>
                      <p className="text-sm text-gray-600">Sign out from all devices except this one</p>
                    </div>
                    <Button variant="outline">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out All
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;