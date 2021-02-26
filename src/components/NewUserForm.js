import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const NewUserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({ firstName, lastName });
        setFirstName("");
        setLastName("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>First name</Label>
                <Input
                    placeholder="First name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label>Last name</Label>
                <Input
                    placeholder="Last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Button block outline type="submit" color="primary">
                    Create
                </Button>
            </FormGroup>
        </Form>
    );
};

export default NewUserForm;
