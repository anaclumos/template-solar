import { Divider } from "../atoms/Divider";
import AnalyticsIllustration from "./AnalyticsIllustration";
import { StickerCard } from "./StickerCard";

export type AnalyticsCard = {
	title: string;
	description: string;
	Icon: React.ElementType;
};

export type SolarAnalyticsProps = {
	eyebrow: string;
	title: string;
	cards: AnalyticsCard[];
};

export function SolarAnalytics({ eyebrow, title, cards }: SolarAnalyticsProps) {
	return (
		<section className="relative mx-auto w-full max-w-6xl overflow-hidden mt-12 mb-40 px-4 xl:px-0">
			<div>
				<h2 className="relative scroll-my-24 text-lg font-semibold tracking-tight text-orange-500">
					{eyebrow}
					<div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
				</h2>
				<p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
					{title}
				</p>
			</div>
			<div className="*:pointer-events-none">
				<AnalyticsIllustration />
			</div>
			<Divider className="mt-0"></Divider>
			<div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
				{cards.map(({ Icon, title, description }) => (
					<StickerCard
						key={title}
						Icon={Icon}
						title={title}
						description={description}
					/>
				))}
			</div>
		</section>
	);
}
