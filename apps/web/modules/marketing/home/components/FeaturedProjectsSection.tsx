"use client";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(Flip);

const projects = [
	{
		id: "img-1",
		src: "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg",
		alt: "Project 1",
	},
	{
		id: "img-2",
		src: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
		alt: "Project 2",
	},
	{
		id: "img-3",
		src: "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg",
		alt: "Project 3",
	},
	{
		id: "img-4",
		src: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg",
		alt: "Project 4",
	},
	{
		id: "img-5",
		src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
		alt: "Project 5",
	},
	{
		id: "img-6",
		src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
		alt: "Project 6",
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
	const itemsRef = useRef<HTMLDivElement[]>([]);

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
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative max-w-full overflow-x-hidden bg-linear-to-b from-0% from-card to-[50vh] to-background">
			<div className="absolute left-1/2 mt-32 z-10 ml-[-500px] h-[500px] w-[1000px] rounded-full bg-linear-to-r from-primary to-bg opacity-20 blur-[150px]" />
			<div className="container relative z-20 pb-12 text-center lg:pb-16">
				<div className="text-center mb-10">
					<h2 className="text-3xl font-bold">Featured Projects</h2>
					<p className="text-muted text-sm">
						A showcase of my best work
					</p>
				</div>
				<div
					ref={containerRef}
					className="gallery max-w-6xl mx-auto aspect-video p-4"
				>
					{projects.map((project, index) => (
						<figure
							key={project.id}
							data-id={project.id}
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
						</figure>
					))}
				</div>
			</div>
		</div>
	);
}
