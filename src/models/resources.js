export const swapi = {
  films: 'https://swapi.co/api/films/',
  people: 'https://swapi.co/api/people/',
  planets: 'https://swapi.co/api/planets/',
  species: 'https://swapi.co/api/species/',
  starships: 'https://swapi.co/api/starships/',
  vehicles: 'https://swapi.co/api/vehicles/'
};

export const films = {
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
export const people = {
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
export const planets = {
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
export const species = {
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
export const starships = {
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
export const vehicles = {
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

export const setOfResourceAttributesUsed = {
  films: ['title', 'opening_crawl', 'director', 'producer', 'release_date'],
  people: ['name', 'birth_year', 'homeworld', 'films', 'species'],
  planets: ['name', 'climate', 'population', 'residents', 'films'],
  species: [
    'name',
    'classification',
    'average_lifespan',
    'language',
    'people',
    'films'
  ],
  starships: [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'passengers',
    'hyperdrive_rating',
    'starship_class',
    'films'
  ],
  vehicles: [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'passengers',
    'vehicle_class',
    'films'
  ]
};
