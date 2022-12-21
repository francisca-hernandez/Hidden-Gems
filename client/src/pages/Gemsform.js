import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_GEM } from '../utils/mutation';

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
                variables: {...formState}
            })
            console.log(saveGem);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section>
            <div>
                <div>
                    <h4>Add a Gem. Shhhh!</h4>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                placeholder="Gem Name"
                                name="name"
                                type="name"
                                id="name"
                                value={formState.name}
                                onChange={handleChange}
                            />
                             <input
                                placeholder="Type of Gem"
                                name="gemId"
                                type="gemId"
                                id="gemId"
                                value={formState.gemId}
                                onChange={handleChange}
                            />
                            <input
                                placeholder="Description"
                                name="description"
                                type="input"
                                id="description"
                                value={formState.description}
                                onChange={handleChange}
                            />
                            <input
                                placeholder="address"
                                name="address"
                                type="address"
                                id="address"
                                value={formState.address}
                                onChange={handleChange}
                            />
                            <input
                                placeholder="Website Link"
                                name="link"
                                type="link"
                                id="link"
                                value={formState.link}
                                onChange={handleChange}
                            />
                            <button type="submit">
                                Submit a New Gem
                            </button>
        
                        </form>

                        {error && <div>Failed to add a new Gem!</div>}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Gemsform; 