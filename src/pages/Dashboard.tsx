import { useNavigate } from "react-router-dom";
import { Pill, FlaskConical, Stethoscope, Activity, Wallet, Bell, User } from "lucide-react";
import DashboardCard from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Order Medicines",
      description: "Quick delivery to your doorstep",
      icon: Pill,
      path: "/medicines",
      gradient: "primary" as const,
    },
    {
      title: "Book Lab Tests",
      description: "Home sample collection available",
      icon: FlaskConical,
      path: "/lab-tests",
      gradient: "secondary" as const,
    },
    {
      title: "Doctor Consultation",
      description: "Video/chat with specialists",
      icon: Stethoscope,
      path: "/doctors",
      gradient: "wellness" as const,
    },
    {
      title: "Health Tracker",
      description: "Monitor BP, sugar, and more",
      icon: Activity,
      path: "/health-tracker",
      gradient: "primary" as const,
    },
    {
      title: "Expense Tracker",
      description: "Track your medical spending",
      icon: Wallet,
      path: "/expenses",
      gradient: "secondary" as const,
    },
    {
      title: "Reminders",
      description: "Never miss your medicines",
      icon: Bell,
      path: "/reminders",
      gradient: "wellness" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-wellness text-white py-6 px-4 card-shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1">Welcome back!</h1>
            <p className="text-white/90">Let's take care of your health today</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/20 hover:bg-white/30 text-white"
            onClick={() => navigate("/profile")}
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-up"
            >
              <DashboardCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
                onClick={() => navigate(feature.path)}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
