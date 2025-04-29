import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";
import "cropperjs/dist/cropper.css";

export const metadata: Metadata = {
	title: {
		absolute: "sonyedtech.nextjs - Application",
		default: "sonyedtech.nextjs- Application",
		template: "%s | sonyedtech.nextjs - Application",
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return children;
}
