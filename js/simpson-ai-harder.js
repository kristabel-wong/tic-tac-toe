
// html to be added into html once tokens are placed
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




// choosing tokens 


$('#X').on('click', function () { // choosing Bart
    person = bart;
    computer = lisa;
    personDance = '<img src="./images/bart-dance.gif" height="200px">'; // victory dances chosen
    computerDance = '<img src="./images/lisa-dance.gif" height="200px">';
    winP = '<img src="./images/bart-win.png" height="50px">'; // winning message set up
    winC = '<img src="./images/comp-wins.png" height="40px">';
    personScore = '#playerX';
    compScore = '#playerO';

    $('#lisaPlayer').attr("src", "./images/computer.png"); // make computer appear over lisa token

    if ( $('.box').html() === "") { // if the grid is empty, player token can be chosen. This way, it cannot be changed half way through
    }

    // making sure all array have been empty 
    console.log(available); 
    console.log(remaining);
    console.log(computerChoices);

}) 


$('#O').on('click', function () { // choosing Lisa
    person = lisa;
    computer = bart;
    computerDance = '<img src="./images/bart-dance.gif" height="200px">';
    personDance = '<img src="./images/lisa-dance.gif" height="200px">';
    winC = '<img src="./images/comp-wins.png" height="40px">';
    winP = '<img src="./images/lisa-win.png" height="50px">';
    personScore = '#playerO';
    compScore = '#playerX';

    $('#bartPlayer').attr("src", "./images/computer.png"); // make computer appear over bart token

    if ( $('.box').html() === "") {
    }
    
    console.log(available);
    console.log(remaining);
    console.log(computerChoices);
})

//AI function

let randomNum = -1; // just wanted to give a random number for argument sake

function getRandom(max) { // random number generated for comp choices
    randomNum = Math.floor(Math.random() * max);
}

// winning combos arrays if comp's first choice is either of the below boxes

let zero = [1,2,3,4,6,8];
let one = [0,2,4,7];
let two = [0,1,5,8,4,6];
let three = [0,6,4,5];
let four = [3,5,1,7,0,8,2,6];
let five = [4,3,2,8];
let six = [7,8,0,3,2,4];
let seven = [4,1,6,8];
let eight = [7,6,2,5,0,4];

let computerChoices = [];
let remaining = [];
let available = [];



$('.box').on('click', function () { // applies to all box, but will choose specific box
   
    if ($('.winning_text').html() !== "" ) {  // i can't place anymore token if there is a winning message
        
    } else if ( $(this).html() === "") { // if the particular box is empty
    
        $( this ).html(`${person}`); // player picks
        
        let checkAvailable = function () { 
            available = [];   
            for (let i = 0; i < 9; i++) { 
                if ($(`#${[i]}`).html() === "" ) {
                    available.push(Number(`${i}`));
                }
            }
            console.log(`available ${available}`); 
        }
        
        checkAvailable(); // check for which boxes are available after person chooses
        

        console.log(computerChoices); // checks to see what computer has chosen
        
        if (computerChoices.length === 0) {  // computer making first choice
            getRandom(available.length); // get random number from available boxes
            console.log(available[randomNum]);
            $(`#${available[randomNum]}`).html(`${computer}`); // place token
            
            computerChoices.push(available[randomNum]); // record choice
            console.log(`Computer choices: ${computerChoices}`); 
            
            checkAvailable(); // check available again after computer choice

        } else  {

            let randomBox = function() { // get random number from REMAINING boxes from chosen array

                console.log(`remaining ${remaining}`);
                getRandom(remaining.length); 
                $(`#${remaining[randomNum]}`).html(`${computer}`); 
                computerChoices.push(remaining[randomNum]);
                console.log(`Computer choices: ${computerChoices}`);

            }

            let availBox = function () { // place in available boxes (if none left in remaining)
                $(`#${available[randomNum]}`).html(`${computer}`);
                computerChoices.push(available[randomNum]);
                console.log(`Computer choosing whats avail: ${computerChoices}`);

            }


            if (computerChoices[0] === 0 ) { // if comp's first choice was zero, please use zero array
                checkAvailable(); // check whats available
                remaining = []; // make sure its emptied before running the loop

                for (let i = 0; i < zero.length; i++) { 
                    if (available.includes(zero[i])) {
                        remaining.push(zero[i]); // push into array if match

                    } else if (remaining.length === 0)  { // if no remaining choices, choose whatever is available
                        availBox();
                    }
                }

                randomBox(); // get me a random number!
                
            } else if (computerChoices[0] === 1 ) {
                checkAvailable();
                remaining = [];

                for (let i = 0; i < one.length; i++) {
                    if (available.includes(one[i])) {
                        remaining.push(one[i]);

                    } else if (remaining.length === 0)  {
                        availBox();
                    }
                }
                randomBox();

            } else if (computerChoices[0] === 2 ) {
                checkAvailable();
                remaining = [];

                for (let i = 0; i < two.length; i++) {
                    if (available.includes(two[i]))  {
                        remaining.push(two[i]);

                    } else if (remaining.length === 0) {
                        availBox();
                    }
                }
                randomBox();

            } else if (computerChoices[0] === 3 ) {
                checkAvailable();
                remaining = [];

                for (let i = 0; i < three.length; i++) {
                    if (available.includes(three[i]))  {
                        remaining.push(three[i]);

                    } else if (remaining.length === 0) {
                        availBox();
                    }
                }
                randomBox();

            } else if (computerChoices[0] === 4) {
                checkAvailable();
                remaining = [];

                for (let i = 0; i < four.length; i++) {
                    if (available.includes(four[i]))  {
                        remaining.push(four[i]);
                    
                    } else if (remaining.length === 0)  {
                        availBox();
                    }
                }
                randomBox();

            } else if (computerChoices[0] === 5) {
                checkAvailable();
                remaining = [];

                for (let i = 0; i < five.length; i++) {
                    if (available.includes(five[i]))  {
                        remaining.push(five[i]);

                    } else if (remaining.length === 0) {
                        availBox();
                    }
                }
                randomBox();

            } else if (computerChoices[0] === 6) {
                checkAvailable();
                remaining = [];

                for (let i = 0; i < six.length; i++) {
                    if (available.includes(six[i])) {
                        remaining.push(six[i]);

                    } else if (remaining.length === 0) {
                        availBox();
                    }
                }
                randomBox();

            } else if (computerChoices[0] === 7) {
                checkAvailable();
                remaining = [];

                for (let i = 0; i < seven.length; i++) {
                    if (available.includes(seven[i])) {
                        remaining.push(seven[i]);                    

                    } else if (remaining.length === 0) {
                        availBox();
                    }
                }
                randomBox();

            } else if (computerChoices[0] === 8) {
                checkAvailable();
                remaining = [];

                for (let i = 0; i < eight.length; i++) {
                    if (available.includes(eight[i])) {
                        remaining.push(eight[i]);
                        
                    } else if (remaining.length === 0) {
                        availBox();
                    }
                }
                randomBox();
            }
        }
    }


    const checkForWin = function () {
       
        // checking if X wins
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if ($(`#${a}`).html() === person && $(`#${b}`).html() === person && $(`#${c}`).html() === person && $('.winning_text').text() === "") { // if the text of the id box matches
                scoresX +=1;
                $(personScore).text(`${scoresX}`);
                $('.winning_text').html(`${personDance} ${winP}`);
                $('#myModal').css({'display':'block', 'padding-top':'288px'});
                $('.modal-content').css('height','375px');
                $('.winning_message').css('height','275px');
                $('.buttons').css('display','none');

                computerChoices = [];
                remaining = [];
                available = [];
            }
    
        } // checking for O
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

                computerChoices = [];
                remaining = [];
                available = [];
            } 
        } 
        if ( ($('#0').html() !== "") && ($('#1').html() !== "") && ($('#2').html() !== "") && ($('#3').html() !== "") && ($('#4').html() !== "") && ($('#5').html() !== "") && ($('#6').html() !== "") && ($('#7').html() !== "") && ($('#8').html() !== "") && $('.winning_text').text() === "") {
                console.log("It's a Draw!");
                draw += 1;
                $('#draw').text(`${draw}`);
                $('.winning_text').html(`${drawImg}`);
                $('#myModal').css('display','block');
                $('.buttons').css('display','none');

                computerChoices = [];
                remaining = [];
                available = [];
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
    $('#choosePlayer').css('display','none');

    computerChoices = [];
    remaining = [];
    available = [];

    console.log(available);
    console.log(remaining);
    console.log(computerChoices);

});


$('#X, #O').on('click', function () {
    $('#choosePlayer').css('display','none');
})




// });





