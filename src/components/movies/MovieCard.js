import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "../../style/MovieCard";

const MovieCard = (props) => {
	const { title, description, image, actions } = props;
	const classes = withStyles(props);
	return (
		<Card
			classes={{
				root: classes.card,
			}}
		>
			<CardActionArea
				classes={{
					root: classes.cardActionArea,
				}}
				onClick={() => {
					console.log("heloo");
				}}
			>
				<CardMedia
					component="img"
					alt=""
					classes={{ img: classes.cardMedia }}
					title={title}
					image={image}
				/>
				<CardContent
					classes={{
						root: classes.cardContent,
					}}
				>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="h6" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
export default MovieCard;
