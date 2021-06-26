import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([
    {
      question: "HTML stands for __________",
      options: [
        "Hypertext markup langauge",
        "Programming langauge",
        "markup language",
      ],
      correctAns: "Hypertext markup langauge",
    },
    {
      question: "CSS stands for __________",
      options: [
        "Cascading Style sheet",
        "Programming langauge",
        "markup language",
      ],
      correctAns: "Cascading Style sheet",
    },
    {
      question: "HTML is programming language",
      options: ["True", "False"],
      correctAns: "False",
    },
  ])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedValue, setSelectedValue] = useState("")

  function checkAnswer() {
    let correctValue = questions[index].correctAns
    if (correctValue == selectedValue) {
      setScore(score + 1)
    }
    if (questions.length == index + 1) {
      setShowResult(true)
    } else {
      setIndex(index + 1)
    }
  }
  function stop() {
    document.getElementById("to-hide").style.display = "none"
  }
  function previousQuestion() {
    setIndex(index - 1)
    if (index == 0) {
      stop();
    }
  }
  return (
    <div className="App">
      <div className="p-2">
        <div className="container">
          {
            showResult ? (
              <div className="p-3 bg-warning rounded shadow text-dark">
                <p className="fs-3">Result</p>
                <progress
                  className="p-3"
                  id="file"
                  value={score}
                  max={questions.length}
                ></progress>
                <h3>{((score / questions.length) * 100).toFixed(2)} % </h3>
                <h3>
                  {(score / questions.length) * 100 < 60 ? "Fail" : "Pass"}
                </h3>
              </div>
            ) : null
          }
        </div>
        {!showResult ? (
          <div className="container p-5 my-2 rounded shadow bg-primary text-white">
            <p className="fs-4">
              Question Number <span>{index + 1}</span> of {questions.length}
            </p>
            <h3>{questions[index].question}</h3>

          </div>
        ) : null}
        {!showResult ? (
          <div className="container p-5 my-3 rounded shadow bg-info">
            <div className="row">
              {questions[index].options.map((e, i) => {
                return (
                  <div key={i} className="col-md-4 py-2">
                    <button
                      onClick={() => setSelectedValue(e)}
                      className="btn btn-light rounded px-5"
                    >
                      {e}
                    </button>

                  </div>
                )
              })}
            </div>

          </div>
        ) : null}
        {!showResult ? (
          <div className="container">
            <button
              onClick={() => checkAnswer()}
              className="btn btn-danger px-5 rounded-pill"
            >
              Next
            </button>
          </div>
        ) : null}
        {!showResult ? (
          <div id="to-hide" className="container">
            <button
              onClick={() => previousQuestion()}
              className="btn btn-danger px-5 rounded-pill"
            >
              Back
            </button>
          </div>
        ) : null}

      </div>


    </div >
  );
}

export default App;
