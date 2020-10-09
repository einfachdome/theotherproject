const squiddyImg = document.getElementById("squiddy-gif");

const premiumArray = [
  "./img/choking-squiddy.gif",
  "./img/daily-squiddy.gif",
  "./img/dancing-squiddy.gif",
  "./img/grasp-it-squiddy.gif",
  "./img/loser-squiddy.gif",
  "./img/nose-squiddy.gif",
  "./img/reefblower-squiddy.gif",
  "./img/shocked-squiddy.gif",
  "./img/sleeping-squiddy.gif",
  "./img/watermelon-squiddy.gif",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

squiddyImg.src = premiumArray[getRandomInt(premiumArray.length)];
