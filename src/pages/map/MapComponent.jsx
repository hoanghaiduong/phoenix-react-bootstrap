import React, { useState, useEffect, useLayoutEffect } from "react";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const MapComponent = withGoogleMap((props) => {
  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      console.log(position.coords.longitude)
      console.log(position.coords.latitude)
    }, (err) => {
      console.log(err);
    });
  }, []);
  const [latLong, setLatLong] = useState(null);

  useEffect(() => {
    if (latLong) {
      setPosition(latLong);
    }
  }, [latLong]);

  const onMapClick = (event) => {
    console.log(event)
    setPosition(event.latLng);
  };

  return (
    <GoogleMap
      center={position}
      zoom={15}
      onMapClick={onMapClick}
    >
      

      {position.lat != 0 && (
        <>
        <Marker
        position={position}
      />
      {/* <Marker  position={{
        lat: 10.858247617198204,
        lng: 106.80910224064249,
      }}
      title="nhahang1"
      />
      <InfoWindow
        position={{
          lat: 10.858247617198204,
          lng: 106.80910224064249,
        }}
      >
        <div>
          nhà hàng
            <img src="../../assets/logo-res/khong-gian-nha-hang-vu.jpg" alt="icon" style={{width: '100px', borderRadius: '50%'}} />
            <h3>Nhà hàng 1</h3>
          </div>
      </InfoWindow> */}
        {/* <InfoWindow position={{
          lat: 10.858247617198204,
          lng: 106.80910224064249,
        }} marker={<Marker title="nhahang1"/>}
        >
          <div>
            <img src="../../assets/logo-res/khong-gian-nha-hang-vu.jpg" alt="icon" style={{width: '10px', borderRadius: '50%'}} />
            <h3>Nhà hàng 1</h3>
          </div>
        </InfoWindow> */}
        </>
      )}
    </GoogleMap>
  );
});

export default MapComponent;
