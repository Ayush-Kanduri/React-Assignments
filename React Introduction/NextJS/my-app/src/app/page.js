import Image from "next/image";
import styles from "./page.module.css";
import Commands from "@/components/Commands";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started with&nbsp;
					<code className={styles.code}>Next.js React</code>
				</p>
				<div>
					<a
						href="https://vercel.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{" "}
						<Image
							src={`${process.env.VERCEL_LOGO}`}
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<a
					href="https://nextjs.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					By{" "}
					<Image
						className={styles.logo}
						src={`${process.env.NEXT_LOGO}`}
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
				</a>
			</div>
			<Commands />
		</main>
	);
}
