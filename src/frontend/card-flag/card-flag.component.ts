import { Component, OnInit } from '@angular/core';
import { CountryData } from 'src/api-load/interface/countries';
import { CountriesService } from 'src/api-load/repository/countries.service';

@Component({
  selector: 'app-card-flag',
  templateUrl: './card-flag.component.html',
  styleUrls: ['./card-flag.component.scss']
})
export class CardFlagComponent implements OnInit{
  list_of_filter: Array<string> = ['africa', 'europe', 'Asia', 'amerique', 'oceania'];
  list_of_countries: Array<CountryData> = []
  number_page: number = 0;
  current_page = 0;
  final_page = 0;
  
  constructor(private serviceCountries: CountriesService){

  }
  ngOnInit(): void {
    this.loadCountries()
  }

  loadCountries(){
    return this.serviceCountries.getcountries().subscribe(
      (data: CountryData[])=>{
      this.list_of_countries = data;
      console.log(this.list_of_countries);
    })
    
    
  }

  load_hide_menu: boolean = false;
  load_type_filter(){
      this.load_hide_menu = this.load_filter()?true:false;
      
  }

  load_filter():boolean | undefined {
    let filter: Element | null = document.querySelector('.content');
    document.querySelector('.header')?.classList.toggle('arrows_right');
    filter?.classList.toggle('active');
    return filter?.classList.contains('active');
  }

  filter_action(by:string){
    console.log(by);
    this.load_filter();
    
  }

}
