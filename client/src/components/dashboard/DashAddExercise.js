import React, {useState} from 'react';

const initialExerciseValues = {
    exercise: '',
    sets: null,
    reps: null,
    weight: null
}

const DashAddExercise = () => {
    const [addExercise, setAddExercise] = useState(initialExerciseValues);

    const handleChange = event => {
        setAddExercise({...addExercise, [event.target.name] : event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
    }

    const isValid = addExercise.exercise === '' || addExercise.sets === '' || addExercise.reps === '' || addExercise.weight === ''

    return (
        <div className='exerciseContainer'>
            <h2>Add Exercise</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name='exercise'
                    id='exercise'
                    placeholder='Exercise Name: '
                    value={addExercise.exercise}
                    onChange={handleChange}
                 />
                 <input 
                    type="text"
                    name='sets'
                    id='sets'
                    placeholder='Number of Sets:'
                    value={addExercise.sets}
                    onChange={handleChange}
                 />
                 <input 
                    type="text"
                    name='reps'
                    id='reps'
                    placeholder='Number of Reps:'
                    value={addExercise.reps}
                    onChange={handleChange}
                 />
                 <input 
                    type="text"
                    name='weight'
                    id='weight'
                    placeholder='Weight:'
                    value={addExercise.weight}
                    onChange={handleChange}
                 />
                 <button disabled={isValid}>Add Exercise</button>
            </form>
        </div>
    )
}

export default DashAddExercise
