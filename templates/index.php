<?php
script('educaasdashboard', 'script');
script('educaasdashboard', 'bootstrap');
style('educaasdashboard', 'style');
style('educaasdashboard', 'bootstrap');
?>

<div id="app">
	<div id="app-navigation">
		<?php print_unescaped($this->inc('navigation/index')); ?>
		<?php print_unescaped($this->inc('settings/index')); ?>
	</div>

	<div id="app-content">
		<div id="app-content-wrapper">
			<?php print_unescaped($this->inc('content/index')); ?>
		</div>
	</div>
</div>
