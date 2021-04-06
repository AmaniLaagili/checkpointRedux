const initialState = {
    ideas: [
        "go to brazil",
        "go to ibiza",
        "go to scotland",
        "go to deutshland",
    ],
};

export default function ideasReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
}
