import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { OneClickProvider } from '../../providers/one-click/one-click';
import { User } from '../../models/user';
import { Eligibility } from '../../models/eligibility';
import { Accommodation } from '../../models/accommodation';
import { TripType } from '../../models/trip-type'
import { TripResponsePage } from '../trip-response/trip-response';
import { HelpMeFindPage } from '../help-me-find/help-me-find';

import { TripRequestModel } from "../../models/trip-request";
import { TripResponseModel } from "../../models/trip-response";
import { GooglePlaceModel } from "../../models/google-place";

/**
 * Generated class for the TransportationEligibilityPage page.
 */
@IonicPage()
@Component({
  selector: 'page-transportation-eligibility',
  templateUrl: 'transportation-eligibility.html',
})
export class TransportationEligibilityPage {

  origin: GooglePlaceModel = new GooglePlaceModel({});
  destination: GooglePlaceModel = new GooglePlaceModel({});
  user: User;
  age: number;
  accommodations: Accommodation[] = [];
  eligibilities: Eligibility[] = [];
  trip_types: TripType[] = [];
  tripResponse: TripResponseModel=null;
  tripRequest: TripRequestModel;

  trip_id: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private auth: AuthProvider,
              public oneClick: OneClickProvider,
              private changeDetector: ChangeDetectorRef,
              public events: Events) {

    this.events.publish('spinner:show');
    this.trip_id = parseInt(navParams.data.trip_id);

  }

  ionViewDidLoad() {

    // Set origin and destination places
    this.origin = new GooglePlaceModel(this.navParams.data.origin);
    this.destination = new GooglePlaceModel(this.navParams.data.destination);

    if(this.navParams.data.trip_response && this.navParams.data.trip_request) {

      this.loadTripResponse(this.navParams.data.trip_response);
      this.loadTripRequest(this.navParams.data.trip_request);

    } else if(this.trip_id) {
      this.oneClick.getTrip(this.trip_id)
          .subscribe((tripResponse) => {

            let tripRequest = new TripResponseModel(tripResponse).buildTripRequest({except_filters: ["schedule", "eligibility"]});
            this.loadTripRequest(tripRequest);

            // Have to re-plan trip in order to get relevant eligibilities and accommodations
            this.oneClick.planTrip(tripRequest)
            .subscribe(trip => this.loadTripResponse(trip));
          });
    } else {
      // If necessary NavParams are not present, go to home page
      this.navCtrl.setRoot(HelpMeFindPage);
    }

    // reset hiding this page since user opened it
    let session = this.auth.session();
    session.user_preferences_disabled = false;
    this.auth.setSession(session);

  }

  // Loads trip response data onto the page
  loadTripResponse(tripResponse: TripResponseModel) {
    this.tripResponse = new TripResponseModel(tripResponse);

    // Pull out the relevant accommodations and eligibilities
    this.accommodations = this.tripResponse.accommodations;
    this.eligibilities = this.tripResponse.eligibilities;
    this.trip_types = this.tripResponse.trip_types;

    // If user is logged in, set the values for the eligibilities and accommodations based on their saved info
    if(this.auth.isSignedIn() && this.auth.session().user) {
      this.user = this.auth.session().user;
      this.setAccomEligAndTripTypeValues();
      this.age = this.user.age;
    }

    this.events.publish("spinner:hide");
    this.changeDetector.markForCheck();
  }

  // Loads trip request data into the page
  loadTripRequest(tripRequest: TripRequestModel) {
    // Set up a tripRequest to make if any of the accommodation or eligibility values are changed
    this.tripRequest = tripRequest;
  }

  // Method fires every time an accommodation or eligibility is selected or unselected
  updateCharacteristic() {
    this.changeDetector.markForCheck();
  }

  // Builds a user_profile update hash based on the accommodations and eligiblities hashes
  buildUserProfileParams() {
    let accs = this.accommodations.reduce((accHash, acc) => {
      accHash[acc.code] = acc.value;
      return accHash;
    }, {});
    let eligs = this.eligibilities.reduce((eligHash, elig) => {
      eligHash[elig.code] = elig.value;
      return eligHash;
    }, {});
    let trip_types = this.trip_types.reduce((tripTypeHash, trip_type) => {
      tripTypeHash[trip_type.code] = trip_type.value;
      return tripTypeHash;
    }, {});
    let age = this.age;
    this.tripRequest.user_profile = {
      attributes: {age: age},
      accommodations: accs,
      eligibilities: eligs,
      trip_types: trip_types,
      age: age
    };
    this.tripRequest.trip_types = this.trip_types
      .filter((trip_type) => trip_type.value)
      .map((trip_type) => {
      return trip_type.code;
    });

    if (this.tripRequest.trip_types.findIndex((tt) => tt === 'paratransit') >= 0) {
      this.tripRequest.except_filters = ["schedule"]; // Don't filter by schedule, because we aren't letting the user pick a time
    }

  }

  // Shows all available paratransit options based on selected accommodations and eligibilities
  viewParatransitOptions() {
    this.events.publish('spinner:show');
    this.buildUserProfileParams();
    this.navCtrl.push(TripResponsePage, {
      tripRequest: this.tripRequest,
      origin: this.origin,
      destination: this.destination,
      skipPreferences: true
    });
  }

  storeUserPreferencesDisabledInSession() {
    let session = this.auth.session();
    session.user_preferences_disabled = true;
    this.auth.setSession(session);

    this.toastCtrl.create({
      message: "Session updated",
      duration: 5000}
    ).present();
  }

  setAccomEligAndTripTypeValues() {
    this.accommodations.map((acc) => {
      let userAcc = this.user.accommodations.find((usrAccom) => usrAccom.code === acc.code);
      acc.value = userAcc.value;
    });
    this.eligibilities.map((elig) => {
      let userElig = this.user.eligibilities.find((usrElig) => usrElig.code === elig.code);
      elig.value = userElig.value;
    });
    this.trip_types.map((trip_type) => {
      let userTripType = this.user.trip_types.find((usrTripType) => usrTripType.code === trip_type.code);
      trip_type.value = userTripType.value;
    });

  }

}
