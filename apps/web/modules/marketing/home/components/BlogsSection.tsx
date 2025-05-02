"use client";

import { Button } from "@ui/components/button";
import { Card, CardContent, CardTitle } from "@ui/components/card";
import { allPosts } from "content-collections";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogsSection() {
	const latestPosts = allPosts
		.filter((post) => post.published)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.slice(0, 3);

	return (
		<section className="py-16 px-4 max-w-6xl mx-auto ">
			<div
				className="flex items-center
                justify-between mb-10 flex-col md:flex-row"
			>
				<div>
					<motion.h2
						className="text-3xl font-bold text-center mb-2"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						Scalable Solutions, Tangible Impact
					</motion.h2>
					<motion.p
						className="text-sm font-normal text-center md:text-start"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						Exploring the tech, trends, and transformations shaping
						the digital frontier. ✦
					</motion.p>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<Button size="lg" variant="link" asChild>
						<Link href="/blogs">
							View All Blogs
							<ArrowUpRightIcon className="ml-2 size-4" />
						</Link>
					</Button>
				</motion.div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{latestPosts.map((post, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.1, duration: 0.5 }}
						viewport={{ once: true }}
					>
						<Card className="hover:shadow-xl transition-shadow duration-300 h-full border overflow-clip">
							<CardContent className="p-0 overflow-hidden">
								<Image
									src={post.image || "images/blogs/cover.png"}
									alt={post.title}
									width={800}
									height={400}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6 flex flex-col justify-between h-full">
									<div>
										<CardTitle className="text-xl line-clamp-2">
											{post.title}
										</CardTitle>
										<p className="text-muted-foreground mt-2 text-sm line-clamp-2">
											{post.excerpt}
										</p>
									</div>
									<div className="mt-4">
										<Link href={`/blogs/${post.path}`}>
											<Button variant="outline">
												Read More
											</Button>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>

			<div className="mt-10 text-center md:hidden">
				<Link href="/blogs">
					<Button size="lg">View All Blogs</Button>
				</Link>
			</div>
		</section>
	);
}
