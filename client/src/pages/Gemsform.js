import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GEM } from '../utils/mutation';
import { Form, Row, FormGroup, Input, Col, Label, Button } from 'reactstrap';

// Function for Adding a Gem and the form

const Gemsform = () => {

    const [formState, setFormState] = useState({
        name: '',
        description: '',
        address: '',
        link: '',
        gemId: '',
    });
    const [saveGem, { error }] = useMutation(SAVE_GEM);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await saveGem({
                variables: { ...formState }
            })
            console.log(saveGem);
            setFormState({
                name: '',
                description: '',
                address: '',
                link: '',
                gemId: '',
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section>
            <div>
                <div>


                    <h5>Noun. Hidden gem (plural hidden gems) Something possessing a value or beauty that is not immediately apparent,</h5>
                    <h5>  which therefore has received far less recognition than it deserves.</h5>

                    <div>
                        <Form onSubmit={handleFormSubmit}>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label style={{
                                            fontWeight: 'bold',
                                        }} for="GemName">
                                            Gem Name
                                        </Label>
                                        <Input
                                            style={{
                                                width: '50%',

                                            }}
                                            placeholder="Gem Name"
                                            name="name"
                                            type="name"
                                            id="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label style={{
                                            fontWeight: 'bold',
                                        }} for="TypeofGem">
                                            Type of Gem
                                        </Label>
                                        <Input style={{
                                            width: '50%',
                                        }}
                                            placeholder="Type of Gem"
                                            name="gemId"
                                            type="gemId"
                                            id="gemId"
                                            value={formState.gemId}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label style={{
                                    fontWeight: 'bold',
                                }} for="Description">
                                    Description
                                </Label>
                                <Input
                                    style={{
                                        width: '50%',
                                    }}
                                    placeholder="Description"
                                    name="description"
                                    type="input"
                                    id="description"
                                    value={formState.description}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label style={{
                                    fontWeight: 'bold',
                                }} for="Address">
                                    Address
                                </Label>
                                <Input
                                    style={{
                                        width: '50%',
                                    }}
                                    placeholder="Address"
                                    name="address"
                                    type="address"
                                    id="address"
                                    value={formState.address}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label style={{
                                            fontWeight: 'bold',
                                        }} for="WebsiteLink">
                                            Website Link
                                        </Label>
                                        <Input
                                            style={{
                                                width: '50%',
                                            }}
                                            placeholder="Website Link"
                                            name="link"
                                            type="link"
                                            id="link"
                                            value={formState.link}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>

                            </FormGroup>
                            <Button style={{
                                fontWeight: 'bold',
                            }} submit>
                                Submit New Gem!
                            </Button>
                        </Form>

                        {error && <div>Failed to add a new Gem!</div>}

                    </div>
                </div>
            </div>
        </section >
    );
};




export default Gemsform; 