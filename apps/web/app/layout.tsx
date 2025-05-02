import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";
import "cropperjs/dist/cropper.css";

export const metadata: Metadata = {
	title: {
		absolute:
			"Sony Ed-Tech | Educational Technology Enthusiast & Freelance Developer",
		default: "Sony Ed-Tech",
		template: "%s | Sony Ed-Tech",
	},
	description:
		"I’m a Freelance Developer and Educational Technology student from Bangladesh, creating web and mobile apps that empower learning and drive digital transformation.",
	keywords: [
		"Educational Technology",
		"Digital Transformation",
		"EdTech Developer",
		"Freelance Developer Bangladesh",
		"Web App Development",
		"Mobile App Development",
		"Learning Platforms",
		"Interactive Education Tools",
		"Educational Software",
		"Gamified Learning",
		"LMS Developer",
		"eLearning Developer",
	],
	openGraph: {
		title: "Educational Technology Enthusiast & Freelance Developer",
		description:
			"Empowering learning through web and mobile apps focused on digital transformation. Explore my projects in EdTech, app development, and more.",
		url: "https://www.sonyed.tech",
		siteName: "Your Name | Portfolio",
		images: [
			{
				url: "https://www.sonyed.tech/images/profile.png",
				width: 1200,
				height: 630,
				alt: "Portfolio Preview Image",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Freelance Developer | Digital Transformation in Education",
		description:
			"Creating meaningful digital tools for education and learning.",
		images: ["https://www.sonyed.tech/images/profile.png"],
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return children;
}
