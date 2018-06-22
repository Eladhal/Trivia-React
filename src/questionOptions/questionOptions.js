import React, {Component} from 'react';
import './questionOptions.css';

export class QuestionOptions extends Component{
    constructor(props) {
        super(props);
    }

    optionClicked(e){

        if (this.props.item.manageOptions.enableBtns === false) {
            return;
        }

        const btnArray = []; // use to make an update options array

        if(e.target.textContent === this.props.item.answer) { // If clicked on the right answer
            this.rightClick = true;
            this.props.item.manageOptions.options.forEach((item) => {
                if (item.Id === e.target.textContent) {
                    btnArray.push({Id: item.Id, color: 'green'})
                }
                else {
                    btnArray.push({Id: item.Id, color: 'purple'})
                }
            })
        }
        else {
            this.rightClick = false;
            this.props.item.manageOptions.options.forEach((item) => {
                if (item.Id === e.target.textContent) {
                    btnArray.push({Id: item.Id, color: 'red'})
                }
                else if(item.Id === this.props.item.answer){
                    btnArray.push({Id: item.Id, color: 'green'})
                }
                else {
                    btnArray.push({Id: item.Id, color: 'purple'})
                }
            })
        }

        const newItem = Object.assign({},{question:this.props.item.question},
                                         {manageOptions:{options:btnArray,enableBtns:false}},
                                         {answer:this.props.item.answer}); // Create an update question object for update

        this.props.optionClicked(newItem,this.props.index,this.rightClick);
    }

    render() {
        return (
            <div className ="options">
            {this.props.item.manageOptions.options.map((option,index) =>
            <button key = {index} className={"option "+option.color} onClick={this.optionClicked.bind(this)}>{option.Id}</button>)}
            </div>
       )
    }

    }