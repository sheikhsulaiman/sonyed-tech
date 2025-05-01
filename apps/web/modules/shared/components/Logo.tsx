import { cn } from "@ui/lib";
import Image from "next/image";

export function Logo({
	withLabel = true,
	className,
}: {
	className?: string;
	withLabel?: boolean;
}) {
	return (
		<span
			className={cn(
				"flex items-center font-semibold text-foreground leading-none",
				className,
			)}
		>
			<Image
				src="/images/icon.png"
				alt="sonyed.tech"
				height={28}
				width={28}
			/>
			{withLabel && (
				<span className="text-lg font-space-grotesk">
					<span className="border-primary border-l-2 mx-2" />
					sony<span className="text-primary">ed</span>.tech
				</span>
			)}
		</span>
	);
}
