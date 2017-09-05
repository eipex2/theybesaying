/**
 * @Author: eipex
 * @Date:   2017-05-30T10:07:12-05:00
 * @Last modified by:   eipex
 * @Last modified time: 2017-09-05T09:20:24-05:00
 */

/*
  angular imports
 */
import {Content} from 'ionic-angular';
import { NavController,Platform } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, ViewChild, OnInit, NgZone } from '@angular/core';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  @ViewChild(Content) content: Content;

  private activeLine: string = "They be saying...";
  private activeGif: string = 'url(' + '../../assets/gifs/theybesaying1.gif' + ')';
  private lineHeight: number;
  private footerHeight: number;
  private lines: Array<string>;
  private gifs: Array<string>;
  private hideForm: boolean = true;
  private showLine: boolean = true;

  //private formData: FormGroup;
  private formData = {}


  constructor(public zone: NgZone,
              private platform: Platform,
              public navCtrl: NavController,
              private formBuilder: FormBuilder,
              private firebase: FirebaseProvider) {

    // this.formData = this.formBuilder.group({
    //     whothis: ['', Validators.compose([Validators.required])],
    //     content: ['', Validators.compose([Validators.required])]
    //   });

  }

  inFocus(){
    this.hideForm = false;
  }

  sendToThey(){
    this.hideForm = true;
    this.firebase.send(this.formData).then(()=>{
        this.formData = {
          whothis: '',
          content: ''
        }
    });
    this.content.scrollToTop(200);
  }


  ngOnInit(){
    this.lines = [
      'They be saying...',
      '"New Year new me". Fuck that!',
      'A Year is too long.',
      'New day new me. Embrace that!',
      'You will never go wrong.',
      'Strive for amelioration.',

      'They be saying...',
      '"You still dreaming". WACK!',
      'Yeah am still dreaming. SMACK!',
      'Have vision.',

      'They be saying...',
      '"I slept till 12". Well rested!',
      'You were useless till 12. Time wasted!',
      'Seek your passion.',

      'They be saying...',
      '"Let\'s get drunk". Lit nights!',
      'Ever seen hangovers on a Will. Dumb nights!',
      'Use your gumption.',

      'They be saying...',
      '"Buy expensive things". Little picture!',
      'Invest in meaningful things. Big picture!',
      'Shun distraction.',

      'They be saying...',
      '"You can\'t start now". Too late!',
      'Miss out on greatness. Nah mate!',
      'Have ambition.',

      'They be saying...',
      '"Many have failed". Impossible!',
      'Fight for what you believe in. Gamble!',
      'Be the exception.',

      'Written in the AM\'s'
    ]

    this.gifs = [
      'url(' + '../../assets/gifs/theybesaying1.gif' + ')',
      'url(' + '../../assets/gifs/newyearnewme.gif' + ')',
      'url(' + '../../assets/gifs/fuckthat.gif' + ')',
      'url(' + '../../assets/gifs/embrace.gif' + ')',
      'url(' + '../../assets/gifs/wrong2.gif' + ')',
      'url(' + '../../assets/gifs/ameliorationdog.gif' + ')',

      'url(' + '../../assets/gifs/theybesaying2nastyc.gif' + ')',
      'url(' + '../../assets/gifs/wack.gif' + ')',
      'url(' + '../../assets/gifs/smack.gif' + ')',
      'url(' + '../../assets/gifs/vision.gif' + ')',

      'url(' + '../../assets/gifs/theybesaying3.gif' + ')',
      'url(' + '../../assets/gifs/slepttill12.gif' + ')',
      'url(' + '../../assets/gifs/wasted.gif' + ')',
      'url(' + '../../assets/gifs/seek.gif' + ')',

      'url(' + '../../assets/gifs/theybesaying4.gif' + ')',
      'url(' + '../../assets/gifs/drunk.gif' + ')',
      'url(' + '../../assets/gifs/hangover.gif' + ')',
      'url(' + '../../assets/gifs/gumption.gif' + ')',

      'url(' + '../../assets/gifs/theybesaying5.gif' + ')',
      'url(' + '../../assets/gifs/expensive.gif' + ')',
      'url(' + '../../assets/gifs/meaningful.gif' + ')',
      'url(' + '../../assets/gifs/distraction.gif' + ')',

      'url(' + '../../assets/gifs/theybesaying6.gif' + ')',
      'url(' + '../../assets/gifs/toolate.gif' + ')',
      'url(' + '../../assets/gifs/nahmate.gif' + ')',
      'url(' + '../../assets/gifs/ambition.gif' + ')',

      'url(' + '../../assets/gifs/theybesaying7.gif' + ')',
      'url(' + '../../assets/gifs/atelophobia.gif' + ')',
      'url(' + '../../assets/gifs/justdoit.gif' + ')',
      'url(' + '../../assets/gifs/exception.gif' + ')',

      'url(' + '../../assets/gifs/writtenintheAMs.gif' + ')'
    ]

    this.content.ionScrollEnd.subscribe(()=>{
      if(this.activeLine === "Written in the AM\'s"){
        //this.showForm = false;
      }
    })

    this.content.ionScroll.subscribe(()=>{
      //this.showForm = true;
    })
    //this.calc()
  }

  calc(){
    var total:number=0;
    for (var i = 1; i < 31 ; i++) {
      console.log(i * 1000)
      total = total + (i * 3000)
    }
    console.log(total)
  }

    scrollTo(event, element:string) {

      this.zone.run(()=>{

        this.lineHeight = this.content.scrollHeight/this.lines.length;
        this.footerHeight = this.platform.height() - event.contentTop;

        var lines = this.generateBreakPoints();

        for( let i in lines){
          var ob:any = lines[i];
          if(this.content.scrollTop >= ob.break  ){
            this.activeLine = ob.line
            this.activeGif = ob.gif
          }
        }


      })

    }

    generateBreakPoints(){
      var points = []

      for (let i in this.lines) {
        var index:number = +i;
        var gifindex:number = +i;
        points.push( {
          'line': this.lines[index++],
          'break': +i * this.lineHeight,
          'gif': this.gifs[gifindex++]
        })

      }
      return points;
    }


}
