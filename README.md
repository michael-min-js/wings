# wings.js
A jQuery plugin that adds wings to a header.
Wings are small triangles shaded darker than the header background that make it appear to wrap aroud like a ribbon in 3d.

View the [live demo] (http://michaeljames.io/demo/wings/demo.html)

Author: Michael James

URL: michaeljames.io

Version: 0.1

Please submit error reports to bugs@michaeljames.io


### Usage

Load the .js file as a script along with jQuery
```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="js/wings.min.js"></script>
```

Call the wings method on $(your object)
```html
<script>
	jQuery(document).ready(function($) {
          
        	$('#myHeading').wings();
          
        });
</script>
```

### Multiple Headings
You can call this method on as many objects as you like
```html
<script>
	jQuery(document).ready(function($) {
          
        	$('#myHeading1').wings();
        	$('#myHeading2').wings();
          
        });
</script>
```

Alternitavely you can use a broad CSS selector and wings.js will calculate the colour and position of each object separately.
```html
<script>
	jQuery(document).ready(function($) {
          
        	$('h2').wings();
   
        });
</script>
```

### Upcoming Features
* Error Checking
