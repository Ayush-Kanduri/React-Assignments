import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const MaterialUI = () => {
	return (
		<div className="componentsScreen">
			<Stack direction="row" spacing={2}>
				<Button
					variant="outlined"
					startIcon={<DeleteIcon />}
					size="large"
					sx={{
						color: "#22d3ee",
						borderColor: "#22d3ee",
					}}
				>
					Delete
				</Button>
				<Button
					variant="contained"
					endIcon={<SendIcon />}
					size="large"
					sx={{
						background: "#2252ee",
					}}
				>
					Send
				</Button>
				<Button
					variant="text"
					size="large"
					sx={{
						color: "#22d3ee",
					}}
				>
					Text
				</Button>
				<IconButton
					aria-label="delete"
					size="large"
					sx={{
						color: "#22d3ee",
						fontSize: "5rem",
					}}
				>
					<DeleteIcon />
				</IconButton>
			</Stack>
			<Rating
				emptyIcon={<StarIcon style={{ opacity: 1, color: "black" }} />}
			/>
			<Stack direction="row" spacing={2}>
				<Media loading />
			</Stack>
		</div>
	);
};

export default MaterialUI;

function Media(props) {
	const { loading = false } = props;

	return (
		<Card sx={{ minWidth: 345, m: 1 }}>
			<CardHeader
				avatar={
					loading ? (
						<Skeleton
							animation="wave"
							variant="circular"
							width={40}
							height={40}
						/>
					) : (
						<Avatar
							alt="Ted talk"
							src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
						/>
					)
				}
				action={
					loading ? null : (
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					)
				}
				title={
					loading ? (
						<Skeleton
							animation="wave"
							height={10}
							width="80%"
							style={{ marginBottom: 6 }}
						/>
					) : (
						"Ted"
					)
				}
				subheader={
					loading ? (
						<Skeleton animation="wave" height={10} width="40%" />
					) : (
						"5 hours ago"
					)
				}
			/>
			{loading ? (
				<Skeleton
					sx={{ height: 190 }}
					animation="wave"
					variant="rectangular"
				/>
			) : (
				<CardMedia
					component="img"
					height="140"
					image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
					alt="Nicola Sturgeon on a TED talk stage"
				/>
			)}

			<CardContent>
				{loading ? (
					<>
						<Skeleton
							animation="wave"
							height={10}
							style={{ marginBottom: 6 }}
						/>
						<Skeleton animation="wave" height={10} width="80%" />
					</>
				) : (
					<Typography variant="body2" color="text.secondary" component="p">
						{
							"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
						}
					</Typography>
				)}
			</CardContent>
		</Card>
	);
}

Media.propTypes = {
	loading: PropTypes.bool,
};
