import React from 'react';
import {QuestionTitle} from './../questiontitle/questionTitle';
import {QuestionOptions} from './../questionOptions/questionOptions';
import './questionBlock.css';

export const QuestionBlock = (props) => (
    <div className ="questionBlock">
        <QuestionTitle title = {props.item.question}/>
        <QuestionOptions item = {props.item} index = {props.index}
                         optionClicked ={props.optionClicked}/>
    </div>
);
