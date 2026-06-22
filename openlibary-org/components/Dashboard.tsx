"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  ShoppingCart,
  Heart,
  User,
  LayoutDashboard,
  Settings,
  LogOut,
  BarChart3,
  TrendingUp,
  Clock
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const monthlyData = [
  { name: 'Jan', books: 12, sales: 1500 },
  { name: 'Feb', books: 19, sales: 2100 },
  { name: 'Mar', books: 15, sales: 1800 },
  { name: 'Apr', books: 22, sales: 2400 },
  { name: 'May', books: 28, sales: 3100 },
  { name: 'Jun', books: 25, sales: 2800 }
];

const genreData = [
  { name: 'Fiction', value: 40, color: '#f59e0b' },
  { name: 'Biography', value: 25, color: '#d97706' },
  { name: 'Educational', value: 20, color: '#b45309' },
  { name: 'History', value: 15, color: '#92400e' }
];

const recentOrders = [
  { id: 1, title: 'The Spirit of Danfo', date: '2024-06-18', status: 'Delivered' },
  { id: 2, title: 'Believers', date: '2024-06-15', status: 'Shipped' },
  { id: 3, title: 'Percy Jackson', date: '2024-06-10', status: 'Processing' }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white antialiased">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                  <User className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">John Doe</h3>
                  <p className="text-sm text-neutral-500">Premium Member</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {[
                  { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
                  { id: 'orders', icon: ShoppingCart, label: 'My Orders' },
                  { id: 'wishlist', icon: Heart, label: 'Wishlist' },
                  { id: 'settings', icon: Settings, label: 'Settings' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeTab === item.id
                        ? 'bg-amber-500 text-white'
                        : 'text-neutral-700 hover:bg-slate-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all mt-4">
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Logout</span>
                </button>
              </nav>
            </div>
          </motion.aside>

          <main className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-neutral-600">Here's what's happening with your book journey.</p>
            </motion.div>

            {activeTab === 'overview' && (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Books Read', value: 42, icon: BookOpen, color: 'bg-amber-500' },
                    { label: 'Orders', value: 15, icon: ShoppingCart, color: 'bg-orange-500' },
                    { label: 'Wishlist', value: 8, icon: Heart, color: 'bg-rose-500' },
                    { label: 'Reading Time', value: '24h', icon: Clock, color: 'bg-blue-500' }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                      <p className="text-neutral-500">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                  >
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-amber-500" />
                      Monthly Activity
                    </h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={monthlyData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="name" stroke="#6b7280" />
                          <YAxis stroke="#6b7280" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#fff',
                              borderRadius: '8px',
                              border: '1px solid #e5e7eb',
                              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                            }}
                          />
                          <Line type="monotone" dataKey="books" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', r: 4 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                  >
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-amber-500" />
                      Genres
                    </h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={genreData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="name" stroke="#6b7280" />
                          <YAxis stroke="#6b7280" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#fff',
                              borderRadius: '8px',
                              border: '1px solid #e5e7eb',
                              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                            }}
                          />
                          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                            {genreData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                >
                  <h3 className="text-xl font-bold mb-6">Recent Orders</h3>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                        <div>
                          <p className="font-semibold">{order.title}</p>
                          <p className="text-sm text-neutral-500">{order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'Shipped'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}

            {activeTab === 'orders' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold mb-6">My Orders</h3>
                <p className="text-neutral-500">Your order history will appear here.</p>
              </motion.div>
            )}

            {activeTab === 'wishlist' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold mb-6">Wishlist</h3>
                <p className="text-neutral-500">Add books to your wishlist!</p>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold mb-6">Settings</h3>
                <p className="text-neutral-500">Manage your account settings here.</p>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}