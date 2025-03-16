import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    // Current mode state
    const [isEditMode, setMode] = useState<boolean>(false);

    // User's name state
    const [userName, setUserName] = useState<string>("Your Name");

    // User's student status state
    const [isStudent, setStudent] = useState<string>("student");

    // Change student status to be opposite of what it is
    function updateStudent() {
        if (isStudent === "student") {
            setStudent("not");
        } else {
            setStudent("student");
        }
    }

    return (
        <div>
            <Form.Switch
                type="switch"
                label="Toggle Edit Mode"
                checked={isEditMode}
                onChange={() => {
                    setMode(!isEditMode);
                }}
            ></Form.Switch>

            {isEditMode ?
                <Form.Group controlId="formEditMode">
                    <Form.Label>Edit Student Name</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setUserName(event.target.value);
                        }}
                    ></Form.Control>

                    <Form.Check
                        type="checkbox"
                        role="checkbox"
                        name="student"
                        label="Student"
                        id="student"
                        value="student"
                        onChange={updateStudent}
                        checked={isStudent === "student"}
                    ></Form.Check>
                </Form.Group>
            :   <span>
                    {`${userName} is ${isStudent === "student" ? " " : "not "}a student`}
                </span>
            }
        </div>
    );
}
