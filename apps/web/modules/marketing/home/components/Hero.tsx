import SocialLinks from "@marketing/shared/components/SocialLinks";
import { ToolsIUse } from "@marketing/shared/components/ToolsIUse";
import { Button } from "@ui/components/button";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TbBuildingSkyscraper } from "react-icons/tb";
import heroImageDark from "../../../../public/images/hero-image-dark.png";
import heroImage from "../../../../public/images/hero-image.png";

export function Hero() {
	return (
		<div className="relative max-w-full overflow-x-hidden bg-linear-to-b from-0% from-card to-[50vh] to-background">
			<div className="absolute left-1/2 z-10 ml-[-500px] h-[500px] w-[1000px] rounded-full bg-linear-to-r from-primary to-bg opacity-20 blur-[150px]" />
			<div className="container relative z-20 pt-36 pb-12 text-center lg:pb-16">
				<div className="max-w-3xl mx-auto flex flex-col items-center md:items-start justify-center gap-4">
					<Image
						src={"/images/profile.png"}
						height={150}
						width={150}
						className="rounded-full border-2 border-primary/75"
						alt="Picture of the author"
					/>
					<h1 className="max-w-3xl text-balance font-bold text-3xl lg:text-5xl">
						Sheikh Sulaiman Sony
					</h1>
					<div className="mb-4 flex justify-center">
						<div className="mx-auto flex flex-wrap items-center justify-center rounded-full border bg-card p-px px-4 py-1 font-normal text-highlight text-sm shadow-sm">
							<span className="flex items-center gap-2 rounded-full font-semibold">
								<span className="mr-2 text-primary animate-ping h-2 w-2 rounded-full bg-primary/50" />
							</span>
							<span className="ml-1 block font-medium text-foreground/60">
								Freelance Developer & Student
							</span>
						</div>
					</div>
					<div className="w-full flex flex-col items-center md:items-end justify-center -mt-6">
						<div className="flex items-center justify-center">
							<TbBuildingSkyscraper className="mr-2 text-secondary-foreground/60" />
							<p className="text-sm text-secondary-foreground/60">
								Dhaka, Bangladesh
							</p>
						</div>
						<span className="border border-primary w-full" />
					</div>
					<div className="flex items-start justify-between gap-2">
						<p className="text-center md:text-start text-balance text-foreground/60 text-lg">
							Hi! I&apos;m a Freelance Developer and a student of
							Educational Technology based in Dhaka, Bangladesh. I
							have a strong focus on Digital Transformation [DX]
							and specialize in building modern, efficient, and
							scalable websites and apps that help solve
							real-world problems. My work blends design,
							functionality, and innovation, offering end-to-end
							development services from concept to launch.
						</p>
					</div>
				</div>

				<div className="mt-6 flex flex-col items-center justify-between max-w-3xl mx-auto gap-3 md:flex-row">
					<Button size="lg" variant="link" asChild className="p-0">
						<Link href="/auth/login">
							Let&apos;s create something meaningful together.
							<ArrowUpRightIcon className="ml-2 size-4" />
						</Link>
					</Button>
					<SocialLinks />
				</div>
				<ToolsIUse />

				<div className="mx-auto mt-16 max-w-5xl rounded-2xl border bg-card/50 p-2 shadow-lg dark:shadow-foreground/10">
					<Image
						src={heroImage}
						alt="Our application"
						className="block rounded-xl dark:hidden"
						priority
					/>
					<Image
						src={heroImageDark}
						alt="Our application"
						className="hidden rounded-xl dark:block"
						priority
					/>
				</div>
			</div>
		</div>
	);
}
