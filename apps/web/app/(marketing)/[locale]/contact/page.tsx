import WhyWorkWithMe from "@marketing/contact/components/WhyWorkWithMe";
import { ContactForm } from "@marketing/home/components/ContactForm";
import SocialLinks from "@marketing/shared/components/SocialLinks";
import { config } from "@repo/config";
import { MailIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateMetadata() {
	const t = await getTranslations();
	return {
		title: t("contact.title"),
	};
}

export default async function ContactPage() {
	if (!config.contactForm.enabled) {
		redirect("/");
	}

	const t = await getTranslations();
	return (
		<div className="container max-w-2xl pt-32 pb-16">
			<div className="mb-4 flex justify-center">
				<div className="mx-auto flex flex-wrap items-center justify-center rounded-full border bg-card p-px px-4 py-1 font-normal text-highlight text-sm shadow-sm">
					<span className="flex items-center gap-2 rounded-full font-semibold">
						<MailIcon size={16} className="mr-2 text-primary" />
					</span>
					<Link href="mailto:sonyedtech@gmail.com">
						<span className="ml-1 block font-medium text-foreground/60">
							sonyedtech@gmail.com
						</span>
					</Link>
				</div>
			</div>
			<div className="mb-12 pt-8 text-center">
				<h1 className="mb-2 font-bold text-4xl leading-normal">
					{t("contact.title")}
				</h1>
				<p className="text-md opacity-50 max-w-xl mx-auto">
					{t("contact.description")}
				</p>
			</div>

			<div className="max-w-xl mx-auto">
				<ContactForm />
			</div>

			<WhyWorkWithMe />

			<div className="mx-auto w-full flex items-center justify-center">
				<SocialLinks />
			</div>
		</div>
	);
}
