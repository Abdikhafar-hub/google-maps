


## Features

- Interactive map interface similar to Google Maps.
- Search for locations using the integrated GeoCoding API.
- Search for a location using coordinates.
- Street view: You can explore the streets of any location in the world.
- Utilizes React Icons for consistent and attractive UI elements.

## Getting Started

To get started with Gatere Maps locally, follow these steps:

1. Clone the repository:
   ```bash
https://github.com/Abdikhafar-hub/google-maps
   ```
2. Install the dependencies:
   ```bash
   cd google_maps_clone
   ```
   ```bash
   pnpm install
   ```
3. Register for a Maps API via Google Cloud

   - Create a `.env.local` / `.env` file in the root directory of the project.
   - Register for a Maps JavaScript API key via the Google Cloud platform and enable the GeoCoding API. You can follow the official documentation to obtain the API key.
   - Open the `.env.local` file and add the following line:

     ```env
     VITE_REACT_APP_API_KEY=YOUR_API_KEY
     ```

     Replace `YOUR_API_KEY` with the actual API key you obtained from Google Cloud. By setting up the .env.local file with the appropriate API key, the application will be able to access the geocoding API and provide accurate property locations.

4. Start the development server:

   ```javascript
   pnpm run dev
   ```

5. Open your browser and visit specified local host port to view the app eg. `http://localhost:5173`

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to the branch.
5. Submit a pull request.
