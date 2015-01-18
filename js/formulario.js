

$(function () {
	console.log("Se disparo el evendo DOMContendLoaded");
})


 
$( window ).load(function() {
	console.log("Se disparo el evento window load");

	var $form=$("#formulario");
	var $titulo=$("#titulo");
	var $url=$("#url");
	var $boton_publicar=$("#pubicar_nav");
	var $list=$("#contenido");
	var $post=$(".item").first();

	$boton_publicar.click(mostrarOcultarFormulario);
	$form.on("submit",agregarPost);

	$(".item").slideDown();

	function mostrarOcultarFormulario(e){
		e.preventDefault();
		e.stopPropagation();
		$form.slideToggle();
		$list.slideToggle();
		$boton_publicar.toggleClass(".disabled");
	}

	function agregarPost (e) {
		e.preventDefault();
		e.stopPropagation();
		var url=$url.val();
		var titulo=$titulo.val();
		var $clone=$post.clone();

		$clone.find('.titulo_item a')
			.text(titulo)
			.attr('href', url);


		$clone.hide();

		$list.prepend($clone);

		$clone.show();
		mostrarOcultarFormulario();
	}
});


