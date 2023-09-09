import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/api-load/model/countries';
import { CountriesService } from 'src/api-load/repository/countries.service';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss']
})
export class CardDescriptionComponent  implements OnInit{
  countryname :string|null = '';
  countries: Country[] = []
  country: any ;
  public constructor(private currentRoute:ActivatedRoute, private countryService: CountriesService){}
  
  ngOnInit(): void {
    this.currentRoute.paramMap.subscribe(countryName => this.countryname = countryName.get('name'));
    this.load();
   
  }

  load(){
    this.countryService.getcountries().subscribe(data =>{
      this.countries = data;
      this.country = this.countries.find(country => country.name == this.countryname) 
      console.log(this.country.currencies[0].code);
      
    });
    
  }

  getborder(data:Country[], borders: string[])
  {
    console.log();
    let border:string [] = [];
    borders.forEach((borderCode: string) => {
      let nameborder : any = ''
      nameborder = this.countries.find(country => 
        country.alpha3Code === borderCode
      )?.name;
      border.push(
        nameborder
        ); 
      
    });
    return border;
  }


}
