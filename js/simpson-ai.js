$(document).ready(function () { 

    const lisa = '<div id="lisa">' + 
    '<div class="head">' +
    
    '<div class="no-border body head-main"></div>'+
        '<div class="no-border body head-main2"></div>' +
       '<div class="no-border body head-main3"></div>'+
    
    '<div class="no-border hair9"></div>' +
    '<div class="no-border hair10"></div>' +
    
    '<div class="body hair hair1"></div>' +
    '<div class="body hair hair2"></div>' +
    '<div class="body hair hair3"></div>'+
    '<div class="body hair hair4"></div>'+
    '<div class="body hair hair5"></div>' +
    '<div class="body hair hair6"></div>' +
    '<div class="body hair hair7"></div>' +
    '<div class="body hair hair8"></div>' +
        
        '<div class="body mouth-lip2"></div>' +
        '<div class="body mouth-lip"></div>' +
        '<div class="no-border body neck"></div>' +
        '<div class="no-border body mouth"></div>' +
        '<div class="no-border body neck2"></div>' +
        '<div class="no-border body neck3"></div>' +
        '<div class="no-border mouth-smile"></div>' +
    
        '<!-- The ear -->' +
        '<div class="body ear">' +
            '<div class="no-border inner1"></div>' +
            '<div class="no-border inner2"></div>' +
            '<div class="no-border body clip"></div>' +
        '</div>' +
    
        '<div class="no-border eyelash1 eyelash"></div>' +
        '<div class="no-border eyelash2 eyelash"></div>' +
        '<div class="no-border eyelash3 eyelash"></div>' +
        '<div class="no-border eyelash4 eyelash"></div>' +
        '<div class="no-border eyelash5 eyelash"></div>' +
        '<div class="no-border eyelash6 eyelash"></div>' +
        '<div class="no-border eyelash7 eyelash"></div>' +
        '<div class="no-border eyelash8 eyelash"></div>' +
        
        '<!-- The right eye -->' +
        '<div class="right-eye">' +
            '<div class="no-border right-eye-pupil"></div>' +
    '<div class="no-border body eyelid-top"></div>' +
    '<div class="no-border body eyelid-bottom"></div>' +
        '</div>' +
        
        '<!-- The nose -->' +
        '<div class="no-border body nose"></div>' +
        '<div class="body nose-tip"></div>' +
        
        '<!-- The left eye -->' +
        '<div class="left-eye">' +
            '<div class="no-border left-eye-pupil"></div>' +
    '<div class="no-border body eyelid-top"></div>' +
    '<div class="no-border body eyelid-bottom"></div>' +
        '</div>' +
    
    '<div class="necklace necklace1"></div>' +
    '<div class="necklace necklace2"></div>' +
    '<div class="necklace necklace3"></div>' +
    '<div class="necklace necklace5"></div>' +
    '<div class="necklace necklace4"></div>' +
    '</div>' +
'</div>';


const bart = '<div id="bart">' +
'<div class="head">' +
    '<div class="no-border body hair hair1"></div>' +
    '<div class="no-border body hair hair2"></div>' +
    '<div class="no-border body hair hair3"></div>' +
    '<div class="no-border body hair hair4"></div>' +
    '<div class="no-border body hair hair5"></div>' +
    '<div class="no-border body hair hair6"></div>' +
    '<div class="no-border body hair hair7"></div>' +
    '<div class="no-border body hair hair8"></div>' +
    '<div class="no-border body hair hair9"></div>' +
    '<div class="body mouth-lip2"></div>' +
    '<div class="no-border body head-left1"></div>' +
    '<div class="no-border body head-left2"></div>' +
    '<div class="no-border body head-left3"></div>' +
    '<div class="no-border body head-left4"></div>' +
    '<div class="no-border body head-left5"></div>' +
    '<div class="no-border body head-left6"></div>' +
    '<div class="no-border body head-left7"></div>' +
    '<div class="body eyelid"></div>' +
    '<div class="no-border body mouth"></div>' +
    '<div class="body mouth-lip"></div>' +
    '<div class="no-border body head-right2"></div>' +
    '<div class="no-border body head-right1"></div>' +
    '<div class="no-border body head-right3"></div>' +
    
    '<!-- The ear -->' +
    '<div class="body ear">' +
        '<div class="no-border inner1"></div>' +
        '<div class="no-border inner2"></div>' +
        '<div class="no-border body clip"></div>' +
    '</div>' +
    
    '<!-- The right eye -->' +
    '<div class="right-eye">' +
        '<div class="no-border right-eye-pupil"></div>' +
'<div class="no-border body eyelid-top"></div>' +
'<div class="no-border body eyelid-bottom"></div>' +
    '</div>' +
    
    '<!-- The nose -->' +
    '<div class="no-border body nose"></div>' +
    '<div class="body nose-tip"></div>' +
    
    '<!-- The left eye -->' +
    '<div class="left-eye">' +
        '<div class="no-border left-eye-pupil"></div>' +
'<div class="no-border body eyelid-top"></div>' +
'<div class="no-border body eyelid-bottom"></div>' +
    '</div>' +

    '<div class="no-border mouth-smile"></div>' +
'</div>' +
'</div>';


const drawImg = '<img src="./images/draw2.jpg" height="200px"> <img src="./images/its-a-draw.png" height="50">'



//----------------------------------------------------//
    
// assigns characters after clicking
let person;
let personDance;
let computer;
let computerDance;
let winP;
let winC;


let scoresX = 0;
$('#playerX').text(`${scoresX}`); // Bart
let scoresO = 0; 
$('#playerO').text(`${scoresO}`); // Lisa
let draw = 0;
$('#draw').text(`${draw}`);


$('#X').on('click', function () {
    person = bart;
    computer = lisa;
    personDance = '<img src="./images/bart-dance.gif" height="200px">'; // victory dances
    computerDance = '<img src="./images/lisa-dance.gif" height="200px">';
    winP = '<img src="./images/bart-win.png" height="50px">'; // winning message set up
    winC = '<img src="./images/lisa-win.png" height="50px">';
    personScore = '#playerX';
    compScore = '#playerO';

    $('#lisaPlayer').attr("src", "./images/computer.png"); // make computer appear over lisa token

    if ( $('.box').html() === "") { // if the grid is empty, player token can be chosen. This way, it cannot be changed half way through
    }
}) 


$('#O').on('click', function () { // choosing Lisa
    person = lisa;
    computer = bart;
    computerDance = '<img src="./images/bart-dance.gif" height="200px">';
    personDance = '<img src="./images/lisa-dance.gif" height="200px">';
    winC = '<img src="./images/bart-win.png" height="50px">';
    winP = '<img src="./images/lisa-win.png" height="50px">';
    personScore = '#playerO';
    compScore = '#playerX';


    $('#bartPlayer').attr("src", "./images/computer.png");

    if ( $('.box').html() === "") {
    }
    
})

//AI function

let randomNum = 0;

function getRandom(max) {  // random number generated for comp choices
    randomNum = Math.floor(Math.random() * max);
}



$('.box').on('click', function () { // applies to all box, but will choose specific box

    if ($('.winning_text').text() !== "" ) { // i can't place anymore token if there is a winning message

    } else if ( $(this).html() === "") { // if the particular box is empty
    let available = [];
      
        $( this ).html(`${person}`); // player picks
       
        for (let i = 0; i < 9; i++) { // check for which boxes are available
            if ($(`#${[i]}`).html() === "" ) {
                available.push(`${i}`);
            }
        }
        getRandom(available.length); // chooses a random number index of avalable array.
        $(`#${available[randomNum]}`).html(`${computer}`);
         
        for (let i = 0; i < 9; i++) { // checks which boxes are available again after computer choices
            if ($(`#${[i]}`).html() === "" ) {
                available.push(`${i}`);
            }
        }        
        
    }
    
    const checkForWin = function () {
       
        // checking if person wins by checking if box equals to token person chose. 
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).html() === person && $(`#${b}`).html() === person && $(`#${c}`).html() === person && $('.winning_text').text() === "") { // if the text of the id box matches
                scoresX +=1;
                $(personScore).text(`${scoresX}`);
                $('.winning_text').html(`${personDance} ${winP}`); // adds the corresponding victory dance
                $('#myModal').css({'display':'block', 'padding-top':'288px'}); // displays my modal
                $('.modal-content').css('height','375px'); // adds the css property (could have been done in css - this was before i found an image for the draw message)
                $('.winning_message').css('height','275px');
                $('.buttons').css('display','none'); // removes the button from the bottom of the page so it looks like its popped up into the modal box
            }
    
        } // checking for computer

        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).html() === computer && $(`#${b}`).html() === computer && $(`#${c}`).html() === computer && $('.winning_text').text() === "") { // if the text of the id box matches
                scoresO +=1;
                $(compScore).text(`${scoresO}`);
                $('.winning_text').html(`${computerDance} ${winC}`);
                $('#myModal').css({'display':'block', 'padding-top':'288px'});
                $('.modal-content').css('height','375px');
                $('.winning_message').css('height','275px');
                $('.buttons').css('display','none');
            } 
        } // check for draw

        if ( ($('#0').html() !== "") && ($('#1').html() !== "") && ($('#2').html() !== "") && ($('#3').html() !== "") && ($('#4').html() !== "") && ($('#5').html() !== "") && ($('#6').html() !== "") && ($('#7').html() !== "") && ($('#8').html() !== "") && $('.winning_text').text() === "") {
                console.log("It's a Draw!");
                draw += 1;
                $('#draw').text(`${draw}`);
                $('.winning_text').html(`${drawImg}`);
                $('#myModal').css('display','block');
                $('.buttons').css('display','none');
            }
        
    }
    
    checkForWin();
   
})

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

$('.playAgain, .playAgain1').on('click', function () {  // play again and empties the grid, winning text and 
    $('.box').empty();
    $('.winning_text').empty();
    $('.gameboard').css('opacity','1');
    $('.winning_message').css('z-index','-1');
})


$('.reset, .reset1').on('click', function () { // reset all scores and grid & winning message
    let scoresX = 0;
    $('#playerX').text(`${scoresX}`);
    let scoresO = 0;
    $('#playerO').text(`${scoresO}`);
    let draw = 0;
    $('#draw').text(`${draw}`);

    $('.box').empty();
    $('.winning_text').empty();
    $('.gameboard').css('opacity','1');
    $('.winning_message').css('z-index','-1');
})


//----------------------- modal --------------------------//

$('.close, .playAgain, .reset').on('click', function () { // these three function removes modal box
    $('#myModal').css('display','none');
    $('.buttons').css('display','block');
    $('#choosePlayer').css('display','none');
});

// --------------------------------------------------------//


$('#X, #O').on('click', function () {
    $('#choosePlayer').css('display','none');
})




});





