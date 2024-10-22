class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

 	
    <!-- Main Header -->
    <header class="main-header">
    	
    	<!--Header-Upper-->
        <div class="header-upper">
        	<div class="outer-container">
            	<div class="clearfix">
                	
                	<div class="pull-left logo-box">
                    	<div class="logo"><a href="index.html"><img src="images/logo.png" alt="" title=""></a></div>
                    </div>
                   	
					<div class="nav-outer clearfix">
                    
						<!--Mobile Navigation Toggler For Mobile-->
                        <div class="mobile-nav-toggler"><span class="icon flaticon-menu-4"></span></div>

						<!-- Main Menu -->
						<nav class="main-menu navbar-expand-md">
							<div class="navbar-header">
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>

							<div class="navbar-collapse collapse scroll-nav clearfix" id="navbarSupportedContent">
								<ul class="navigation clearfix">
									<li id="myHome"><a href="index.html">Home</a>
									</li>
									<li id="myAboutus" class="dropdown"><a href="#">About Us</a>
										<ul>
											<li><a href="team.html">Meet Our Team</a></li>
										</ul>

									</li>
									<li id="myServices" class="dropdown"><a href="#">Services</a>
										<ul>
											<li><a href="service-architecture.html">Architecture</a></li>
											<li><a href="service-interior.html">Interior Design</a></li>
											<li><a href="service-engineering.html">Engineering</a></li>
											<li><a href="service-project-management.html">Project Management & Consultancy</a></li>
										</ul>
									</li>
									<li class="dropdown"><a href="#">Projects</a>
										<ul>
											<li><a href="projects-interior.html">Interior</a></li>
                                            <li><a href="projects-architecture.html">Architecture</a></li>
										</ul>
									</li>
									<li class="dropdown"><a href="products.html">Products</a>
									</li>
									<li><a href="contact.html">Contact Us</a></li>
								</ul>
							</div>
							
						</nav>
						<!-- Main Menu End-->
						
						
					
					<!-- Outer Box -->
					
					
                </div>
            </div>
        </div>
        <!--End Header Upper-->

		
        
		<!--Sticky Header-->
        <div class="sticky-header">
        	<div class="auto-container clearfix">
            	<!--Logo-->
            	<div class="logo pull-left">
                	<a href="index.html" class="img-responsive"><img src="images/logo-small.png" alt="" title=""></a>
                </div>
                
				<!--Right Col-->
                <div class="right-col pull-right">
					<!-- Main Menu -->
                    <nav class="main-menu navbar-expand-md">
                        <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
                            <ul class="navigation clearfix"><!--Keep This Empty / Menu will come through Javascript--></ul>
                        </div>
                    </nav><!-- Main Menu End-->
                </div>
                
            </div>
        </div>
        <!--End Sticky Header-->
		
    <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-cancel-1"></span></div>
            
            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
            <nav class="menu-box">
            	<div class="nav-logo"><a href="index.html"><img src="images/nav-logo.png" alt="" title=""></a></div>
                
                <ul class="navigation clearfix"><!--Keep This Empty / Menu will come through Javascript--></ul>
            </nav>
        </div><!-- End Mobile Menu -->

    </header>
<!-- End Main Header -->
      `;
    }
  }
  
  customElements.define('header-component', Header);