# ACS 3310 Final Assessment

## Commands

`npm test`

- Purpose: Run the Jest test suite.
- Script: `jest`

`npm run coverage`

- Purpose: Generate a test coverage report.
- Script: `jest --coverage`

`npm run build`

- Purpose: Compile TypeScript code.
- Script: `tsc`

`npm run dev`

- Purpose: Run the Node app in development mode with auto-reload.
- Script: `nodemon --exec ts-node -- ./src/index.ts`

`npm run lint`

- Purpose: Lint TypeScript code based on ESLint configurations.
- Script: `eslint 'src/**/*.{ts,tsx}'`

`npm run lint:fix`
- Purpose: Automatically fix ESLint errors if possible.
- Script: `eslint 'src/**/*.{ts,tsx}' --fix`

## Dependencies

### Dev Dependencies

- Jest: For running tests.
- TypeScript: For TypeScript support.
- ESLint: For linting TypeScript.
- ts-node: TypeScript execution environment.
- nodemon: To automatically restart your app after every update.
- Various ESLint plugins and configs.

### Dependencies

- Moment: A library for parsing, validating, manipulating, and formatting dates.

## Description

Test your skills gained this term by solving this problem.

The mock up data in `data.json` contains information about
car purchases. Your job is to format and print the data.

You can print the data to the console with node or in the
browser with html.

The data includes the follow fields:

```JS
{
  "id": 1,
  "first_name": "neel",
  "last_name": "mclarty",
  "purchased": "2018-04-03T18:13:55Z",
  "lastpayment": "2020-08-22T11:10:41Z",
  "phone": "1531589353",
  "make": "saturn",
  "model": "s-series",
  "city": "sikeshu"
}
```

## Challenges

Solve the problems below. Feel free to use the libraries you have written in class!

Write your code with Typescript and compile it to JavaScript.

The goal is to load the JSON data from `data.json`. Process the information and print it out. It should read roughly as:

> Neel Mclarty
>
> Saturn S-series
>
> Purchased: April 3, 2018
>
> Last Payment: 8 months ago
>
> Phone: (153) 158-9353
>
> City: Sikeshu

### Challenge 0

Import than the data from `data.json`. You'll use this data to solve the problems that follow.

If you're going to run your code in node.js you should print the output to the console.

If you're going to display the data in the browser you'll need to make an HTML file and run your page in a local server to avoid CORS issues.

### Challenge 1

You should print the first_name and last_name.

Convert the first letter of each name to uppercase.

### Challenge 2

Print the purchased date to a a date and format it as:
Month date, Year for example:

> Purchased: January 21, 2019

`<full-month> <date>, <full-year>`

### Challenge 3

Print out last payment showing the date as "when".
For example: Last payment:

> Last Payment: 3 months ago

You can use your library to do this!

Should read something like: 4 months ago

### Challenge 4

Format the phone number as: (xxx) xxx-xxxx. You'll need to
write a function to do the formatting. It should take a 10
digit number/string: 4155448375, and return a string formatted as:

> (415) 544-8375

Write a function to handle this number formatting function. It should take a number/string as a parameter and return the formatted phone number as a string.

### Challenge 5

Write a unit test for your phone number formatting function.

Think of any edge cases that might effect your phone number formatter and include these in your test case.

### Challenge 6

Lint your code with ESLint. Use the Airbnb style guide.

### Challenge 7

Compile your code from TypeScript to JS.

### Submit your work on GradeScope

Submit your work via GradeScope.

## Assessing the assessment

| Expectations | Does not meet | Meets | Exceeds |
|:-------------|:--------------|:------|:--------|
| Completion   | < 100% challenges | 100% of challenges | Solved stretch challenges |
| Quality      | code is sloppy and throws errors or shows linting errors | Well written no errors | Includes comments, and variable, parameter, and function names are self documenting  |
| Comprehension | Can't explain the code written | Can explain the code | Could write the code again from scratch |
| Tests        | < 100% test coverage | 100% Test coverage | Tests covers edge cases and well written descriptions |
