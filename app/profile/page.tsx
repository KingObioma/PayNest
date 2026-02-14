'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Badge from '@/components/ui/Badge';
import { user } from '@/lib/mock-data';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Shield,
  Key,
  Bell,
  Camera,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save to the backend
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            My Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center">
                {/* Avatar */}
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto">
                    {user.name.charAt(0)}
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>

                {/* Name and Email */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
                  {user.name}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {user.email}
                </p>

                {/* Verification Badge */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  {user.verified ? (
                    <Badge variant="success" className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="warning" className="flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Not Verified
                    </Badge>
                  )}
                </div>

                {/* Member Since */}
                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Member since {user.joined}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Settings Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Personal Information
                  </h3>
                </div>
                {!isEditing ? (
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                    Edit
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                      Save
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={!isEditing}
                    icon={<User className="w-5 h-5" />}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={!isEditing}
                    icon={<Mail className="w-5 h-5" />}
                  />
                </div>
                <Input
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!isEditing}
                  icon={<Phone className="w-5 h-5" />}
                />
                {isEditing && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      This is a demo. Changes will not be saved.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Security
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <Key className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Password</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Last changed 30 days ago
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Add an extra layer of security
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Notifications
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive email updates about your transactions
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">SMS Notifications</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive SMS alerts for important activities
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive push notifications on your device
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
