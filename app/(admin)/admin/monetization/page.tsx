"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, CreditCard, Percent, Plus, Edit2 } from "lucide-react";
import StatCard from "@/components/StatCard";

export default function Monetization() {
  const stats = [
    {
      title: "Monthly Revenue",
      value: "$45,231",
      icon: DollarSign,
      change: "+12.5% from last month",
      changeType: "positive" as const,
      iconColor: "text-green-600",
    },
    {
      title: "Active Subscriptions",
      value: "234",
      icon: CreditCard,
      change: "+18 this month",
      changeType: "positive" as const,
      iconColor: "text-blue-600",
    },
    {
      title: "Avg. Transaction",
      value: "$193",
      icon: TrendingUp,
      change: "+5.2% increase",
      changeType: "positive" as const,
      iconColor: "text-purple-600",
    },
    {
      title: "Discount Usage",
      value: "12.4%",
      icon: Percent,
      change: "-2.1% decrease",
      changeType: "negative" as const,
      iconColor: "text-orange-600",
    },
  ];

  const plans = [
    {
      id: "1",
      name: "Basic Employer",
      price: "$99",
      period: "month",
      features: ["5 job postings", "Basic analytics", "Email support"],
      subscribers: 45,
      revenue: "$4,455",
    },
    {
      id: "2",
      name: "Pro Employer",
      price: "$249",
      period: "month",
      features: ["20 job postings", "Advanced analytics", "Priority support", "Featured listings"],
      subscribers: 89,
      revenue: "$22,161",
    },
    {
      id: "3",
      name: "Enterprise",
      price: "$599",
      period: "month",
      features: ["Unlimited postings", "Custom analytics", "Dedicated account manager", "API access"],
      subscribers: 23,
      revenue: "$13,777",
    },
  ];

  const coupons = [
    { code: "SPRING2024", discount: "20%", uses: 45, limit: 100, expires: "Apr 30, 2024" },
    { code: "FIRSTJOB", discount: "$50", uses: 123, limit: 500, expires: "Dec 31, 2024" },
    { code: "ANNUAL10", discount: "10%", uses: 34, limit: null, expires: "Never" },
  ];

  const transactions = [
    { id: "1", company: "TechCorp Inc.", plan: "Pro Employer", amount: "$249", date: "2 hours ago", status: "completed" },
    { id: "2", company: "StartupXYZ", plan: "Basic Employer", amount: "$99", date: "5 hours ago", status: "completed" },
    { id: "3", company: "Innovate Labs", plan: "Enterprise", amount: "$599", date: "1 day ago", status: "completed" },
    { id: "4", company: "GrowthCo", plan: "Pro Employer", amount: "$249", date: "1 day ago", status: "pending" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Monetization
          </h1>
          <p className="text-muted-foreground">Manage pricing, subscriptions, and revenue</p>
        </div>
        <Button className="gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          Create New Plan
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 50} />
        ))}
      </div>

      <Tabs defaultValue="plans" className="space-y-6">
        <TabsList>
          <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
          <TabsTrigger value="coupons">Coupons & Discounts</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={plan.id}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subscribers</span>
                      <span className="font-semibold">{plan.subscribers}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Revenue</span>
                      <span className="font-semibold text-green-600">{plan.revenue}/mo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="coupons" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Create Coupon Code</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Coupon Code</Label>
                  <Input placeholder="e.g., SUMMER2024" />
                </div>
                <div className="space-y-2">
                  <Label>Discount Type</Label>
                  <Input placeholder="e.g., 20% or $50" />
                </div>
                <div className="space-y-2">
                  <Label>Usage Limit</Label>
                  <Input type="number" placeholder="e.g., 100" />
                </div>
                <div className="space-y-2">
                  <Label>Expiry Date</Label>
                  <Input type="date" />
                </div>
              </div>
              <Button className="mt-4 gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Coupon
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {coupons.map((coupon, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="gradient-primary text-lg px-3 py-1">{coupon.code}</Badge>
                        <Badge variant="secondary">{coupon.discount} off</Badge>
                      </div>
                      <div className="flex gap-6 text-sm text-muted-foreground">
                        <span>
                          Uses: {coupon.uses}/{coupon.limit || "∞"}
                        </span>
                        <span>Expires: {coupon.expires}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit2 className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Deactivate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{transaction.company}</p>
                      <p className="text-sm text-muted-foreground">{transaction.plan}</p>
                    </div>
                    <div className="text-right mr-4">
                      <p className="font-semibold text-lg">{transaction.amount}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                    <Badge className={transaction.status === "completed" ? "bg-green-600" : "bg-yellow-600"}>
                      {transaction.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}