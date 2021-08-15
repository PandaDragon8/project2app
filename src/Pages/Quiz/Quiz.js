import { useEffect, useState } from "react"
import "./Quiz.css"
import Questions from "../../components/Questions/Questions"

const Quiz = ({name, questions, score, setScore}) => {


    const [options, setOptions] = useState();
    const [currQuest, settCurrQuest] = useState(0);
    
    useEffect(() => {
        console.log(questions);
    
        setOptions(questions && handleShuffle([
            questions[currQuest]?.correct_answer,
             ...questions[currQuest]?.incorrect_answers,
            ])
    );
    
    
        }, [questions, currQuest]);

    console.log(options);
    
    const handleShuffle = (optionz) => {
        return optionz.sort(() => Math.random() - 0.5);
    };
    
    
    return (

        <div className="quiz">
           <span className="subtitle">Welcome to your Quiz {name}</span>

            {questions ? (<>
            
            <div className="quizInfo">
                <span>{questions[currQuest].category}</span>
                <span>Your score: {score}</span>
            </div>

            <Questions 
                currQuest={currQuest}
                settCurrQuest={settCurrQuest}
                questions={questions}
                options={options}
                score={score}
                setScore={setScore}
                correct={questions[currQuest]?.correct_answer}
            />
            
            
            </> ): <></>}

        </div>
    );


};

export default Quiz