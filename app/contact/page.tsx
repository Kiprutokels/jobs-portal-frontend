"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
        duration: 5000,
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "careers@careerhub.com",
      link: "mailto:careers@careerhub.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "123 Business Ave, Suite 100, San Francisco, CA 94105",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-primary py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of these channels, and we'll be happy to assist you.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={index} 
                      className="border-border hover:shadow-card transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary shrink-0">
                            <info.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            {info.link !== "#" ? (
                              <a 
                                href={info.link} 
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.detail}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">{info.detail}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-border bg-accent/5 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM PST
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-primary">
                        <Send className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Send us a Message</CardTitle>
                        <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contactFirstName">First Name *</Label>
                          <Input id="contactFirstName" required placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contactLastName">Last Name *</Label>
                          <Input id="contactLastName" required placeholder="Doe" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">Email *</Label>
                        <Input id="contactEmail" type="email" required placeholder="john.doe@example.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">Phone Number</Label>
                        <Input id="contactPhone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" required placeholder="How can we help?" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          required 
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-[150px]"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                        size="lg" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
