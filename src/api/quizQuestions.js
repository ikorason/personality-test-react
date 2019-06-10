
var quizQuestions = [
  // question #1
  {
    question: 'Must One Imagine Sisyphus happy?',
    answers: [
      {
        type: ' ',
        content: 'IF I WERE JOHN LENNON!'
      },
      {
        type: 'secret1',
        content: 'IRRELEVANT'
      },
      {
        type: 'secret2',
        content: "THIS QUIZ SUCKS ALREADY"
      },
    ]
  },
  // question #2
    {
      question: 'I learn names pretty quickly',
      answers: [
        {
          type: 'F',
          content: 'SOUNDS RIGHT'
        },
        {
          type: 'F, Negative',
          content: "EH, NOT TOO GREAT AT IT"
        },
        {
          type: 'T',
          content: "SUCK AT IT"
        }
      ]
    },
  // // question #3
    {
      question: 'My presence is more: ',
      answers: [
        {
          type: 'S, Negative',
          content: 'Temporal than Spatial'
        },
        {
          type: 'S',
          content: 'Spatial than Temporal'
        },
      ]
    },
  // // question #4
    {
      question: "I spend energy without thinking",
      answers: [
        {
          type: 'E',
          content: 'WHICH I REGRET LATER'
        },
        {
          type: 'I',
          content: "I SAVE IT PRETTY EASILY"
        }
      ]
    },
  // // question #5
    {
      question: 'If necessary, easy to take care of myself',
      answers: [
        {
          type: 'S',
          content: 'SURE ENOUGH, MAN'
        },
        {
          type: ' ',
          content: 'NEVER HAD TO'
        },
        {
          type: 'N',
          content: "WITH GREAT RELUCTANCE"
        }
      ]
    },
  // // question #6
    {
      question: 'I\'m quite pleased to tell or show',
      answers: [
        {
          type: 'E',
          content: 'TRUE IN MY EXPERIENCE' 
        },
        {
          type: 'I',
          content: "MORE CALMER WHEN LISTENING/WATCHING"
        }
      ]
    },
  // // question #7
    {
      question: 'I\'m not a big fan of the Big 5',
      answers: [
        {
          type: 'T',
          content: 'I NEED A STRONGER CAUSAL BASIS FOR IT'
        },
        {
          type: ' ',
          content: 'DON\'T KNOW MUCH TO HAVE AN OPINION'
        },
      ]
    },
  // // question #8
    {
      question: 'I am consistent and reliable',
      answers: [
        {
          // briggs, color, letter
          type: 'J',
          content: 'AT THE COST OF SOME FLEXIBILITY'
        },
        {
          type: 'P',
          content: "RELY MORE OFTEN ON ADAPTABILITY"
        }
      ]
    },
  // // question #9
    {
      question: 'The extent of my activities',
      answers: [
        {
          // briggs, color, letter
          type: 'E',
          content: 'GROWS IN WIDTH'
        },
        {
          type: 'I',
          content: "GROWS IN DEPTH"
        }
      ]
    },
  // // question #10
    {
      question: 'I ten to work in bursts',
      answers: [
        {
          type: 'P',
          content: 'OFTEN'
        },
        {
          type: 'J',
          content: "GENERALLY WORK MORE UNIFORMLY"
        }
      ]
    },
  // // question #11
    {
      question: 'I think I\'m a \'Feeling\' Type',
      answers: [
        {
          type: 'F',
          content: 'SOUNDS RIGHT TO ME'
        },
        {
          type: ' ',
          content: 'UNSURE'
        },
        {
          type: 'T',
          content: "CAN FEEL, BUT NOT A FEELING TYPE"
        }
      ]
    },
  // // question #12
    {
      question: 'I keep track of my time very well',
      answers: [
        {
          type: 'N',
          content: 'BETTER THAN MOST'
        },
        {
          type: ' ',
          content: 'EH, SO-SO'
        },
        {
          type: 'secret1',
          content: 'DECENTLY ENOUGH BUT NOT TOO GREAT'
        }
      ]
    },
  // // question #13
    {
      question: 'I tend to have pretty stable moods',
      answers: [
        {
          type: 'J',
          content: 'PRETTY MUCH, IF YOU DON\'T RUIN IT'
        },
        {
          type: 'P',
          content: "ACTUALLY QUITE UNSUSTAINABLE"
        }
      ]
    },
  // // question #14
    {
      question: 'I am quite interested in philosophy and literature',
      answers: [
        {
          type: 'N',
          content: 'TRUE ENOUGH'
        },
        {
          type: ' ',
          content: "NAH, THAT CAN'T BE ME!"
        }
      ]
    },
  // // question #15
    {
      question: 'I joke around a lot',
      answers: [
        {
          type: 'E',
          content: 'DEFINITELY!'
        },
        {
          type: 'I',
          content: "NOT MUCH"
        }
      ]
    },
  // // question #16
    {
      question: 'I am quite thin and not much lively in conversation',
      answers: [
        {
          type: 'E',
          content: 'NOT REALLY'
        },
        {
          type: 'I',
          content: "SOUNDS LIKE ME"
        }
      ]
    },
  // // question #17
    {
      question: 'I dislike unexpected obstacles in my plans',
      answers: [
        {
          type: 'J',
          content: 'PRETTY MUCH; I NEED TO HAVE THINGS FIXED DOWN'
        },
        {
          type: 'P',
          content: "WHO DOESN'T? BUT I'M QUITE FLEXIBLE"
        }
      ]
    },
  // // question #18
    {
      question: 'I express my mood better than my thoughts',
      answers: [
        {
          type: 'F',
          content: 'AGREED'
        },
        {
          type: 'T',
          content: "I'M MORE ARTICULATE THAN EXPRESSIVE"
        }
      ]
    },
  // // question #19
    {
      question: 'It is easier for me to just try and prove something than to persuade someone',
      answers: [
        {
          type: 'T',
          content: 'IF YOU MEAN PERSUASION THROUGH REASON'
        },
        {
          type: 'F',
          content: "PEOPLE RESPOND TO WELL TO MY SOFT APPROACH"
        },
        {
          type: 'F, Negative',
          content: "DESTROY THOSE SUCKERS IN DEBATE"
        }
      ]
    },
  // // Question 20
    {
      question: 'I keep my back straight',
      answers: [
        {
          type: 'P',
          content: 'NOT REALLY, ALSO TEND TO FIDGET A LOT'
        },
        {
          type: 'J',
          content: "YEAH, AND MY MOVEMENT IS SMOOTH"
        }
      ]
    },
  // // question #21
    {
      question: 'I like to share my feelings with others.',
      answers: [
        {
          type: 'T, Negative',
          content: 'YEAH, I AM QUITE AN OPEN PERSON'
        },
        {
          type: ' ',
          content: 'UMM...NOT REALLY'
        },
        {
          type: 'F',
          content: "HMM, AT LEAST I'M QUITE EXPRESSIVE"
        }
      ]
    },
  // // question #22
    {
      question: 'If things unclear, actively seek more information',
      answers: [
        {
          type: 'S',
          content: 'I TEND TO BE ON THE SAFER SIDE'
        },
        {
          type: 'N',
          content: "AND/OR TRY TO FILL IN THE BLANKS"
        },
        {
          type: 'N,Negative',
          content: 'CAN SPECULATE, BUT UNWISE TO GO TOO FAR'
        },
      ]
    },
  // // question #23
    {
      question: 'I keep my room clean',
      answers: [
        {
          type: 'P, Negative',
          content: 'MOSTLY'
        },
        {
          type: 'J',
          content: 'IT\'S NOT THAT MESSY, I TAKE EFFORTS!'
        },
        {
          type: 'P',
          content: "IT'S OFTEN SOMEWHAT MESSY"
        }
      ]
    },
  // // question #24
    {
      question: 'I appreciate my sense of reason and justice',
      answers: [
        {
          type: 'F',
          content: 'NOT MORE THAN MY HUMANITY AND SENSTIVITY'
        },
        {
          type: 'T',
          content: 'FAIRLY WELL'
        },
      ]
    },
  // // question #25
    {
      question: "I usually look well groomed and pay my bills on time",
      answers: [
        {
          type: 'S',
          content: 'WEIRD QUESTION, BUT YEAH.'
        },
        {
          type: 'N,Negative',
          content: "USUALLY 'WELL GROOMED'"
        },
        {
          type: 'N',
          content: "NOT AT ALL!"
        }
      ]
    },
  // // question #26
    {
      question: 'I am an Atheist',
      answers: [
        {
          type: 'T',
          content: 'YES'
        },
        {
          type: 'T,Negative',
          content: 'NOT AT ALL'
        },
        {
          type: 'N',
          content: "GOD IS, AFTER ALL, A PSYCHIC FACT"
        }
      ]
    },
  // // question #27
    {
      question: 'I strive to keep myself fit and active',
      answers: [
        {
          type: ' ',
          content: 'IT\'S MY PROFESSION'
        },
        {
          type: 'S',
          content: 'YES!'
        },
        {
          type: 'N',
          content: "NOT PARTICULARLY"
        }
      ]
    },
  // // question #28
    {
      question: 'Situations control me more than I control them',
      answers: [
        {
          type: 'P',
          content: 'UNFORTUNATELY'
        },
        {
          type: 'P,Negative',
          content: 'NOT THAT OFTEN'
        },
        {
          type: 'J',
          content: "DON'T ALWAYS GET MY WAY BUT TRY HARD TO"
        }
      ]
    },
  // // question #29
    {
      question: 'I am decisive and wilful',
      answers: [
        {
          type: 'S',
          content: 'I BELIEVE SO'
        },
        {
          type: 'S,Negative',
          content: 'ABSOLUTELY NOT'
        },
        {
          type: 'N',
          content: "HA! IF ONLY!"
        }
      ]
    },
  // // question #30
    {
      question: 'I am a practically oriented person',
      answers: [
        {
          type: 'N, Negative',
          content: 'NOT A DAYDREAMER AT LEAST'
        },
        {
          type: 'S, Negative',
          content: 'NONSENSE'
        },
        {
          type: 'S',
          content: "YES, AND DOESN'T MEAN I DON'T HAVE AN IMAGINATION"
        }
      ]
    },
]

export default quizQuestions
