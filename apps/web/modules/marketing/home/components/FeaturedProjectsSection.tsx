"use client";
import { Button } from "@ui/components/button";
import { cn } from "@ui/lib";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(Flip, ScrollTrigger);

const projects = [
	{
		id: "img-1",
		src: "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg",
		alt: "Project 1",
		title: "Project 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		caseStudyUrl: "/projects/project1",
		liveDemoUrl: "https://example.com/project1",
	},
	{
		id: "img-2",
		src: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
		alt: "Project 2",
		title: "Project 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		caseStudyUrl: "/projects/project2",
		liveDemoUrl: "https://example.com/project2",
	},
	{
		id: "img-3",
		src: "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg",
		alt: "Project 3",
		title: "Project 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		caseStudyUrl: "/projects/project3",
		liveDemoUrl: "https://example.com/project3",
	},
	{
		id: "img-4",
		src: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
		alt: "Project 4",
		title: "Project 4",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		caseStudyUrl: "/projects/project4",
		liveDemoUrl: "https://example.com/project4",
	},
	{
		id: "img-5",
		src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
		alt: "Project 5",
		title: "Project 5",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		caseStudyUrl: "/projects/project5",
		liveDemoUrl: "https://example.com/project5",
	},
	{
		id: "img-6",
		src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
		alt: "Project 6",
		title: "Project 6",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		caseStudyUrl: "/projects/project6",
		liveDemoUrl: "https://example.com/project6",
	},
	// { id: "img-1", src: "/images/projects/project1.jpg", alt: "Project 1" },
	// { id: "img-2", src: "/images/projects/project2.jpg", alt: "Project 2" },
	// { id: "img-3", src: "/images/projects/project3.jpg", alt: "Project 3" },
	// { id: "img-4", src: "/images/projects/project4.jpg", alt: "Project 4" },
	// { id: "img-5", src: "/images/projects/project5.jpg", alt: "Project 5" },
	// { id: "img-6", src: "/images/projects/project6.jpg", alt: "Project 6" },
];

export function FeaturedProjects() {
	const containerRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const itemsRef = useRef<HTMLDivElement[]>([]);
	const [bigId, setBigId] = useState(projects[0].id);

	useEffect(() => {
		const interval = setInterval(() => {
			const figures = itemsRef.current;
			if (!figures.length) {
				return;
			}

			const state = Flip.getState(figures);

			// Reorder dataset.grid attributes manually (rotate left)
			const first = figures[0].dataset.grid;
			for (let i = 0; i < figures.length - 1; i++) {
				if (figures[i + 1].dataset.grid) {
					figures[i].dataset.grid = figures[i + 1].dataset.grid;
				}
			}

			if (first) {
				figures[figures.length - 1].dataset.grid = first;
			}

			Flip.from(state, {
				absolute: true,
				ease: "power1.inOut",
				duration: 1,
				stagger: 0.02,
				prune: true,
			});

			// ✅ Update the bigId based on who is now data-grid="img-1"
			const bigFigure = Array.from(figures).find(
				(fig) => fig.dataset.grid === "img-1",
			);
			if (bigFigure) {
				const newBigId = bigFigure.getAttribute("data-id");
				if (newBigId) {
					setBigId(newBigId);
				}
			}
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!headingRef.current) {
			return;
		}

		gsap.to(
			headingRef.current,
			// { scale: 4, opacity: 0.2 },
			{
				scale: 1,
				opacity: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: headingRef.current,
					start: "top 90%",
					end: "bottom 50%",
					scrub: true,
				},
			},
		);
	}, []);

	return (
		<div className="relative max-w-full overflow-x-hidden bg-linear-to-b from-0% from-card to-[50vh] to-background">
			<div className="absolute left-1/2 mt-32 z-10 ml-[-500px] h-[500px] w-[1000px] rounded-full bg-linear-to-r from-primary to-bg opacity-20 blur-[150px]" />
			<div className="container relative z-20 py-16 text-center lg:pb-16">
				<div className="text-center mb-10">
					<h1
						ref={headingRef}
						className="text-3xl md:text-6xl font-bold scale-400 opacity-10 py-4"
					>
						Selected Projects
					</h1>

					<motion.h6
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className="font-bold text-center font-poppins text-sm md:text-lg"
					>
						Take a look at some of my projects ✦
					</motion.h6>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="text-center max-w-xl font-roboto text-muted-foreground mx-auto font-space-grotesk"
					>
						Each project highlights my innovative journey and
						commitment to transforming concepts into functional and
						impactful software solutions.
					</motion.p>
				</div>
				<div
					ref={containerRef}
					className="gallery max-w-6xl mx-auto aspect-video p-4"
				>
					{projects.map((project, index) => (
						<figure
							key={project.id}
							data-id={project.id}
							className={`relative group overflow-hidden rounded-lg ${project.id === bigId ? "is-big" : ""}`}
							data-grid={`img-${index + 1}`}
							ref={(el) => {
								if (el) {
									itemsRef.current[index] =
										el as HTMLDivElement;
								}
							}}
						>
							<Image
								src={project.src}
								alt={project.alt}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
							{/* Overlay for big image */}
							<div
								// ref={overlayRef}
								className={cn(
									"absolute inset-0 z-10 flex flex-col justify-end p-6 text-white bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-opacity duration-500",
									{
										"opacity-70 pointer-events-auto":
											bigId === project.id,
										"opacity-0 group-hover:opacity-70 group-hover:pointer-events-auto":
											bigId !== project.id,
									},
								)}
							>
								<h3 className="text-xl font-bold mb-2">
									{project.title}
								</h3>
								<p className="text-sm mb-4">
									{project.description}
								</p>
								<div className="flex gap-3">
									<a
										href={project.caseStudyUrl}
										className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
									>
										Case Study
									</a>
									<a
										href={project.liveDemoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
									>
										Live Demo
									</a>
								</div>
							</div>
						</figure>
					))}
				</div>
				<div className="mt-6 flex flex-col items-center justify-between max-w-6xl mx-auto gap-3 md:flex-row">
					<Button
						size="lg"
						variant={"outline"}
						asChild
						className="md:ml-4"
					>
						<Link href="/projects">
							All Projects
							<ArrowUpRightIcon className="ml-2 size-4" />
						</Link>
					</Button>
					<Button
						size="lg"
						variant="link"
						className="text-sm md:text-lg"
						asChild
					>
						<Link href="/contact">
							Let&apos;s create something meaningful together.
							<ArrowUpRightIcon className="ml-2 size-4 hidden md:block" />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
