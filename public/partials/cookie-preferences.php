<?php

/**
 * This file is used to markup the cookie preferences window.
 *
 *
 * @link       https://trewknowledge.com
 * @since      1.0.0
 *
 * @package    GDPR
 * @subpackage GDPR/public/partials
 */
?>

<div class="gdpr cookie-preferences">
	<div class="gdpr overlay"></div>
	<div class="wrapper">
		<form method="post" class="frm-gdpr-cookie-preferences">
			<header>
				<div class="logo">
					<?php the_custom_logo(); ?>
				</div>
				<div class="box-title">
					<h3><?php esc_html_e( 'Privacy Preference Center', 'gdpr' ); ?></h3>
				</div>
			</header>
			<div class="content">
				<ul class="tabs">
					<li>
						<button type="button" class="active" data-target="your-privacy"><?php esc_html_e( 'Your Privacy', 'gdpr' ); ?></button></li>
					<?php
						foreach ( $tabs as $key => $tab ) {
							echo '<li><button type="button" data-target="' . esc_attr( $key ) . '" ' . '>' . esc_html( $tab['name'] ) . '</button></li>';
						}
					?>
				</ul>
				<div class="tab-content">
					<div class="your-privacy active">
						<header>
							<h4><?php esc_html_e( 'Your Privacy', 'gdpr' ); ?></h4>
						</header>
						<div class="info">
							<p><?php esc_html_e( 'When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.', 'gdpr' ); ?></p>
						</div>
					</div>
					<?php foreach ( $tabs as $key => $tab ) : ?>
						<div class="<?php echo esc_attr( $key ); ?>">
							<header>
								<h4><?php echo esc_html( $tab['name'] ); ?></h4>
								<?php if ( $tab['always_active'] ): ?>
									<span><?php esc_html_e( 'Always active', 'gdpr' ); ?></span>
								<?php else: ?>
									<label class="gdpr-switch">
										<?php
											$site_cookies = array();
											$cookies_used = explode(',', $tab['cookies_used']);
											foreach ( $cookies_used as $cookie ) {
												$site_cookies[] = trim( $cookie );
											}
										?>
										<input type="checkbox" name="approved_cookies" value="<?php echo esc_attr( json_encode( $site_cookies ) ) ?>" checked>
										<span class="gdpr-slider round"></span>
									</label>
								<?php endif; ?>
							</header><!-- /header -->
							<div class="info">
								<p><?php echo nl2br( $tab['how_we_use'] ); ?></p>
								<strong><?php esc_html_e( 'Cookies used', 'gdpr' ); ?></strong>
								<div class="cookies-used">
									<span><?php echo esc_html( $tab['cookies_used'] ); ?></span>
								</div>
								<?php if ( isset( $tab['hosts'] ) && ! empty( $tab['hosts'] ) ): ?>
									<?php foreach ( $tab['hosts'] as $host_key => $host ): ?>
										<div class="cookies-used">
											<div class="space-between">
												<p><?php echo esc_html( $host['name'] ); ?></p>
												<label class="gdpr-switch">
													<?php $value = array(
														$host['name'] => $host['cookies_used']
													); ?>
													<input type="checkbox" name="approved_cookies" value="<?php echo esc_attr( json_encode( $value ) ); ?>" checked>
													<span class="gdpr-slider round"></span>
												</label>
											</div>
											<span><?php echo esc_html( $host['cookies_used'] ); ?></span>
										</div>
									<?php endforeach ?>
								<?php endif ?>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
			<footer>
				<input type="submit" value="Save preferences">
			</footer>
		</form>
	</div>
</div>