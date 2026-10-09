import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
  const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPsSXVeplpvxihPRAxGUy6ExBQ-QDmY7Cl5nzJ-05hg&s=10";

  let COLD_URL = "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=800";
  let HOT_URL = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800";
  let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=800";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
                ? HOT_URL
                : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                  ? <SunnyIcon />
                  : <AcUnitIcon />}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min temp = {info.tempMin}&deg;C</p>
              <p>Max temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}