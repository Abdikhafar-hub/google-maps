import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
  } from "use-places-autocomplete";
  import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";
  
  export const PlacesAutocomplete = ({ setPosition, setSubmittedLocation }) => {
	const {
	  ready,
	  value,
	  setValue,
	  suggestions: { status, data },
	  clearSuggestions,
	} = usePlacesAutocomplete();
  
	const handleSelect = async (address) => {
	  setValue(address, false);
	  clearSuggestions();
  
	  try {
		const results = await getGeocode({ address });
		const { lat, lng } = await getLatLng(results[0]);
		setPosition({ lat, lng });
		setSubmittedLocation({ lat, lng });
	  } catch (error) {
		console.log("Error: ", error);
	  }
	};
  
	return (
	  <Combobox onSelect={handleSelect}>
		<ComboboxInput
		  value={value}
		  onChange={(e) => setValue(e.target.value)}
		  disabled={!ready}
		  className="w-[100%] py-2 px-6"
		  placeholder="Search on Abdikhafar Maps"
		/>
		<ComboboxPopover className="z-50">
		  <ComboboxList>
			{status === "OK" &&
			  data.map(({ place_id, description }) => (
				<ComboboxOption key={place_id} value={description} />
			  ))}
		  </ComboboxList>
		</ComboboxPopover>
	  </Combobox>
	);
  };
  