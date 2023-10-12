import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UICard({ title, id, content }) {
	return (
		<Card className="w-[320px] border-secondary card shadow-lg hover:shadow-xl transition-all ease-linear cursor-pointer self-stretch p-4 last:mb-12">
			<CardHeader>
				<CardTitle data-testid="post" className="text-2xl font-bold">
					Post
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid w-full items-center gap-3 text-md leading-relaxed">
					<div className="flex flex-col space-y-1.5 pl-4">
						<h1 className="font-bold">
							Title:{" "}
							<span data-testid="title" className="font-normal">
								{title}
							</span>
						</h1>
					</div>
					<div className="flex flex-col space-y-1.5 pl-4">
						<h1 className="font-bold">
							Content:{" "}
							<span data-testid="content" className="font-normal">
								{content}
							</span>
						</h1>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
