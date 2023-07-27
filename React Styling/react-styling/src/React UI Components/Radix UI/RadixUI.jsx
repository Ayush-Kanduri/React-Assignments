import * as Switch from "@radix-ui/react-switch";
import * as Tabs from "@radix-ui/react-tabs";
import "./RadixUI.css";

const RadixUI = () => {
	return (
		<div className="componentsScreen">
			<SwitchDemo />
			<TabsDemo />
		</div>
	);
};

const SwitchDemo = () => (
	<form>
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<label
				className="Label"
				htmlFor="airplane-mode"
				style={{ paddingRight: 15, fontSize: 16, marginTop: 10 }}
			>
				Airplane mode
			</label>
			<Switch.Root className="SwitchRoot" id="airplane-mode">
				<Switch.Thumb className="SwitchThumb" />
			</Switch.Root>
		</div>
	</form>
);

const TabsDemo = () => (
	<Tabs.Root className="TabsRoot" defaultValue="tab1">
		<Tabs.List className="TabsList" aria-label="Manage your account">
			<Tabs.Trigger className="TabsTrigger" value="tab1">
				Account
			</Tabs.Trigger>
			<Tabs.Trigger className="TabsTrigger" value="tab2">
				Password
			</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content className="TabsContent" value="tab1">
			<p className="Text">
				Make changes to your account here. Click save when you're done.
			</p>
			<fieldset className="fieldset Fieldset">
				<label className="Label" htmlFor="name">
					Name
				</label>
				<input
					className="input Input"
					id="name"
					defaultValue="Pedro Duarte"
				/>
			</fieldset>
			<fieldset className="fieldset Fieldset">
				<label className="Label" htmlFor="username">
					Username
				</label>
				<input
					className="input Input"
					id="username"
					defaultValue="@peduarte"
				/>
			</fieldset>
			<div
				style={{
					display: "flex",
					marginTop: 20,
					justifyContent: "flex-end",
				}}
			>
				<button className="button Button green">Save changes</button>
			</div>
		</Tabs.Content>
		<Tabs.Content className="TabsContent" value="tab2">
			<p className="Text">
				Change your password here. After saving, you'll be logged out.
			</p>
			<fieldset className="fieldset Fieldset">
				<label className="Label" htmlFor="currentPassword">
					Current password
				</label>
				<input
					className="input Input"
					id="currentPassword"
					type="password"
				/>
			</fieldset>
			<fieldset className="fieldset Fieldset">
				<label className="Label" htmlFor="newPassword">
					New password
				</label>
				<input className="input Input" id="newPassword" type="password" />
			</fieldset>
			<fieldset className="fieldset Fieldset">
				<label className="Label" htmlFor="confirmPassword">
					Confirm password
				</label>
				<input
					className="input Input"
					id="confirmPassword"
					type="password"
				/>
			</fieldset>
			<div
				style={{
					display: "flex",
					marginTop: 20,
					justifyContent: "flex-end",
				}}
			>
				<button className="button Button green">Change password</button>
			</div>
		</Tabs.Content>
	</Tabs.Root>
);

export default RadixUI;
