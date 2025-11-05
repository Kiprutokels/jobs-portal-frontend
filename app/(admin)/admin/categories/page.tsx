"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit2, Trash2, Tag } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Categories() {
  const { toast } = useToast();
  const [newCategory, setNewCategory] = useState("");

  const categories = [
    { id: "1", name: "Engineering", jobCount: 45, icon: "⚙️" },
    { id: "2", name: "Design", jobCount: 23, icon: "🎨" },
    { id: "3", name: "Marketing", jobCount: 34, icon: "📢" },
    { id: "4", name: "Sales", jobCount: 28, icon: "💼" },
    { id: "5", name: "Product Management", jobCount: 18, icon: "📊" },
    { id: "6", name: "Customer Support", jobCount: 15, icon: "💬" },
    { id: "7", name: "Human Resources", jobCount: 12, icon: "👥" },
    { id: "8", name: "Finance & Accounting", jobCount: 19, icon: "💰" },
    { id: "9", name: "Operations", jobCount: 21, icon: "🔧" },
    { id: "10", name: "Data Science", jobCount: 26, icon: "📈" },
  ];

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      toast({
        title: "Category Added",
        description: `"${newCategory}" has been added successfully.`,
      });
      setNewCategory("");
    }
  };

  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Category Management
        </h1>
        <p className="text-muted-foreground">Manage job categories and classifications</p>
      </div>

      <Card className="shadow-card animate-fade-in" style={{ animationDelay: "100ms" }}>
        <CardHeader>
          <CardTitle>Add New Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              placeholder="Enter category name..."
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddCategory()}
            />
            <Button onClick={handleAddCategory} className="gradient-primary">
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Card
            key={category.id}
            className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${(index + 2) * 30}ms` }}
          >
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.jobCount} jobs</p>
                  </div>
                </div>
                <Badge variant="secondary">
                  <Tag className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit2 className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="destructive" size="sm" className="flex-1">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}