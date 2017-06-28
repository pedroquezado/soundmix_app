<!DOCTYPE html>
<html>
<head>
	<title>Method APP::Sound Mix</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">


	<script src="./assets/js/jquery-1.7.2.min.js"></script>
	<script src="./assets/js/jquery-ui-1.8.21.custom.min.js"></script>
	<script src="./assets/js//jquery.touchSwipe.min.js"></script> 
	<script src="./assets/js//jquery.xdomainajax.js"></script>
	<script src="./assets/js/srvstm.js"></script>
	<script src="./assets/js/loadSond.js"></script>
	<script src="./assets/js/loadApp.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="./assets/style/animation.css">
</head>
<body>
	
	<div id="app">
		
		<div class="body_app">

			<div id="introApp" class="ft_regular">
				<style type="text/css">
					div.stats_initapp {
						margin-top: -10px;
					}
					div.vers_d {
						font-size: 11px;
						color: rgba(0, 0, 0, 0.37);
					}
					div.load_pref {
					    color: #FFF;
					    font-size: 11px;
					}
					div.load_pref .rad_load {margin-bottom: 20px;}
					div.load_pref .rad_load img {
						max-width: 12px;
						filter: drop-shadow( 0 0 0 rgba(0, 0, 0, 0) );
					}
				</style>
				<img src="./image/logo_radio.svg">

				<div class="stats_initapp">
					<div class="vers_d">
						<span>Versão: </span>
						<b>
							<span class="vers">1.0</span>
						</b>
					</div>
					<div class="load_pref"></div>
				</div>
			</div>

			<div id="stramingApp">
				<header>
					<div class="icon-menu">
						<img src="./image/icon-menu.svg">
					</div>
					<dir class="logo-top">
						<img src="./image/logo.svg">
					</dir>
				</header>

				<div class="marg_app">
					<div class="content">
						<div>
							<div class="str_cover" >
								<div class="bloc_cover">
									<div class="hover_first"></div>
									<div class="bloc_coverStatic"></div>
								</div>
							</div>
							<div class="flax_bot">
								<div class="los">
									<img src="./image/circle_vet.svg">
								</div>
								<div class="los">
									<img class="ani_d2" src="./image/circle_vet.svg">
								</div>
								<div class="los">
									<img class="ani_d3" src="./image/circle_vet.svg">
								</div>
							</div>
						</div>
						<div class="scop_info-music">
							<div class="artista ft_medium"></div>
							<div class="musica"></div>
						</div>
					</div>

					<section>	
						<div id="slider"></div>
					</section>

					<div class="player-box">
						<div class="pb-flex">
							<div class="pbf-lower">
								<div class="mute">
									<div class="but_af">
										<img src="./image/player/mute.svg">
									</div>
								</div>
							</div>
						</div>
						<div class="pb-flex">
							<div class="slat_crow">
								<div class="play">
									<div class="but_player">
										<img src="./image/player/play.svg">
									</div>
								</div>
								<div class="pause hidden">
									<div class="but_pause">
										<img src="./image/player/pause.svg">
									</div>
								</div>
								<div class="hover_lasr"></div>
							</div>
						</div>
						<div class="pb-flex">
							<div class="pbf-lower">
								<div class="chat">
									<div class="but_af">
										<img src="./image/player/chat.svg">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="news">
					<div class="butNews ft_medium">
						<div class="butNews_icon">
							<img src="./image/news_top.svg">
						</div>
						<div>Novidades</div>
					</div>
				</div>
			</div>

			<div id="menuApp">
				<div class="barTopMenu">
					<div class="titleMenu">Menu</div>
					<div class="barMenuCloser">
						<img src="./image/icon-menu_closer.svg">
					</div>
				</div>
				<ul>
					<li>123</li>
					<li>123</li>
					<li>123</li>
					<li>123</li>
				</ul>
			</div>
			<div class="layher_menu"></div>

		</div>
		
	</div>


</body>
</html>