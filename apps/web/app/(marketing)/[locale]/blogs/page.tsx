// import { PostListItem } from "@marketing/blogs/components/PostListItem";
// import { allPosts } from "content-collections";
// import { getLocale, getTranslations } from "next-intl/server";

// export async function generateMetadata() {
// 	const t = await getTranslations();
// 	return {
// 		title: t("blog.title"),
// 		description:
// 			"Explore articles and insights on educational technology, digital transformation, and software development.",
// 	};
// }

// export default async function BlogListPage() {
// 	const locale = await getLocale();
// 	const t = await getTranslations();

// 	return (
// 		<div className="container max-w-6xl pt-32 pb-16">
// 			<div className="mb-12 pt-8 text-center">
// 				<h1 className="mb-2 font-bold text-5xl">{t("blog.title")}</h1>
// 				<p className="text-lg opacity-50">{t("blog.description")}</p>
// 			</div>

// 			<div className="grid gap-8 md:grid-cols-2">
// 				{allPosts
// 					.filter((post) => post.published && locale === post.locale)
// 					.sort(
// 						(a, b) =>
// 							new Date(b.date).getTime() -
// 							new Date(a.date).getTime(),
// 					)
// 					.map((post) => (
// 						<PostListItem post={post} key={post.path} />
// 					))}
// 			</div>
// 		</div>
// 	);
// }

import { PostList } from "@marketing/blogs/components/PostList";

import { allPosts } from "content-collections";

export default function BlogsPage() {
	const posts = allPosts.filter((post) => post.published);

	return (
		<main>
			{/* Hero Section */}

			<div className="relative max-w-full overflow-x-hidden bg-linear-to-b from-0% from-card to-[50vh] to-background">
				<div className="absolute left-1/2 z-10 ml-[-500px] h-[250px] w-[500px] rounded-full bg-linear-to-r from-primary to-bg opacity-20 blur-[150px]" />
				<div className="container relative z-20 pt-36 pb-12 text-center lg:pb-16">
					<div className="text-center max-w-3xl mx-auto">
						<h1 className="text-4xl md:text-5xl font-bold text-foreground">
							Insights, Ideas & Innovation
						</h1>
						<p className="text-muted-foreground mt-4 text-lg">
							Read blog posts about educational technology,
							digital transformation, and software development.
						</p>
					</div>
				</div>
			</div>

			{/* Posts */}
			<PostList posts={posts} showFilter />
		</main>
	);
}
