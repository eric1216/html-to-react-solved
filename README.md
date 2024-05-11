### Standard Requirements

- [x] Setup eslint
- [x] Pass all linting checks
- [x] Format code with prettier
- [x] State should not be duplicated
- [x] Variables should be named logically
- [x] No unnecessary console logs
- [x] No commented out blocks of code (Code comments are fine)
- [x] Setup a github repository with your submission as the `main` branch, you will submit a link to this for grading (Not a Zip File)

### Assignment Specific Requirements

- [x] Set up a react app using Vite
- [x] draw out your component tree in excalidraw
  - note: See [This Video](https://www.loom.com/share/13ad514f0d804dfeac6c1e487b2ae3dd) on how to submit
- [x] Get your react app to look EXACTLY the same as this html project
- [x] Use props to customize components that are being used
- [x] Use conditional rendering to render odd rows as dark and even rows as light with the "light" | "dark" class names
- [x] Abstract any REPEATED UI into Components
- [x] Use per-component CSS imports

  For example if you have a `CharacterCard.css` you can have an import that looks like so

```jsx
import './some-css-file';

function CharacterCard() {
  // code goes here
}
```

- [x] Have at least one Class Component that uses props
- [x] Have at least one Functional Component that uses props
- [x] Transform the original data to get the data you want for each component
  - The characters in the table should be sorted by votes as shown in the html app
  - The characters table should only show the first top 5 characters
  - The character cards should show all characters, and does not need to be sorted
  - We should be passing our array of characters (the data array) from the top to the children
  - You can transform that data either before or after sending it to the child component
