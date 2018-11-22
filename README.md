## Test - Requirements

Build a UI to search the Movie DB: The user should be able to enter some text into a search field, see and browse the results from the Movie DB.

### Limitations

* Not use Frameworks like Angular or Redux
* Not use code generators like CRA

### Reference

* [Api docs](http://docs.themoviedb.apiary.io/)

## Getting Started

1. Download the repository ```git clone https://github.com/melwynfurtado/dazn.git```
2. Install all dependency ```npm i```
3. Run the server ```npm start```

Project should run at ```http://localhost:8080/``` and open a new browser window

### Some other npm scripts
* ```npm test``` for unit tests
* ```npm run build``` for production builds

## Folder structure
```
  - src
    - components (React components)
    - clients (HTTP client abstraction currently using axios)
    - services (theMovieDbService with just one method to get movies list, should be fairly easy to extend)
```


## Further improvements
- Could do lot better UX with time which involve detailed representation of Movie details(card).
- Better handling of error scenarios perhaps try some of the new features on v16 as I don't like the look of App component which can be simplified.
- Could add support for special chars which currently don't always work.
- Support for search into all collections.
- Feels not quite right to pass API key over HTTP as query param, may be pass it as a header param or even a simple express server proxying my requests.
