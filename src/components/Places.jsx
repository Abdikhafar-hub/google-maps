import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

// Define libraries once outside the component
const libraries = ["places"];

export default function Places() {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}
