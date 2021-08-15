import { useState } from "react"
import errorMessage from "../Error/errorMessage";
import "./Questions.css"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Questions = ({
    currQuest,
    settCurrQuest,
    questions,
    options,
    score,
    setScore,
    correct }) => {

    const [selected, setSelected] = useState()
    const [error, setError] = useState(false);

    const handleSelect = (i) => {
        if(selected===i && selected===correct) {
            return "select";
        }
        else if(selected===i && selected !== correct) {
            return "incorrect";
        } else if (i===correct){
            return "select";
        }
    }; 

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score +1);
        setError(false);
    }

    const history = useHistory();

    const handleNext = () => {
        if(currQuest> 8) {
            history.push('/result')
        }
        else if(selected) {
            settCurrQuest(currQuest + 1)
            setSelected()
        } else {
            setError("Please select an answer")
        }
    }

    return (
        <div className="theQuestions">
            <h1>Question {currQuest + 1}</h1>

            <div className="oneQuestion">

                <h2>{questions[currQuest].question}</h2>

                <div className="questOptions">
                    {error && <errorMessage>{error}</errorMessage>}
                    {
                        options &&
                        options.map(i => (<button onClick={() => handleCheck(i)} className={`oneOption ${selected && handleSelect(i)}`} key={i} disabled={selected}>{i}</button>))

                    }

                </div>

                    <div className="control">
                        <Button
                            variant="container"
                            color="primary"
                            size="large"
                            style={{ width: 185 }}
                            onClick={handleNext}
                        >
                            Next Question!</Button>

                    </div>

            </div>

        </div>
    )
    
}

export default Questions