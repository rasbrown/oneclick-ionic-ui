// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   
  BASE_ONECLICK_URL: 'http://occ-ieuw-qa.herokuapp.com/api/v2/',
  AWS_LOCALE_URL: 'http://occ-ieuw-qa.herokuapp.com/',
  AWS_IMAGE_ASSET_BUCKET: 'https://s3.us-west-1.amazonaws.com/ui-ieuw-qa/assets/img/',
  DEFAULT_LOCATION: {
    lat: 33.7715534,
    lng: -116.7040325
  },
  AVAILABLE_LOCALES: [ 'en', 'es', 'pt', 'vi', 'ht', 'zh', 'fa'],
  DEFAULT_LOCALE: 'en',

  SERVICES_ZIPCODES: [ 92705,92706,92707,92708,92780,92782,92801,92802,92804,92805,92806,92807,92808,92821,92823,92831,92832,92833,92835,92840,92841,92843,92844,92845,92860,92861,92865,92866,92867,92868,92869,92870,92879,92880,92881,92882,92883,92886,92887,93001,93003,93004,93010,93012,93013,93015,93021,93022,93023,93030,93033,93035,93036,93040,93041,93042,90815,90720,90740,90742,90743,90803,90808,91304,91307,91311,91320,93043,93060,93063,93064,93065,93066,93225,93252,93516,91701,91708,91709,91710,91711,91730,91737,91739,91752,91759,91761,91762,91763,91764,91765,92201,92203,92210,92211,92220,92223,91766,91784,91786,92371,92372,92373,92374,92376,92377,92378,92382,92385,92386,92391,92392,86436,92394,92395,92397,92398,92399,92401,92404,92405,92407,92408,92410,92411,92501,92503,92504,92505,92506,92507,92508,92509,92518,92530,92532,92536,92539,92543,92544,92545,92548,92549,92551,92553,92555,92557,92561,92562,92563,92567,92570,92571,92582,92583,92584,92585,92586,92587,92590,92591,92592,92595,92596,92602,92603,92604,92606,92610,92612,92614,92617,92618,92620,92624,92625,92626,92627,92629,92630,92637,92646,92647,92648,92649,92651,92653,92655,92656,92657,92660,92661,92662,92663,92672,92673,92675,92676,92677,92678,92679,92683,92688,92691,92692,92694,92701,92703,92704,92252,92253,92254,92256,92258,92260,92262,92264,92266,92267,92268,92270,92274,92276,92277,92278,92280,92282,92284,92285,92301,92304,92305,92307,92308,92309,92310,92311,92313,92314,92315,92316,92320,92321,92322,92324,92325,92327,92332,92333,92335,92336,92337,92338,92339,92341,92342,92344,92345,92346,92347,92352,92354,92356,92358,92359,92363,92364,85344,91360,91361,91362,91377,92365,92368,89019,89029,89046,92225,92230,90265,92234,92236,92239,92240,92241,92242,90603,90620,90621,90623,90630,90631,90638,90680,90703,93528,93555,93558,93562,92028 ],

  TRANSPORTATION_ZIPCODES: [ 92705,92706,92707,92708,92780,92782,92801,92802,92804,92805,92806,92807,92808,92821,92823,92831,92832,92833,92835,92840,92841,92843,92844,92845,92860,92861,92865,92866,92867,92868,92869,92870,92879,92880,92881,92882,92883,92886,92887,93001,93003,93004,93010,93012,93013,93015,93021,93022,93023,93030,93033,93035,93036,93040,93041,93042,90814,90815,90822,90831,91001,91006,91007,91008,91010,91011,91016,91020,91024,90712,91030,91040,91042,91046,91101,91103,91104,91105,91106,91107,91108,90713,90715,90716,90717,90720,90723,90731,90732,90740,90742,90743,90744,90745,91201,91202,91203,91204,91205,91206,91207,91208,90746,90747,90755,90802,90803,90804,90805,90806,90807,90808,90810,90813,91210,91214,91301,91302,91303,91304,91306,91307,91311,91316,91320,91321,93043,93060,93063,93064,93065,93066,93225,93243,93252,93510,93516,91506,91601,91602,91604,91605,91606,91607,91608,91701,91702,91706,91708,91709,91710,91711,91722,91723,91724,91730,91731,91732,91733,91737,91739,91740,91741,91744,91745,91746,91748,91750,91752,91754,91755,91759,91761,91762,91763,91764,91765,92201,92203,92210,92211,92220,92223,91766,91767,91768,91770,91773,91775,91776,91780,91784,91786,91789,91790,91791,91792,91801,91803,92371,92372,92373,92374,92376,92377,92378,92382,92385,92386,92391,92392,86436,92394,92395,92397,92398,92399,92401,92404,92405,92407,92408,92410,92411,92501,92503,92504,92505,92506,92507,92508,92509,92518,92530,92532,92536,92539,92543,92544,92545,92548,92549,92551,92553,92555,92557,92561,92562,92563,92567,92570,92571,92582,92583,92584,92585,92586,92587,92590,92591,92592,92595,92596,92602,92603,92604,92606,92610,92612,92614,92617,92618,92620,92624,92625,92626,92627,92629,92630,92637,92646,92647,92648,92649,92651,92653,92655,92656,92657,92660,92661,92662,92663,92672,92673,92675,92676,92677,92678,92679,92683,92688,92691,92692,92694,92701,92703,92704,92252,92253,92254,92256,92258,92260,92262,92264,92266,92267,92268,92270,92274,92276,92277,92278,92280,92282,92284,91324,91325,92285,92301,92304,92305,92307,92308,92309,92310,92311,92313,92314,92315,92316,92320,92321,92322,91326,91330,91331,91335,91340,91342,91343,92324,92325,92327,92332,92333,92335,92336,92337,92338,92339,92341,92342,92344,92345,92346,92347,92352,92354,92356,92358,92359,92363,92364,91344,91345,91350,91351,91352,91354,85344,91355,91356,91360,91361,91362,91364,91367,91371,91377,91381,91384,91387,92365,92368,91390,91401,91402,91403,91405,91406,91411,91423,91436,91501,91502,91504,91505,89019,90001,90002,90003,90004,90005,90006,90007,90008,90010,90011,90012,90013,90014,90015,90016,90017,90018,90019,90020,90021,90022,90023,90024,90025,90026,90027,90028,90029,90031,90032,90033,90034,90035,90036,90037,90038,90039,90040,90041,90042,90043,90044,90045,90046,90047,90048,90049,89029,90062,90063,90064,90065,90066,90067,90068,90069,90071,90073,90077,90079,89046,90089,90090,90094,90095,90201,90210,90211,90212,90220,90221,90056,90057,90058,90059,90061,92225,92230,90222,90230,90232,90240,90241,90242,90245,90247,90248,90249,90250,90254,90255,90260,90262,90263,90265,90266,90270,90272,90274,90275,90277,90278,90280,90290,90291,90292,90293,92234,92236,92239,92240,92241,92242,90301,90302,90303,90304,90305,90401,90402,90403,90404,90405,90501,90502,90503,90504,90505,90506,90601,90602,90603,90604,90605,90606,90620,90621,90623,90630,90631,90638,90640,90650,90660,90670,90680,90701,90703,90704,90706,90710,93528,93532,93534,93535,93536,93543,93544,93550,93551,93552,93553,93555,93558,93560,93562,93563,93591,92028 ]

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
