$(document).ready(function(){
	setInterval(function(){ 
		
		$.getJSON('http://srvstm.com/api-json/VFhwRk1VOUVRVDA9KzU=', function(data) {
			var status = data.status; // Mostra o status da rádio
			var porta = data.porta; // Mostra a porta da rádio
			var porta_dj = data.porta_dj; // Mostra a porta DJ da rádio
			var ip = data.ip; // Mostra o endereço do servidor da rádio
			var ouvintes_conectados = data.ouvintes_conectados; // Mostra total de ouvintes conectados
			var titulo = data.titulo; // Mostra o nome da rádio
			var plano_ouvintes = data.plano_ouvintes; // Mostra o limite de ouvintes do plano
			var plano_ftp = data.plano_ftp; // Mostra o limite de espaço do AutoDJ do plano
			var plano_bitrate = data.plano_bitrate; // Mostra o bitrate do plano
			var musica_atual = data.musica_atual; // Mostra a música atual
			var proxima_musica = data.proxima_musica; // Mostra a próxima música do AutoDJ(não é valido para transmissão ao vivo)
			var genero = data.genero; // Mostra o genero da rádio
			var shoutcast = data.shoutcast; // Mostra a URL do shoutcast
			var rtmp = data.rtmp; // Mostra a URl do RTMP para uso em players próprios(se tiver RTMP)
			var rtsp = data.rtsp; // Mostra a URl do RTSP para uso em players próprios(se tiver RTMP)
			var capa_musica = data.capa_musica; // Mostra a URL da imagem JPG da capa do album da música

			var array = musica_atual.split(" - ");

			if(capa_musica == "" || capa_musica == null || capa_musica.length == 0) {
				$('.bloc_coverStatic').removeAttr("style");
			} else {
				$('.bloc_coverStatic').css("background-image", "url("+ capa_musica +")");
			}
			
			$('.artista').text(array[0]);
			$('.musica').text(array[1]);
		});
		
	
	}, 1000);
});