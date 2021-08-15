import './Home.css';
import { TextField, MenuItem, Button } from "@material-ui/core";
import QuizCategories from '../../Data/QuizCategories';
import { useState } from 'react';
import { useHistory } from 'react-router';
import {} from '../../components/Error/errorMessage';

const Home = ({name, setName, fetchQuestions}) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if (!name || !category || !difficulty) {
            setError(true);
            return;
        }
        else {
            
            setError(false)
            fetchQuestions(category, difficulty);
            history.push("/quiz")   
        }
    
        };


    return <div className='homeContent'>

        <div className='quizSetting'>
            <span style={{ fontSize:30 }}>Select Your Quiz Setting</span>

             <div className='selectSettings'>

                  {/* This is the Error message */}
                {error && <errorMessage>Please fill out everything to start!</errorMessage>}

                 {/* This is the Name field */}
                <TextField label = 'Please Enter Your Name' variant='outlined' style={{marginBottom: 30}}
                onChange={(e) => setName(e.target.value)} />

                     {/* This is the Category selector button */}
                <TextField select label = "Choose Your Category" variant="outlined" style={{marginBottom: 30}} 
                onChange = {(e) => setCategory(e.target.value)} value={category}>
                    {
                    
                    QuizCategories.map((cat) => (

                        <MenuItem key={cat.category} value={cat.value}>
                                {cat.category }
                        </MenuItem>

                    ))
                    
                    }
                    
                    
                    </TextField> 

                        {/* This is the Difficulty selector button */}
                    <TextField select label = "Choose Your Difficulty" variant="outlined" style={{marginBottom: 30}} 
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty} >

                        <MenuItem key="Easy" value="easy">Easy</MenuItem>

                        <MenuItem key="Medium" value="medium">Medium</MenuItem>

                        <MenuItem key="Hard" value="hard">Hard</MenuItem>



                    </TextField>

                <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>Start Your Quiz!</Button>

             </div>

        </div>
            <img src='./catquiz.gif' className='quizBanner' alt="Quiz Banner"/>

    </div>
 

}

export default Home