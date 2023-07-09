
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
		 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
	</head>
	<body>
		<ul>
			<li>One</li>
			<li>Two</li>
			<li>Three</li>
			<li>Four</li>
	    </ul>
    <script>
		 $(function(){
    $('li').on('click',
    function(e){
		var date = new Date();
		console.log(date);
		date.setTime(e.timeStamp);
		var clicked = date.toDateString();
        console.log(clicked);
		$(this).after('<li> Wrong pattern </li>')
		$('li:contains("Wrong pattern")').fadeOut(1000)
    })
});
		</script>
</html>
