# Hangman

This application is a hangman game designed to demonstrate my React skills!

## 💎 Features

- ✅ Challenging unknown word
- ✅ Letter picker input mechanism that provides feedback on if the letter exists in the unknown word
- ✅ Remaining guess count
- ✅ Pop up to let you know the outcome of the game
- ✅ Reset game button
- ✅ Track number of wins and losses
- ✅ Responsive

## 🔨 Development

This application was built using Node v12.16.0. There is an accompanying `.node-version` file.

    npm install
    npm start

## 👩‍🔬 Testing

    npm run lint
    npm run test

If you'd like to view components in storybook

    npm run storybook

## 📦 Production

This application uses [react-snap](https://www.npmjs.com/package/react-snap) for server side rendering. There is an [express](https://expressjs.com/) server that will serve the application at [http://localhost:3001](http://localhost:3001)

    npm run build
    node server.js

Or you can use the `serve` command in `package.json`

    npm run serve

## 🤔 Design decisions

I really like the readability that [styled-components](https://styled-components.com/) provides so I opted for that approach instead of css files.

I tried to make use of a few different React features such as context (`RandomWordProvider`) and portals (`Modal`). Putting the random word in context may have been a little overkill in this instance due to the relatively small number of components, but it allowed me to demonstrate building custom hooks as well.

Generally I try to keep generic design system components (`Button`, `Link`) togeather. Those components can all be found under `src/components/Generic`.

When creating components that don't have use outside of a single component, I tend to leave them in the same file. I'll usually move them to a subdirectory (such as `src/components/Controls/LetterPicker`) if the component begins to grow in complexity or I end up a whole bunch of single use components.

To keep track of state I put `selectedLetters` in the `<Gameboard>` and `randomWord` in `<RandomWordProvider>`. All other data is derived from that state.

For testing I chose to test the application as a whole rather than each component individually. The `testWord` prop on `<App />` is to allow ease of testing.
