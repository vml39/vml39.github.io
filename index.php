<?php
$pages = array("about"=>"About", "resume"=>"Resume", "portfolio"=>"Portfolio", "contact"=>"Contact");
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Vivian Li</title>
  <link rel="stylesheet" type ="text/css" href="styles/all.css" media="all"/>
  <link href="https://fonts.googleapis.com/css?family=Khula" rel="stylesheet">
  <script src="scripts/jquery-3.2.1.min.js" type="text/javascript"></script>
  <script src="scripts/all.js" type="text/javascript"></script>
</head>

<body>
  <div id="nav">
    <ul>
      <?php foreach ($pages as $key=>$value){
        // if ($current_section == $key) { // figure out how to do this
        //   echo "<li id='current_section'><a href='#$key'>$value</a></li>";
        // }
        // else {
          echo "<li><a href='#$key'>$value</a></li>";
        // }
      }
      ?>
    </ul>
  <img alt="" src="header.jpg">
</div>

<!-- move the about heading down but figure out how to center it in the page as well -->
<div id="about" <?php $current_section = "about";?>>
  <h1>About</h1>
  <div id="about_grid">
    <div id="about_info">
      <p>I'm a developer who is interested in software engineering, data science, and full-stack engineering. As an information science major, I have experience in a multitude of technological softwares and fields.
      <br/><br/>
      I'm looking for a software development internship in a challenging and collaborative team environment. I'm really hoping to test all of the skills I've learned in my classes and extra curricular activities from my time in college.</p>
      <p>Check out some fun facts about who I am!</p>
      <!-- ESFJ, blogging everyday for 3 years, adventurer, volleyballer -->
    </div>
    <img id="viv" alt="" src="viv.jpg">
  </div>
</div>

<div class="grey" id="resume" <?php $current_section = "resume";?>>

  <h1>Resume</h1>
  <a href="resume.pdf">Resume</a>
</div>

<div id="portfolio">
  <h1>Portfolio</h1>
</div>

<!-- info1300 apple fest site, upload to github, final project -->
<!-- cs2110 projects (gui, a8), python projects -->
<!-- tetris with python -->

<div id="contact" class="grey" <?php $current_section = "contact";?>>
  <h1>Contact</h1>
  <p>Please feel free to contact me for any more information!</p>
  <a href="mailto:vml39@cornell.edu"><i class="email"></i></a>
  <!-- email icon and contact -->
  
<ul>
  <li><a href="https://www.linkedin.com/in/vivianmli/"><i class="fa fa-linkedin-square"></i></a></li>
  <li><a href="https://angel.co/vivian-li-14"><i class="fa fa-angellist"></i></a></li>
</ul>
</div>

<div id="footer">
  <p>© Vivian Li 2018</p>
</div>

</body>

</html>
