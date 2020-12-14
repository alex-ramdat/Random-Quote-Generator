let quotes = [
    ["\"No one ever made a difference by being like everyone else.\"",],
    ["\"This moment will just be another story someday.\""]
    ,["\"It matters not what someone is born, but what they grow to be.\""], ["\"But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.\""],
    ["\"It does not do to dwell on dreams and forget to live.\""],
    ["\"At some point, you just pull off the Band-Aid, and it hurts, but then it's over and you're relieved.\""],
 ["\"There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.\""]
];

$('button').click(function(){
    
    var random = Math.floor(Math.random() * quotes.length );
    
     $('.show').text(quotes[random]);

});
