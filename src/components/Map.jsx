import { GoogleMap, Marker } from "@react-google-maps/api"; // Use standard Marker
import { useState, useEffect } from "react";
import { PlacesAutocomplete } from "./PlacesAutocomplete";
import { FaBars, FaSearch } from "react-icons/fa";
import GetCoordinates from "./GetCoordinates";
import Menu from "./Menu";
import Items from "./Items";

// Define the default map center if the user's location isn't available
const defaultCenter = { lat: -0.3921935964842486, lng: 36.95869511962907 };

const Map = () => {
  const [position, setPosition] = useState(null);
  const [submittedLocation, setSubmittedLocation] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  // Get user's current location if available
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => setPosition(defaultCenter) // Fallback if user denies location
      );
    }
  }, []);

  // Handle location submitted manually
  const handleLocationSubmit = (geolocation) => {
    setSubmittedLocation(geolocation);
  };

  return (
    <>
      {/* Header section with menu, search, and geolocation */}
      <div className="flex md:absolute items-center md:top-[4px] left-[40%] relative md:left-[50%] translate-x-[-50%] z-10 pl-16 md:pl-0">
        <div
          onClick={() => setOpenMenu((openMenu) => !openMenu)}
          className="text-[#424242] text-[19px] bg-white p-[10px] shadow-none md:shadow-md cursor-pointer"
          title="Menu"
        >
          <FaBars />
        </div>

        <div className="md:w-[300px] w-[350px] md:shadow-md cursor-text">
          <PlacesAutocomplete setPosition={setPosition} setSubmittedLocation={setSubmittedLocation} />
        </div>

        <div
          className="text-[#424242] text-[19px] bg-white p-[10px] shadow-none md:shadow-md cursor-pointer"
          title="Search"
        >
          <FaSearch />
        </div>
      </div>

      {/* Get coordinates manually */}
      <div>
        <GetCoordinates onLocationSubmit={handleLocationSubmit} />
      </div>

      {/* Menu and other components */}
      <div>
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      <div>
        <Items />
      </div>

      {/* Map rendering */}
      <GoogleMap
        zoom={12}
        center={submittedLocation || position || defaultCenter}
        mapContainerClassName="w-[100%] h-[100vh]"
      >
        {/* Use the standard google.maps.Marker */}
        {submittedLocation && (
          <Marker
            position={submittedLocation}
          />
        )}
        {position && (
          <Marker
            position={position}
          />
        )}
      </GoogleMap>
    </>
  );
};

export default Map;
