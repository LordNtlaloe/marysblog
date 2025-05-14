import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { blogPosts } from '@/data/blogpost';

const Dashboard = () => {
    // Mock data
    const stats = [
        { title: 'Total Blog Posts', value: blogPosts.length, change: '+2 this week' },
        { title: 'Projects', value: '9', change: '+1 this month' },
        { title: 'Messages', value: '24', change: '5 unread' },
        { title: 'Total Views', value: '12.5k', change: '+8% from last month' },
    ];

    // Mock recent activities
    const recentActivities = [
        { action: 'New blog post published', date: '2 hours ago' },
        { action: 'New message received', date: '5 hours ago' },
        { action: 'Project "Office Design" updated', date: 'Yesterday' },
        { action: 'Profile information updated', date: '2 days ago' },
        { action: 'New comment on "The Future of UI Design"', date: '3 days ago' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xl">{stat.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <CardDescription>{stat.change}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Posts */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Recent Posts</CardTitle>
                        <CardDescription>Latest published blog posts</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {blogPosts.slice(0, 5).map((post) => (
                                <div key={post.id} className="flex items-start border-b pb-4 last:border-0 last:pb-0">
                                    <div className="w-12 h-12 bg-gray-200 mr-4 flex-shrink-0"></div>
                                    <div>
                                        <h3 className="font-medium">{post.title}</h3>
                                        <div className="text-sm text-gray-500 mt-1">
                                            <span>Published: {post.date}</span>
                                            <span className="mx-2">•</span>
                                            <span>Category: {post.category}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your latest actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentActivities.map((activity, index) => (
                                <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                                    <div className="text-sm font-medium">{activity.action}</div>
                                    <div className="text-xs text-gray-500 mt-1">{activity.date}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
