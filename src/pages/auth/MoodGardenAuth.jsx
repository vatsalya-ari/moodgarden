import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Eye, EyeOff, LogIn, UserPlus, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function MoodgardenAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (!value) setPasswordStrength('');
    else if (value.length < 6) setPasswordStrength('Weak');
    else if (value.length < 10) setPasswordStrength('Moderate');
    else setPasswordStrength('Strong');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="rounded-2xl shadow-lg bg-white/70 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold text-indigo-700">
              {isLogin ? 'Welcome Back to Moodgarden' : 'Join Moodgarden'}
            </CardTitle>
            <p className="text-center text-sm text-gray-600 mt-1">
              {isLogin ? 'Log in to your mindful space' : 'Grow your wellness journey with us'}
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              {!isLogin && (
                <div>
                  <Input type="text" placeholder="Name (optional)" className="bg-white/80" />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input type="email" placeholder="Email" required className="pl-10 bg-white/80" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  required
                  className="pl-10 pr-10 bg-white/80"
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {!isLogin && passwordStrength && (
                <p className={`text-sm ${
                  passwordStrength === 'Weak' ? 'text-red-500' :
                  passwordStrength === 'Moderate' ? 'text-yellow-600' :
                  'text-green-600'
                }`}>
                  Password strength: {passwordStrength}
                </p>
              )}

              <Button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white">
                {isLogin ? <LogIn className="mr-2 h-4 w-4" /> : <UserPlus className="mr-2 h-4 w-4" />}
                {isLogin ? 'Log In' : 'Sign Up'}
              </Button>

              <div className="flex items-center justify-center text-sm text-gray-500 mt-2">
                <span>or continue with</span>
              </div>
              <div className="flex justify-center space-x-4 mt-2">
                <Button variant="outline" className="w-1/2">Google</Button>
                <Button variant="outline" className="w-1/2">Apple</Button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                By continuing, you agree to our <a href="#" className="underline">Privacy Policy</a>.
              </p>

              <div className="text-center text-sm text-indigo-600 mt-3">
                <button type="button" onClick={() => setIsLogin(!isLogin)} className="underline">
                  {isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

