import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { RocketIcon, UsersIcon, PenSquareIcon, MailIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col items-center justify-center p-4 md:p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 max-w-3xl"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Unleash Your Potential
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Join a thriving community of creators, explorers, and innovators. Discover tools, share ideas, and grow together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button size="lg" className="px-8 py-6 text-lg font-semibold rounded-xl shadow-lg">
            Get Started <RocketIcon className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {[
          {
            title: "Explore",
            description: "Discover curated resources, tutorials, and cutting-edge tools.",
            icon: <RocketIcon className="h-10 w-10 mb-4 text-blue-600" />,
            buttonText: "Browse Resources",
            delay: 0.3
          },
          {
            title: "Connect",
            description: "Engage with a supportive community of like-minded individuals.",
            icon: <UsersIcon className="h-10 w-10 mb-4 text-purple-600" />,
            buttonText: "Join Discussions",
            delay: 0.5
          },
          {
            title: "Create",
            description: "Share your projects and get feedback from experts.",
            icon: <PenSquareIcon className="h-10 w-10 mb-4 text-green-600" />,
            buttonText: "Start Creating",
            delay: 0.7
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: feature.delay }}
            whileHover={{ y: -5 }}
          >
            <Card className="rounded-xl shadow-lg border-0 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-8 flex flex-col items-center text-center">
                {feature.icon}
                <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Button variant="outline" className="rounded-lg px-6">
                  {feature.buttonText}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-16 w-full max-w-2xl"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex flex-col items-center text-center">
            <MailIcon className="h-12 w-12 mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay in the loop</h2>
            <p className="text-blue-100 mb-6 max-w-md">
              Subscribe to our newsletter for the latest updates, tips, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Input 
                placeholder="Your email address" 
                className="flex-1 bg-white/20 border-white/30 text-white placeholder-blue-200 rounded-lg h-12" 
              />
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-lg h-12 font-semibold shadow-md"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonial/Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {[
          { value: "10K+", label: "Active Members" },
          { value: "500+", label: "Resources" },
          { value: "24/7", label: "Support" },
          { value: "99%", label: "Satisfaction" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm"
          >
            <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}