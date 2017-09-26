const initialState = {
    position: [51.505, -0.09],
    position2: [51.605, -0.10],

    layers: [
        {
            layerName: "Capital",
            queryToolFields:["Name","Language"],
            features: [
                {
                    position: [51.505, -0.09],
                    attribute: {
                        Name: "London",
                        Language: "English",
                        Inspector: "Joe"
                    }
                },
                {
                    position: [48.8588376, 2.276],
                    attribute: {
                        Name: "Paris",
                        Language: "French",
                        Inspector: "Wei"
                    }
                },
                {
                    position: [52.5067, 13.2843],
                    attribute: {
                        Name: "Berlin",
                        Language: "German",
                        Inspector: "Jeff"
                    }
                }
            ]
        },
        {
            layerName: "Service Center",
            queryToolFields:["Name","Language"],
            features: [
                {
                    position: [53.4722249, -2.29367],
                    attribute: {
                        Name: "Service Center 1st",
                        Language: "English",
                        Inspector: "Dion"
                    }
                },
                {
                    position: [50.467928, 4.444564],
                    attribute: {
                        Name: "Service Center 2st",
                        Language: "French",
                        Inspector: "Lori"
                    }
                },
                {
                    position: [45.3691, 9.1212],
                    attribute: {
                        Name: "Service Center 3st",
                        Language: "German",
                        Inspector: "Chris"
                    }
                }
            ]
        }        
    ],

    zoom: 5
};

export default (state = initialState, action) => {
if(action.type==="QUERYTOOL_ZOOMTO_QUERYRESULT")
     state = { ...state, position: action.data, zoom:8 };
    return state;
};