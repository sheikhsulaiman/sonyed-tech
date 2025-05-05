import BlogsSection from "@marketing/home/components/BlogsSection";
import { FaqSection } from "@marketing/home/components/FaqSection";
import { FeaturedProjects } from "@marketing/home/components/FeaturedProjects";
import { Features } from "@marketing/home/components/Features";
import { Hero } from "@marketing/home/components/Hero";
import { PricingSection } from "@marketing/home/components/PricingSection";
import { Workflow } from "@marketing/home/components/Workflow";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<Hero />
			<FeaturedProjects />
			<Workflow />
			<BlogsSection />
			<Features />
			<PricingSection />
			<FaqSection />
			{/* <Newsletter /> */}
		</>
	);
}
