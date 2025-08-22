import { CallToAction } from "@/components/ui/CallToAction";
import FeatureDivider from "@/components/ui/FeatureDivider";
import Features, { type FeaturesProps } from "@/components/ui/Features";
import { Hero } from "@/components/ui/Hero";
import { MapSection } from "@/components/ui/Map/Map";
import { SolarAnalytics } from "@/components/ui/SolarAnalytics";
import Testimonial from "@/components/ui/Testimonial";
import {
	RiDropFill,
	RiNavigationFill,
	RiPieChartFill,
	RiRobot3Fill,
} from "@remixicon/react";

export default function Home() {
	const hero = {
		badgeLabel: "News",
		badgeText: "Smart Irrigation System Launch",
		badgeHref: "#",
		titleTopLine: "Autonomy for",
		titleBottomLine: "every Farm",
		subtitle:
			"Revolutionizing agriculture with AI-powered sensors, drones, and automation for sustainable and efficient farming.",
		ctaLabel: "Automate now",
		ctaHref: "#",
	};

	const features: FeaturesProps = {
		blocks: [
			{
				eyebrow: "Smart Farming Solutions",
				title: "A network of autonomous systems for complete farm monitoring",
				description:
					"Deploy intelligent monitoring and automated response systems across your fields, irrigation networks, and aerial operations with our integrated platform.",
			},
			{
				eyebrow: "Precision Agriculture",
				title: "Turn every acre into a data-driven powerhouse",
				description:
					"Revolutionize your farming operation with edge-computing AI that transforms raw field data into actionable insights in real-time. Make informed decisions faster, reduce resource waste, and maximize yields.",
			},
			{
				eyebrow: "Easy Expansion",
				title: "Scale your smart farm with plug-and-play simplicity",
				description:
					"Add new sensors and capabilities to your farm network with zero setup required. Our systems automatically connect and coordinate with each other.",
			},
		],
	};

	const testimonial = {
		backgroundSrc: "/images/field.png",
		backgroundAlt: "field background",
		foregroundSrc: "/images/drone.png",
		foregroundAlt: "drone",
		quoteStrong: "Solar transformed our environmental monitoring capabilities.",
		quoteRest:
			"Their autonomous network provides real-time data on forest health, wildlife patterns, and ecosystem changes with unprecedented precision and efficiency.",
		authorName: "Dr. Sarah Miller",
		authorTitle: "Director of Conservation Technologies",
		authorImageSrc: "/images/smiller.jpeg",
	};

	const map = {
		eyebrow: "Farm Management",
		title: "Monitoring & Control for Precision Agriculture",
		description:
			"Complete oversight of your farming operations across fields, irrigation systems, and aerial monitoring, delivering insights even in remote rural locations.",
		labels: { scanning: "Scanning", irrigating: "Irrigating", idle: "Idle" },
	};

	const analytics = {
		eyebrow: "Solar Analytics",
		title: "Turn field data into profitable harvests with real-time insights",
		cards: [
			{
				Icon: RiNavigationFill,
				title: "Autonomous Navigation",
				description:
					"Smart tractors that navigate fields independently using GPS.",
			},
			{
				Icon: RiRobot3Fill,
				title: "Robotic Harvesting",
				description:
					"AI-powered robots that identify and harvest crops at optimal ripeness.",
			},
			{
				Icon: RiDropFill,
				title: "Smart Irrigation",
				description: "Automated irrigation systems that optimize water usage.",
			},
			{
				Icon: RiPieChartFill,
				title: "Yield Analytics",
				description: "Advanced analytics platform that predicts crop yields.",
			},
		],
	};

	const cta = {
		title: "Ready to get started?",
		description:
			"Begin your smart farming journey today or talk to our agronomists about your specific needs.",
		primary: { label: "Start now", href: "#" },
		secondary: { label: "Find nearest dealer", href: "#" },
		imageSrc: "/images/farm-footer.webp",
		imageAlt: "Farm with vehicles",
	};

	return (
		<main className="relative mx-auto flex flex-col">
			<div className="pt-56">
				<Hero {...hero} />
			</div>
			<div className="mt-52 px-4 xl:px-0">
				<Features {...features} />
			</div>
			<div className="mt-32 px-4 xl:px-0">
				<Testimonial {...testimonial} />
			</div>
			<FeatureDivider className="my-16 max-w-6xl" />
			<div className="px-4 xl:px-0">
				<MapSection {...map} />
			</div>
			<FeatureDivider className="my-16 max-w-6xl" />
			<div className="mt-12 mb-40 px-4 xl:px-0">
				<SolarAnalytics {...analytics} />
			</div>
			<div className="mt-10 mb-40 px-4 xl:px-0">
				<CallToAction {...cta} />
			</div>
		</main>
	);
}
