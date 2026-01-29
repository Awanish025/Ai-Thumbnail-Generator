import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Wand2, Palette, Users, Sliders, TrendingUp } from 'lucide-react';

const About = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-16 lg:px-24 xl:px-32 pb-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none' />
            <div className='absolute top-20 left-10 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none' />

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-16 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">About</h1>
                        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-400 mb-12">Thumblify</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Main Content */}
                        <div className="lg:col-span-2 space-y-6 text-gray-300 leading-relaxed font-light">
                            <p>
                                Thumblify is an AI-powered platform built to help creators design eye-catching,
                                high-converting YouTube thumbnails in seconds - without needing advanced design skills.
                            </p>
                            <p>
                                In today's crowded creator economy, first impressions decide everything. A strong thumbnail
                                can be the difference between getting ignored and getting clicked. Thumblify was created
                                to remove the guesswork and turn proven design principles into automated, intelligent visuals.
                            </p>
                            <p>
                                Our AI analyzes composition, color contrast, and visual hierarchy to help you generate
                                thumbnails that naturally attract attention in YouTube feeds and recommendations.
                            </p>

                            {showMore && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-6"
                                >
                                    <p>
                                        Whether you're a full-time YouTuber, a growing creator, a brand, or a marketing team,
                                        Thumblify helps you publish faster, stay visually consistent, and increase click-through rates
                                        - without slowing down your workflow.
                                    </p>
                                    <p>
                                        We believe great design shouldn't be locked behind expensive tools or steep learning curves.
                                        Thumblify exists to give every creator access to professional-quality thumbnails, powered by AI
                                        and refined by creative control.
                                    </p>
                                    <p>
                                        Thumblify is built around real-world creator workflows. Instead of starting from a blank canvas,
                                        you get intelligent thumbnail suggestions that are designed to perform — and the freedom to tweak
                                        every detail to match your channel's style and audience.
                                    </p>
                                    <p>
                                        From bold text layouts to optimized color contrast and subject emphasis, every generated thumbnail
                                        follows design patterns commonly used by top-performing content creators. Our goal is not just to
                                        make thumbnails look good, but to make them work.
                                    </p>
                                    <p>
                                        We also prioritize speed and simplicity. Thumblify eliminates repetitive design tasks so you can
                                        focus on what matters most: creating content, publishing consistently, and growing your channel
                                        with confidence.
                                    </p>
                                    <p>
                                        As the platform evolves, we're continuously improving our AI models, adding new customization options,
                                        and refining our tools based on creator feedback — ensuring Thumblify grows alongside your creative journey.
                                    </p>
                                    <p>
                                        At its core, Thumblify is more than a design tool. It's a growth companion built to help creators stand out,
                                        get noticed, and turn views into lasting audiences.
                                    </p>
                                </motion.div>
                            )}

                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="mt-4 font-medium text-white hover:text-pink-400 transition-colors focus:outline-none"
                            >
                                {showMore ? 'Show Less' : 'Show More'}
                            </button>
                        </div>

                        {/* Right Column: Why Choose Us Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-8">Why Choose Us?</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="mt-1">
                                            <Zap className="text-white w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Lightning Fast</h4>
                                            <p className="text-sm text-gray-400 mt-1">
                                                Generate professional thumbnails in seconds, not hours.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1">
                                            <Wand2 className="text-white w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">AI Powered</h4>
                                            <p className="text-sm text-gray-400 mt-1">
                                                Leverage state-of-the-art AI to optimize for clicks.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1">
                                            <Palette className="text-white w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Fully Customizable</h4>
                                            <p className="text-sm text-gray-400 mt-1">
                                                Edit every detail to match your brand's unique style.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Three Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <h4 className="text-lg font-bold mb-2">Built for Creators</h4>
                            <p className="text-sm text-gray-400">
                                Designed with real creator workflows in mind — from solo YouTubers to growing content teams.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <h4 className="text-lg font-bold mb-2">AI + Human Control</h4>
                            <p className="text-sm text-gray-400">
                                AI gives you the starting point. You stay in control with full customization and creative freedom.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <h4 className="text-lg font-bold mb-2">Focused on Results</h4>
                            <p className="text-sm text-gray-400">
                                Every feature is built to help improve visibility, engagement, and long-term channel growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
