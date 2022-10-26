// collection == table
db.routes.insertMany([
    {
        _id: '1',
        title: 'Primeiro',
        startposition: { lat: -15.82594, lng: -47.92923 },
        endposition: { lat: -15.82942, lng: -47.92765 },        
    },
    {
        _id: '2',
        title: 'Segundo',
        startposition: { lat: -15.82449, lng: -47.92756 },
        endposition: { lat: -15.8276, lng: -47.92621 },        
    },
    {
        _id: '3',
        title: 'Terceiro',
        startposition: { lat: -15.82331, lng: -47.92923 },
        endposition: { lat: -15.82758, lng: -47.92532 },        
    },
]);

