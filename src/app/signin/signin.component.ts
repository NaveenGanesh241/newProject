import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Observable, ReplaySubject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  // filteredOptions1: any;
  signupForm: any = FormGroup;
  public filteredOptions1: ReplaySubject<any[]> = new ReplaySubject<any[]>();
  countries: string[] = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ]
  constructor(private up: Router, private url: ActivatedRoute, private service: UserService,
    private fb: FormBuilder) {
  }

  signinForm = {
    mail: '',
    password: ''
  }






  signin: any = {}

  // signin : { email: string; password: string; };

  ngOnInit(): void {
    console.log(this.url.snapshot.params)
    this.signin = {
      email: this.url.snapshot.params['email'],

      password: this.url.snapshot.params['password']
    }
    // console.log(this.signin)
    this.callForm();
    this.filteredOptions1.next(this.countries.slice());
    console.log(this.countries);
    console.log(this.filteredOptions1);

  }

  signinfn() {
    console.log(this.signinForm)
    this.up.navigate(['home'])
    return this.signinForm
  }

  signup() {
    this.up.navigate(["/signup"])
  }


  //signup ts


  numberregex = /^\d+$/
  emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/



  callForm() {
    this.signupForm = this.fb.group({
      fname: ["", Validators.compose([Validators.required, Validators.maxLength(32)])],
      lname: ["", Validators.compose([Validators.required, Validators.maxLength(32)])],
      age: ["", Validators.compose([Validators.required, Validators.max(60), Validators.min(18), Validators.pattern(this.numberregex)])],
      dob: ["", Validators.compose([Validators.required])],
      gender: ["", Validators.required],
      country: ["", Validators.required],
      searchctrl: [""],
      number: ["", Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.numberregex)])],
      email: ["", Validators.compose([Validators.required, Validators.maxLength(32), Validators.pattern(this.emailregex)])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])],
      confirm_password: ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])]
    })

    this.signupForm.get('searchctrl').valueChanges
      .subscribe((val: any) => {
        this.filterOptions(val)
      });
    console.log(this.filteredOptions1);
  }

  private filterOptions(value: any) {
    // const filterValue = value.toLowerCase();
    // return this.countries.filter(option => option.toLowerCase().includes(filterValue));
    if (!this.countries) {
      return
    }
    if (!value) {
      this.filteredOptions1.next(this.countries.slice());
      return;
    }
    else {
      value = value.toLowerCase();
    }
    this.filteredOptions1.next(
      this.countries.filter(ele => ele.toLowerCase().indexOf(value) > -1)
    );

  }


  signupfn() {
    console.log(this.signupForm.value)
    // this.service.createData(this.signupForm.value);
  }




  getcontrol(name: any): AbstractControl | null {
    return this.signupForm.get(name)


  }
}
