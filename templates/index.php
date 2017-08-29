<?php
style('educaasdashboard', 'style');
style('educaasdashboard', 'shepherd-theme-default');
style('educaasdashboard', 'shepherd-theme-square-dark');
?>

<div id="app">
	<div id="app-navigation">
		<?php print_unescaped($this->inc('navigation/index')); ?>
	</div>

	<div id="app-content">
		<div id="app-content-wrapper">
			<?php print_unescaped($this->inc('content/index')); ?>
		</div>
	</div>
</div>

<script nonce="<?php p(\OC::$server->getContentSecurityPolicyNonceManager()->getNonce()) ?>" src="/custom_apps/educaasdashboard/js/tether.js"></script>
<script nonce="<?php p(\OC::$server->getContentSecurityPolicyNonceManager()->getNonce()) ?>" src="/custom_apps/educaasdashboard/js/shepherd.js"></script>
<script nonce="<?php p(\OC::$server->getContentSecurityPolicyNonceManager()->getNonce()) ?>" src="/custom_apps/educaasdashboard/js/script.js"></script>
