import { Component, OnInit } from '@angular/core';
import { CountryData } from 'src/api-load/interface/countries';
import { Country } from 'src/api-load/model/countries';
import { CountriesService } from 'src/api-load/repository/countries.service';

@Component({
  selector: 'app-card-flag',
  templateUrl: './card-flag.component.html',
  styleUrls: ['./card-flag.component.scss']
})
export class CardFlagComponent implements OnInit{
  list_of_filter: Array<string> = [];
  list_of_countries: Array<CountryData> = [];
  list_of_countries_by_fliter: Array<CountryData> = [];
  number_page: number = 0;
  current_page = 1;
  display = 4;
  displayByPage = 10;
  regions = new Set();
  startIndex: number = 0;
  endIndex: number = 10;
  searchvalue:string = '';
  
  constructor(private serviceCountries: CountriesService){

  }
  ngOnInit(): void {
    this.loadCountries()
    this.getTotalPages() 
  }
 
  loadCountries(){
    this.serviceCountries.getcountries().subscribe(
      (data: CountryData[])=>{
      this.list_of_countries = data;
      this.list_of_filter = Country.getregion(data);
      this.list_of_countries_by_fliter = this.list_of_countries;
      this.list_of_countries_by_fliter = this.getPage();
    })
    
    
  }

  searchCountriesByCriteria() {
    
    console.log(this.searchvalue);
    
    const searchCriteria = this.searchvalue.toLowerCase(); // Convertir le critère de recherche en minuscules pour une correspondance insensible à la casse
    this.list_of_countries_by_fliter = this.list_of_countries.filter(country => country.name.toLowerCase().includes(searchCriteria));
    
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


  filter_action(region: string) {
    this.list_of_countries_by_fliter =  this.list_of_countries.filter(country => country.region === region);
    this.load_filter();
  }
  get_pagination(page:number){
      let initpage = page ; 
      if (page >= 0 && page <= this.list_of_countries.length) {
        this.current_page = page;
      }
      this.loadCountries();
  }
  getPage(){
    this.startIndex = (this.current_page - 1) * this.displayByPage;
    this.endIndex = this.startIndex + this.displayByPage;
    return this.list_of_countries_by_fliter.slice(this.startIndex, this.endIndex);
    
  }
  full() {
    return  this.endIndex>=this.list_of_countries.length?true:false;
    
  }

  prevfull() { 
    
    return  this.endIndex<=10?true:false;
    
  }

  getTotalPages() {
    this.number_page =  Math.ceil(this.list_of_countries.length / this.displayByPage);
    
  }

}

