// Youtube doesnt completely load a video page, so content script doesn't lauch correctly without these events

// This part is called on connection for the first time on youtube.com/*
/* ********************************************************************* */

const videosPerRow = 4;
const rowsWhenExpanded = 3;
const totalVideoNumber = videosPerRow * rowsWhenExpanded;
let isExpanded = false;

let videos = [];
let additionalVideos = [];
let isPageLoaded = false;
let areRecommandationsLoading = false;

const minQuerySize = 3;
// If it is not a search, it is the mainpage recommandation
let isSearch = false;
let currentSearch = '';



const convertDurationToClockDuration = (duration) => {
  const roundToTwoDigits = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };
  const hours = Math.floor(duration / 3600);
  const minutes = roundToTwoDigits(Math.floor((duration % 3600) / 60));
  const seconds = roundToTwoDigits(duration % 60);
  return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
};

const getParentComponentMainPage = () => {
  try {
    // Get parent element for the boxes in youtube page
    contents = document
      .getElementById('visibility-monitor')
      .parentElement.children['content'].getElementsByTagName('ytd-page-manager')[0]
      .getElementsByTagName('ytd-browse')[0]
      .getElementsByTagName('ytd-two-column-browse-results-renderer')[0]
      .children['primary'].getElementsByTagName('ytd-rich-grid-renderer')[0];
    if (!contents || !contents.children[1]) return;
    return contents
  } catch (error) {
    return;
  }
}

const getParentComponentSearchPage = () => {
  try {
    // Get parent element for the boxes in youtube page
    contents = document
      .getElementById('visibility-monitor')
      .parentElement.children['content'].getElementsByTagName('ytd-page-manager')[0]
      .getElementsByTagName('ytd-search')[0]
      .getElementsByTagName('ytd-two-column-search-results-renderer')[0]
      .children['primary'].getElementsByTagName('ytd-section-list-renderer')[0];
    if (!contents || !contents.children[1]) return;
    return contents
  } catch (error) {
    return;
  }
}

const getSearchQuery = () => {
  return new URL(location.href).searchParams.get('search_query');
}

const getTournesolComponent = () => {
  
    // Create new container
    tournesol_container = document.createElement('div');
    tournesol_container.id = 'tournesol_container';

    // Add inline-block div
    inline_div = document.createElement('div');
    inline_div.setAttribute('class', 'inline_div');

    // Add tournesol icon
    tournesol_icon = document.createElement('img');
    tournesol_icon.setAttribute('id', 'tournesol_icon');
    tournesol_icon.setAttribute(
      'src',
      //chrome.extension.getURL('rate_now_icon.png'),
      'https://tournesol.app/svg/tournesol.svg'
    );
    tournesol_icon.setAttribute('width', '24');
    inline_div.append(tournesol_icon);

    // Add title
    tournesol_title = document.createElement('h1');
    tournesol_title.id = 'tournesol_title';
    tournesol_title.append('Recommended by Tournesol');
    inline_div.append(tournesol_title);

    // Add title
    tournesol_link = document.createElement('a');
    tournesol_link.id = 'tournesol_link';
    tournesol_link.href = 'https://tournesol.app';
    tournesol_link.append('learn more');
    inline_div.append(tournesol_link);

    // Refresh button
    refresh_button = document.createElement('button');
    refresh_button.setAttribute('id', 'tournesol_refresh_button');
    fetch(chrome.runtime.getURL('images/sync-alt.svg'))
      .then(r => r.text())
      .then(svg => refresh_button.innerHTML = svg);

    refresh_button.className = 'tournesol_simple_button';
    refresh_button.onclick = () => {
      refresh_button.disabled = true;
      loadRecommandations();
    };
    inline_div.append(refresh_button);
    // Expand button
    expand_button = document.createElement('button');
    expand_button.setAttribute('id', 'tournesol_expand_button');
    // A new button is created on each video loading, the image must be loaded accordingly
      fetch(chrome.runtime.getURL(isExpanded ? 'images/chevron-up.svg' : 'images/chevron-down.svg'))
        .then(r => r.text())
        .then(svg => expand_button.innerHTML = svg);
    expand_button.className = "tournesol_simple_button";
    expand_button.onclick = () => {
      expand_button.disabled = true;
      if(!areRecommandationsLoading && !isExpanded){
        isExpanded = true;
        displayRecommendations();
      }else if(isExpanded){
        isExpanded = false;
        displayRecommendations();
      }
    };

    if(!isSearch){
      inline_div.append(expand_button);
    }
      

    tournesol_container.append(inline_div);

    // Push videos into new container
    video_box_height = contents.children[0].clientHeight;
    video_box_width = contents.children[0].clientWidth;

    function make_video_box(video) {
      // Div whith everything about a video
      const video_box = document.createElement('div');
      video_box.className = 'video_box';

      // Div with thumbnail and video duration
      const thumb_div = document.createElement('div');
      thumb_div.setAttribute('class', 'thumb_div');

      const video_thumb = document.createElement('img');
      video_thumb.className = 'video_thumb';
      video_thumb.src = `https://img.youtube.com/vi/${video.video_id}/mqdefault.jpg`;
      thumb_div.append(video_thumb);

       const video_duration = document.createElement('p');
       video_duration.setAttribute('class', 'time_span');

      // Convert SECONDS to hh:mm:ss or mm:ss format depending on the duration
      
        var formatted_video_duration = convertDurationToClockDuration(video.duration);

       video_duration.append(document.createTextNode(formatted_video_duration));
       thumb_div.append(video_duration);

      video_box.append(thumb_div);

      // Div with uploader name, video title and tournesol score
      const details_div = document.createElement('div');
      details_div.setAttribute('class', 'details_div');

      const video_title = document.createElement('h2');
      video_title.className = 'video_title';
      video_title.append(video.name);
      details_div.append(video_title);

      const video_uploader = document.createElement('p');
      video_uploader.className = 'video_text';
      video_uploader.append(video.uploader);
      details_div.append(video_uploader);

      
       const video_score = document.createElement('p');
       video_score.className = 'video_text';
       video_score.innerHTML =
         `🌻 <strong>${video.tournesol_score.toFixed(0)} &nbsp·&nbsp</strong>
         ${video.rating_n_ratings} comparisons by ${video.rating_n_contributors}
         contributors`;
       details_div.append(video_score);


      const video_link = document.createElement('a');
      video_link.className = 'video_link';
      video_link.href = '/watch?v=' + video.video_id;
      video_box.append(video_link);

      video_box.append(details_div);

      return video_box;
    }

    videos.forEach((video) => tournesol_container.append(make_video_box(video)));
    if(isExpanded){
      additionalVideos.forEach((video) => tournesol_container.append(make_video_box(video)));
    }
    
    return tournesol_container
}

// This part creates video boxes from API's response JSON
function displayRecommendations() {
  isSearch = location.pathname == '/results';
  if(isSearch){
    const query = getSearchQuery();
    isExpanded = false;
    if(query !== currentSearch){
      currentSearch = query;

      // The old videos aren't relevant anymore
      old_container = document.getElementById('tournesol_container');
      if (old_container) old_container.remove();
      // Load the new ones
      loadRecommandations();
      return;
    }
  }
  
  isPageLoaded = true;
  if (!videos || videos.length === 0 ) {
    return
  }

  // Timer will run until needed elements are generated
  var timer = window.setInterval(function () {
    /*
     ** Wait for needed elements to be generated
     ** It seems those elements are generated via javascript, so run-at document_idle in manifest is not enough to prevent errors
     **
     ** Some ids on video pages are duplicated, so I take the first non-duplicated id and search in its childs the correct div to add the recommendations
     ** Note: using .children[index] when child has no id
     */

    // Get the container on Youtube home page in which we will insert Tournesol's component
    const container = (location.pathname == '/') ? getParentComponentMainPage() : getParentComponentSearchPage();
    
    if (!container) return;
    window.clearInterval(timer);

    // Verify that Tournesol's container has not yet been rendered
    old_container = document.getElementById('tournesol_container');
    if (old_container) old_container.remove();
    
    // Generate component to display on Youtube home page
    tournesol_component = getTournesolComponent();
    
    container.insertBefore(tournesol_component, container.children[1]);
  }, 300);
}


function process(){
  displayRecommendations();
}

function handleResponse({ data: videosReponse, loadVideos, loadAdditionalVideos}){
  areRecommandationsLoading = false;
  videos = videosReponse.slice(0,videosPerRow);
  additionalVideos = videosReponse.slice(videosPerRow);
  
  if(isPageLoaded){
    displayRecommendations();
  }
}

function loadRecommandations() {
  // Only enable on youtube.com/
  isSearch = location.pathname == '/results';
  
  if (location.pathname != '/' && !isSearch) return;

  if(areRecommandationsLoading) return;
  
  areRecommandationsLoading = true;
  /*
   ** Send message to background.js to get recommendations from the API of Tournesol.
   ** I put video amount here because we can get the value of --ytd-rich-grid-posts-per-row (css) to know how many videos we should retreive from api
   */
  const videosNumber = videosPerRow;
  const additionalVideosNumber = videosPerRow * (rowsWhenExpanded - 1);

  if(isSearch){
    currentSearch = getSearchQuery();

    // Don't make any recommandation request if the query is too short
    if(currentSearch.length < minQuerySize){
      areRecommandationsLoading = false;
      return;
    }

    chrome.runtime.sendMessage({
      message: 'getTournesolSearchRecommendations',
      videosNumber,
      query:currentSearch
    }, handleResponse);
  }else{
    chrome.runtime.sendMessage({
      message: 'getTournesolRecommendations',
      videosNumber,
      additionalVideosNumber
    }, handleResponse);
  }
}

loadRecommandations();

document.addEventListener('yt-navigate-finish', process);
if (document.body) process();
else document.addEventListener('DOMContentLoaded', process);