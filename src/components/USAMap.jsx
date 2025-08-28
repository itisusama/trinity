import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "California", coordinates: [-118.2437, 34.0522] },
  { name: "Texas", coordinates: [-95.3698, 29.7604] },
];

export default function USAMap() {
  return (
    <div className="w-full h-[400px]">
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        className="w-full h-full"
      >
        {/* Draw States */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#f3f4f6"
                stroke="#d1d5db"
              />
            ))
          }
        </Geographies>

        {/* Add Markers */}
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={6} fill="#157682" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
