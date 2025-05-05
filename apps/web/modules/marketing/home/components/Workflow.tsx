import { Timeline } from "@ui/components/timeline";
import React from "react";

export function Workflow() {
	const data = [
		{
			title: "The Problem Discovery Part",
			content: (
				<div>
					<p className="text-primary text-md md:text-lg font-normal mb-8">
						Strategic Planning and Research
					</p>
					<div>
						<ul className="mt-4">
							<li className="border rounded-md p-4 shadow-sm my-4 bg-primary/5">
								<div>
									<h2 className="text-3xl font-montserrat font-bold my-2">
										Problem Definition & Goal Setting
									</h2>
								</div>
								<p className="text-muted-foreground font-space-grotesk">
									I begin by fully understanding the core
									problem you&apos;re solving and the unique
									needs of your target audience. This ensures
									we set clear, measurable objectives that
									align with your business goals.
								</p>
							</li>
							<li className="border rounded-md p-4 shadow-sm my-4 bg-primary/5">
								<h2 className="text-3xl font-montserrat font-bold my-2">
									Market & Competitor Analysis
								</h2>
								<p className="text-muted-foreground font-space-grotesk">
									Through thorough research, I evaluate your
									industry, competitors, and current market
									trends to help define your product&apos;s
									unique value proposition.
								</p>
							</li>
							<li className="border rounded-md p-4 shadow-sm my-4 bg-primary/5">
								<h2 className="text-3xl font-montserrat font-bold my-2">
									Technical & Functional Blueprint
								</h2>
								<p className="text-muted-foreground font-space-grotesk">
									I work with you to determine the technical
									requirements, including the choice of
									technology stack, integrations, and future
									scalability, setting a solid foundation for
									development.
								</p>
							</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			title: "The Core Part",
			content: (
				<div>
					<p className="text-primary text-md md:text-lg font-normal mb-8">
						Making everything look good and work well
					</p>

					<div>
						<ul className="mt-4">
							<li className="border rounded-md p-4 shadow-sm my-4 bg-primary/5">
								<h2 className="text-3xl font-montserrat font-bold my-2">
									Wireframing & Prototyping
								</h2>
								<p className="text-muted-foreground font-space-grotesk">
									I create intuitive wireframes and prototypes
									to map out your product&apos;s user
									experience (UX) and design flow. These
									initial designs help visualize functionality
									and refine user interactions before
									development begins.
								</p>
							</li>
							<li className="border rounded-md p-4 shadow-sm my-4 bg-primary/5">
								<h2 className="text-3xl font-montserrat font-bold my-2">
									User-Centered UI/UX Design
								</h2>
								<p className="text-muted-foreground font-space-grotesk">
									Focusing on user-friendly design, I craft
									visually appealing interfaces that
									prioritize usability and accessibility,
									ensuring your product provides an
									exceptional experience across devices.
								</p>
							</li>
							<li className="border rounded-md p-4 shadow-sm my-4 bg-primary/5">
								<h2 className="text-3xl font-montserrat font-bold my-2">
									Full-Stack Development
								</h2>
								<p className="text-muted-foreground font-space-grotesk">
									I deliver robust and scalable web and mobile
									solutions by developing both front-end
									(UI/UX) and back-end (server, database, API)
									components. My development approach is
									iterative, using agile methodologies to
									ensure continuous improvement and
									flexibility.
								</p>
							</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			title: "The Final Part",
			content: (
				<div>
					<p className="text-primary text-md md:text-lg font-normal mb-4">
						Testing, Launch & Continuous Optimization
					</p>

					<div>
						<ul className="mt-12">
							<li className="border rounded-md p-4 shadow-sm my-4 bg-primary/5">
								<h2 className="text-3xl font-montserrat font-bold my-2">
									Comprehensive QA Testing
								</h2>
								<p className="text-muted-foreground font-space-grotesk">
									I rigorously test the product to ensure
									it&apos;s bug-free, secure, and performs
									seamlessly under various conditions. This
									includes both automated and manual testing
									to guarantee quality.
								</p>
							</li>
							<li className="border rounded-md p-4 shadow-sm my-4 bg-primary/5">
								<h2 className="text-3xl font-montserrat font-bold my-2">
									Smooth Deployment & Launch
								</h2>
								<p className="text-muted-foreground font-space-grotesk">
									I manage the deployment process, ensuring a
									smooth, timely launch across all platforms,
									whether it&apos;s a web server or app store
									release, with minimal disruption.
								</p>
							</li>
							<li className="border rounded-md p-4 shadow-sm my-4 bg-primary/5">
								<h2 className="text-3xl font-montserrat font-bold my-2">
									Post-Launch Support & Iteration
								</h2>
								<p className="text-muted-foreground font-space-grotesk">
									After launch, I provide ongoing monitoring,
									support, and regular updates based on user
									feedback. I use real-time data to
									continuously optimize the product, ensuring
									it remains relevant and responsive to your
									users&apos; evolving needs.
								</p>
							</li>
						</ul>
					</div>
				</div>
			),
		},
	];
	return (
		<section className="container mx-auto px-4 md:px-8 lg:px-10">
			<div className="h-auto w-full">
				<div className="inset-0 w-full h-auto">
					<Timeline data={data} />
				</div>
			</div>
		</section>
	);
}
