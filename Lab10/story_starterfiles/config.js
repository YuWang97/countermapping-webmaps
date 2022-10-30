var config = {
    style: 'mapbox://styles/yuw9707/cl8xar8kp000d15og1ur1rqq5',
    accessToken: 'pk.eyJ1IjoieXV3OTcwNyIsImEiOiJjbDc2YTAzbWgwNXlhM3ZwMzJhdHRlcjRpIn0.Ox6Xzt-6V0GLDeJrnKNBaQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'How is affordable housing construction responding to climate change?',
    byline: 'CRP 5850 - Mapping and Countermapping',
    footer: 'Source: The data sources include the Sandy Inundation Zone and the New York City Housing Developments (NYCHA), both providied by NYC OpenData.',
    chapters: [
        {
            id: 'nyc-flood-1',
            alignment: 'left',
            hidden: false,
            title: 'New York City',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.97824, 40.77410],
                zoom: 8,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'nyc-flood-2',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook',
            image: 'https://static01.nyt.com/images/2012/10/30/nyregion/video-sandy-redhook/video-sandy-redhook-videoSmall.jpg',
            description: 'There are 639 properties in Red Hook that have greater than a 26% chance of being severely affected by flooding over the next 30 years. This represents 67% of all properties in Red Hook. In addition to damage on properties, flooding can also cut off access to utilities, emergency services, transportation, and may impact the overall economic well-being of an area. Overall, Red Hook has a major risk of flooding over the next 30 years, which means flooding is likely to impact day-to-day life within the community. This is based on the level of risk the properties face rather than the proportion of properties with risk.',
            location: {
                center: [-74.00918, 40.67551],
                zoom: 14,
                pitch: 6,
                bearing: 0,
                speed: 2,
                curve: 1,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {layer:'pluto-hous-type-master-featu-7b5u7f',
            opacity:1}],
            onChapterExit: []
        }
    ]
};
