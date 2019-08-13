import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WhatsappAPIService } from 'src/app/Services/whatsapp-api.service';
import { parse } from 'querystring';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { WhatsappResponse, Contact, Message, Body } from '../../Models/WhatsappResponse';
import { ToastrService } from 'ngx-toastr';
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
  Mhmsg: string;


  event: string;
  token: string;
  tuid: string;
  contactuid: string;
  contactname: string;
  contacttype: string;
  messagedtm: string;
  messageuid: string;
  messagecuid: string;
  messagedir: string;
  messagetype: string;
  messagebody: string;
  ack: string;


  options: MyOptions[] = new Array();
  ResultVal: MyOptions[] = new Array();
  whatsappresp: WhatsappResponse;
  whatsContact: Contact;
  whatsMessage: Message;
  whatsBody: Body;
  @BlockUI() blockUI: NgBlockUI;
  @ViewChild("TargetId") MyProp: ElementRef; 
  constructor(private whatsappAPIService: WhatsappAPIService, private toastr: ToastrService) { }

  ngOnInit() {
    this.Mmsg = 'https://www.waboxapp.com/assets/doc/waboxapp-API-v2.pdf';
    this.Mimsg = 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg';
    this.Mlmsg = 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg';
    this.options.push(new MyOptions(1, 'Message API'), new MyOptions(2, 'Media API'),
      new MyOptions(3, 'Image API'), new MyOptions(4, 'Link API'), new MyOptions(5, 'Web Hook bot'), new MyOptions(6, 'Web Hook'));
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
  onHookClick(el: HTMLElement) {
    // this.whatsappresp = new WhatsappResponse('Event', 'Token','uid', 'contactuid', 'contactname',
    //   'contacttype', 'messagedtm', 'messageuid', 'messagecuid', 'messagedir', 'messagetype', this.Mhmsg, 'messageack');
    this.blockUI.start('Wait..');
    this.ResultVal.push(new MyOptions(1, this.Mhmsg));
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "end",inline: "end" });  
    setTimeout(() => {
      this.whatsappAPIService.CallHookAPIBack('GetKewords', this.Mhmsg).subscribe(res => {
        this.MHresult = res; // JSON.stringify(res);
        this.ResultVal.push(new MyOptions(2, this.MHresult));
        this.Mhmsg = '';        
        this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "end",inline: "end" });
        console.log(res);
        this.blockUI.stop();
      });
    }, 1000);
  }

  onHookTestClick() {
    this.whatsappresp = new WhatsappResponse(this.event, this.token, this.tuid, this.contactuid, this.contactname, this.contacttype, this.messagedtm, this.messageuid, this.messagecuid, this.messagedir, this.messagetype, this.messagebody, this.ack);
    this.whatsContact = new Contact(this.contactuid, this.contactname, this.contacttype);
    this.whatsMessage = new Message(this.messagedtm, this.messageuid, this.messagecuid, this.messagedir, this.messagetype, new Body(this.messagebody, 'xxxx', 'xxxx', 'xxxx', 'xxxx', 'xxxx'), this.ack);
    this.blockUI.start('Wait..');
    //this.ResultVal.push(new MyOptions(1, this.Mhmsg));   
    this.whatsappAPIService.CallHookAPI('SendWhatasappHook', this.whatsappresp, this.whatsContact, this.whatsMessage).subscribe(res => {
      this.MHresult = res; // JSON.stringify(res);   
      if (res != null) {
        this.toastr.success("Data Save Successfully!", 'Success')
      }
      else {
        this.toastr.error("Data Not Save Successfully!", 'Error')
      }
      this.blockUI.stop();
    });
  }
  getValue(id) {
    this.isdisplay = id;
  }
}
