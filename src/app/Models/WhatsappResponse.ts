export class WhatsappResponse {
    eventName: string;
    token: string;
    tuid:string;
    contactuid: string;
    contactname: string;
    contacttype: string;
    messagedtm: string;
    messageuid: string;
    messagecuid: string;
    messagedir: string;
    messagetype: string;
    messagebodytext: string;
    messageack: string;
    constructor(eventName: string, token: string,tuid: string, contactuid: string,
      contactname: string, contacttype: string, messagedtm: string,
      messageuid: string, messagecuid: string, messagedir: string,
      messagetype: string, messagebodytext: string, messageack: string) {
      this.eventName = eventName;
      this.token = token;
      this.tuid = tuid;
      this.contactuid = contactuid;
      this.contactname = contactname;
      this.contacttype = contacttype;
      this.messagedtm = messagedtm;
      this.messageuid = messageuid;
      this.messagecuid = messagecuid;
      this.messagedir = messagedir;
      this.messagetype = messagetype;
      this.messagebodytext = messagebodytext;
      this.messageack = messageack;
    }
  }

  export class Contact {    
    uid: string;
    name: string;
    type: string;
    constructor(uid: string,
      name: string, type: string) {     
      this.uid = uid;
      this.name = name;
      this.type = type;     
    }
  }
  export class Message {    
   
    dtm: string;
    uid: string;
    cuid: string;
    dir: string;
    type: string;
    body: Body;
    ack: string;
    constructor(dtm: string,
      uid: string, cuid: string, dir: string,
      type: string, body: Body, ack: string) {     
      this.dtm = dtm;
      this.uid = uid;
      this.cuid = cuid;
      this.dir = dir;
      this.type = type;
      this.body = body;
      this.ack = ack;
    }
  }

  export class Body {    
   
    text: string;
    caption: string;
    mimetype: string;
    size: string;
    url: string;
    thumb: string;
    constructor(text: string,
      caption: string, mimetype: string, size: string,
      url: string, thumb: string) {     
      this.text = text;
      this.caption = caption;
      this.mimetype = mimetype;
      this.size = size;
      this.url = url;
      this.thumb = thumb;      
    }
  }