import React, { useState } from 'react';
import './CreateEvaluation.css';

const CreateEvaluation = () => {
  const [evaluation, setEvaluation] = useState({
    title: '',
    description: '',
    questions: []
  });

  const [currentQuestion, setCurrentQuestion] = useState({
    type: 'multiple-choice',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });

  const addQuestion = () => {
    setEvaluation(prev => ({
      ...prev,
      questions: [...prev.questions, currentQuestion]
    }));
    setCurrentQuestion({
      type: 'multiple-choice',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0
    });
  };

  return (
    <div className="create-evaluation">
      <div className="container">
        <div className="page-header">
          <h1>Create New Evaluation</h1>
          <p>Design your evaluation with custom questions and settings</p>
        </div>

        <div className="form-container">
          <div className="basic-info">
            <h2>Basic Information</h2>
            <div className="form-group">
              <label>Evaluation Title</label>
              <input
                type="text"
                value={evaluation.title}
                onChange={(e) => setEvaluation(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter evaluation title"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={evaluation.description}
                onChange={(e) => setEvaluation(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe your evaluation"
                rows="4"
              />
            </div>
          </div>

          <div className="question-builder">
            <h2>Questions ({evaluation.questions.length})</h2>
            <div className="question-form">
              <div className="form-group">
                <label>Question Type</label>
                <select
                  value={currentQuestion.type}
                  onChange={(e) => setCurrentQuestion(prev => ({ ...prev, type: e.target.value }))}
                >
                  <option value="multiple-choice">Multiple Choice</option>
                  <option value="text">Text Answer</option>
                  <option value="true-false">True/False</option>
                </select>
              </div>
              <div className="form-group">
                <label>Question</label>
                <input
                  type="text"
                  value={currentQuestion.question}
                  onChange={(e) => setCurrentQuestion(prev => ({ ...prev, question: e.target.value }))}
                  placeholder="Enter your question"
                />
              </div>
              {currentQuestion.type === 'multiple-choice' && (
                <div className="options-group">
                  <label>Options</label>
                  {currentQuestion.options.map((option, index) => (
                    <input
                      key={index}
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...currentQuestion.options];
                        newOptions[index] = e.target.value;
                        setCurrentQuestion(prev => ({ ...prev, options: newOptions }));
                      }}
                      placeholder={`Option ${index + 1}`}
                    />
                  ))}
                </div>
              )}
              <button type="button" onClick={addQuestion} className="btn btn-secondary">
                Add Question
              </button>
            </div>
          </div>

          <div className="actions">
            <button className="btn btn-primary">Save & Publish</button>
            <button className="btn btn-outline">Save as Draft</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvaluation;