import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import kidcareIcon from '@/assets/kidcare-icon.jpg';

const SignUp = () => {
  const [signUpType, setSignUpType] = useState<'new' | 'family'>('new');

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img src={kidcareIcon} alt="KidCare" className="w-16 h-16 rounded-full" />
          </div>
          <CardTitle className="text-2xl bg-gradient-primary bg-clip-text text-transparent">
            Join KidCare Family
          </CardTitle>
          <CardDescription>
            Create your account to start your parenting journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={signUpType} onValueChange={(value) => setSignUpType(value as 'new' | 'family')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="new">New Account</TabsTrigger>
              <TabsTrigger value="family">Join Family</TabsTrigger>
            </TabsList>
            
            <TabsContent value="new" className="space-y-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                </div>
                <Button className="w-full" variant="hero">
                  Create Account
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="family" className="space-y-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="familyCode">Family Code</Label>
                  <Input id="familyCode" placeholder="Enter family invitation code" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullNameFamily">Full Name</Label>
                  <Input id="fullNameFamily" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emailFamily">Email Address</Label>
                  <Input id="emailFamily" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneFamily">Phone Number</Label>
                  <Input id="phoneFamily" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passwordFamily">Password</Label>
                  <Input id="passwordFamily" type="password" placeholder="Create a password" />
                </div>
                <Button className="w-full" variant="hero">
                  Join Family Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-4">
            <div className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/signin" className="text-primary hover:underline font-medium">
                Sign in here
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;