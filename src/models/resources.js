const swapi = {
  films: 'https://swapi.co/api/films/',
  people: 'https://swapi.co/api/people/',
  planets: 'https://swapi.co/api/planets/',
  species: 'https://swapi.co/api/species/',
  starships: 'https://swapi.co/api/starships/',
  vehicles: 'https://swapi.co/api/vehicles/'
};

const films = {
  required: [
    'title',
    'episode_id',
    'opening_crawl',
    'director',
    'producer',
    'release_date',
    'characters',
    'planets',
    'starships',
    'vehicles',
    'species',
    'url',
    'created',
    'edited'
  ]
};
const people = {
  required: [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'gender',
    'homeworld',
    'films',
    'species',
    'vehicles',
    'starships',
    'url',
    'created',
    'edited'
  ]
};
const planets = {
  required: [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'population',
    'residents',
    'films',
    'created',
    'edited',
    'url'
  ]
};
const species = {
  required: [
    'name',
    'classification',
    'designation',
    'average_height',
    'average_lifespan',
    'hair_colors',
    'skin_colors',
    'eye_colors',
    'homeworld',
    'language',
    'people',
    'films',
    'url',
    'created',
    'edited'
  ]
};
const starships = {
  required: [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'max_atmosphering_speed',
    'crew',
    'passengers',
    'cargo_capacity',
    'consumables',
    'hyperdrive_rating',
    'MGLT',
    'starship_class',
    'pilots',
    'films',
    'created',
    'edited',
    'url'
  ]
};
const vehicles = {
  required: [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'max_atmosphering_speed',
    'crew',
    'passengers',
    'cargo_capacity',
    'consumables',
    'vehicle_class',
    'pilots',
    'films',
    'created',
    'edited',
    'url'
  ]
};
