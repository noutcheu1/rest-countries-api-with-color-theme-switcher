import { CountryData } from "../interface/countries";

export class Country implements CountryData {
    public name: string;
    public topLevelDomain: string[];
    public alpha2Code: string;
    public alpha3Code: string;
    public callingCodes: string[];
    public capital: string;
    public altSpellings: string[];
    public subregion: string;
    public region: string;
    public population: number;
    public latlng: number[];
    public demonym: string;
    public area: number;
    public timezones: string[];
    public borders: string[];
    public nativeName: string;
    public numericCode: string;
    public flags: {
      svg: string;
      png: string;
    };
    public currencies: {
      code: string;
      name: string;
      symbol: string;
    }[];
    public languages: {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }[];
    public translations: {
      [key: string]: string;
    };
    public flag: string;
    public regionalBlocs: {
      acronym: string;
      name: string;
    }[];
    public cioc: string;
    public independent: boolean;
  
    constructor(data: CountryData) {
      this.name = data.name;
      this.topLevelDomain = data.topLevelDomain;
      this.alpha2Code = data.alpha2Code;
      this.alpha3Code = data.alpha3Code;
      this.callingCodes = data.callingCodes;
      this.capital = data.capital;
      this.altSpellings = data.altSpellings;
      this.subregion = data.subregion;
      this.region = data.region;
      this.population = data.population;
      this.latlng = data.latlng;
      this.demonym = data.demonym;
      this.area = data.area;
      this.timezones = data.timezones;
      this.borders = data.borders;
      this.nativeName = data.nativeName;
      this.numericCode = data.numericCode;
      this.flags = data.flags;
      this.currencies = data.currencies;
      this.languages = data.languages;
      this.translations = data.translations;
      this.flag = data.flag;
      this.regionalBlocs = data.regionalBlocs;
      this.cioc = data.cioc;
      this.independent = data.independent;
    }
    static getregion(data:CountryData[]){
      const region :Set<string> = new Set();;

      data.forEach(country => {
        region.add(country.region);
      });
    
      return Array.from(region);
      
    }
  }
  