import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(search(newsList)).toEqual(
    [
      "What films should an aspiring journalist watch?",
      // "Buried underpants and tea bags help scientists evaluate soil",
      // "Decoder: Mining asteroids for minerals can help spare Earth",
      // "Media glare can enrich tennis pros yet imperil mental health",
      // "'Nightmare' TV show 'Euphoria — health threat or high art?",
      // "Decoder: Armenia in a bind as Ukraine war resets global order",
      // "What books should an aspiring journalist read?",
      // "Marie Colvin shined a light on war-torn corners of the world",
    ]
  )
});

test("Sort if ascending", () => {
  expect(sort("ascending")).toEqual(
    [
      "'Nightmare' TV show 'Euphoria — health threat or high art?",
      "Buried underpants and tea bags help scientists evaluate soil",
      "Decoder: Armenia in a bind as Ukraine war resets global order",
      "Decoder: Mining asteroids for minerals can help spare Earth",
      "Marie Colvin shined a light on war-torn corners of the world",
      "Media glare can enrich tennis pros yet imperil mental health",
      "What books should an aspiring journalist read?",
      "What films should an aspiring journalist watch?"
    ]
  )
});

test("Sort if descending", () => {
  expect(sort("descending")).toEqual(
    [
      "'Nightmare' TV show 'Euphoria — health threat or high art?",
      "Buried underpants and tea bags help scientists evaluate soil",
      "Decoder: Armenia in a bind as Ukraine war resets global order",
      "Decoder: Mining asteroids for minerals can help spare Earth",
      "Marie Colvin shined a light on war-torn corners of the world",
      "Media glare can enrich tennis pros yet imperil mental health",
      "What books should an aspiring journalist read?",
      "What films should an aspiring journalist watch?"
    ].reverse()
  )
});

