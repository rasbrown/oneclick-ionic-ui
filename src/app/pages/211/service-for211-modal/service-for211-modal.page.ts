import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OneClickServiceModel } from 'src/app/models/one-click-service';

@Component({
  selector: 'app-service-for211-modal',
  templateUrl: './service-for211-modal.page.html',
  styleUrls: ['./service-for211-modal.page.scss'],
})
export class ServiceFor211ModalPage implements OnInit {

  service: OneClickServiceModel;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public events: Events,
              public translate: TranslateService) {

    // Pull the subject(service) and subject type out of the navParams
    this.service = this.navParams.data.service;
  }

  ngOnInit() {
  }

  cancel() {
    this.viewCtrl.dismiss(null);
  }

  // submit() {
  //   let feedback = this.feedbackForm.value as FeedbackModel;
  //   this.prependSubject(feedback);
  //   this.unmaskData(feedback);
  //   this.events.publish("spinner:show");
  //   this.oneClick.createFeedback(feedback)
  //   .then((resp) => {
  //     this.events.publish("spinner:hide");
  //     this.viewCtrl.dismiss(resp);
  //   })
  //   .catch((err) => {
  //     this.events.publish("spinner:hide");
  //     this.viewCtrl.dismiss(err);
  //   });
  // }


}

// Exports a class method that builds a feedback modal. Pass in a ModalController,
// a ToastController, a TranslateService, and a hash containing an optional service object to be
// the subject of the feedback. Returns the modal, so that present() can be called on it.
export namespace ServiceFor211ModalPage {
  export function createModal(modalCtrl: ModalController,
                              toastCtrl: ToastController,
                              translate: TranslateService,
                              subjectData: {
                                service?: OneClickServiceModel;
                              } = {}) {
    let serviceFor211Modal = modalCtrl.create(ServiceFor211ModalPage, subjectData);
    serviceFor211Modal.onDidDismiss(data => {
      if(data) {
        let toast = toastCtrl.create({
          message: (data.status === 200 ? translate.instant("oneclick.pages.feedback.success_message") :
                                          translate.instant("oneclick.pages.feedback.error_message")),
          position: 'bottom',
          duration: 3000
        });
        toast.present();
      }
    })
    return serviceFor211Modal;
  }
}
