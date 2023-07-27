import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import styled from "styled-components";

const frameworks = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
];

export default function ComboboxDemo({ Button }) {
	const BTN = styled(Button)`
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	`;
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<BTN
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between"
				>
					{value
						? frameworks.find((framework) => framework.value === value)
								?.label
						: "Select framework"}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</BTN>
			</PopoverTrigger>
			<StyledPopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search framework..." />
					<CommandEmpty>No framework found.</CommandEmpty>
					<CommandGroup>
						{frameworks.map((framework) => (
							<CommandItem
								key={framework.value}
								onSelect={(currentValue) => {
									setValue(
										currentValue === value ? "" : currentValue
									);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										value === framework.value
											? "opacity-100"
											: "opacity-0"
									)}
								/>
								{framework.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</StyledPopoverContent>
		</Popover>
	);
}

const StyledPopoverContent = styled(PopoverContent)`
	svg {
		display: none;
	}
	input {
		all: unset;
	}
	div[cmdk-input-wrapper] {
		background-color: transparent;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	div[cmdk-root] {
		border-radius: 1rem;
		background-color: #000000;
	}
	div[cmdk-item] {
		padding: 1rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		&:last-child {
			border-bottom-left-radius: 1rem;
			border-bottom-right-radius: 1rem;
		}
		&:hover {
			background-color: #ffffff41;
			transition: all linear 0.1s;
			cursor: pointer;
		}
	}
`;
