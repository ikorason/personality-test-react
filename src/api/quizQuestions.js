
var quizQuestions = [
  // question #1
  {
    question: 'Must One Imagine Sisyphus happy?',
    answers: [
      {
        // briggs, color, letter
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
      question: 'I learn names insanely fast',
      answers: [
        {
          // briggs, color, letter
          type: 'F',
          content: 'HALLOA! THAT\'S ME!'
        },
        {
          type: ' ',
          content: 'NO IDEA'
        },
        {
          type: 'T',
          content: "EH, NOT TOO GREAT AT IT"
        }
      ]
    },
  // // question #3
    {
      question: 'I like to whine about my life',
      answers: [
        {
          type: 'secret1',
          content: 'EVERY SINGLE DAY'
        },
        {
          type: ' ',
          content: 'WHINERS SUCK'
        },
        {
          type: 'secret2',
          content: "I DON'T HAVE A LIFE"
        },
      ]
    },
  // // question #4
    {
      question: "I spend energy without thinking",
      answers: [
        {
          type: 'E',
          content: 'MORE THAN I\'D LIKE TO ADMIT'
        },
        {
          type: ' ',
          content: 'Can\'t say'
        },
        {
          type: 'I',
          content: "I DON'T EXHAUST MYSELF THAT MUCH"
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
          content: "WITH GREAT RELUCTANCE, ARRGH"
        }
      ]
    },
  // // question #6
    {
      question: 'I\'m quite pleased to tell or show',
      answers: [
        {
          type: 'E',
          content: 'YUP!'
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
          content: "RELY MORE ON ADAPTABILITY"
        }
      ]
    },
  // // question #9
    {
      question: 'I always express concern for others when making decisions.',
      answers: [
        {
          // briggs, color, letter
          type: 'F,Blue,B',
          content: 'YEP! THAT IS ME!'
        },
        {
          type: ' ',
          content: 'I HAVE NO IDEA!'
        },
        {
          type: 'F,Blue,B,No',
          content: "NAH, THAT CAN'T BE ME!"
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
          content: "GENERALLY WORK UNIFORMLY"
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
      question: 'I keep track of time very well',
      answers: [
        {
          type: 'N',
          content: 'BETTER THAN MOST'
        },
        {
          type: ' ',
          content: 'EH, SO-SO'
        },
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
          content: ''
        },
        {
          type: ' ',
          content: 'I HAVE NO IDEA!'
        },
        {
          type: 'F,Blue,B,No',
          content: "NAH, THAT CAN'T BE ME!"
        }
      ]
    },
  // // question #15
  // {
  //   question: 'I learn best by seeing step by step instructions.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'S,,D',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'S,,D,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #16
  // {
  //   question: 'I sometimes move onto another task before completing my current one.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'P,Red,A',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'P,Red,A,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #17
  // {
  //   question: 'I prefer a flexible and spontaneous way of life.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'P,Red,A',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'P,Red,A,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #18
  // {
  //   question: 'I like to keep my options open when making decisions.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'P,Green,D',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'P,Green,D,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #19
  // {
  //   question: 'I feel comfortable in crowds.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'E,Blue,B',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'E,Blue,B,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #20
  // {
  //   question: 'I like to share my feelings with others.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'E,Blue,B',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'E,Blue,B,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #21
  // {
  //   question: 'I prefer to work/do right away rather than spend time making a plan.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'S,,A',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'S,,A,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #22
  // {
  //   question: 'I know my priorities.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'S,,A',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'S,,A,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #23
  // {
  //   question: 'I tend to work alone.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'I,Green,D',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'I,Green,D,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #24
  // {
  //   question: "I don't like going to parties.",
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'I,Green,C',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'I,Green,C,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #25
  // {
  //   question: 'I am in tune with my own emotions and let them guide me in life.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'F,Blue,B',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'F,Blue,B,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #26
  // {
  //   question: 'I rely on my intution and experience more than facts.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'N,Red,A',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'N,Red,A,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #27
  // {
  //   question: 'I like to think things through.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'T,Green,D',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'T,Green,D,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #28
  // {
  //   question: 'I am a visual learner.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'S,Red,A',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'S,Red,A,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #29
  // {
  //   question: 'I think carefully before I make decisions.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'J,,D',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'J,,D,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #30
  // {
  //   question: 'I feel uneasy if my actions disrupt harmony in my social circle.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'F,Blue,B',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'F,Blue,B,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #31
  // {
  //   question: 'I put my personal opinions aside in pursuit of fairness and justice.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'T,,C',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'T,,C,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #32
  // {
  //   question: 'I tend to sit at the back or corner of the room.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'I,Green,C',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'I,Green,C,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #33
  // {
  //   question: 'I like being the centre of attention.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'E,Red,B',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'E,Red,B,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #34
  // {
  //   question: 'I solve problems by leaping between different ideas and possibilities.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'N,Green,C',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'N,Green,C,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #35
  // {
  //   question: 'I like to complete my work before playing.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'J,Red,D',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'J,Red,D,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #36
  // {
  //   question: "I don't let other people influence my thoughts or actions.",
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'T,Red,A',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'T,Red,A,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #37
  // {
  //   question: 'I use my sense of smell to help remember memories.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'N,Blue,D',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'N,Blue,D,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #38
  // {
  //   question: 'I make decisions based on my emotions.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'F,Blue,B',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'F,Blue,B,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #39
  // {
  //   question: 'I need time alone to recharge.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'I,Green,C',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'I,Green,C,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // },
  // // question #40
  // {
  //   question: 'I like to keep my room organized and clean.',
  //   answers: [
  //     {
  //       // briggs, color, letter
  //       type: 'J,,D',
  //       content: 'YEP! THAT IS ME!'
  //     },
  //     {
  //       type: ' ',
  //       content: 'I HAVE NO IDEA!'
  //     },
  //     {
  //       type: 'J,,D,No',
  //       content: "NAH, THAT CAN'T BE ME!"
  //     }
  //   ]
  // }
]

export default quizQuestions
