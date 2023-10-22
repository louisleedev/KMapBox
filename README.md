# Map Visualization of State Obesity Statistics

## Overview

This project utilizes React, Next.js, Tailwind CSS, and TypeScript to create an interactive map visualization displaying state obesity statistics. It integrates React-Map-GL for rendering maps, allowing users to explore obesity data in a visually engaging way. The application features the ability to search and filter data points on the map, enhancing user interactivity.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A statically typed superset of JavaScript that adds optional types.

**Why React.js, Next.js and TypeScript?**
I choose to use React, Next.js, and TypeScript in my projects because of the unparalleled advantages they offer in terms of development speed, maintainability, and scalability. React's component-based architecture allows me to build modular and reusable user interfaces, making it easier to manage complex applications. Next.js, being a powerful React framework, simplifies server-side rendering, routing, and deployment, providing a seamless and optimized user experience. Additionally, TypeScript enhances my productivity by adding static types, enabling early error detection, and improving code readability, which leads to more reliable and maintainable code. The combination of React, Next.js, and TypeScript not only streamlines my development process but also ensures the creation of robust, high-quality web applications tailored to my project requirements.

**Why Tailwind CSS?**
I choose to use Tailwind CSS in my projects because of its high-efficient speed and simplicity. With Tailwind, I can rapidly develop stylish and responsive user interfaces without the hassle of writing extensive custom CSS. Its utility-first approach aligns perfectly with my workflow, allowing me to focus on functionality rather than spending time on intricate styling.

## Accomplishments

- Implemented an interactive map using React-Map-GL.
- Integrated state obesity statistics in GeoJSON format.
- Implemented search and filtering functionality for data points on the map.
- Utilized Tailwind CSS for responsive and modern UI design.
- Enhanced user experience with smooth map interactions.

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd map-visualization
   ``` 
2. **Install dependencies:**

    ```bash
    npm install
    ```
3. **Set up environment variables:**
    Create a **'.env.local'** file in the project root and add your Mapbox access token:

    ```bash
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-access-token
    ```
    Replace **'your-mapbox-access-token'** with your actual Mapbox access token.
4. **Run the application:**

    ```bash
    npm run dev
    ``````
    The application will be accessible at **'http://localhost:3000'**.

## Usage
 - **Exploring the Map:**
    - Use the mouse or touch gestures to pan and zoom the map.
    - Interact with the map to view different state obesity statistics.
- **Search and Filter:**
    - Use the search bar to find specific locations on the map.
    - Apply filters to visualize specific obesity data points based on criteria.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
