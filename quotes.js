////////////////////////////
//Add current quote to the twitter popup. This is not yet working:

function tweet(){  
    
  var twitText="https://twitter.com/intent/tweet?button_hashtag=GenerateQuotes&text=";
   console.log(twitText); 
  var qTxt=$("#quoteText").text();
   console.log(qTxt);
   
  var qTxt1=qTxt.replace(/\s/g, "%20");
  qTxt1 = qTxt1.replace(/\./g, "%2E").replace(/"/g, "%22").replace(/\!/g, "%21").replace(/,/g,"%2C").replace(/-/g,"%2D")
  console.log(qTxt1);
     
twitText=twitText.concat(qTxt1); 
  document.getElementsByClassName("twitter-hashtag-button").href=twitText;
  console.log("twitText"+twitText);

  var test = $(".twitter-hashtag-button").text(); 
      
      console.log(test);
      }

//////////////////////////////////
//Create an array of quotes and randomly select one:

var quotes = ["\"Hodor!\"--Hodor",
      "\"Always remember that you are absolutely unique. Just like everyone else.\"--Margaret Mead",
      "\"When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.\"--Albert Einstein",
      "\"Behind every great man is a woman rolling her eyes.\"--Jim Carrey",
      "\"Originality is the fine art of remembering what you hear but forgetting where you heard it.\"--Laurence J. Peter",
      "\"I don't deserve this award, but I have arthritis and I don't deserve that either.\"--Jack Benny",
      "\"One man's folly is another man's wife.\"--Helen Rowland",
      "\"Amigo! Amigo!\"--George W. Bush, calling out to Italian Prime Minister Silvio Berlusconi",
      "\"A pessimist is a person who has had to listen to too many optimists.\"--Don Marquis",
      "\"Anytime you see a turtle up on top of a fence post, you know he had some help.\"--Alex Haley"];
    
    function getQuotes(){
    document.getElementById("quoteText").innerHTML = quotes[(Math.floor((Math.random() * 10)))];
    tweet();
    }


/////////////////////////////////
/////////Script from Twitter:

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');