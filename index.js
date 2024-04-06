const express = require("express");
const cors = require("cors");
const data = {
  books: [
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      description:
        "A powerful story of racial injustice and moral growth set in the American South during the Great Depression.",
    },
    {
      name: "1984",
      author: "George Orwell",
      category: "Dystopian Fiction",
      description:
        "A dystopian novel set in a totalitarian society, where the government constantly monitors and controls its citizens.",
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      description:
        "A classic novel about the complexities of love, marriage, and social expectations in early 19th-century England.",
    },
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      category: "Science Fiction",
      description:
        "A comedic science fiction series following the misadventures of an unwitting human and his alien friend.",
    },
    {
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Coming-of-Age",
      description:
        "A controversial novel that explores themes of teenage angst, alienation, and identity.",
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      category: "Fantasy",
      description:
        "The first book in the beloved Harry Potter series, chronicling the magical adventures of a young wizard.",
    },
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Classic",
      description:
        "A tragic love story set against the backdrop of the roaring 1920s, exploring themes of wealth, ambition, and the American Dream.",
    },
    {
      name: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description:
        "An epic high-fantasy trilogy set in the fictional world of Middle-earth, following the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
    },
    {
      name: "Jane Eyre",
      author: "Charlotte Brontë",
      category: "Gothic Fiction",
      description:
        "A classic novel about a young orphaned girl's journey to adulthood, filled with themes of love, independence, and societal expectations.",
    },
    {
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      category: "Fantasy",
      description:
        "A charming fantasy adventure following the journey of Bilbo Baggins, a hobbit who sets out to reclaim a treasure guarded by a dragon.",
    },
    {
      name: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      category: "Gothic Fiction",
      description:
        "A philosophical novel exploring themes of beauty, vanity, and the corrupting influence of moral decadence.",
    },
    {
      name: "The Da Vinci Code",
      author: "Dan Brown",
      category: "Mystery",
      description:
        "A thrilling mystery novel that follows symbologist Robert Langdon as he investigates a murder in the Louvre Museum, uncovering hidden secrets and conspiracies along the way.",
    },
    {
      name: "Frankenstein",
      author: "Mary Shelley",
      category: "Gothic Fiction",
      description:
        "A groundbreaking science fiction novel that explores themes of ambition, creation, and the consequences of playing god.",
    },
    {
      name: "The Hunger Games",
      author: "Suzanne Collins",
      category: "Dystopian Fiction",
      description:
        "A gripping dystopian series set in a post-apocalyptic world, where teenagers are forced to fight to the death in a televised event called the Hunger Games.",
    },
    {
      name: "The Alchemist",
      author: "Paulo Coelho",
      category: "Philosophical Fiction",
      description:
        "A philosophical novel following a young shepherd named Santiago on his journey to discover his personal legend and fulfill his destiny.",
    },
    {
      name: "The Shining",
      author: "Stephen King",
      category: "Horror",
      description:
        "A chilling horror novel set in an isolated hotel, where a struggling writer and his family become terrorized by supernatural forces.",
    },
    {
      name: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      category: "Mystery",
      description:
        "A gripping mystery thriller featuring journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a decades-old disappearance.",
    },
    {
      name: "Gone with the Wind",
      author: "Margaret Mitchell",
      category: "Historical Fiction",
      description:
        "A sweeping historical epic set during the American Civil War, following the life and struggles of Scarlett O'Hara.",
    },
    {
      name: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      category: "Fantasy",
      description:
        "A beloved fantasy series set in the magical land of Narnia, where children embark on adventures and encounter mythical creatures.",
    },
    {
      name: "Moby-Dick",
      author: "Herman Melville",
      category: "Adventure",
      description:
        "A classic adventure novel that follows Captain Ahab's obsessive quest for revenge against the great white whale, Moby Dick.",
    },
    {
      name: "The Secret Garden",
      author: "Frances Hodgson Burnett",
      category: "Children's Literature",
      description:
        "A heartwarming children's novel about the healing power of nature and the transformative magic of friendship.",
    },
    {
      name: "The Fault in Our Stars",
      author: "John Green",
      category: "Young Adult",
      description:
        "A poignant love story between two teenagers who meet in a cancer support group, exploring themes of life, death, and the search for meaning.",
    },
  ],
  movies: [
    {
      name: "Inception",
      director: "Christopher Nolan",
      genre: "Science Fiction",
      description:
        "A mind-bending thriller about a thief who enters the dreams of others to steal their secrets.",
    },
    {
      name: "The Shawshank Redemption",
      director: "Frank Darabont",
      genre: "Drama",
      description:
        "A powerful tale of hope and redemption, following the lives of two imprisoned men.",
    },
    {
      name: "The Godfather",
      director: "Francis Ford Coppola",
      genre: "Crime",
      description:
        "A mafia epic chronicling the Corleone family's rise to power and the patriarch's struggle to maintain control.",
    },
    {
      name: "Pulp Fiction",
      director: "Quentin Tarantino",
      genre: "Crime",
      description:
        "A nonlinear narrative that weaves together the intersecting lives of various criminals in Los Angeles.",
    },
    {
      name: "The Dark Knight",
      director: "Christopher Nolan",
      genre: "Action",
      description:
        "A gritty superhero film that pits Batman against the Joker in a battle for Gotham's soul.",
    },
    {
      name: "Forrest Gump",
      director: "Robert Zemeckis",
      genre: "Drama",
      description:
        "The life story of a slow-witted but kind-hearted man who unwittingly becomes part of major historical events.",
    },
    {
      name: "Fight Club",
      director: "David Fincher",
      genre: "Drama",
      description:
        "A psychological thriller about an insomniac office worker who forms an underground fight club as a form of therapy.",
    },
    {
      name: "The Matrix",
      director: "The Wachowskis",
      genre: "Science Fiction",
      description:
        "A groundbreaking sci-fi film that explores the nature of reality and freedom from oppression.",
    },
    {
      name: "Goodfellas",
      director: "Martin Scorsese",
      genre: "Crime",
      description:
        "A biographical crime film following the rise and fall of a mobster in the New York City mafia.",
    },
    {
      name: "Schindler's List",
      director: "Steven Spielberg",
      genre: "Historical Drama",
      description:
        "A poignant true story of a German businessman who saves the lives of over a thousand Polish-Jewish refugees during the Holocaust.",
    },
    {
      name: "The Lord of the Rings: The Return of the King",
      director: "Peter Jackson",
      genre: "Fantasy",
      description:
        "The epic conclusion to the Lord of the Rings trilogy, as Frodo and Sam continue their quest to destroy the One Ring.",
    },
    {
      name: "The Silence of the Lambs",
      director: "Jonathan Demme",
      genre: "Thriller",
      description:
        "A chilling psychological thriller about an FBI trainee who seeks the help of a brilliant but insane cannibalistic serial killer to catch another serial killer.",
    },
    {
      name: "Star Wars: Episode V - The Empire Strikes Back",
      director: "Irvin Kershner",
      genre: "Science Fiction",
      description:
        "The dark middle chapter of the original Star Wars trilogy, as the Rebel Alliance faces off against the evil Galactic Empire.",
    },
    {
      name: "The Green Mile",
      director: "Frank Darabont",
      genre: "Drama",
      description:
        "A supernatural drama set on death row, where a gentle giant possesses miraculous healing powers.",
    },
    {
      name: "Inglourious Basterds",
      director: "Quentin Tarantino",
      genre: "War",
      description:
        "A revisionist World War II film that follows a group of Jewish-American soldiers on a mission to assassinate Nazi leaders.",
    },
    {
      name: "The Departed",
      director: "Martin Scorsese",
      genre: "Crime",
      description:
        "A gripping crime thriller about an undercover cop and a mole in the Boston police force, each working for opposing sides of the law.",
    },
    {
      name: "The Prestige",
      director: "Christopher Nolan",
      genre: "Thriller",
      description:
        "A dark and mysterious tale of rivalry between two magicians in Victorian-era London.",
    },
    {
      name: "Gladiator",
      director: "Ridley Scott",
      genre: "Historical Drama",
      description:
        "An epic historical drama set in ancient Rome, following a betrayed general who rises as a gladiator to seek vengeance against the corrupt emperor.",
    },
    {
      name: "Saving Private Ryan",
      director: "Steven Spielberg",
      genre: "War",
      description:
        "A realistic portrayal of the D-Day invasion during World War II, as a group of soldiers embark on a dangerous mission to rescue a paratrooper behind enemy lines.",
    },
    {
      name: "The Dark Knight Rises",
      director: "Christopher Nolan",
      genre: "Action",
      description:
        "The final installment of Christopher Nolan's Batman trilogy, as Batman faces off against the formidable villain Bane.",
    },
    {
      name: "The Lion King",
      director: "Roger Allers, Rob Minkoff",
      genre: "Animation",
      description:
        "A beloved animated musical that follows the journey of a young lion prince as he learns the true meaning of responsibility and bravery.",
    },
  ],
};

const app = express();
app.use(cors());

const router = express.Router();

router.get("/:category", function (req, res) {
  const category = req.params.category;
  const sent = data[category];
  const q = req.query;

  if (Object.keys(q).length === 0) {
    return res.send({ status: "OK", [category]: sent });
  }

  let filteredData = sent.filter((item) => {
    if (category === "books") {
      return (
        item.name.toLowerCase().includes(q.query.toLowerCase()) ||
        item.author.toLowerCase().includes(q.query.toLowerCase()) ||
        item.category.toLowerCase().includes(q.query.toLowerCase())
      );
    } else if (category === "movies") {
      return (
        item.name.toLowerCase().includes(q.query.toLowerCase()) ||
        item.director.toLowerCase().includes(q.query.toLowerCase()) ||
        item.genre.toLowerCase().includes(q.query.toLowerCase())
      );
    }
  });

  return res.send({ status: "OK", [category]: filteredData });
});

app.use("/", router);
const port = 8000;
app.listen(port, function () {
  console.log("Server started at port : ", port);
});
