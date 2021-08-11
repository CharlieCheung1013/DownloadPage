import * as React from "react"
import "../components/DownloadPage.css"

const DownloadPage = () => {
  return (
    <html>
    <body>
        <div className="topnav">
          
          <img className="logo" src="https://i.imgur.com/XB0YaYu.jpg" alt="Logo"/>
          <div className="topnav_centered">
            <ul id="center">
             <li><a href="#news">About</a></li>
             <li><a href="#contact">Download</a></li>
             <li><a href="#Help">Help Centers</a></li>
            </ul>
          </div>
          <div className="topnav_right">
          <div id="LogIn"><strong>LOG IN</strong> </div>
          </div>
        </div>

  
        <section>
          <nav>
            <div className="section_nav_grid">
            <div className="section_nav_grid_header">PRODUCT</div>
            <div className="section_nav_grid_header">COMPANY</div>
            <div className="section_nav_grid_header">RESOURCES</div>  
            <div className="section_nav_grid_button">Features</div>
            <div className="section_nav_grid_button">About</div>
            <div className="section_nav_grid_button">Help center</div>  
            <div className="section_nav_grid_button">iOS</div>
            <div className="section_nav_grid_button">Contract</div>
            <div className="section_nav_grid_button">Contact us</div>
            <div className="section_nav_grid_button">Deaktop apps</div>
            </div>
          </nav>
  
  <article>
    <p class="article_download"><br/><br/><br/>Download<br/><br/></p>
      <div class="Article_OS">
       <div class="Download_Device">Mac M1</div>
       <div class="Download_Device">Mac Intel</div>
       <div class="Download_Device">Windows</div>  
       <div class="Download_Device">iOS</div>
      </div>
  </article>  

</section>  
<body/>

<div class="footer">
  <div class="footer_left">
    <div class="footer_left_tolo">@Tolo 2021</div>
    <div class="footer_left_btn">Terms<d/></div>
    <div class="footer_left_btn">Privacy<d/></div>
  </div>
  <div class="footer_right">
    <img class="IG" src="https://i.imgur.com/zDs6o6p.png" height="20" width="20" alt="Instagram"/>
  </div>
</div>
</body>
</html>
  )
}

export default DownloadPage
