

$( document ).ready(function() {
	
});
 
$( window ).load(function() {
	var $form=$("#formulario");
	var $titulo=$("#titulo");
	var $url=$("#url");
	var $boton_publicar=$("#pubicar_nav");
	var $list=$("#contenido");
	var $post=$(".item").first();

	$boton_publicar.click(mostrarFormulario);
	$form.on("submit",agregarPost);

	$(".item").slideDown();


	function mostrarFormulario(){
		$form.slideToggle();
		return false;
	}

	function agregarPost () {
		var url=$url.val();
		var titulo=$titulo.val();
		var $clone=$post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);


		$clone.hide();

		$list.prepend($clone);

		$clone.show();
		mostrarFormulario();
		return false;
	}
});


