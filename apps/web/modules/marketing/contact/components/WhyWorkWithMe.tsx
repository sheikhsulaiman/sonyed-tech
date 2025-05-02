"use client";

import { Card, CardContent } from "@ui/components/card";
import { CheckCircle2 } from "lucide-react";

const items = [
	"Full-stack development expertise (Web, Mobile, Games)",
	"Strong educational technology background",
	"Focused on innovation, usability, and future-proof solutions",
	"Seamless communication in English, Bengali, and Japanese",
];

export default function WhyWorkWithMe() {
	return (
		<section className="max-w-2xl mx-auto py-12 px-4 text-center">
			<h2 className="text-3xl font-bold mb-6">Why Work With Me?</h2>
			<Card className="shadow-lg">
				<CardContent className="p-6 space-y-4">
					{items.map((item, index) => (
						<div key={index} className="flex items-start gap-3">
							<CheckCircle2 className="text-green-600 mt-1" />
							<p className="text-left text-gray-700">{item}</p>
						</div>
					))}
				</CardContent>
			</Card>
			<p className="mt-8 text-lg text-muted-foreground">
				I can’t wait to explore how we can bring your ideas to life!
			</p>
		</section>
	);
}
