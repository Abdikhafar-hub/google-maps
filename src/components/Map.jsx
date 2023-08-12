import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { PlacesAutocomplete } from "./PlacesAutocomplete";
import { RxHamburgerMenu } from "react-icons/rx";

const Map = () => {
	const center = useMemo(
		() => ({ lat: -0.3921935964842486, lng: 36.95869511962907 }),
		[],
	);
	const [selected, setSelected] = useState(center);

	return (
		<>
			{" "}
			<div className=" flex md:absolute items-center md:top-[10px] left-[40%] relative md:left-[50%] translate-x-[-50%] z-10 px-20 md:px-0">
				<div
					className=" text-xl bg-white p-[10px] shadow-none md:shadow-md cursor-pointer"
					title="Menu"
				>
					{" "}
					<RxHamburgerMenu />{" "}
				</div>
				<div className=" md:w-[300px] w-[100%] md:shadow-md cursor-text">
					<PlacesAutocomplete setSelected={setSelected} />
				</div>
			</div>
			<GoogleMap
				zoom={12}
				center={selected}
				mapContainerClassName="w-[100%] h-[100vh]"
			>
				{selected && <Marker position={selected} />}
			</GoogleMap>
		</>
	);
};

export default Map;
