import { Component, OnInit } from '@angular/core';
import { WhatsappAPIService } from 'src/app/Services/whatsapp-api.service';
import { parse } from 'querystring';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
export class MyOptions {
  id: number;
  Name: string;
  constructor(ID: number, Name1: string) {
    this.id = ID;
    this.Name = Name1;
  }
}
@Component({
  selector: 'app-call-whatsapp-api',
  templateUrl: './call-whatsapp-api.component.html',
  styleUrls: ['./call-whatsapp-api.component.scss']
})
export class CallWhatsappApiComponent implements OnInit {
  msg: string;
  phoneNo: string;
  result: any;
  Mmsg: string;
  MphoneNo: string;
  Mresult: any;
  Mimsg: string;
  MiphoneNo: string;
  Miresult: any;
  Mlmsg: string;
  MlphoneNo: string;
  Mlresult: any;
  MHresult: any;
  isdisplay: number;
  options: MyOptions[] = new Array();
  @BlockUI() blockUI: NgBlockUI;
  constructor(private whatsappAPIService: WhatsappAPIService) { }

  ngOnInit() {
    this.Mmsg = 'https://www.waboxapp.com/assets/doc/waboxapp-API-v2.pdf';
    this.Mimsg = 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg';
    this.Mlmsg = 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg';
    this.options.push(new MyOptions(1, 'Message API'), new MyOptions(2, 'Media API'),
      new MyOptions(3, 'Image API'), new MyOptions(4, 'Link API'), new MyOptions(5, 'Web Hook'));
  }
  onMessageClick() {
    
    this.blockUI.start('Wait..');
    this.whatsappAPIService.CallmsgAPI('SendWhatsmsg', this.phoneNo, this.msg).subscribe(res => {
      this.result = JSON.stringify(res);
      console.log(res);
      this.blockUI.stop();
    });
    // this.result = '[{PhoneNo:' + this.phoneNo + ',Msg:' + this.msg + '}]';
  }
  onMediaClick() {
    this.blockUI.start('Wait..');
    this.whatsappAPIService.CallmediaAPI('SendWhatsmsgMedia', this.MphoneNo, this.Mmsg).subscribe(res => {
      this.Mresult = JSON.stringify(res);
      console.log(res);
      this.blockUI.stop();
    });
    // this.result = '[{PhoneNo:' + this.phoneNo + ',Msg:' + this.msg + '}]';
  }
  onImageClick() {
    this.blockUI.start('Wait..');
    this.whatsappAPIService.CallImageAPI('SendWhatsmsgImage', this.MiphoneNo, this.Mimsg).subscribe(res => {
      this.Miresult = JSON.stringify(res);
      console.log(res);
      this.blockUI.stop();
    });
    // this.result = '[{PhoneNo:' + this.phoneNo + ',Msg:' + this.msg + '}]';
  }
  onLinkClick() {
    this.blockUI.start('Wait..');
    this.whatsappAPIService.CallLinkAPI('SendWhatsmsgLink', this.MlphoneNo, this.Mlmsg).subscribe(res => {
      this.Mlresult = JSON.stringify(res);
      console.log(res);
      this.blockUI.stop();
    });
    // this.result = '[{PhoneNo:' + this.phoneNo + ',Msg:' + this.msg + '}]';
  }
  onHookClick() {
    this.blockUI.start('Wait..');
    this.whatsappAPIService.CallHookAPI('SendWhatasappHook?Response=').subscribe(res => {
      this.MHresult = JSON.stringify(res);
      console.log(res);
      this.blockUI.stop();
    });
    // this.result = '[{PhoneNo:' + this.phoneNo + ',Msg:' + this.msg + '}]';
  }
  getValue(id) {
    this.isdisplay = id;
  }
}
