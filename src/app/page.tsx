'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  TikTok,
  TrendingUp,
  Users,
  Target,
  Award,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  BarChart3,
  Heart,
  MessageCircle,
  Share2,
  Eye
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon!",
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl">Chada</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 -z-10" />
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            🚀 Social Media Experts
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Elevate Your Brand with
            <br />
            Powerful Social Media
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We help brands connect, engage, and grow through strategic social media marketing that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">2.5M+</div>
              <div className="text-sm text-muted-foreground">Engagements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">50+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive social media solutions tailored to your brand's unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Instagram className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Social Media Strategy</CardTitle>
                <CardDescription>
                  Custom strategies designed to amplify your brand voice and achieve your business goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Content Planning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Audience Analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Growth Strategy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Content Creation</CardTitle>
                <CardDescription>
                  Engaging content that captures attention and drives meaningful interactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Visual Content
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Video Production
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Copywriting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Paid Advertising</CardTitle>
                <CardDescription>
                  Targeted ad campaigns that reach your ideal audience and maximize ROI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Facebook Ads
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Instagram Ads
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    LinkedIn Ads
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Analytics & Reporting</CardTitle>
                <CardDescription>
                  Detailed insights and performance tracking to optimize your social media presence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance Metrics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monthly Reports
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Strategy Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Community Management</CardTitle>
                <CardDescription>
                  Building and nurturing engaged communities around your brand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 Response
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Comment Moderation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Community Growth
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Influencer Marketing</CardTitle>
                <CardDescription>
                  Strategic partnerships with influencers to expand your reach and credibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Influencer Vetting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Campaign Management
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ROI Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                About Chada
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We're Your Social Media Growth Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, Chada has become a leading social media agency helping brands across the globe build meaningful connections with their audience.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of creative strategists, content creators, and data analysts work together to deliver campaigns that not only look great but drive measurable results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm text-muted-foreground">50+ Industry Awards</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-pink-600" />
                  <div>
                    <div className="font-semibold">Expert Team</div>
                    <div className="text-sm text-muted-foreground">25+ Specialists</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Instagram className="h-8 w-8 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold">5M+</div>
                  <div className="text-sm text-muted-foreground">Instagram Reach</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Heart className="h-8 w-8 text-pink-600 mb-2" />
                  <div className="text-2xl font-bold">10M+</div>
                  <div className="text-sm text-muted-foreground">Total Engagement</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Share2 className="h-8 w-8 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold">500K+</div>
                  <div className="text-sm text-muted-foreground">Shares Generated</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Eye className="h-8 w-8 text-pink-600 mb-2" />
                  <div className="text-2xl font-bold">50M+</div>
                  <div className="text-sm text-muted-foreground">Total Impressions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped brands like yours achieve remarkable social media success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-purple-600" />
              </div>
              <CardHeader>
                <CardTitle>Fashion Brand X</CardTitle>
                <CardDescription>Instagram Growth Campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Followers Growth</span>
                    <span className="font-semibold text-green-600">+350%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Engagement Rate</span>
                    <span className="font-semibold text-green-600">+180%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Sales from Social</span>
                    <span className="font-semibold text-green-600">+220%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <Users className="h-16 w-16 text-pink-600" />
              </div>
              <CardHeader>
                <CardTitle>Tech Startup Y</CardTitle>
                <CardDescription>LinkedIn Strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Connection Growth</span>
                    <span className="font-semibold text-green-600">+280%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Lead Generation</span>
                    <span className="font-semibold text-green-600">+400%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Brand Mentions</span>
                    <span className="font-semibold text-green-600">+150%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <Target className="h-16 w-16 text-purple-600" />
              </div>
              <CardHeader>
                <CardTitle>Restaurant Z</CardTitle>
                <CardDescription>Multi-Platform Management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Reach Increase</span>
                    <span className="font-semibold text-green-600">+420%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Customer Reviews</span>
                    <span className="font-semibold text-green-600">+200%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Foot Traffic</span>
                    <span className="font-semibold text-green-600">+180%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Grow Together</h2>
            <p className="text-xl text-muted-foreground">
              Ready to take your social media to the next level? Get in touch with us today.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <span>hello@chada.agency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <span>New York, NY & Los Angeles, CA</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 cursor-pointer transition-colors">
                    <Instagram className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-200 cursor-pointer transition-colors">
                    <Facebook className="h-5 w-5 text-pink-600" />
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 cursor-pointer transition-colors">
                    <Twitter className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center hover:bg-pink-200 cursor-pointer transition-colors">
                    <Linkedin className="h-5 w-5 text-pink-600" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-bold text-xl">Chada</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your partner in social media success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Social Strategy</li>
                <li>Content Creation</li>
                <li>Paid Advertising</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>GDPR</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Chada Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}