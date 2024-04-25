"use client";

import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

import { Location } from "@/types/location";
import { getGeocode } from "@/utils/location";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const Map = ({ location }: { location: Location }) => {
  const [{ lng, lat }, setCoordinates] = useState({
    lng: 29.200756,
    lat: 50.836424,
  });
  const mapContainer = useRef(null);
  const map = useRef<maptilersdk.Map>();

  maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "";

  useEffect(() => {
    (async () => {
      const data = await getGeocode(location);
      setCoordinates(data);
    })();
  }, [location]);

  useEffect(() => {
    if (map.current) return;
    console.log(lng);
    console.log(lat);
    if (mapContainer.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: [lng, lat],
        zoom: 10,
      });
      const marker = new maptilersdk.Marker()
        .setLngLat([lng, lat])
        .addTo(map.current);
    }
  }, [lat, lng]);

  return (
    <div className="w-full h-64 relative">
      <div ref={mapContainer} className="absolute w-full  h-64" />
    </div>
  );
};

export default Map;
