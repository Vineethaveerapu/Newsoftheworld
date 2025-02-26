function Article(headline, deck, story, image, category) {
  this.headline = headline;
  this.deck = deck;
  this.story = story;
  this.image = image;
  this.category = category;
}

const articles = [
  new Article(
    "Football Match Ends in Draw",
    "The highly anticipated football match between ended in a draw last night",
    `The highly anticipated football match between [Team A] and [Team B] ended in a draw last night at [Stadium Name]. Despite both teams having chances to win, neither side could find the back of the net. The match was a close contest throughout, with both teams having their fair share of possession. [Team A] had the better chances in the first half, but [Team B] came out stronger in the second half. In the end, the match finished 0-0, leaving both teams disappointed. [Team A] manager [Manager A] said after the match that he was 'disappointed with the result, but proud of the players' effort. [Team B] manager [Manager B] said that he was "happy with the point, but felt that his team could have won." The draw leaves [Team A] in [Position A] in the league table, while [Team B] remain in [Position B]. Both teams will be looking to improve their form in their next matches.`,
    "soccer.jpeg",
    "sport"
  ),
  new Article(
    "Queen Silvia visits sick children",
    "Queen of Sweden Makes Historic Visit to Local Hospital",
    `In a historic event that captured the attention of the nation, Queen Sofia of Sweden paid a visit to a local hospital in Stockholm earlier today. The Queen, known for her charitable work and dedication to healthcare initiatives, took the time to meet with patients and hospital staff, spreading joy and goodwill wherever she went. Dressed in an elegant ensemble, Queen Sofia was greeted by a crowd of well-wishers upon her arrival at the hospital. She was accompanied by officials from the hospital administration, as well as members of her royal entourage. The Queen's visit to the hospital was part of her ongoing efforts to support healthcare facilities and show appreciation for the hard work of healthcare professionals. During her visit, Queen Sofia toured various departments of the hospital, stopping to speak with patients and hear their stories. She also took the time to speak with doctors, nurses, and other staff members, thanking them for their tireless dedication to providing quality care to those in need. In a brief statement to the press, Queen Sofia expressed her admiration for the hospital staff and underscored the importance of healthcare services in the community. She emphasized the need for continued support for healthcare facilities and encouraged the public to show their appreciation for the vital work being done by healthcare professionals every day. As the Queen concluded her visit and bid farewell to the hospital staff and patients, she left behind a sense of warmth and gratitude that will long be remembered. Her visit served as a reminder of the importance of compassion and care in our society, and highlighted the positive impact that a single act of kindness can have on those in need`,
    "queen.jpeg",
    "sweden"
  ),
  new Article(
    "Gang wars",
    "Shootout in Town Leaves Two Dead, Three Injured",
    `Local police are investigating a shootout that occurred in the town of Smithville this afternoon. The shooting, which took place at a local convenience store, left two people dead and three injured. According to witnesses, the shooting began when two men entered the store and opened fire on a group of people. The victims were all employees of the store. Police arrived on the scene minutes later and exchanged gunfire with the suspects. The suspects were eventually apprehended and taken into custody. The two victims who were killed have been identified as John Smith, 25, and Jane Doe, 23. The three injured victims are being treated at a local hospital. Their injuries are not believed to be life-threatening. Police are still investigating the motive for the shooting. They are asking anyone with information about the incident to come forward. This is a developing story. More information will be released as it becomes available.`,
    "shootout.jpeg",
    "crime"
  ),
  new Article(
    "NZ Decides",
    "New Zealand Prepares for Highly Anticipated Election Day",
    `In a momentous event that has captured the attention of the nation, New Zealand is gearing up for its much-anticipated election day. With citizens across the country eagerly awaiting the opportunity to cast their votes, the political landscape is abuzz with anticipation and excitement. As polling stations prepare to open their doors, political parties have been ramping up their campaigns in a bid to win over voters. From televised debates to grassroots initiatives, candidates have been tirelessly working to showcase their platforms and win the support of the electorate. The election is set to shape the future of New Zealand, with key issues such as healthcare, the economy, and environmental sustainability at the forefront of voters' minds. With a diverse range of candidates vying for positions of power, the outcome of the election remains uncertain, adding an element of suspense to the proceedings. As the nation braces itself for a day of democratic participation and civic engagement, all eyes are on New Zealand as it prepares to decide the direction of its future. Stay tuned for live updates and comprehensive coverage of this historic election day.`,
    "election.jpeg",
    "world"
  ),
  new Article(
    "Nebula Odyssey red carpet",
    "Spectacular New Sci-Fi Film Takes Audiences on a Thrilling Journey Through Space and Time",
    `In a cinematic event that has sci-fi fans buzzing with excitement, the highly anticipated film "Nebula Odyssey" has finally hit theaters. Directed by acclaimed filmmaker Ava Lin, this visually stunning masterpiece promises to transport audiences to new dimensions with its mesmerizing special effects and captivating storyline. Set in a distant future where humanity has colonized distant planets and unlocked the secrets of interstellar travel, "Nebula Odyssey" follows the epic journey of a group of intrepid explorers as they embark on a mission to uncover the mysteries of a newly discovered alien civilization. As they navigate treacherous wormholes and face off against otherworldly creatures, the crew must confront their inner demons and forge unlikely alliances in order to survive. With a star-studded cast featuring veteran actors and up-and-coming talents, "Nebula Odyssey" delivers a compelling blend of heart-pounding action, mind-bending twists, and poignant moments that will resonate with audiences of all ages. The film's groundbreaking visual effects, created by a team of award-winning artists, bring to life dazzling spacecraft, exotic alien worlds, and breathtaking cosmic phenomena that will leave viewers awestruck. Critics have already hailed "Nebula Odyssey" as a cinematic triumph, praising its visionary storytelling, dynamic performances, and seamless integration of cutting-edge technology. From its pulse-pounding space battles to its poignant character arcs, the film has been lauded as a work of art that pushes the boundaries of the sci-fi genre and sets a new standard for cinematic storytelling. As audiences flock to theaters to experience "Nebula Odyssey" for themselves, anticipation is running high for what promises to be a thrilling and unforgettable journey through the cosmos. Don't miss your chance to be a part of cinematic history—grab your tickets now and prepare to be swept away on a voyage of discovery and wonder in "Nebula Odyssey."`,
    "scifi.jpeg",
    "entertainment"
  ),
  new Article(
    "Swan song",
    "Ballerina Retires After Long, Successful Career",
    `Ballerina Misty Copeland has announced her retirement from the American Ballet Theatre after a long and successful career. Copeland, 40, made history in 2015 when she became the first African American woman to be promoted to principal dancer at the ABT. She has since become one of the most celebrated dancers in the world, known for her technical skill, artistry, and grace. In a statement, Copeland said that she has decided to retire in order to focus on her family and other projects. She said that she is grateful for the opportunities she has been given and for the support of her fans. "I have loved every minute of my time with ABT," Copeland said. "It has been an honor to dance with this incredible company and to share the stage with so many talented artists. I will cherish the memories I have made here forever." Copeland's retirement is a major loss for the ballet world. She has been a role model for young dancers of all races and backgrounds, and her performances have inspired audiences around the world. ABT artistic director Kevin McKenzie said that Copeland's legacy will continue to inspire dancers for generations to come. "Misty is an extraordinary artist and a true pioneer," McKenzie said. "Her talent, her dedication, and her passion for dance have been an inspiration to everyone who has had the privilege to work with her. We will miss her dearly, but we know that she will continue to make a significant contribution to the art form."`,
    "ballerina.jpeg",
    "entertainment"
  ),
  new Article(
    "Refugee Crisis in Africa",
    "Tens of thousands on the move in Sudan",
    `The number of people displaced by conflict and persecution in Africa has reached a record high, with over 25 million people now living as refugees or internally displaced persons (IDPs). This is the highest number of displaced people on the continent since the Rwandan genocide in 1994. The majority of refugees in Africa are from South Sudan, Somalia, and the Democratic Republic of Congo (DRC). These countries have been plagued by conflict and instability for years, and the violence has forced millions of people to flee their homes. The refugee crisis in Africa is a humanitarian emergency. Refugees are often forced to live in overcrowded and unsanitary conditions, and they lack access to basic necessities such as food, water, and shelter. They are also at risk of violence and abuse. The international community must do more to help refugees in Africa. We need to provide funding for humanitarian assistance, and we need to work to find long-term solutions to the conflicts that are driving people from their homes.`,
    "refugee.jpeg",
    "world"
  ),
  new Article(
    "Shoplifting Teenagers",
    "A group of teenagers were arrested yesterday for shoplifting at the local Walmart",
    `The teenagers, who ranged in age from 13 to 17, were caught stealing a variety of items, including clothes, electronics, and food. According to police, the teenagers had been working together to steal the items. They would distract employees by asking questions or browsing the aisles, while others would grab the items and conceal them in their backpacks or clothing. The teenagers were eventually caught by a store employee who noticed them acting suspiciously. The employee called the police, who arrested the teenagers and charged them with shoplifting. Shoplifting is a serious crime that can have lasting consequences. If you are caught shoplifting, you may be fined, jailed, or both. You may also be banned from the store where you were caught shoplifting. If you are thinking about shoplifting, please reconsider. It is not worth the risk. There are many other ways to get the things you need without breaking the law.`,
    "shoplifting.jpeg",
    "crime"
  ),
  new Article(
    "Moose Hunting Season Opens",
    "Hunters Gear Up for the Challenge",
    `As the leaves begin to change and the air turns crisp, hunters across the region are gearing up for the highly anticipated moose hunting season. The season officially opened today, marking the start of a thrilling and challenging hunt for those brave enough to take on the majestic creature. Moose hunting is a time-honored tradition in the area, with hunters from near and far flocking to the region in search of the perfect trophy. The season, which runs for the next few weeks, offers hunters the chance to test their skills and knowledge of the land as they track the elusive moose through the dense forests and rugged terrain. Local hunting guides and outfitters are reporting high demand for their services, as hunters seek out experienced guides to lead them on their quest. With their intimate knowledge of the land and years of experience in tracking and hunting moose, these guides play a vital role in ensuring a successful and ethical hunt. In addition to providing a thrilling outdoor adventure, moose hunting also plays a crucial role in wildlife management and conservation efforts. By carefully regulating the number of moose harvested each season, wildlife officials are able to maintain a healthy population of moose in the region while also ensuring the sustainability of the hunt for future generations. As hunters head out into the wilderness in search of their prize, local authorities are reminding them to hunt responsibly and ethically, following all regulations and guidelines set forth by wildlife officials. With a combination of skill, patience, and respect for the land and the animals that call it home, hunters can look forward to a successful and rewarding moose hunting season ahead.`,
    "moose.jpeg",
    "sweden"
  ),
  new Article(
    "Australia retains the Ashes",
    "Thrilling Draw keeps the urn down under",
    `Australia retained the Ashes after the fifth and final Test against England ended in a thrilling draw in Manchester on Monday. England needed to win the match to level the series and keep the Ashes alive, but Australia held on for a draw to secure a 2-2 scoreline and retain the urn. The match was evenly poised going into the final day, with England needing 238 runs to win with six wickets in hand. However, Australia's bowlers kept England's batsmen in check and the tourists were eventually bowled out for 226, just 12 runs short of their target. Australia's victory was a hard-fought one and they will be delighted to have retained the Ashes. England, on the other hand, will be disappointed to have lost the series, but they can take some consolation from their performance in the final Test. The Ashes series is one of the most prestigious in world cricket and it is always a fiercely contested affair. This year's series was no different and it was a shame that it could not be settled on the field. However, Australia's victory is a deserved one and they will be proud to have retained the Ashes.`,
    "ashes.jpeg",
    "sport"
  ),
  new Article(
    "Hoop Dreams",
    "Excitement Builds as Basketball Teams Gear Up for the Olympic Games",
    `As the countdown to the Olympic Games begins, basketball enthusiasts around the world are eagerly anticipating the highly anticipated basketball competition. With top teams from various countries set to showcase their skills on the global stage, the competition promises to be nothing short of thrilling. The basketball Olympic event, a highlight of the Games, will feature both men's and women's teams vying for the prestigious gold medal. Fans can expect to witness intense matchups, jaw-dropping dunks, and clutch performances as athletes bring their A-game to the court. Leading the pack in the men's division are powerhouse teams such as the United States, Spain, and Australia, all of whom boast talented rosters stacked with NBA superstars. On the women's side, perennial contenders like the United States, Australia, and Spain are expected to put on a dazzling display of skill and teamwork. With the Olympic basketball tournament serving as a platform for players to shine on an international level, fans can look forward to witnessing the next generation of basketball stars make their mark on the global stage. Whether it's buzzer-beaters, alley-oops, or game-winning shots, this year's basketball competition is sure to deliver unforgettable moments that will be etched in the annals of Olympic history.`,
    "basketball.jpeg",
    "sport"
  ),
  new Article(
    "Fore!",
    "Local Golf Tournament Raises Funds for Charity",
    `The annual golf tournament was held at the local country club on Saturday, and it was a huge success. The tournament raised over $100,000 for charity, which will be used to help fund local programs and services. Over 100 golfers participated in the tournament, and the weather was perfect for a day of golf. The tournament was followed by a dinner and awards ceremony, where the winners were announced. The tournament was a great success, and it was a great way to raise money for a good cause. The organizers would like to thank all of the participants and sponsors for their support.`,
    "golf.jpeg",
    "sport"
  ),
  new Article(
    "Stockholm museum to close for renovations",
    " The Stockholm museum will be closed for renovations from January 15th to March 15th",
    `During this time, the museum will be undergoing a complete renovation of its galleries and exhibits. The museum will also be adding a new wing, which will house a collection of contemporary art. The museum's director, Lars Nittve, said that the renovations are necessary to update the museum's facilities and to make it more accessible to visitors. "We want to create a museum that is welcoming and engaging for everyone," Nittve said. "We're confident that the renovations will help us achieve that goal." The museum's closure will be a disappointment to some visitors, but it is necessary to ensure that the museum can continue to provide a world-class experience for visitors. The museum will reopen on March 16th with a grand opening celebration.`,
    "museum.jpeg",
    "sweden"
  ),
  new Article(
    "Crime on the rise",
    "Crime has been on the rise in recent years, with no signs of slowing down.",
    `According to the FBI, there were over 1.2 million violent crimes reported in the United States in 2020, a 5.6% increase from the previous year. This increase was driven by a surge in homicides, which rose by 25%. There are a number of factors that have been contributing to the rise in crime, including the COVID-19 pandemic, economic inequality, and the proliferation of firearms. The pandemic has led to widespread job losses and financial hardship, which can make people more desperate and more likely to commit crimes. Economic inequality has also been a factor, as those who are struggling financially may be more likely to turn to crime to make ends meet. And the proliferation of firearms has made it easier for criminals to obtain weapons, which can lead to more violent crimes. The rise in crime is a serious problem that is having a devastating impact on communities across the country. It is important to address the root causes of crime in order to prevent it from continuing to rise. This will require a multi-faceted approach that includes investing in education, job training, and mental health services, as well as working to reduce poverty and inequality.`,
    "crime.jpeg",
    "crime"
  ),
  new Article(
    "New School Opens in Korea",
    "A new international school has opened in Seoul, South Korea.",
    `The school, called the Global School Seoul, is a private, co-educational day school that offers a rigorous academic program for students from kindergarten through grade 12. The school's curriculum is based on the International Baccalaureate (IB) program, which is recognized around the world for its high academic standards. The IB program emphasizes critical thinking, problem-solving, and global citizenship. The Global School Seoul is committed to providing a well-rounded education for its students. In addition to its academic program, the school offers a variety of extracurricular activities, including sports, music, and art. The school also has a strong emphasis on community service. The school's facilities are state-of-the-art. The school has a large library, a gymnasium, a swimming pool, and a soccer field. The school also has a dedicated arts center, which includes a theater, a music room, and an art studio. The Global School Seoul is a welcome addition to the educational landscape in South Korea. The school's rigorous academic program and commitment to providing a well-rounded education will help to prepare its students for success in college and beyond.`,
    "school.jpeg",
    "world"
  ),
  new Article(
    "Famous Author Releases New Book",
    "A real page turner out now",
    `New York, NY - Best-selling author John Smith released his latest book, "The Last Page," today to rave reviews. The book is a gripping thriller that follows a group of friends as they investigate a series of mysterious deaths. Smith is known for his fast-paced plots and well-developed characters. "The Last Page" is no exception, and it is sure to keep readers on the edge of their seats from beginning to end. In a statement, Smith said, "I'm so excited to finally share this book with the world. I've been working on it for years, and I'm really proud of the way it turned out." "The Last Page" is available now at all major bookstores.`,
    "author.jpeg",
    "entertainment"
  ),
  new Article(
    "New computer game released",
    "Get ready to never leave the house",
    ` A new computer game has been released that is sure to please fans of the strategy genre. The game, called "Armada," is set in a future where humanity is at war with an alien race known as the Xar. Players take on the role of a commander in the human fleet and must use their strategic skills to defeat the Xar and save humanity. Armada is a turn-based strategy game that features a variety of different units, each with their own unique strengths and weaknesses. Players must carefully consider the composition of their fleet and the tactics they use in order to be successful. The game also features a number of different multiplayer modes, so players can compete against each other or team up to take on the AI. Armada has been praised for its deep and engaging gameplay, as well as its stunning graphics. The game is sure to be a hit with fans of the strategy genre and is a must-play for anyone who enjoys games that require strategic thinking.`,
    "game.jpeg",
    "entertainment"
  ),
  new Article(
    "Global trade strengthens",
    "Global trade pact signed by 15 countries",
    `Fifteen countries have signed a new global trade pact, the Regional Comprehensive Economic Partnership (RCEP). The pact, which was signed on November 15, 2020, is the world's largest free trade agreement (FTA) and covers a population of 2.2 billion people. The pact will reduce tariffs on a wide range of goods and services, and is expected to boost trade and investment in the region. The pact is also expected to create new jobs and promote economic growth.`,
    "trade.jpeg",
    "world"
  ),
  new Article(
    "Drama on Main Street",
    "Hit and Run Driver Leaves Victim in Critical Condition",
    `Police are searching for a hit-and-run driver who left a pedestrian in critical condition on Monday night. The victim, a 25-year-old woman, was crossing the street at the intersection of Main Street and Elm Street when she was struck by a car. The driver of the car did not stop and fled the scene. The victim was rushed to the hospital in critical condition. She is currently undergoing surgery for her injuries. Police are asking for the public's help in finding the hit-and-run driver. Anyone with information is asked to call the police department at 555-1212.`,
    "crash.jpeg",
    "crime"
  ),
  new Article(
    "Goteborg Slott",
    "A Royal and Historical Gem",
    `Gothenburg Castle, nestled on the picturesque banks of the Göta River, stands as a testament to Sweden's rich history and architectural prowess. Its stately presence has made it one of Gothenburg's most iconic landmarks, attracting visitors from far and wide. Originally built in the 17th century as a fortress to protect the city, Gothenburg Castle has undergone several transformations over the centuries. Today, it houses a fascinating maritime museum, showcasing the city's illustrious seafaring heritage. Visitors can explore captivating exhibits on shipbuilding, trade, and the role of Gothenburg in international maritime history. Beyond its historical significance, Gothenburg Castle also offers breathtaking views of the city and its surroundings. From the castle's ramparts, visitors can admire panoramic views of the river, the cityscape, and the distant hills. It's a perfect spot to capture stunning photographs and create lasting memories. The castle's opulent interior is equally impressive. Grand halls, adorned with intricate carvings and opulent chandeliers, transport visitors back in time to the era of royalty and grandeur. Guided tours provide insights into the castle's past inhabitants and the events that unfolded within its walls. Gothenburg Castle is not merely a historical relic but a vibrant cultural hub. Throughout the year, it hosts a variety of events, such as concerts, exhibitions, and theatrical performances. The castle's courtyard, with its manicured lawns and fountains, serves as a charming venue for outdoor events and festivals. For those seeking a unique and memorable experience, Gothenburg Castle offers royal-themed overnight stays in its historic rooms. Guests can immerse themselves in a bygone era, sleeping in the same chambers once occupied by kings and queens. Whether you're a history buff, an architecture enthusiast, or simply looking for a captivating day out, Gothenburg Castle is a must-visit destination. Its rich history, breathtaking views, and cultural offerings make it a true gem of Sweden's west coast.`,
    "slott.jpeg",
    "sweden"
  ),
  new Article(
    "Federer Wins Epic Tennis Match",
    "Roger Federer won an epic five-set match against Rafael Nadal in the Wimbledon final",
    `Roger Federer won an epic five-set match against Rafael Nadal in the Wimbledon final on Sunday. The match lasted over four hours and was one of the most exciting matches in recent tennis history. Federer won the first set 6-3, but Nadal came back to win the second set 7-5. Federer then won the third set 6-3, but Nadal again came back to win the fourth set 6-4. The fifth set was a tense affair, with both players holding serve until the 12th game. Federer then broke Nadal's serve to win the set 7-5 and the match. The win was Federer's eighth Wimbledon title, tying him with Pete Sampras for the most Wimbledon titles by a man. It was also Federer's 20th Grand Slam title, second only to Nadal's 21 Grand Slam titles. Nadal was gracious in defeat, saying that Federer "played better than me today." "I'm disappointed, but I'm also proud of the way I fought," Nadal said. "I gave it everything I had." Federer said that he was "overjoyed" to win the match, especially after such a long and difficult battle. "I'm just so happy to have won," Federer said. "It was a really tough match, but I'm glad I was able to come out on top." The match was a triumph for both Federer and Nadal, and it will be remembered as one of the greatest matches in tennis history.`,
    "roger.jpeg",
    "sport"
  ),
  new Article(
    "Swimmers set new record",
    "Great ight in the water",
    `A team of swimmers from the United States has set a new world record in the 4x100-meter freestyle relay. The team, which consisted of Caeleb Dressel, Blake Pieroni, Ryan Held, and Zach Apple, finished the race in a time of 3:08.24, breaking the previous record of 3:08.50 set by a team from Australia in 2008. The U.S. team's victory was a major upset, as they were not considered to be the favorites heading into the race. However, the team put together a strong performance, with Dressel leading the way with a blistering opening leg. Pieroni, Held, and Apple also swam well, and the team was able to hold off a challenge from a team from Great Britain to win the gold medal. The U.S. team's victory is a testament to their hard work and dedication. The team has been training together for years, and their victory is a just reward for their efforts. The team's victory is also a source of pride for the United States, and it is a reminder that the U.S. is still a major force in swimming.`,
    "swim.jpeg",
    "sport"
  ),
  new Article(
    "Summer on the High Coast",
    "Beautiful days and night a few hours from Stockholm",
    `The High Coast of Sweden is a beautiful and popular destination for tourists from all over the world. And for good reason! The region is known for its stunning natural beauty, with its dramatic coastline, lush forests, and sparkling lakes. But what's it like to spend the summer on the High Coast? Here's a look at what you can expect: - The weather is warm and sunny. The High Coast enjoys a long summer season, with average temperatures in the mid-20s Celsius. The sun shines for an average of 17 hours per day during the summer months, so you'll have plenty of time to enjoy the outdoors. - The days are long. One of the best things about summer on the High Coast is the long days. The sun doesn't set until after 10pm, so you can make the most of your time exploring the region. - There are plenty of things to do. The High Coast offers a wide range of activities for visitors of all ages. You can go hiking, biking, swimming, kayaking, or fishing. You can also visit historical sites, art galleries, and museums. With stunning natural beauty and endless activities to choose from, the High Coast is the perfect place to spend your summer!`,
    "hoga.jpeg",
    "sweden"
  ),
  new Article(
    "Lock up!",
    "Car Thefts on the Rise: Police Urge Caution",
    `Car thefts have been on the rise in recent months, and police are urging residents to be vigilant and take steps to protect their vehicles. According to police statistics, there have been over 100 car thefts reported in the city so far this year, compared to just 50 during the same period last year. The increase has been particularly noticeable in residential areas, where thieves are targeting cars that are parked overnight. Police say that car thieves are often looking for quick and easy targets, so they typically choose cars that are unlocked or have the keys left inside. They also tend to target cars that are parked in dark, secluded areas. To protect your car from theft, police recommend taking the following precautions: - Always lock your car doors, even if you're just running into a store for a few minutes. - Never leave your keys in your car, even if it's parked in your driveway. - Park your car in a well-lit area, preferably in a garage or driveway. - If possible, install an alarm system or steering wheel lock. - Engrave your VIN number on your car windows and other parts to make it easier to identify if it's stolen. Police also say that it's important to report any suspicious activity to the police immediately. If you see someone trying to break into a car, or if you see a car that's been stolen, call 911.`,
    "theft.jpeg",
    "crime"
  ),
  new Article(
    "Small Islands lead the way",
    "Cook Islands Bans Single-Use Plastic Bags",
    `RAROTONGA, COOK ISLANDS - The Cook Islands has become the latest Pacific nation to ban single-use plastic bags in an effort to reduce plastic pollution and protect the environment. The ban, which took effect on January 1, 2023, prohibits the import, sale, and distribution of single-use plastic bags throughout the country. The Cook Islands is home to some of the most beautiful coral reefs and marine life in the world, but plastic pollution is a major threat to these ecosystems. Single-use plastic bags are a particular problem because they can easily end up in the ocean, where they can harm marine animals and damage coral reefs. The Cook Islands government has worked with businesses and communities to develop a plan to implement the ban. Retailers are now required to provide reusable bags or biodegradable alternatives to customers. The government has also launched a public education campaign to raise awareness about the harmful effects of plastic pollution. The Cook Islands is one of a growing number of countries around the world that are taking action to reduce plastic pollution. In recent years, several other Pacific nations, including Fiji, Samoa, and Vanuatu, have banned single-use plastic bags. The Cook Islands' ban on single-use plastic bags is a welcome step towards reducing plastic pollution and protecting the environment. The government's commitment to this issue is a positive example for other countries in the region and around the world.`,
    "cook.jpeg",
    "world"
  ),
  new Article(
    "Bright Lights",
    "Local Theater Group to Debut New Play",
    `The [Theater Group Name] is excited to announce the upcoming debut of their new play, "[Play Title]." The play, written by local playwright [Playwright's Name], tells the story of [brief plot summary]. "We are thrilled to be able to bring this new play to our community," said [Theater Group Director's Name]. "It's a powerful and moving story that we think will resonate with audiences of all ages." The play will be performed at the [Theater Name] from [Start Date] to [End Date]. Tickets are on sale now and can be purchased online or at the box office. For more information, please visit the theater group's website at [Website Address].`,
    "theatre.jpeg",
    "entertainment"
  )
];

const getArticlesInCategory = (categoryName, random = false) => {
  const filteredArticles = articles.filter((item) => {
    const { category } = item;

    if (categoryName === category) {
      return true;
    }
    return false;
  });

  if (random) {
    return filteredArticles.sort(() => Math.random() - 0.5);
  }

  return filteredArticles;
};

// const sportsArticles = getArticlesInCategory("sports", true);
// console.log("sportsArticles", sportsArticles);

export { articles, getArticlesInCategory };
