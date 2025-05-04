"use client";

import { LocaleLink } from "@i18n/routing";
import { Card, CardContent, CardTitle } from "@ui/components/card";
import type { Post } from "content-collections";
import Image from "next/image";

export function PostListItem({ post }: { post: Post }) {
	const { title, excerpt, authorName, image, date, path, authorImage, tags } =
		post;

	return (
		<LocaleLink href={`/blogs/${post.path}`}>
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
					</div>
				</CardContent>
			</Card>
		</LocaleLink>
	);
}
