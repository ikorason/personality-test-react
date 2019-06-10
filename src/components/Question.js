import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../components/utils/_var'
import Quiz from '../components/quiz/Quiz'
import Results from '../components/result/Results'
import quizQuestions from '../api/quizQuestions'
import { QuestionCard } from '../components/utils/Cards'

const Wrapper = styled.div`
  position: fixed;
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.$colorBg};
`

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        Socionics: {
          E: 3,
          I: 3,
          S: 3,
          N: 3,
          T: 3,
          F: 3,
          J: 3,
          P: 3,
          secret1: 6,
          secret2: 6
        }
      },
      resultSociotype: '',
    }
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }

  // populate app’s state using the componentWillMount life cycle event
  componentWillMount() {
    const answerOptions = quizQuestions.map(question => question.answers)
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: answerOptions[0]
    })
  }

  // setting the answer based on the user’s selection
  setUserAnswer(answer) {
    const answersCount = this.state.answersCount
    let applyAnswer = answer => {
      const answer_array = answer
      let SocionicsAnswer = answer_array[0]
      // if(SocionicsAnswer != 'Process' || SocionicsAnswer != 'Result')
      answersCount['Socionics'][SocionicsAnswer] += 1
      return answersCount
    }
    this.setState({
      answersCount: applyAnswer(answer),
      answer: answer
    })
  }

  // increment the counter and questionId state
  setNextQuestion() {
    const counter = this.state.counter + 1
    const questionId = this.state.questionId + 1
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    })
  }

  // setting the answer and then setting the next question
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value)
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 800)
    } else {
      setTimeout(() => this.setResults(this.getSocionicsResults()), 800)
    }
  }

  // ===========================================================================
  //                        get results
  // ===========================================================================


  getSocionicsResults() {
    const answerCount = this.state.answersCount
    const SocionicsAnswer = answerCount['Socionics']
    const answersCountKeysSocionics = Object.keys(SocionicsAnswer)
    const answersCountValuesSocionics = answersCountKeysSocionics.map(key => SocionicsAnswer[key])
    let SocionicsType = ''
    let SocionicsType1 = ''
    let SocionicsType2 = ''

    if (SocionicsAnswer.J > SocionicsAnswer.P) {
      if (SocionicsAnswer.T > SocionicsAnswer.F)
        SocionicsType1 += 'L'
      else
        SocionicsType1 += 'E'


      if (SocionicsAnswer.S > SocionicsAnswer.N) {
        SocionicsType1 += 'S'
      } else 
        SocionicsType1 += 'I'

      if (SocionicsAnswer.E > SocionicsAnswer.I) {
        SocionicsType1 += 'E'
      } else 
        SocionicsType1 += 'I'

      SocionicsType += SocionicsType1
    } 
      
    else if (SocionicsAnswer.P >= SocionicsAnswer.J) {

      if (SocionicsAnswer.S > SocionicsAnswer.N) {
        SocionicsType2 += 'S'
      } else 
        SocionicsType2 += 'I'
       
      if (SocionicsAnswer.T > SocionicsAnswer.F)
        SocionicsType2 += 'L'
      else 
        SocionicsType2 += 'E'
           
      if (SocionicsAnswer.E > SocionicsAnswer.I) {
        SocionicsType2 += 'E'
      } else 
        SocionicsType2 += 'I'
      
      SocionicsType += SocionicsType2;
      }

    return SocionicsType
  }
  // ===========================================================================
  //                        set results
  // ===========================================================================
  setResults(resultSociotype) {
    if (resultSociotype.length >= 1) {
      this.setState({ resultSociotype: resultSociotype })
    }
  }

  // ===========================================================================
  //                    functions to render quiz
  // ===========================================================================
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    )
  }

  // ===========================================================================
  //                    functions to render result
  // ===========================================================================
  renderResult() {
    return (
      <Results
        resultSociotype={this.state.resultSociotype}
      />
    )
  }

  // ===========================================================================
  //                       render this question page
  // ===========================================================================
  render() {
    let resultSociotype = this.state.resultSociotype
    if (resultSociotype) {
      return this.renderResult()
    }
    return (
      <Wrapper className="container">
        <QuestionCard>
          <div className="corner" />
          <div className="corner" />
          <div className="corner" />
          <div className="corner" />
          {this.renderQuiz()}
        </QuestionCard>
      </Wrapper>
    )
  }
}

export default Question
