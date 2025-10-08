import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="gradient-wellness text-white py-6 px-4 card-shadow">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/20 hover:bg-white/30 text-white"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-white/90">Manage your account</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="card-shadow border-0 mb-6 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex items-center space-x-6 mb-8">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="gradient-primary text-white text-3xl font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold mb-1">John Doe</h2>
                <p className="text-muted-foreground">Member since Jan 2025</p>
              </div>
            </div>

            <Separator className="mb-6" />

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                <User className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">John Doe</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                <Mail className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                <Phone className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                <MapPin className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">123 Health Street, Wellness City</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                <Calendar className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">January 15, 1990</p>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                Edit Profile
              </Button>
              <Button
                variant="outline"
                className="w-full text-destructive hover:bg-destructive/10"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-shadow border-0 animate-slide-up">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24</div>
              <p className="text-sm text-muted-foreground">Orders Placed</p>
            </CardContent>
          </Card>

          <Card className="card-shadow border-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-secondary mb-2">12</div>
              <p className="text-sm text-muted-foreground">Lab Tests</p>
            </CardContent>
          </Card>

          <Card className="card-shadow border-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <p className="text-sm text-muted-foreground">Consultations</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
