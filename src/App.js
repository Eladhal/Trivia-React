import React, {Component} from 'react';
import {QuestionBlock} from './questionBlock/questionBlock';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.serialQuestions=[1,2,3,4,5,6,7,8,9,10]; // use to keep questions order
        this.state = {
            numOfClicks:0,
            gameScore: 0,
            questions: {
                1: {
                        question: 'How many players are there on each side in a baseball match?',
                        manageOptions: {
                                options:[{Id: '5', color: 'purple'}, {Id: '2', color: 'purple'}
                                         ,{Id: '3', color: 'purple'}, {Id: '8', color: 'purple'}],
                                enableBtns: true
                        },
                        answer: '5',
                   },
                2: {
                        question: 'Ashes is the term associated with which of the following sports?',
                        manageOptions: {
                              options:[{Id: 'Tennis', color: 'purple'}, {Id: 'Basketball', color: 'purple'}
                                        , {Id: 'Football', color: 'purple'}, {Id: 'Volleyball', color: 'purple'}],
                              enableBtns: true
                        },
                        answer: 'Football',
                   },
                3: {
                       question: 'Which of the following countries won the Under-19 Cricket World Cup held in 2012?',
                       manageOptions: {
                            options: [{Id: 'England', color: 'purple'}, {Id: 'Japan', color: 'purple'}
                            , {Id: 'India', color: 'purple'}, {Id: 'Scotland', color: 'purple'}],
                            enableBtns: true,
                        },
                        answer: 'India',
                   },
                4:{
                       question: 'Indian first took part in the Olympic Games in the year?',
                       manageOptions: {
                         options: [{Id: '1930', color: 'purple'}, {Id: '1954', color: 'purple'},
                                   {Id: '1920', color: 'purple'}, {Id: '1925', color: 'purple'}],
                        enableBtns: true
                       },
                       answer: '1920',
                  },
                5:{
                       question: 'The great lawn tennis player Bjorn Borg is from which country?',
                       manageOptions: {
                           options: [{Id: 'U.S.A', color: 'purple'}, {Id: 'Ireland', color: 'purple'},
                                   {Id: 'France', color: 'purple'}, {Id: 'Sweden', color: 'purple'}],
                           enableBtns: true
                       },
                       answer: 'Sweden',
                  },
                6:{
                       question: 'The famous woman athlete Marian Jones is from which of the following countries?',
                       manageOptions: {
                           options: [{Id: 'France', color: 'purple'}, {Id: 'England', color: 'purple'}
                                    ,{Id: 'U.S.A', color: 'purple'}, {Id: 'Spain', color: 'purple'}],
                           enableBtns: true
                       },
                       answer: 'U.S.A',
                  },
                7: {
                       question: 'In Basket Ball, how many players are there in each side?',
                       manageOptions: {
                           options: [{Id: '6', color: 'purple'}, {Id: '5', color: 'purple'}
                                     , {Id: '4', color: 'purple'}, {Id: '7', color: 'purple'}],
                           enableBtns:true
                       },
                       answer: '5',
                   },
                8: {
                       question: 'How many squares are there in a Chess Board?',
                       manageOptions: {
                           options: [{Id: '64', color: 'purple'}, {Id: '48', color: 'purple'}
                           , {Id: '36', color: 'purple'}, {Id: '24', color: 'purple'}],
                       enableBtns: true
                      },
                      answer: '64',
                  },
                9: {
                     question: 'The winter Olympics came into being in?',
                     manageOptions: {
                          options: [{Id: '1912', color: 'purple'}, {Id: '1916', color: 'purple'}
                                   , {Id: '1924', color: 'purple'}, {Id: '1934', color: 'purple'}],
                          enableBtns: true
                     },
                     answer: '1924',
                   },
                10: {
                    question: 'In which country would you find the world\'s largest football stadium (by capacity)?',
                    manageOptions: {
                           options: [{Id: 'North Korea', color: 'purple'}, {Id: 'Spain', color: 'purple'}
                                    , {Id: 'Mexico', color: 'purple'}, {Id: 'China', color: 'purple'}],
                           enableBtns: true
                           },
                    answer: 'North Korea',
                    }
            }

        };
        this.currentScore=this.state.gameScore;
        this.InitialQuestions = this.state.questions;
    }
    optionClicked = (quest,index,rightAnswer)=>{ // event that called when an option button is clicked

        if (rightAnswer) {
             this.currentScore = this.state.gameScore+1;
        }

        const obj ={...this.state.questions};
        obj[index] = quest;
        const numOfClicks = this.state.numOfClicks+1;

        this.setState({numOfClicks:numOfClicks,gameScore:this.currentScore,questions:obj});
    }

    resetGame = () => {
        this.setState({gameScore:0,numOfClicks:0,questions:this.InitialQuestions});
        window.scrollTo(0, 0); // Scroll to the top of the page
    }



    render(){
        return (
            <div className = "main">
              <h1> Welcome To Sport Trivia </h1>
                <div className = "container">
               {this.serialQuestions.map((quest,index) =>
                                    <QuestionBlock key={quest} item = {this.state.questions[quest]}
                                     index = {quest}
                                     optionClicked={this.optionClicked}
                                     />)}
                </div>
                    {this.state.numOfClicks === 10?
                    <div className ="bottom">
                        <h1>Your Score is:{this.state.gameScore}</h1>
                        <button className = "btnPlay" onClick={()=>this.resetGame()}>Play Again</button>
                   </div>
                   :null}
            </div>
        );
    }
}

export default App;
