import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Send, 
  MessageCircle, 
  Bot,
  User,
  Lightbulb,
  Clock,
  Heart
} from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your KidCare AI assistant. I\'m here to help with any parenting questions you have. Feel free to ask about sleep, feeding, development, behavior, or any other concerns!',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      type: 'user',
      content: 'My 18-month-old has been having trouble sleeping through the night. Any suggestions?',
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      type: 'bot',
      content: 'Sleep challenges at 18 months are very common! Here are some gentle strategies that often help:\n\n1. **Consistent bedtime routine** - Same activities in the same order every night\n2. **Check room environment** - Dark, cool (65-68°F), and quiet\n3. **Review nap schedule** - One nap around 12-1 PM, not too late\n4. **Comfort object** - A special blanket or stuffed animal\n\nHow long has this been going on? Any recent changes in routine or environment?',
      timestamp: '10:33 AM'
    }
  ]);

  const quickQuestions = [
    'How do I handle tantrums?',
    'When should my child start potty training?',
    'What foods should I avoid for babies?',
    'My child has a fever, what should I do?',
    'How can I encourage my toddler to eat vegetables?'
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user' as const,
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: 'bot' as const,
          content: 'Thank you for your question! I\'m processing your request and will provide you with helpful information shortly. In the meantime, remember that every child develops at their own pace.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Parenting Assistant</h1>
          <p className="text-muted-foreground">Get instant guidance from our AI-powered parenting expert</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="flex-shrink-0 border-b border-border">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-6 w-6 text-primary" />
                  KidCare AI Assistant
                  <Badge variant="secondary" className="ml-auto">Online</Badge>
                </CardTitle>
              </CardHeader>
              
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        {msg.type === 'bot' ? (
                          <>
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </>
                        ) : (
                          <>
                            <AvatarImage src="" />
                            <AvatarFallback>
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </>
                        )}
                      </Avatar>
                      
                      <div className={`rounded-lg p-3 ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                        <p className={`text-xs mt-1 ${
                          msg.type === 'user' 
                            ? 'text-primary-foreground/70' 
                            : 'text-muted-foreground'
                        }`}>
                          {msg.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              
              {/* Input */}
              <div className="flex-shrink-0 border-t border-border p-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me anything about parenting..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!message.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Quick Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* AI Capabilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  I can help with
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Sleep & feeding concerns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-blue-500" />
                    <span>Development milestones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-green-500" />
                    <span>Behavioral guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-purple-500" />
                    <span>Health & safety tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-orange-500" />
                    <span>Activity suggestions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground mt-1" />
                  <div className="text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Please remember:</p>
                    <p>This AI assistant provides general guidance only. For medical emergencies or serious health concerns, always consult your pediatrician immediately.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;