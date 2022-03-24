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

const wins = '<img src="https://see.fontimg.com/api/renderfont4/p07r/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMTIxMjEyIiwiYmdjIjoiI0M5QUFBQSIsInQiOjF9/d2lucyE/simpsonfont.png" height="50px" alt="wins">';

const drawImg = '<img src="./images/draw2.jpg" height="200px"> <img src="./images/its-a-draw.png" height="50">'

bartDance = '<img src="./images/bart-dance.gif" height="200px">';
lisaDance = '<img src="./images/lisa-dance.gif" height="200px">';
winBart = '<img src="./images/bart-win.png" height="50px">';
winLisa = '<img src="./images/lisa-win.png" height="50px">';


//----------------------------------------------------//
    
let playerOTurn;

let scoresX = 0;
$('#playerX').text(`${scoresX}`);
let scoresO = 0;
$('#playerO').text(`${scoresO}`);
let draw = 0;
$('#draw').text(`${draw}`);

$('#X').on('click', function () { // choosing player token
    
    if ( $('.box').html() === "") { // if the grid is empty, player token can be chosen. This way, it cannot be changed half way through
        playerOTurn = false;
    }
    
})

$('#O').on('click', function () { // choosing player token
    
    if ( $('.box').html() === "") {
        playerOTurn = true;
    }
    
})

//attempt two - cutting down the functions within functions

$('.box').on('click', function () { // applies to all box, but will choose specific box

    if ($('.winning_text').text() !== "" ) {

    } else if ( $(this).html() === ""){

        if (playerOTurn === true) {
            $( this ).html(`${lisa}`);
            playerOTurn = false;
        } else {
            $( this ).html(`${bart}`);
            playerOTurn = true;
        }
    }

    
    const checkForWin = function () {
       
        // checking if X wins
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).html() === bart && $(`#${b}`).html() === bart && $(`#${c}`).html() === bart && $('.winning_text').text() === "") { // if the text of the id box matches
                console.log('Player X Wins!');
                scoresX +=1;
                $('#playerX').text(`${scoresX}`);
                $('.winning_text').html(`${bartDance} ${winBart}`);
                $('#myModal').css({'display':'block', 'padding-top':'288px'});
                $('.modal-content').css('height','375px');
                $('.winning_message').css('height','275px');
                $('.buttons').css('display','none');
            }
    
        } // checking for O
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).html() === lisa && $(`#${b}`).html() === lisa && $(`#${c}`).html() === lisa && $('.winning_text').text() === "") { // if the text of the id box matches
                scoresO +=1;
                $('#playerO').text(`${scoresO}`);
                $('.winning_text').html(`${lisaDance} ${winLisa}`);
                $('#myModal').css({'display':'block', 'padding-top':'288px'});
                $('.modal-content').css('height','375px');
                $('.winning_message').css('height','275px');
                $('.buttons').css('display','none');
            } 
        } 
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

$('.playAgain, .playAgain1').on('click', function () {  
    $('.box').empty();
    $('.winning_text').empty();
    $('.gameboard').css('opacity','1');
    $('.winning_message').css('z-index','-1');
})


$('.reset, .reset1').on('click', function () {
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

$('#modalB').on('click', function () {
    $('#myModal').css('display','block');
    $('.buttons').css('display','none');
});

$('.close, .playAgain, .reset').on('click', function () { // these three function removes modal box
    $('#myModal').css('display','none');
    $('.buttons').css('display','block');
});

$('#X, #O').on('click', function () {
    $('#choosePlayer').css('display','none');
})





});





