    mapboxgl.accessToken = 'pk.eyJ1Ijoic3hiYXRlcyIsImEiOiJja3NwZmh3NzMwMmVvMzBxa3QwNGg5OTZvIn0.KChL6-84vHu8Q2mCijfw3g'
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-71.104081,42.365554],
            zoom: 15
        });
        var marker = new mapboxgl.Marker()
            // .setLngLat([142.7489,-19.6270])
            // .addTo(map)


    
    async function run(){
        // get bus data    
      const locations = await getBusLocations();

      //array of locations
      console.log(locations);

      //currently sets Lng and Lat of marker to first intem in locations array 
      marker.setLngLat([locations[0].attributes.longitude, locations[0].attributes.latitude]);

      //add marker to map
      marker.addTo(map); 
    }
    
    // Request bus data from MBTA
    async function getBusLocations(){
      const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
      const response = await fetch(url);
      const json     = await response.json();
      return json.data;
    }
    
    setInterval(move, 3000);
    
    function move(){
      run();
      // marker.setLngLat(locationdata);  
    };