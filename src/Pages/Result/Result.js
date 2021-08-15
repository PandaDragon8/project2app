import { Button } from "@material-ui/core";
import { useEffect } from "react"
import { useHistory } from "react-router"
import "./Result.css";

const Result = ({name, score}) => {
    const history = useHistory();

    useEffect(() => {
        if (!name) {
            history.push("/");
        }

    }, [name, history])
    return (

        <div className="result">
            <span className="title">Your Final Score : {score}</span>
            <Button 
            size="large"
            href="/"> Start Again!</Button>
        </div>
    )


}

export default Result