import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, CheckCircle, ArrowRight, Code2, Zap, Globe, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CountdownTimer } from '@/components/CountdownTimer';
import { useToast } from '@/hooks/use-toast';

function HomePage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interests: ''
  });

  // Event date: March 15, 2024 (adjust as needed)
  const eventDate = new Date('2024-03-15T09:00:00');

  const speakers = [
    {
      name: 'Sarah Chen',
      role: 'VP of Engineering at TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c6da2049?w=400&h=400&fit=crop&crop=face',
      topic: 'The Future of AI in Development'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO at InnovateLab',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      topic: 'Building Scalable Architecture'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of DevOps at CloudNine',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      topic: 'DevOps Best Practices'
    }
  ];

  const agenda = [
    { time: '09:00 AM', title: 'Registration & Welcome Coffee', type: 'networking' },
    { time: '09:30 AM', title: 'Opening Keynote: The Future of Development', type: 'keynote' },
    { time: '10:30 AM', title: 'AI-Driven Development Tools', type: 'talk' },
    { time: '11:30 AM', title: 'Networking Break', type: 'networking' },
    { time: '12:00 PM', title: 'Building Scalable Systems', type: 'workshop' },
    { time: '01:00 PM', title: 'Lunch & Expo Hall', type: 'networking' },
    { time: '02:30 PM', title: 'DevOps Revolution Panel', type: 'panel' },
    { time: '03:30 PM', title: 'Hands-on Coding Workshop', type: 'workshop' },
    { time: '05:00 PM', title: 'Closing & Networking Reception', type: 'networking' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, show success toast - will implement actual submission in Phase 2
    toast({
      title: "Registration Successful!",
      description: "You'll receive a confirmation email shortly with event details.",
    });
    // Reset form
    setFormData({ name: '', email: '', company: '', role: '', interests: '' });
  };

  const getAgendaIcon = (type: string) => {
    switch (type) {
      case 'keynote': return <Zap className="w-4 h-4" />;
      case 'talk': return <Users className="w-4 h-4" />;
      case 'workshop': return <Code2 className="w-4 h-4" />;
      case 'panel': return <Users2 className="w-4 h-4" />;
      case 'networking': return <Globe className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 event-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">March 15, 2024 • San Francisco</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
              DevConnect
              <span className="block event-text-gradient">Summit 2024</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-foreground/80 mb-8 leading-relaxed">
              The premier developer conference bringing together industry leaders, 
              cutting-edge technology, and the brightest minds in software development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-lg">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Moscone Center, SF</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-accent" />
                <span>500+ Developers</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5 text-accent" />
                <span>8 Hours of Content</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-full">
              Register Now - $299
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Event Starts In</h2>
          <CountdownTimer targetDate={eventDate} className="justify-center" />
          <p className="text-muted-foreground mt-6 text-lg">
            Don't miss out! Limited seats available.
          </p>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Speakers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from industry experts and thought leaders who are shaping the future of technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <Card key={index} className="floating-card border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                  <p className="text-sm text-accent mb-3 font-medium">{speaker.role}</p>
                  <p className="text-muted-foreground">{speaker.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Attend?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Code2 className="w-8 h-8" />, title: 'Hands-on Workshops', desc: 'Interactive coding sessions with industry experts' },
              { icon: <Users className="w-8 h-8" />, title: 'Networking', desc: 'Connect with 500+ developers and tech leaders' },
              { icon: <Star className="w-8 h-8" />, title: 'Latest Trends', desc: 'Discover cutting-edge technologies and frameworks' },
              { icon: <Zap className="w-8 h-8" />, title: 'Innovation', desc: 'Explore breakthrough solutions and startup showcases' }
            ].map((highlight, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Event Agenda</h2>
            <p className="text-xl text-muted-foreground">
              A full day packed with knowledge, networking, and innovation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {agenda.map((item, index) => (
                <Card key={index} className="hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="text-primary">
                      {getAgendaIcon(item.type)}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="font-mono text-sm text-accent font-medium">{item.time}</span>
                        <span className="font-semibold">{item.title}</span>
                      </div>
                    </div>
                    <div className="hidden sm:flex">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full capitalize">
                        {item.type}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Secure Your Spot</h2>
              <p className="text-xl text-muted-foreground">
                Join 500+ developers for an unforgettable experience. Early bird pricing ends soon!
              </p>
            </div>
            
            <Card className="p-8 pulse-glow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Tech Corp Inc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input 
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      placeholder="Senior Developer"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest (Optional)</Label>
                  <Textarea 
                    id="interests"
                    value={formData.interests}
                    onChange={(e) => handleInputChange('interests', e.target.value)}
                    placeholder="AI/ML, DevOps, Frontend Development..."
                    rows={3}
                  />
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-accent/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-sm">
                    <strong>Early Bird Special:</strong> Save $100 off regular pricing. Offer valid until Feb 15th.
                  </span>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Register Now - $299
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By registering, you agree to our terms of service and privacy policy. 
                  Full refund available until March 1st, 2024.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">DevConnect Summit 2024</h3>
          <p className="text-muted-foreground mb-4">
            Questions? Contact us at <a href="mailto:info@devconnectsummit.com" className="text-accent hover:underline">info@devconnectsummit.com</a>
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 DevConnect Summit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;