
//typwriter effect in about page
var i = 0;
var txt = 'Hi, my name is Kate. Became a massage therapist in 2002. I have been always driven to help people, so I specialized in combining Reiki with deep tissue massage.';
txt += ' In 2006 I became a nail therapist as well. Being able to give an instant relief to my customers from pain, caused by ingrown nails, foot corn and calluses, made me find my vocation in medical pedicures.';
txt += ' Trying to provide a chance to those who never had good nails, I became a nail technician, studied different nail-art techniques, practicing with the same enthusiasm since.';

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("aboutText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 30);        
    }
}
