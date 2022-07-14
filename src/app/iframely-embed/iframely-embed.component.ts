import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Input, Output } from '@angular/core';
import { samples } from './samples';

// Iporting Iframely as library
import { iframely } from '@iframely/embed.js';

@Component({
  selector: 'app-iframely-embed',
  template: `<div>
              <p bind-innerHTML="htmlData1 | safeHtml" ></p>
              <p bind-innerHTML="htmlData2 | safeHtml" ></p>
            </div>`,
})
export class IframelyEmbedComponent implements OnInit {
  htmlData1 =
    '<blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/HiwalayanMoNa?src=hash&amp;ref_src=twsrc%5Etfw">#HiwalayanMoNa</a> mga friends mong plastic , ungrateful and arrogant. They don&#39;t deserve you. Marami pang iba diyan na darating sa buhay mo na mas better sa kanila. It is okay to be alone as long as you are comfortable, respected and unabused. Keep those real with you.</p>&mdash; Angelique (@ArmyAnji) <a href="https://twitter.com/ArmyAnji/status/1258411686484033536?ref_src=twsrc%5Etfw">May 7, 2020</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n';

  htmlData2 = `<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.shutterstock.com/image-illustration/white-arrow-fall-down-on-background-1323403484" data-iframely-url="//cdn.iframe.ly/qYVUNqp?iframe=card-small"></a></div></div>`;

  constructor() {
    /** Trigger on data load from source in case html has embed.js */
    iframely.load();
  }

  ngOnInit() {}
}
