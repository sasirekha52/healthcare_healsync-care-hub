import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const mockData = [
  { date: "Jan 1", bp: 120, sugar: 95 },
  { date: "Jan 5", bp: 118, sugar: 92 },
  { date: "Jan 10", bp: 122, sugar: 98 },
  { date: "Jan 15", bp: 119, sugar: 94 },
  { date: "Jan 20", bp: 121, sugar: 96 },
  { date: "Jan 25", bp: 117, sugar: 91 },
  { date: "Jan 30", bp: 120, sugar: 95 },
];

const HealthTracker = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddReading = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reading added successfully!");
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-primary text-white py-6 px-4 card-shadow">
        <div className="max-w-6xl mx-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/20 hover:bg-white/30 text-white"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Health Tracker</h1>
            <p className="text-white/90">Monitor your vitals</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="gradient-primary border-0"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Reading
          </Button>
        </div>

        {showAddForm && (
          <Card className="card-shadow border-0 mb-6 animate-slide-up">
            <CardHeader>
              <CardTitle>Add New Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddReading} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bp">Blood Pressure (systolic)</Label>
                  <Input id="bp" type="number" placeholder="120" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sugar">Blood Sugar (mg/dL)</Label>
                  <Input id="sugar" type="number" placeholder="95" />
                </div>
                <div className="flex items-end">
                  <Button type="submit" className="w-full gradient-secondary border-0">
                    Save Reading
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-shadow border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                Blood Pressure Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="bp"
                    stroke="hsl(217 84% 50%)"
                    strokeWidth={3}
                    dot={{ fill: "hsl(217 84% 50%)", r: 4 }}
                    name="BP (mmHg)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="card-shadow border-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                Blood Sugar Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sugar"
                    stroke="hsl(134 52% 44%)"
                    strokeWidth={3}
                    dot={{ fill: "hsl(134 52% 44%)", r: 4 }}
                    name="Sugar (mg/dL)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="card-shadow border-0 animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Average BP</p>
                  <p className="text-3xl font-bold text-primary">119/78</p>
                  <p className="text-sm text-secondary mt-1">Normal Range</p>
                </div>
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                  ✓
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow border-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Average Sugar</p>
                  <p className="text-3xl font-bold text-secondary">94 mg/dL</p>
                  <p className="text-sm text-secondary mt-1">Normal Range</p>
                </div>
                <div className="w-16 h-16 rounded-full gradient-secondary flex items-center justify-center text-white text-2xl font-bold">
                  ✓
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HealthTracker;
