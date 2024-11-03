// ord listan
const wordList = [
  {
    word: "gitarr",
    hint: "Ett musikinstrument med strängar.",
  },
  {
    word: "syre",
    hint: "En färglös, luktfri gas som är nödvändig för liv.",
  },
  {
    word: "berg",
    hint: "En stor naturlig upphöjning av jordens yta.",
  },

  {
    word: "astronomi",
    hint: "Den vetenskapliga studien av himlakroppar och fenomen.",
  },
  {
    word: "fotboll",
    hint: "En populär sport som spelas med en sfärisk boll.",
  },
  {
    word: "choklad",
    hint: "En söt godbit gjord av kakaobönor.",
  },

  {
    word: "historia",
    hint: "Studien av tidigare händelser och mänsklig civilisation.",
  },
  {
    word: "pizza",
    hint: "En smakrik rätt bestående av en rund, platt bas med pålägg.",
  },
  {
    word: "jazz",
    hint: "En musikgenre kännetecknad av improvisation och synkopering.",
  },
  {
    word: "kamera",
    hint: "En enhet som används för att fånga och registrera bilder eller videor.",
  },
  {
    word: "diamanter",
    hint: "En dyrbar ädelsten känd för sin briljans och hårdhet.",
  },

  {
    word: "vetenskap",
    hint: "Den systematiska studien av struktur och beteende i den fysiska och naturliga världen.",
  },
  {
    word: "cykel",
    hint: "Ett människodrivet fordon med två hjul.",
  },
  {
    word: "solnedgång",
    hint: "Solens dagliga försvinnande under horisonten.",
  },
  {
    word: "kaffe",
    hint: "En populär koffeinhaltig dryck gjord av rostade kaffebönor.",
  },
  {
    word: "dans",
    hint: "En rytmisk rörelse av kroppen som ofta utförs till musik.",
  },
  {
    word: "galax",
    hint: "Ett stort system av stjärnor, gas och stoft som hålls samman av gravitation.",
  },
  {
    word: "orkester",
    hint: "Ett stort ensemble av musiker som spelar olika instrument.",
  },
  {
    word: "vulkan",
    hint: "Ett berg eller en kulle med en öppning genom vilken lava, stenfragment, varm ånga och gaser utsöndras.",
  },
  {
    word: "roman",
    hint: "Ett långt skönlitterärt verk, typiskt med en komplex handling och karaktärer.",
  },
  {
    word: "skulptur",
    hint: "En tredimensionell konstform skapad genom att forma eller kombinera material.",
  },
  {
    word: "symfoni",
    hint: "En lång musikkomposition för en full orkester, typiskt i flera satser.",
  },
  {
    word: "arkitektur",
    hint: "Konsten och vetenskapen att designa och konstruera byggnader.",
  },
  {
    word: "ballet",
    hint: "En klassisk dansform kännetecknad av precisa och graciösa rörelser.",
  },
  {
    word: "astronaut",
    hint: "En person som är utbildad för att resa och arbeta i rymden.",
  },
  {
    word: "vattenfall",
    hint: "En kaskad av vatten som faller från en höjd.",
  },
  {
    word: "teknik",
    hint: "Tillämpningen av vetenskaplig kunskap för praktiska ändamål.",
  },
  {
    word: "regnbåge",
    hint: "Ett meteorologiskt fenomen som orsakas av reflektion, brytning och spridning av ljus.",
  },
  {
    word: "universum",
    hint: "All existerande materia, rum och tid som en helhet.",
  },
  {
    word: "piano",
    hint: "Ett musikinstrument som spelas genom att trycka på tangenter som får hammare att slå på strängar.",
  },
  {
    word: "semester",
    hint: "En tidsperiod ägnad åt nöje, vila eller avkoppling.",
  },
  {
    word: "regnskog",
    hint: "En tät skog kännetecknad av hög nederbörd och biologisk mångfald.",
  },
  {
    word: "teater",
    hint: "En byggnad eller utomhusområde där pjäser, filmer eller andra föreställningar sätts upp.",
  },
  {
    word: "telefon",
    hint: "En enhet som används för att överföra ljud över långa avstånd.",
  },

  {
    word: "solros",
    hint: "En hög växt med ett stort gult blomhuvud.",
  },
  {
    word: "fantasi",
    hint: "En genre av fantasifull fiktion som involverar magi och övernaturliga element.",
  },
  {
    word: "teleskop",
    hint: "Ett optiskt instrument som används för att se avlägsna objekt i rymden.",
  },
  {
    word: "brisa",
    hint: "En mild vind.",
  },
  {
    word: "oasis",
    hint: "En fruktbar plats i en öken där vatten finns.",
  },
  {
    word: "fotografi",
    hint: "Konsten, processen eller praktiken att skapa bilder genom att registrera ljus eller annan elektromagnetisk strålning.",
  },
  {
    word: "safari",
    hint: "En expedition eller resa, vanligtvis för att observera vilda djur i deras naturliga miljö.",
  },
  {
    word: "planet",
    hint: "En himlakropp som kretsar kring en stjärna och inte producerar eget ljus.",
  },
  {
    word: "flod",
    hint: "En stor naturlig vattenström som flyter i en kanal till havet, en sjö eller en annan sådan ström.",
  },
  {
    word: "tropisk",
    hint: "Relaterad till eller belägen i regionen mellan vändkretsarna.",
  },
  {
    word: "mysterisk",
    hint: "Svår eller omöjlig att förstå, förklara eller identifiera.",
  },
  {
    word: "enigma",
    hint: "Något som är mystiskt, gåtfullt eller svårt att förstå.",
  },
  {
    word: "paradox",
    hint: "Ett uttalande eller en situation som motsäger sig själv eller strider mot intuitionen.",
  },
  {
    word: "pussel",
    hint: "Ett spel, leksak eller problem utformat för att testa uppfinningsrikedom eller kunskap.",
  },
  {
    word: "viska",
    hint: "Att tala mycket tyst eller försiktigt, ofta på ett hemligt sätt.",
  },
  {
    word: "skugga",
    hint: "Ett mörkt område eller form som produceras av ett objekt som blockerar ljuset.",
  },
  {
    word: "hemlighet",
    hint: "Något som hålls dolt eller okänt för andra.",
  },
  {
    word: "nyfikenhet",
    hint: "En stark önskan att veta eller lära sig något.",
  },

  {
    word: "förvirra",
    hint: "Att förvirra eller förblinda någon; att göra något oklart eller svårt att förstå.",
  },

  {
    word: "illusion",
    hint: "En falsk uppfattning eller tro; en bedräglig apparens eller intryck.",
  },
];

//variabler
const wordDisplay = document.querySelector(
  ".gameContainer__guessContainer__guessLetter ul"
);
const guessesText = document.querySelector(
  ".gameContainer__guessContainer__incorrectGuess p b"
);
const keyboardDiv = document.querySelector(
  ".gameContainer__guessContainer__buttons"
);
const messageDiv = document.querySelector(".message");
const messageDivInfoResult = document.querySelector(
  ".message .message__info h1"
);
const messageDivInfoCorrectWord = document.querySelector(
  ".message .message__info p"
);
const messageButton = document.querySelector("#reset");
let currentWord = "";
let wrongGuessCount = 0;
const maxGuesses = 5;
const paths = ["head", "body", "arms", "legs", "scaffold"].reverse();

// Välja ett random ord från wordList
const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  // console.log(word, hint);
  currentWord = word;
  const hintText = document.querySelector(
    ".gameContainer__guessContainer__hint h3"
  );
  hintText.innerText = `Hint : ${hint}`;
  wordDisplay.innerHTML = word
    .split("")
    .map(() => `<li class ='letter'></li>`)
    .join("");
};
getRandomWord();

//skapa tangebord
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

//spelet
const initGame = (button, clickedLetter) => {
  // console.log(button , clickedLetter);
  if (currentWord.includes(clickedLetter)) {
    // console.log('Finnas i ordet');
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
      }
      if (
        [...wordDisplay.querySelectorAll("li")].every(
          (li) => li.innerText !== ""
        )
      ) {
        messageDiv.style.display = "block";
        messageDivInfoResult.innerText = `Du vann`;
        messageDivInfoCorrectWord.innerText = `Du gissade ordet:  ${currentWord}`;
        resetGame();
      }
    });
  } else {
    // console.log('Finns ej i ordet');
    wrongGuessCount++;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount < maxGuesses) {
      const pathToShow = document.getElementById(paths[wrongGuessCount - 1]);
      if (pathToShow) {
        pathToShow.style.display = "block";
      }
    }
    if (wrongGuessCount == maxGuesses) {
      messageDiv.style.display = "block";
      messageDivInfoResult.innerText = `Du förlorade`;
      messageDivInfoCorrectWord.innerText = `Den rätta ordet var:  ${currentWord}`;
      resetGame();
    }
  }
};

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (currentWord.includes(key)) {
    // console.log('Finnas i ordet');
    [...currentWord].forEach((letter, index) => {
      if (letter === key) {
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
      }
      if (
        [...wordDisplay.querySelectorAll("li")].every(
          (li) => li.innerText !== ""
        )
      ) {
        messageDiv.style.display = "block";
        messageDivInfoResult.innerText = `Du vann`;
        messageDivInfoCorrectWord.innerText = `Du gissade ordet:  ${currentWord}`;
        resetGame();
      }
    });
  } else {
    // console.log('Finns ej i ordet');
    wrongGuessCount++;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount <= maxGuesses) {
      const pathToShow = document.getElementById(paths[wrongGuessCount - 1]);
      if (pathToShow) {
        pathToShow.style.display = "block";
      }
    }
    if (wrongGuessCount == maxGuesses) {
      messageDiv.style.display = "block";
      messageDivInfoResult.innerText = `Du förlorade`;
      messageDivInfoCorrectWord.innerText = `Den rätta ordet var:  ${currentWord}`;
      resetGame();
    }
  }
});

//börja om
const resetGame = () => {
  messageButton.addEventListener("click", () => {
    messageDiv.style.display = "none";
    currentWord = "";
    wrongGuessCount = 0;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    const svgElement = document.querySelector(".gameContainer__hangman svg");
    const pathElements = svgElement.querySelectorAll("path");
    for (let i = 0; i < pathElements.length; i++) {
      if (pathElements[i].id !== "head") {
        pathElements[i].style.display = "none";
      }
    }

    getRandomWord();
  });
};
