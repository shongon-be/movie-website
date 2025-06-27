package dev.shongon.movie_api.model;

import lombok.*;
import lombok.experimental.FieldDefaults;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Movie {
    @Id
    ObjectId id;
    String imdbId;
    String title;
    String releaseDate;
    String trailerLink;
    String poster;
    List<String> backdrops;
    List<String> genres;
    @DocumentReference
    List<Review> reviews;

}
