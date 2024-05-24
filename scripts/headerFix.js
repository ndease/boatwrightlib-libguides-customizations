<script>

//added to footer of libguides system 
//this is a failsafe that ensures that no h1 or guide description shows up in the wrong place.

let heading1 = document.querySelector('#s-lg-guide-header-info > h1');
let guideDesc = document.querySelector('div#s-lg-guide-desc-container');

document.querySelector('#s-lg-guide-main').prepend(heading1);
document.querySelector('#s-lg-guide-main').prepend(guideDesc);
</script>