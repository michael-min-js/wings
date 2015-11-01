# wings.js
A jQuery plugin that adds wings to a header.
Wings are small triangles shaded darker than the header background that make it appear to wrap aroud like a ribbon in 3d.

Author: Michael James

URL: michaeljames.io

Version: 0.1


### Usage

Load the .js file as a script
```html
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

Alternitavely you can pass in an array of many objects *however* v0.1 will calculate the colour once from the first item so this should only be used where objects have the same background colour.
```html
<script>
	jQuery(document).ready(function($) {
          
        	$('h2').wings();
   
        });
</script>
```

### Upcoming Features
* Calculate colours each time to work better with multiple objects
* Error Checking
