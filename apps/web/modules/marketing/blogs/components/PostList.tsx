"use client";
import { PostListItem } from "@marketing/blogs/components/PostListItem";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import type { Post } from "content-collections";
import { motion } from "framer-motion";
import { useState } from "react";

export const PostList = ({
	posts,
	showFilter,
}: {
	posts: Post[];
	showFilter: boolean;
}) => {
	const publishedPosts = posts.filter((post) => post.published);
	const tags = Array.from(
		new Set(publishedPosts.flatMap((post) => post.tags || [])),
	);
	const [selectedTag, setSelectedTag] = useState<string | null>(null);

	const [search, setSearch] = useState("");

	const filteredPosts = publishedPosts.filter((post) => {
		const matchesTag = selectedTag
			? post.tags?.includes(selectedTag)
			: true;
		const matchesSearch =
			post.title.toLowerCase().includes(search.toLowerCase()) ||
			(post.excerpt ?? "").toLowerCase().includes(search.toLowerCase());
		return matchesTag && matchesSearch;
	});
	return showFilter ? (
		<div className="container max-w-6xl pb-16">
			<div className="w-full flex flex-col md:flex-row items-start justify-center md:justify-between border-b mb-6 py-4">
				<div className="flex flex-wrap justify-start gap-2">
					<Button
						variant={selectedTag === null ? "primary" : "outline"}
						className="cursor-pointer"
						onClick={() => setSelectedTag(null)}
					>
						All
					</Button>
					{tags.map((tag) => (
						<Button
							key={tag}
							variant={
								selectedTag === tag ? "primary" : "outline"
							}
							className="cursor-pointer"
							onClick={() => setSelectedTag(tag)}
						>
							{tag}
						</Button>
					))}
				</div>
				<Input
					type="text"
					placeholder="Search posts..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full md:w-sm mt-4 md:mt-0"
				/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredPosts.map((post, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.1, duration: 0.5 }}
						viewport={{ once: true }}
					>
						<PostListItem post={post} />
					</motion.div>
				))}
			</div>
		</div>
	) : (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{posts.map((post, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: i * 0.1, duration: 0.5 }}
					viewport={{ once: true }}
				>
					<PostListItem post={post} />
				</motion.div>
			))}
		</div>
	);
};
