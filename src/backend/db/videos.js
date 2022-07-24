/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid} from "uuid"

export const videos = [
  {
    _id: {uuid},
    src : "https://i.ytimg.com/vi/8f2QCkQIKEg/default.jpg",
    title: "What are They Doing in Anime",
    description:
      "Anime characters doing hilarious stupid things",
    creator: "BlueTi Anime",
    url: "https://www.youtube.com/watch?v=8f2QCkQIKEg",
  },
  {
    _id: {uuid},
    src : "https://i.ytimg.com/vi/eZv8If_fUdI/default.jpg",
    title: "Best New Spring 2022 Anime",
    description:
      "Let's go through some of the best new anime of spring 2022",
    creator: "ViniiTube",
    url: "https://www.youtube.com/watch?v=eZv8If_fUdI",
  },
  {
    _id: {uuid},
    src : "https://i.ytimg.com/vi/Y9P1EhndE0w/default.jpg",
    title: "Top 5 Naruto Fights",
    description:
      "Summoning all fans! Celebrating 20 years of Naruto’s way of the Shinobi. Here’s a compilation of the 5 most unforgettable fights from the show. Naruto, now streaming on Netflix.",
    creator: "netflix India",
    url: "https://www.youtube.com/watch?v=Y9P1EhndE0w",
  },
];
