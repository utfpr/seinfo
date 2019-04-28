<template>

 <footer class="footer-distributed">

			<div class="footer-right">
        <p class="direita footer-links">
          <a href="#"><a-icon type="up-square" /> Voltar para o topo</a>
        </p>        
			</div>
			<div class="footer-left">
				<p class="footer-links">
					<a :href="'/'">Início</a>
				</p>
				<p>SeInfo {{ new Date().getFullYear() }}</p>
			</div>

		</footer>

</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
p.direita {
  margin-right: 1%;
  text-align: right;
}
.footer-distributed{
	background-color: #292c2f;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: normal 16px sans-serif;
	padding: 45px 50px;
}

.footer-distributed .footer-left p{
	color:  #8f9296;
	font-size: 14px;
	margin: 0;
}

/* Footer links */

.footer-distributed p.footer-links{
	font-size:18px;
	font-weight: bold;
	color:  #ffffff;
	margin: 0 0 10px;
	padding: 0;
}

.footer-distributed p.footer-links a{
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}

.footer-distributed .footer-right{
	float: right;
	margin-top: 6px;
}

.footer-distributed .footer-right a{
	display: inline-block;
	height: 35px;
	background-color:  #292c2f;
	border-radius: 2px;

	font-size: 16px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;

	margin-left: 3px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 600px) {

	.footer-distributed .footer-left,
	.footer-distributed .footer-right{
		text-align: center;
	}

	.footer-distributed .footer-right{
		float: none;
		margin: 0 auto 20px;
	}

	.footer-distributed .footer-left p.footer-links{
		line-height: 1.8;
	}
}

</style>
