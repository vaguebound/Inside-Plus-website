class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

 	
	<!-- Main Footer -->
    <footer class="main-footer">
    	<div class="auto-container">
        	<!--Widgets Section-->
            <div class="widgets-section">
            	<div class="row clearfix">
                	
                    <!--Column-->
                    <div class="big-column col-lg-6 col-md-12 col-sm-12">
						<div class="row clearfix">
						
                        	<!--Footer Column-->
                            <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                                <div class="footer-widget about-widget">
									<ul class="social-links">
										<li><a href="https://www.facebook.com/insideplus/" target="_blank"><span class="fa fa-facebook-f"></span></a></li>
										<li><a href="https://www.instagram.com/inside_plus/" target="_blank"><span class="fa fa-instagram"></span></a></li>
										<li><a href="https://www.linkedin.com/company/inside-plus/posts/?feedView=all" target="_blank"><span class="fa fa-linkedin"></span></a></li>
										<li><a href="tel:+9609800051"><span class="fa fa-whatsapp"</span></a></li>
									</ul>
									<div class="text">Transforming spaces with passion and precision.</div>
									<div class="copyright"><span>INSIDE PLUS</span> - Architecture and Interior Design <br> &copy; All rights reserved.</div>
								</div>
							</div>
							
							<!--Footer Column-->
                            <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h2>What we do</h2>
									<ul class="footer-list">
										<li><a href="service-architecture.html">Architecture</a></li>
										<li><a href="service-interior.html">Interior Design</a></li>
										<li><a href="service-engineering.html">Engineering</a></li>
										<li><a href="service-project-management.html">Project Management & Consultancy</a></li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
					
					<!--Column-->
                    <div class="big-column col-lg-6 col-md-12 col-sm-12">
						<div class="row clearfix">
							
							<!--Footer Column-->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h2>Sitemap</h2>
									<ul class="footer-list">
										<li><a href="index.html">Home</a></li>
										<li><a href="team.html">About</a></li>
										<li><a href="projects-interior.html">Interior Projects</a></li>
										<li><a href="projects-architecture.html">Architecture Projects</a></li>
										<li><a href="products.html">Products</a></li>
										<li><a href="contact.html">Contact us</a></li>
									</ul>
								</div>
							</div>
							
                        	<!--Footer Column-->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget contact-widget">
									<h2>Contact</h2>
									<ul class="contact-list">
										<li>Adress: <span>H. Theveli, 3rd Floor, 301, Kalaafaanu hingun, Male', Maldives</span></li>
										<li>Phone: <span><a href="tel:+9609800061">+960 980-0061</a></span></li>
										<li>Email: <span><a href="mailto:info@inside-plus.com">info@inside-plus.com</a></span></li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</footer>
	      `;
    }
  }
  
  customElements.define('footer-component', Footer);