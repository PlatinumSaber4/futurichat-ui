import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement actual form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Profile updated successfully");
      navigate("/chat");
    }, 1000);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto">
        <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
          <CardHeader>
            <CardTitle>Complete Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Purpose of Use</label>
                <Textarea
                  placeholder="Tell us how you plan to use our service..."
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Language</label>
                <Input required />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Complete Profile"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;