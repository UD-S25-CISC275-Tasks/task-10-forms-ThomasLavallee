import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    // The number of attempts the user currently has
    const [attempts, setAttempts] = useState<number>(3);

    // The number of attempts the user would like to ADD
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    // Adjust the attempts when gain button clicked
    function changeAttempts() {
        // If the new attempt is a valid number, add it to the current attempt
        if (requestedAttempts) {
            setAttempts(attempts + requestedAttempts);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of Attempts Left: {attempts}</span>

            <Form.Group id="formGiveAttempts">
                <Form.Label>Number of Attempts Requested: </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(parseInt(event.target.value));
                    }}
                ></Form.Control>
            </Form.Group>

            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                Use
            </Button>

            <Button
                onClick={() => {
                    changeAttempts();
                }}
            >
                Gain
            </Button>
        </div>
    );
}
