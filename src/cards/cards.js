export const goodCards = [
  { key: 1, content: "We were into _____ before it was cool" },
  { key: 2, content: "I love the smell of _____ in the morning." },
  { key: 3, content: "_____ was so good even Grumpy Cat smiled." },
  { key: 4, content: "_____ is my chosen weapon in the zombie apocalypse." },
  {
    key: 5,
    content: "The secret weapon in the war against bad sprints is _____.",
  },
  {
    key: 6,
    content:
      "The secret to a good sprint they don’t want you to know about is _____.",
  },
  {
    key: 7,
    content: "More beautiful than a double rainbow; when _____ just works.",
  },
  {
    key: 8,
    content: "I’ll tell you what I want, what I really really want: _____.",
  },
  {
    key: 9,
    content: "I want to shout it from the rooftops. I love _____.",
  },
  {
    key: 10,
    content: "More beautiful than a double rainbow; when _____ just works.",
  },
  { key: 11, content: "Egypt has pyramids; we have _____." },
  { key: 12, content: "If _____ did not exist we would have to invent them." },
].map((card) => ({ ...card, type: "good" }));

export const badCards = [
  { key: 1, content: "The tenth circle of hell is made up of _____" },
  { key: 2, content: "_____ keeps me up at night." },
  { key: 3, content: "Ain’t nobody got time for _____." },
  { key: 4, content: "I wouldn’t wish _____ on my worst enemy." },
  {
    key: 5,
    content: "The only thing I regret is _____.",
  },
  {
    key: 6,
    content: "_____ should be sent to bed without supper.",
  },
  {
    key: 7,
    content: "If only we’d known about _____ sooner.",
  },
  {
    key: 8,
    content: "The one thing I don't want to deal with ever again is: _____.",
  },
  {
    key: 9,
    content: "I really don't see the point of _____.",
  },
  { key: 10, content: "I drink to forget _____" },
].map((card) => ({ ...card, type: "bad" }));

export const improvementCards = [
  { key: 1, content: "_____ could save the world. Or it could kill us all." },
  {
    key: 2,
    content: "I like to try new things, but is ______ really the answer?",
  },
  {
    key: 3,
    content: "_____ didn’t go exactly how I’d have liked. But it worked.",
  },
  { key: 4, content: "I figured it all out, but _____ still baffles me." },
  {
    key: 5,
    content: "Who could have guessed that _____ would be a thing this sprint? ",
  },
  {
    key: 6,
    content: "Why didn’t we think of _____ sooner?",
  },
  {
    key: 7,
    content:
      "If we could improve just one thing for the next sprint, it would be _____.",
  },
].map((card) => ({ ...card, type: "improvement" }));

export const sprintStarCards = [
  { key: 1, content: "No one puts ______ in the corner." },
  {
    key: 2,
    content: "The name’s Bond. ______ Bond.",
  },
  {
    key: 3,
    content: "Even Chuck Norris bows down to ______.",
  },
  { key: 4, content: "Nothing compares 2 ______." },
  {
    key: 5,
    content: "Always be yourself, unless you can be ______.",
  },
  {
    key: 6,
    content: "______ is an unstoppable sprint beast.",
  },
  {
    key: 7,
    content: "I’d recommend ______ to a friend.",
  },
].map((card) => ({ ...card, type: "star" }));
