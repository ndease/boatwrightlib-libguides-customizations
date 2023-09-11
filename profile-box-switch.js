// solution adapted from Marko Ilic, https://css-tricks.com/working-with-javascript-media-queries/

// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 993px)');
let profileBox = document.querySelector('#s-lg-col-0');
let mainColumn = document.querySelector('#s-lg-col-1');
let navTabs = document.querySelector('#s-lg-guide-tabs');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
    mainColumn.append(profileBox);
  } else {

  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)