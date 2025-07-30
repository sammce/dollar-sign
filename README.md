# Budgeting App

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Contributing](#contributing)
- [Features](#features)
  - [Budget tracking](#budget-tracking)
  - [Commodity tracking](#commodity-tracking)

## [Overview](#overview)

This app is intended to solve a problem that I currently have (spending too much money). While it won't have integrations with many other services (meaning you have to manually enter your data), it's a good way to track your spending and see if you're not saving enough.

I also love open source software, so this project is and always will be open-source (unless Google offers me a bajillion dollars, I have a price).

The app uses the following technologies/libraries:

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (special mention to [Aceternity](https://ui.aceternity.com/) and [MagicUI](https://magicui.design/))
- [Zustand](https://zustand-demo.pmnd.rs/)

At the minute, the app is intended for local use (no cross device sync). This could be added in the future, I just don't want to pay for it right now.

## [Installation](#installation)

To run the app locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running `pnpm install` (or `npm install` for the boomers).
4. Start the development server by running `pnpm dev`.

## [Contributing](#contributing)

### Open source

If you'd like to contribute to this project, please fork the repository and create a pull request.

Please feel free to open an issue if you have any questions or suggestions.

## [Features](#features)

### Budget tracking

- [ ] Input your savings/income in different currencies
- [ ] Track monthly expenses (subscriptions, groceries, etc.)
- [ ] Update values and charts on monthly basis

### Commodity tracking

- [ ] Input your commodities
- [ ] Track their values
- [ ] Also add in inflation data for fiat currencies
