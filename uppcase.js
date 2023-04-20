<html>
<head><title> Test String </title></head>
<body>
</script>
function teststring(str){
return str.charAt(0) == str.charAt(0).toUpperCase();
}

var str = prompt("Enter a string", " ");
document.write(teststring(str));
</script>
</body>
</html>