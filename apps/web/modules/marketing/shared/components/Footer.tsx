import { LocaleLink } from "@i18n/routing";
import SocialLinks from "@marketing/shared/components/SocialLinks";
import { Logo } from "@shared/components/Logo";

export function Footer() {
	return (
		<footer className="border-t py-8 text-foreground/60 text-sm">
			<div className="container grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div>
					<Logo className="opacity-70 grayscale" />
					<p className="mt-3 text-sm opacity-70">
						© {new Date().getFullYear()} sonyedtech. All rights
						reserved.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<LocaleLink href="/projects" className="block">
						Projects
					</LocaleLink>
					<LocaleLink href="/blogs" className="block">
						Blogs
					</LocaleLink>
				</div>

				<div className="flex flex-col gap-2">
					<LocaleLink href="/contact" className="block">
						Contact
					</LocaleLink>
					<SocialLinks />
				</div>
			</div>
		</footer>
	);
}
