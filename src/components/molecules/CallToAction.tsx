import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/Button";

export type CallToActionProps = {
	title: string;
	description: string;
	primary: { label: string; href: string };
	secondary: { label: string; href: string };
	imageSrc: string;
	imageAlt?: string;
};

export function CallToAction({
	title,
	description,
	primary,
	secondary,
	imageSrc,
	imageAlt = "",
}: CallToActionProps) {
	return (
		<section className="mx-auto max-w-6xl mt-10 mb-40 px-4 xl:px-0">
			<div className="grid items-center gap-8 sm:grid-cols-6">
				<div className="sm:col-span-2">
					<h2 className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
						{title}
					</h2>
					<p className="mt-3 mb-8 text-lg text-gray-600">{description}</p>
					<div className="flex flex-wrap gap-4">
						<Button asChild className="text-md">
							<Link href={primary.href}>{primary.label}</Link>
						</Button>
						<Button asChild className="text-md" variant="secondary">
							<Link href={secondary.href}>{secondary.label}</Link>
						</Button>
					</div>
				</div>
				<div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
					<Image
						aria-hidden
						alt={imageAlt}
						src={imageSrc}
						height={1000}
						width={1000}
						className="absolute inset-0 -z-10 rounded-2xl blur-xl"
					/>
					<Image
						alt={imageAlt}
						src={imageSrc}
						height={1000}
						width={1000}
						className="relative z-10 rounded-2xl"
					/>
				</div>
			</div>
		</section>
	);
}

export default CallToAction;
