import type { IconType } from "react-icons";
// components/SocialLinks.tsx
import {
	FaEnvelope,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaWhatsapp,
	FaXTwitter,
} from "react-icons/fa6";

type SocialLink = {
	name: string;
	url: string;
	icon: IconType;
};

const socialLinks: SocialLink[] = [
	{
		name: "Email",
		url: "mailto:sonyedtech@gmail.com",
		icon: FaEnvelope,
	},
	{
		name: "GitHub",
		url: "https://github.com/sheikhsulaiman",
		icon: FaGithub,
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/sheikh-sulaiman",
		icon: FaLinkedin,
	},
	{
		name: "Facebook",
		url: "https://www.facebook.com/Sheikh.Sulaiman.Sony/",
		icon: FaFacebook,
	},
	{
		name: "Twitter",
		url: "https://twitter.com/sulaiman7473",
		icon: FaXTwitter,
	},
	{
		name: "WhatsApp",
		url: "https://wa.me/8801947197174",
		icon: FaWhatsapp,
	},
];

export default function SocialLinks() {
	return (
		<ul className="flex gap-4">
			{socialLinks.map(({ name, url, icon: Icon }) => (
				<li key={name}>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl text-primary-foreground"
					>
						<Icon />
					</a>
				</li>
			))}
		</ul>
	);
}
