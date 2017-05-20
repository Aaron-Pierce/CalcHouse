/**
 * Created by Aaron on 5/20/2017.
 */
class Problem{
    constructor(imgSrc, answerChoice){
        this.UUID = "p" + Math.floor(Math.random() * 10000);
        this.img = `<img src="${imgSrc}">`;
        this.answer = answerChoice;
        this.question = "";
        this.load = () => {
            $(".problemImg").html(this.img);
            $(".pT").html(this.question);
        };
    }
}