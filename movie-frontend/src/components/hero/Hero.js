import './Hero.css';
import Carousel from "react-material-ui-carousel";
import { Paper } from '@mui/material';


const Hero = ({movies}) => {
    if (!movies || !Array.isArray(movies)) {
        return <div>Đang tải phim...</div>; // Hoặc có thể return null
    }

    // Nếu movies là array rỗng, hiển thị thông báo
    if (movies.length === 0) {
        return <div>Không có phim nào để hiển thị</div>;
    }


    return (
        <div>
            <Carousel>
                {
                    movies.map((movie) => {
                        return(
                            <Paper>
                                <div className="movie-card-container">
                                    <div className="movie-card">
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt=""/>
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Hero;