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
          E: 5,
          I: 5,
          S: 5,
          N: 5,
          T: 5,
          F: 5,
          J: 5,
          P: 5
        }
      },
      resultSocionics: '',
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
      const answer_array = answer.split(',')
      let SocionicsAnswer = answer_array[0]
      if (answer_array.length === 3) {
        answersCount['Socionics'][SocionicsAnswer] += 1
      } else if (answer_array.length === 4) {
        answersCount['Socionics'][SocionicsAnswer] -= 1
      }
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
      setTimeout(() => this.setResults(this.getColorsResults(), this.getLettersResults(), this.getSocionicsResults()), 800)
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
    if (SocionicsAnswer.J >= SocionicsAnswer.P) {
      if (SocionicsAnswer.T >= SocionicsAnswer.F) {
        SocionicsType += 'L'
      } else SocionicsType += 'E'
      if (SocionicsAnswer.S >= SocionicsAnswer.N) {
        SocionicsType += 'S'
      } else SocionicsType += 'I'
      if (SocionicsAnswer.E >= SocionicsAnswer.I) {
        SocionicsType += 'E'
      } else SocionicsType += 'I'
    } else {
      if (SocionicsAnswer.S >= SocionicsAnswer.N) {
        SocionicsType += 'S'
      } else SocionicsType += 'I'
      if (SocionicsAnswer.T >= SocionicsAnswer.F) {
        SocionicsType += 'L'
      } else SocionicsType += 'E'
      if (SocionicsAnswer.E >= SocionicsAnswer.I) {
        SocionicsType += 'E'
      } else SocionicsType += 'I'
    }
    return SocionicsType
  }

  getColorsResults() {
    const answersCount = this.state.answersCount
    const colorsAnswer = answersCount['Colors']
    const answersCountKeysColors = Object.keys(colorsAnswer)
    const answersCountValuesColors = answersCountKeysColors.map(key => colorsAnswer[key])
    const maxAnswerCountColors = Math.max.apply(null, answersCountValuesColors)
    return answersCountKeysColors.filter(key => colorsAnswer[key] === maxAnswerCountColors)
  }

  getLettersResults() {
    const answersCount = this.state.answersCount
    const lettersAnswer = answersCount['Letters']
    const answersCountKeysLetters = Object.keys(lettersAnswer)
    const answersCountValuesLetters = answersCountKeysLetters.map(key => lettersAnswer[key])
    const maxAnswerCountLetters = Math.max.apply(null, answersCountValuesLetters)
    return answersCountKeysLetters.filter(key => lettersAnswer[key] === maxAnswerCountLetters)
  }

  // ===========================================================================
  //                        set results
  // ===========================================================================
  setResults(resultSocionics) {
    if (resultSocionics.length >= 1) {
      this.setState({ resultSocionics: resultSocionics })
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
        resultSocionics={this.state.resultSocionics}
      />
    )
  }

  // ===========================================================================
  //                       render this question page
  // ===========================================================================
  render() {
    let resultSocionics = this.state.resultSocionics
    if (resultSocionics) {
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
