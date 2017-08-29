<?php
script('educaasdashboard', 'script');
script('educaasdashboard', 'tether');
script('educaasdashboard', 'shepherd');
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
