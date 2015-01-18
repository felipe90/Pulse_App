$(function(){

	$.get('logos_footer.html',function(e){
		console.log(e);
		$('footer').append(e);
	});

	$.get('usuario.json',function(e){
		console.log(e);
		$('footer').append(e);
	});

});

var base_url = "https://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat,lon) {

	var query = "SELECT * FROM geo.placefinder WHERE text=' "+lat+","+lon+" ' AND gflags='R' ";

	query=encodeURIComponent(query);

	$.ajax({
		url:base_url+'q='+query,
		dataType:'jsonp',
		json:'callback',
		jsonpCallBack:'procesarGeoInfo',
		data:{
			format:"json"
		}
	}).
	success(function(rsp){
		$('#geo_info').html(rsp.query.results.Result.city+" , "+rsp.query.results.Result.country);
	});
}

function procesarGeoInfo (info) {
	console.log(info);
}