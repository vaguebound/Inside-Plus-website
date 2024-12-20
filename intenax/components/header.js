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

									<li id="myAboutus" class="dropdown"><a href="team.html">About Us</a>
									</li>
									<li id="myServices" class="dropdown"><a href="#">Services</a>
										<ul>
											<li><a href="service-architecture.html">Architecture</a></li>
											<li><a href="service-interior.html">Interior Design</a></li>
											<li><a href="service-project-management.html">Project Management & Consultancy</a></li>
										</ul>
									</li>
									<li id="myProjects" class="dropdown"><a href="#">Projects</a>
										<ul>
                                            <li><a href="projects-architecture.html">Architecture</a></li>
											<li><a href="projects-interior.html">Interior Design</a></li>

										</ul>
									</li>
									<li id="myPartners" class="dropdown"><a href="products.html">Products</a>
									</li>
									<li id="myContact"><a href="contact.html">Contact Us</a></li>
								</ul>
							</div>
							
						</nav>
						<!-- Main Menu End-->
						
						
					
					<!-- Outer Box -->
					
					
                </div>
            </div>
        </div>
        <!--End Header Upper-->

		


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