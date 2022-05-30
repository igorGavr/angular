{
  "variables": [],
  "info": {
  "name": "MovieDB copy",
    "_postman_id": "e06b1837-8392-232a-06c5-82016b4de8fd",
    "description": "",
    "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
},
  "item": [
  {
    "name": "get movies",
    "request": {
      "url": {
        "raw": "https://api.themoviedb.org/3/discover/movie?page=2",
        "protocol": "https",
        "host": [
          "api",
          "themoviedb",
          "org"
        ],
        "path": [
          "3",
          "discover",
          "movie"
        ],
        "query": [
          {
            "key": "page",
            "value": "2",
            "equals": true,
            "description": ""
          }
        ],
        "variable": []
      },
      "method": "GET",
      "header": [
        {
          "key": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U",
          "description": ""
        }
      ],
      "body": {},
      "description": ""
    },
    "response": []
  },
  {
    "name": "get genres",
    "request": {
      "url": "https://api.themoviedb.org/3/genre/movie/list",
      "method": "GET",
      "header": [
        {
          "key": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U",
          "description": ""
        }
      ],
      "body": {},
      "description": ""
    },
    "response": []
  },
  {
    "name": "search movie",
    "request": {
      "url": {
        "raw": "https://api.themoviedb.org/3/search/keyword?query=super",
        "protocol": "https",
        "host": [
          "api",
          "themoviedb",
          "org"
        ],
        "path": [
          "3",
          "search",
          "keyword"
        ],
        "query": [
          {
            "key": "query",
            "value": "super",
            "equals": true,
            "description": ""
          }
        ],
        "variable": []
      },
      "method": "GET",
      "header": [
        {
          "key": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U",
          "description": ""
        }
      ],
      "body": {},
      "description": ""
    },
    "response": []
  },
  {
    "name": "get poster",
    "request": {
      "url": "https://image.tmdb.org/t/p/w500/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
      "method": "GET",
      "header": [
        {
          "key": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U",
          "description": ""
        }
      ],
      "body": {},
      "description": ""
    },
    "response": []
  }
]
}
