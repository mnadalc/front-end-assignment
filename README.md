## Hurtigruten frontend assignment

This project allows Hurtigruten to asses potential frontend candidates with real, working code.

You have two options.

### Send in your own project

If you have an existing pet project or something that you are proud of and using the following technologies, send it to us.

- One of the modern JavaScript frameworks
- TypeScript
- CSS (preferably not a library like Bootstrap)
- Tests

### Choose our assignment

Spend only **2-3 hours** on this assignment, don't worry if you can't finish it.

You will find the exercises in the [exercises.md](./exercises.md) file.

We have bootstrapped this assignment with [Create React App](https://github.com/facebook/create-react-app) to give you the initial setup.

**If you feel strongly about using other frameworks (such as [Vue](https://vuejs.org/), [Angular](https://angular.io/) or [Svelte](https://svelte.dev/)), libraries or tools you are free to do so!**

---

## Miguel Angel Nadal assignment

I have tried not to use the libraries or any dependency for the project.
The technologies used are:

- TypeScript
- CSS
- Jest
- React Testing Library

The only dependency added into the project is [lodash debounce](https://lodash.com/docs/4.17.15#debounce), used for the SearchBar in order to apply optimization to the search when the user is typing.

### What is missing

I didn't have time to implement sorting for the list of results for the table.
If I had the time, I would have probably used [lodash orderBy](https://lodash.com/docs/4.17.15#orderBy) function to sort the list of results.

### Testing

The main three components (`<SearchBar />`, `<Table />` and `<TableRow />`) have unit tests each one.

And the parent component (`<App/ >`) has an integration test in order to check that everything renders as expected.

I didn't added any End-to-End tests as this is a really small task and I thought it might be an overkill.
