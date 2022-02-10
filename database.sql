CREATE TABLE "koalas" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(40) NOT NULL,
"gender" VARCHAR(1),
"age" INTEGER,
"ready_to_transfer" BOOLEAN DEFAULT FALSE,
"notes" VARCHAR(140)
);

INSERT INTO "koalas" ("id","name","gender","age","ready_to_transfer","notes")
VALUES ('1','Scotty','M','4','Y','Born in Guatemala'),
('2','Jean','F','5','Y','Allergic to lots of lava'),
('3','Ororo','F','7','N','Loves listening to Paula (Abdul)'),
('4','Logan','M','15','N','Loves the sauna'),
('5','Charlie','M','9','Y','Favorite band is Nirvana'),
('6','Betsy','F','4','Y','Has a pet iguana');