'use client'

import { useFormState } from 'react-dom'
import { useFormStatus } from 'react-dom'
import { handle } from "./actions"



const SubmitButton = () => {
    const { pending } = useFormStatus()
  
    return (
      <button type="submit" aria-disabled={pending}>
        Submit
      </button>
    )
  }

export function Form(user) {
    let qcount = 0;
    let rcount = 0;
    const CASQ = (question, choice1, choice2, choice3) => {
        qcount++;
        let r1 = rcount + 1;
        let r2 = rcount + 2;
        let r3 = rcount + 3;
        rcount += 3;
        return (
            <>
                <p> {question} </p>
                <input type="radio" id={"choice"+r1} name={"casq"+qcount} value={choice1.type}/>
                <label for={"choice"+r1}> {choice1.name}</label><br/>
                <input type="radio" id={"choice"+r2} name={"casq"+qcount} value={choice2.type}/>
                <label for={"choice"+r2}> {choice2.name}</label><br/>
                <input type="radio" id={"choice"+r3} name={"casq"+qcount} value={choice3.type}/>
                <label for={"choice"+r3}> {choice3.name}</label><br/>
                <br/>
            </>
        );
    }
    const CASQs = [
        CASQ("What type of person are you?",
            {name: "Morning bird", type: "a"},
            {name: "Afternoon person", type: "c"},
            {name: "Night owl", type: "s"}
        ),
        CASQ("Do you prefer quiet or loud places?",
            {name: "Quiet", type: "a"},
            {name: "In between", type: "c"},
            {name: "Loud", type: "s"}
        ),
        CASQ("What kind of person are you?",
            {name: "Clean", type: "s"},
            {name: "In between", type: "c"},
            {name: "Messy", type: "a"}
        ),
        CASQ("Which description fits you the most?",
            {name: "Realistic", type: "c"},
            {name: "Imaginative", type: "a"},
            {name: "In between", type: "s"}
        ),
        CASQ("What do your peers describe you as?",
            {name: "Reserved", type: "s"},
            {name: "Outgoing", type: "c"},
            {name: "Critical", type: "a"}
        ),
        CASQ("Which one best describes your workstyle?",
            {name: "Spontaneous", type: "s"},
            {name: "Organized", type: "c"},
            {name: "Flexible", type: "a"}
        ),
        CASQ("Which one applies to you best?",
            {name: "Trendy", type: "a"},
            {name: "In between", type: "c"},
            {name: "Old soul", type: "s"}
        ),
        CASQ("Are you often...",
            {name: "Regretful", type: "a"},
            {name: "Anxious", type: "s"},
            {name: "None of the above", type: "c"}
        ),
        CASQ("Which one appeals to you the most?",
            {name: "Partying", type: "a"},
            {name: "Traveling", type: "c"},
            {name: "Staying at home", type: "s"}
        ),
        CASQ("Which one do you like best?",
            {name: "Games", type: "a"},
            {name: "Movies", type: "s"},
            {name: "Books", type: "c"}
        )
    ]
    const initialState = {
        user: user,
    };

    const [state, formAction] = useFormState(handle, initialState);

    return (
        <>
            <form action={formAction}>
                {CASQs}
                <SubmitButton />
            </form>
        </>
    );
}