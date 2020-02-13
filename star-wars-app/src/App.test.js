import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import axios from 'axios';
import { StarWarsCharacters } from './components/StarWarsCharacters';


// Test to see if star wars logo is rendering
test("render of star wars logo", async () => {
    const wrapper = render(<App />);
    const starWarsLogo = await wrapper.findByAltText(/logo/i);
    expect(starWarsLogo).toBeVisible();
});

// Test to see if the className of buttons is rendering
test('render of the previous and next buttons', async () => {
    const wrapper = render(<App />);
    const prevNextButtons = await wrapper.getByTestId('button-test');
    expect(prevNextButtons).toHaveClass('buttons');
})

// Test to see if buttons are firing
test('render form and test previous and next buttons', async () => {
    const wrapper = render(<App />);

    const previousButton = await wrapper.getByText(/previous/i);
    const nextButton = await wrapper.getByText(/next/i);

    fireEvent.click(previousButton);
    fireEvent.click(nextButton);
})

// Test to see if data is displaying correctly
test('render star wars characters names', async () => {
    const wrapper = render(<App />);

    const character = await wrapper.findByText(/luke/i);

    expect(character).toBeVisible();


})


jest.mock("axios", () => {
    return {
        get: jest.fn(() => Promise.resolve({
            data: {
                results: [
                    {
                        "name": "Luke Skywalker",
                        "height": "172",
                        "mass": "77",
                        "hair_color": "blond",
                        "skin_color": "fair",
                        "eye_color": "blue",
                        "birth_year": "19BBY",
                        "gender": "male",
                        "homeworld": "https://swapi.co/api/planets/1/",
                        "films": [
                            "https://swapi.co/api/films/2/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/3/",
                            "https://swapi.co/api/films/1/",
                            "https://swapi.co/api/films/7/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/1/"
                        ],
                        "vehicles": [
                            "https://swapi.co/api/vehicles/14/",
                            "https://swapi.co/api/vehicles/30/"
                        ],
                        "starships": [
                            "https://swapi.co/api/starships/12/",
                            "https://swapi.co/api/starships/22/"
                        ],
                        "created": "2014-12-09T13:50:51.644000Z",
                        "edited": "2014-12-20T21:17:56.891000Z",
                        "url": "https://swapi.co/api/people/1/"
                    },
                    {
                        "name": "C-3PO",
                        "height": "167",
                        "mass": "75",
                        "hair_color": "n/a",
                        "skin_color": "gold",
                        "eye_color": "yellow",
                        "birth_year": "112BBY",
                        "gender": "n/a",
                        "homeworld": "https://swapi.co/api/planets/1/",
                        "films": [
                            "https://swapi.co/api/films/2/",
                            "https://swapi.co/api/films/5/",
                            "https://swapi.co/api/films/4/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/3/",
                            "https://swapi.co/api/films/1/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/2/"
                        ],
                        "vehicles": [],
                        "starships": [],
                        "created": "2014-12-10T15:10:51.357000Z",
                        "edited": "2014-12-20T21:17:50.309000Z",
                        "url": "https://swapi.co/api/people/2/"
                    },
                    {
                        "name": "R2-D2",
                        "height": "96",
                        "mass": "32",
                        "hair_color": "n/a",
                        "skin_color": "white, blue",
                        "eye_color": "red",
                        "birth_year": "33BBY",
                        "gender": "n/a",
                        "homeworld": "https://swapi.co/api/planets/8/",
                        "films": [
                            "https://swapi.co/api/films/2/",
                            "https://swapi.co/api/films/5/",
                            "https://swapi.co/api/films/4/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/3/",
                            "https://swapi.co/api/films/1/",
                            "https://swapi.co/api/films/7/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/2/"
                        ],
                        "vehicles": [],
                        "starships": [],
                        "created": "2014-12-10T15:11:50.376000Z",
                        "edited": "2014-12-20T21:17:50.311000Z",
                        "url": "https://swapi.co/api/people/3/"
                    }
                ]
            }
        }))
    }
});


// Test to see if api call is being made
test('api call was made', async () => {

    const wrapper = render(<App />);
    await wrapper.findByAltText(/logo/i);
    expect(axios.get).toHaveBeenCalled();
})
