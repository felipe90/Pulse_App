
$(function(){

	var geo=navigator.geolocation;

	function geo_error (argument) {
		console.log("-------fallo la geolocalizacion");
	}

	function geo_exito (posicion) {
		var lat = posicion.coords.latitude;
		var lon = posicion.coords.longitude;
		var mapa = new Image();
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?maptype=hybrid&zoom=15&size=300x150&sensor=false&center="+lat+","+lon;

		$('#geo').append(mapa);

		obtenerGeoInformacion(lat,lon);
	}

	function opciones (argument) {
		// body...
	}
	geo=geo.getCurrentPosition(geo_exito,geo_error,opciones);

});