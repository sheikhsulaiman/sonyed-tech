"use client";

import { PostList } from "@marketing/blogs/components/PostList";
import { Button } from "@ui/components/button";
import {} from "@ui/components/card";
import { allPosts } from "content-collections";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
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

			<PostList posts={latestPosts} showFilter={false} />
		</section>
	);
}
